"use client";

import { useEffect, useMemo, useState } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

// Shared mouse position — single listener for the entire app
let sharedX: MotionValue<number> | null = null;
let sharedY: MotionValue<number> | null = null;
let listenerCount = 0;
let removeListener: (() => void) | null = null;

function getSharedMouse() {
  if (!sharedX) sharedX = new MotionValue(0);
  if (!sharedY) sharedY = new MotionValue(0);
  return { sharedX, sharedY };
}

function startListening() {
  if (removeListener || typeof window === "undefined") return;
  const { sharedX: sx, sharedY: sy } = getSharedMouse();

  const handler = (e: MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    sx.set((cx - e.clientX) / cx);
    sy.set((cy - e.clientY) / cy);
  };

  window.addEventListener("mousemove", handler, { passive: true });
  removeListener = () => {
    window.removeEventListener("mousemove", handler);
    removeListener = null;
  };
}

function stopListening() {
  if (listenerCount > 0) return;
  removeListener?.();
}

/**
 * GPU-efficient mouse parallax. Uses a single shared mousemove listener
 * for the entire app, with per-component spring-animated offset.
 */
export function useMouseParallax(intensity: number = 1) {
  const { sharedX: sx, sharedY: sy } = useMemo(getSharedMouse, []);
  const [isEnabled, setIsEnabled] = useState(false);

  const springConfig = useMemo(
    () => ({ stiffness: 50, damping: 20, mass: 1 }),
    []
  );

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const updateEnabled = () => {
      const enabled = !reduceMotion.matches && finePointer.matches;
      setIsEnabled(enabled);
      if (!enabled) {
        rawX.set(0);
        rawY.set(0);
      }
    };

    updateEnabled();
    reduceMotion.addEventListener("change", updateEnabled);
    finePointer.addEventListener("change", updateEnabled);
    return () => {
      reduceMotion.removeEventListener("change", updateEnabled);
      finePointer.removeEventListener("change", updateEnabled);
    };
  }, [rawX, rawY]);

  // Subscribe to shared values with intensity scaling
  useEffect(() => {
    if (!isEnabled) return;

    listenerCount++;
    startListening();

    const unsubX = sx.on("change", (v) => rawX.set(v * 20 * intensity));
    const unsubY = sy.on("change", (v) => rawY.set(v * 20 * intensity));

    return () => {
      unsubX();
      unsubY();
      listenerCount = Math.max(0, listenerCount - 1);
      stopListening();
    };
  }, [intensity, isEnabled, sx, sy, rawX, rawY]);

  return { x, y };
}

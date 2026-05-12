"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="group inline-flex items-center gap-2.5 sm:gap-3 shrink-0">
      <Image
        src="/logo-new-iAS.jpeg"
        alt="Immigration Advice Service logo"
        width={288}
        height={288}
        priority
        className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-md"
      />

      <div className="flex flex-col leading-none">
        <span className="font-serif text-sm sm:text-base text-heading tracking-wide leading-tight whitespace-nowrap">
          Immigration Advice Service
        </span>
        <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-body mt-0.5">
          by Bridgely LLC
        </span>
      </div>
    </a>
  );
}

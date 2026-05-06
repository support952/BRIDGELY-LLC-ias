import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <Logo />
          <div className="text-right">
            <p className="text-body text-[13px] tracking-wide">
              Bridgely LLC &middot; Florida LLC &middot; EIN 39-2587593
            </p>
            <p className="text-body text-[12px] tracking-wide mt-1">
              18705 NE 59th Ct, Redmond, WA 98052
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-dark-border mb-6" />
        <p className="text-[11px] tracking-[0.15em] text-body text-center">
          &copy; {new Date().getFullYear()} Immigration Advice Service — Bridgely LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

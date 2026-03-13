import { Flame } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <Flame className="h-5 w-5 text-orange-500" />
          Podolski Claude
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">
            Features
          </a>
          <a href="#quickstart" className="transition hover:text-foreground">
            Quick Start
          </a>
          <a href="#sponsoren" className="transition hover:text-foreground">
            Sponsoren
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

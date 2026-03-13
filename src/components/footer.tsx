import { Flame, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <Flame className="mb-4 h-8 w-8 text-orange-500" />
          <h3 className="mb-3 text-xl font-bold">
            Podolski Claude ist Open Source
          </h3>
          <p className="max-w-md text-sm text-muted-foreground">
            Von der Community, für die Community. Gebaut mit Liebe, Kölsch und
            Grillkohle. Jeder kann mitmachen.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <a
            href="https://github.com"
            className="flex items-center gap-2 transition hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href="#" className="transition hover:text-foreground">
            Dokumentation
          </a>
          <a href="#" className="transition hover:text-foreground">
            Discord Community
          </a>
          <a href="#" className="transition hover:text-foreground">
            Poldi Hub
          </a>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-xs text-muted-foreground/60">
          <p>
            Made with Liebe und Grillkohle. Kein offizielles Projekt von Lukas
            Podolski.
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} Podolski Claude Contributors.
            Nicht verbunden mit Anthropic oder dem 1. FC Köln.
          </p>
        </div>
      </div>
    </footer>
  );
}

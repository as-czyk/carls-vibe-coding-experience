import { Button } from "@/components/ui/button";
import { Flame, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Flame className="h-4 w-4 text-orange-500" />
          Open Source KI-Agent v1.0
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Podolski
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Claude
          </span>
        </h1>

        <p className="mb-4 text-xl text-muted-foreground sm:text-2xl">
          Der KI-Agent, der einfach macht. Egal was.
        </p>

        <p className="mx-auto mb-10 max-w-xl text-base text-muted-foreground/80">
          Grills anzünden, Tore schießen, E-Mails beantworten, Code deployen
          — Poldi macht das. Einfach per WhatsApp, Telegram oder Zuruf.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 bg-orange-600 text-white hover:bg-orange-700">
            <Flame className="h-4 w-4" />
            Jetzt starten
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </Button>
        </div>

        <div className="mt-16">
          <code className="rounded-lg border border-border/60 bg-card/60 px-4 py-2.5 font-mono text-sm text-muted-foreground">
            npm install -g podolski-claude
          </code>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

const installOptions = [
  {
    label: "npm",
    description: "Fuer alle Node.js Helden",
    command: "npm install -g podolski-claude",
  },
  {
    label: "macOS",
    description: "Fuer die Apfel-Fraktion",
    command: "brew install podolski-claude",
  },
  {
    label: "One-Liner",
    description: "Fuer die Mutigen",
    command: "curl -fsSL https://poldi.claude/install.sh | bash",
  },
];

function CodeBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative flex items-center gap-3 rounded-lg border border-border/60 bg-card/60 px-4 py-3 font-mono text-sm">
      <Terminal className="h-4 w-4 shrink-0 text-muted-foreground" />
      <code className="flex-1 text-foreground/90">{command}</code>
      <button
        onClick={handleCopy}
        className="shrink-0 text-muted-foreground transition hover:text-foreground"
        aria-label="Kopieren"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export function QuickStart() {
  return (
    <section id="quickstart" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Quick Start
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          In 30 Sekunden startklar. Schneller als Poldi auf dem Fluegel.
        </p>

        <div className="space-y-6">
          {installOptions.map((opt) => (
            <div key={opt.label}>
              <div className="mb-2 flex items-baseline gap-3">
                <span className="rounded-md bg-orange-600/20 px-2 py-0.5 text-xs font-semibold text-orange-400">
                  {opt.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {opt.description}
                </span>
              </div>
              <CodeBlock command={opt.command} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

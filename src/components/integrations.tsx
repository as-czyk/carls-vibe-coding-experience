import {
  MessageCircle,
  Send,
  Hash,
  Instagram,
  Flame,
  Gamepad2,
  Shield,
} from "lucide-react";

const integrations = [
  { name: "WhatsApp", icon: MessageCircle, color: "text-green-500" },
  { name: "Telegram", icon: Send, color: "text-blue-400" },
  { name: "Discord", icon: Gamepad2, color: "text-indigo-400" },
  { name: "Slack", icon: Hash, color: "text-purple-400" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500" },
  { name: "Grillmeister Pro", icon: Flame, color: "text-orange-500" },
  { name: "FC Köln App", icon: Shield, color: "text-red-500" },
];

export function Integrations() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Integrationen
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Poldi spricht mit allem und jedem. Genau wie im echten Leben.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <div
                key={integration.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-card/30 p-6 transition hover:border-border/80 hover:bg-card/60"
              >
                <Icon className={`h-8 w-8 ${integration.color}`} />
                <span className="text-center text-xs font-medium text-muted-foreground">
                  {integration.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Und 50+ weitere Integrationen. Poldi kennt keine Grenzen.
        </p>
      </div>
    </section>
  );
}

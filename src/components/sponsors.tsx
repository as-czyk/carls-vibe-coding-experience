const sponsors = [
  {
    name: "1. FC Köln",
    color: "bg-red-600",
    textColor: "text-white",
    main: true,
  },
  {
    name: "Borussia Dortmund",
    color: "bg-yellow-400",
    textColor: "text-black",
    main: false,
  },
  {
    name: "Bayern München",
    color: "bg-red-700",
    textColor: "text-white",
    main: false,
  },
  {
    name: "Bayer Leverkusen",
    color: "bg-red-500",
    textColor: "text-white",
    main: false,
  },
  {
    name: "Borussia M'gladbach",
    color: "bg-green-600",
    textColor: "text-white",
    main: false,
  },
];

export function Sponsors() {
  return (
    <section id="sponsoren" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Unterstützt von
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Die größten Clubs stehen hinter Podolski Claude. Natürlich.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {sponsors.map((sponsor) => (
            <span
              key={sponsor.name}
              className={`inline-flex items-center rounded-full ${sponsor.color} ${sponsor.textColor} ${sponsor.main ? "px-5 py-2 text-sm font-bold ring-2 ring-white/20" : "px-4 py-1.5 text-xs font-semibold"} transition hover:scale-105 hover:brightness-110`}
            >
              {sponsor.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

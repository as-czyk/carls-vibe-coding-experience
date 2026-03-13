const sponsors = [
  {
    name: "1. FC Koeln",
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
    name: "Bayern Muenchen",
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
          Unterstuetzt von
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Die groessten Clubs stehen hinter Podolski Claude. Natuerlich.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className={`flex items-center justify-center rounded-xl ${sponsor.color} ${sponsor.textColor} ${sponsor.main ? "h-20 px-10 text-lg font-bold" : "h-14 px-6 text-sm font-semibold"} transition hover:scale-105`}
            >
              {sponsor.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

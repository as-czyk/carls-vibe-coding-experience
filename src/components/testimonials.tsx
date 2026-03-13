const testimonialsRow1 = [
  {
    quote:
      "Poldi hat mein gesamtes Backend refactored. Und dann gegrillt.",
    author: "@developer_klaus",
  },
  {
    quote:
      "Ich habe ihn gebeten, meine Steuererklaerung zu machen. Er hat stattdessen 3 Tore geschossen. Trotzdem: 5 Sterne.",
    author: "@finanz_frank",
  },
  {
    quote:
      "Lukas hat meinen Server gefixt und dann gesagt: 'Prinz Poldi regelt das.'",
    author: "@sysadmin_sara",
  },
  {
    quote:
      "Mein Startup laeuft seit Podolski Claude komplett autonom. Ich bin nur noch zum Grillen da.",
    author: "@founder_max",
  },
  {
    quote:
      "Er hat mein gesamtes Jira-Board in 4 Minuten abgearbeitet. Dann hat er Koelsch bestellt.",
    author: "@pm_lisa",
  },
];

const testimonialsRow2 = [
  {
    quote:
      "Podolski Claude hat meinen PR reviewed und kommentiert: 'So muss dat, Jung.'",
    author: "@dev_anna",
  },
  {
    quote:
      "Seit Poldi meine CI/CD Pipeline managed, haben wir null Downtime. Und immer warmes Essen.",
    author: "@devops_tom",
  },
  {
    quote:
      "Ich wollte nur eine E-Mail schreiben. Jetzt habe ich ein komplett neues CRM-System. Danke Poldi.",
    author: "@sales_julia",
  },
  {
    quote:
      "Das ist wie ein iPhone-Moment, nur mit mehr Grillsosse.",
    author: "@tech_blogger_kai",
  },
  {
    quote:
      "Er laedt meinen Server schneller als er den Ball im Netz hat. Und das heisst was.",
    author: "@backend_bernd",
  },
];

function TestimonialCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="mx-3 w-[350px] shrink-0 rounded-xl border border-border/40 bg-card/50 p-6">
      <p className="mb-3 text-sm leading-relaxed text-foreground/90">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-xs text-muted-foreground">{author}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Was die Leute sagen
        </h2>
        <p className="text-muted-foreground">
          Echte* Bewertungen von echten* Nutzern.
          <span className="ml-1 text-xs">*komplett erfunden</span>
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="mb-6 flex">
        <div className="animate-marquee flex">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} author={t.author} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="flex">
        <div className="animate-marquee-reverse flex">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} author={t.author} />
          ))}
        </div>
      </div>
    </section>
  );
}

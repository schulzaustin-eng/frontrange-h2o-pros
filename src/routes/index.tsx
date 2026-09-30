import { createFileRoute } from "@tanstack/react-router";
import heroWater from "@/assets/hero-water.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Front Range Water Pros | Denver Metro Water Softeners & Filtration" },
      {
        name: "description",
        content:
          "Denver metro water treatment: softeners, whole-home filtration, reverse osmosis, UV, and well systems. Free in-home water test, no obligation.",
      },
      {
        property: "og:title",
        content: "Front Range Water Pros | Denver Metro Water Softeners & Filtration",
      },
      {
        property: "og:description",
        content:
          "Denver metro water treatment: softeners, whole-home filtration, reverse osmosis, UV, and well systems. Free in-home water test, no obligation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Water softeners",
    body: "High-efficiency salt and salt-free systems sized to your exact hardness.",
  },
  {
    title: "Whole-home filtration",
    body: "Carbon and sediment stages that strip chlorine taste and rust.",
  },
  {
    title: "Reverse osmosis",
    body: "Under-sink RO for a crisp, mineral-free glass at the tap.",
  },
  {
    title: "UV disinfection",
    body: "Chemical-free protection for well and cistern supplies.",
  },
  {
    title: "Iron & sulfur filters",
    body: "Clear up the rotten-egg smell and the orange staining fast.",
  },
  {
    title: "Well pumps & tanks",
    body: "Diagnose, size, and swap pressure tanks and drop pipes.",
  },
];

const steps = [
  {
    mark: "(a)",
    title: "Test",
    body: "We sample your tap and report hardness, iron, and chlorine in minutes.",
  },
  {
    mark: "(b)",
    title: "Install",
    body: "A tidy, warrantied install — usually finished inside a single visit.",
  },
  {
    mark: "(c)",
    title: "Enjoy",
    body: "Soft, clear water at every tap, with annual tune-ups included.",
  },
];

const cities = [
  "Denver",
  "Aurora",
  "Lakewood",
  "Arvada",
  "Westminster",
  "Centennial",
  "Boulder",
  "Littleton",
  "Parker",
  "Castle Rock",
];

const reviews = [
  '"They tested the whole house in an afternoon and the spots on my glasses just stopped." — Dana R., Highlands Ranch',
  '"Tidy install, honest quote, no upsell. My water heater finally sounds right." — Marcus V., Aurora',
  '"The sulfur smell was gone the same day. Worth every dollar." — Priya S., Longmont',
];

function Index() {
  return (
    <div className="relative min-h-screen bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46rem] overflow-hidden">
        <div className="flow-field absolute -top-32 left-0 right-0 h-[42rem]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.35),transparent 60%)",
          backgroundSize: "cover",
        }}
      />

      <header className="sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-8 rounded-full bg-primary/90 ring-1 ring-black/5" />
            <span className="text-sm font-semibold tracking-tight">Front Range Water Pros</span>
          </div>
          <nav className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-foreground">
              Services
            </a>
            <a href="#hard-water" className="hover:text-foreground">
              Hard water
            </a>
            <a href="#area" className="hover:text-foreground">
              Service area
            </a>
            <a href="#reviews" className="hover:text-foreground">
              Reviews
            </a>
          </nav>
          <a
            href="#quote"
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-black/5 transition-colors hover:bg-primary/90 md:ml-0"
          >
            Free water test
          </a>
        </div>
        <div className="mx-3 rounded-2xl border border-frost/50 bg-frost/60 px-4 py-2 text-center text-sm shadow-[0_1px_0_rgba(255,255,255,.6)_inset] backdrop-blur-xl">
          <span className="font-semibold text-primary">303-555-0148</span>
          <span className="text-muted-foreground">
            {" "}
            — same-day soft-water installs across the Denver metro.
          </span>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-12 md:pt-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-frost/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-primary" />
              Denver metro · 17 years on the Front Range
            </span>
            <h1 className="mt-5 text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              <span className="italic text-primary">Hard water</span> is Denver's problem. We make
              it run clear.
            </h1>
            <p className="mt-5 max-w-[46ch] text-pretty text-base leading-relaxed text-muted-foreground">
              Meltwater off the Front Range is beautiful — and stubbornly hard, about 14 grains per
              gallon. We test your tap, size the system, and install softeners, filters, and UV that
              leave your water cold, clear, and easy on your pipes.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#quote"
                className="shimmer inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-black/5 transition-all hover:brightness-110"
              >
                Schedule free water test
              </a>
              <a
                href="tel:3035550148"
                className="inline-flex items-center gap-2 rounded-full border border-line/15 bg-frost/40 px-5 py-3 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-frost/70"
              >
                Call <span className="text-primary">(303) 555-0148</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>✓ Licensed &amp; insured</span>
              <span>✓ Locally owned</span>
              <span>✓ 4.9★ · 620 Google reviews</span>
            </div>
          </div>
          <div className="rise relative" style={{ animationDelay: "120ms" }}>
            <div className="rounded-3xl border border-frost/60 bg-frost/40 p-2 shadow-[0_1px_0_rgba(255,255,255,.6)_inset] backdrop-blur-2xl">
              <img
                src={heroWater}
                alt="Clear cold water pouring over Front Range granite"
                width={912}
                height={1104}
                className="aspect-[4/5] w-full rounded-[calc(1.5rem-8px)] object-cover outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-40 rounded-2xl border border-frost/60 bg-frost/70 p-4 backdrop-blur-xl">
              <p className="font-display text-3xl font-semibold leading-none text-primary">14</p>
              <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                grains of hardness per gallon in Denver tap water
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-8">
        <h2 className="mb-6 text-balance font-display text-2xl font-semibold tracking-tight">
          Treatments, matched to your home
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-frost/60 bg-frost/40 p-5 backdrop-blur-xl transition-colors hover:bg-frost/70"
            >
              <p className="font-display text-lg font-semibold">{s.title}</p>
              <p className="mt-2 text-pretty text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hard-water" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-3 lg:grid-cols-3">
          <div className="rounded-3xl border border-frost/60 bg-frost/40 p-6 backdrop-blur-xl lg:col-span-2">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Denver water, in plain numbers
            </span>
            <h3 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight">
              The snowmelt that fills our taps is some of the hardest water in the country.
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-glass p-4">
                <p className="font-display text-2xl font-semibold text-primary">~14</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  grains/gallon — "very hard" starts at 10.5
                </p>
              </div>
              <div className="rounded-2xl bg-glass p-4">
                <p className="font-display text-2xl font-semibold text-primary">2×</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  the detergent a soft-water home uses
                </p>
              </div>
              <div className="rounded-2xl bg-glass p-4">
                <p className="font-display text-2xl font-semibold text-primary">8–11</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  years shaved off water heaters by scale
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-frost/60 bg-primary/10 p-6 backdrop-blur-xl">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Why it matters
              </span>
              <p className="mt-3 text-pretty text-sm text-muted-foreground">
                Scale coats heating elements, pinches pipe diameter, and leaves spots on every
                glass. The fix is measurable — we show you before and after.
              </p>
            </div>
            <div className="mt-4 h-px bg-line/10" />
            <p className="mt-4 text-sm font-semibold">
              Free test · zero obligation · results in your kitchen, not a lab.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="mb-6 text-balance font-display text-2xl font-semibold tracking-tight">
          Three steps to clear water
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-frost/60 bg-frost/40 p-5 backdrop-blur-xl"
            >
              <span className="font-mono text-xs text-primary">{s.mark}</span>
              <p className="mt-2 font-display text-lg font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="area" className="mx-auto max-w-6xl px-5 py-8">
        <h2 className="mb-4 text-balance font-display text-2xl font-semibold tracking-tight">
          Serving the Front Range
        </h2>
        <div className="flex flex-wrap gap-2">
          {cities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-frost/60 bg-frost/40 px-3 py-1 text-sm backdrop-blur-md"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-3 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r}
              className="rounded-2xl border border-frost/60 bg-frost/40 p-5 backdrop-blur-xl"
            >
              <p className="font-mono text-xs text-primary">★★★★★</p>
              <p className="mt-3 text-pretty text-sm text-muted-foreground">{r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 rounded-3xl border border-frost/60 bg-frost/40 p-6 backdrop-blur-xl md:grid-cols-2 md:p-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              This month only
            </span>
            <h3 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight">
              Free test + $100 off your first softener install
            </h3>
            <p className="mt-3 text-pretty text-sm text-muted-foreground">
              Book before the first frost and we'll tune your system for winter at no charge.
            </p>
          </div>
          <form
            id="quote"
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="block text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Name</span>
              <input
                className="w-full rounded-xl border border-line/10 bg-frost/70 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
                placeholder="Jordan Alvarez"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Phone</span>
              <input
                className="w-full rounded-xl border border-line/10 bg-frost/70 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
                placeholder="(303) 555-0148"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Address</span>
              <input
                className="w-full rounded-xl border border-line/10 bg-frost/70 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2"
                placeholder="1400 Larimer St, Denver"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-xs text-muted-foreground">Service interest</span>
              <select className="w-full rounded-xl border border-line/10 bg-frost/70 px-3 py-2 text-sm outline-none ring-primary/40 focus:ring-2">
                <option>Water softener</option>
                <option>Whole-home filtration</option>
                <option>Reverse osmosis</option>
                <option>UV disinfection</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <button
              type="submit"
              className="shimmer w-full rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-black/5 transition-all hover:brightness-110"
            >
              Schedule my free water test
            </button>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/10 pt-6 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">Front Range Water Pros</span> · Licensed
            &amp; insured CO contractor · Denver metro
          </div>
          <a
            href="tel:3035550148"
            className="rounded-full border border-frost/60 bg-frost/40 px-4 py-2 font-semibold text-primary backdrop-blur-md"
          >
            (303) 555-0148
          </a>
        </div>
      </footer>
    </div>
  );
}

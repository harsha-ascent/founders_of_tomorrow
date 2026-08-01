import SignupForm from "@/components/SignupForm";

const stats = [
  { value: "12", label: "Weeks per cohort" },
  { value: "24", label: "Students per cohort" },
  { value: "1:6", label: "Mentor to student ratio" },
  { value: "1", label: "Product sold to a stranger" },
];

const stacks = [
  {
    tag: "Stack 01",
    title: "Maker",
    desc: "Wood. Electronics. Robotics. Laser. 3D printing. Textiles. Food. Digital fabrication.",
  },
  {
    tag: "Stack 02",
    title: "Founder",
    desc: "Costing. Pricing. Branding. Marketing. Negotiation. Pitching. Leadership. Storytelling.",
  },
  {
    tag: "Stack 03",
    title: "Judgement",
    desc: "AI as a tool and its limits. Climate and circular design. Systems thinking. Ethics of what you build.",
  },
];

const arcs = [
  {
    range: "Weeks 01–04",
    title: "Discover",
    desc: "Problem-finding in the field. Machine inductions and safety certification. Team formation.",
  },
  {
    range: "Weeks 05–08",
    title: "Build",
    desc: "Prototype, test with real users, break it, rebuild. Costing, pricing and margin introduced.",
  },
  {
    range: "Weeks 09–12",
    title: "Launch",
    desc: "Brand, packaging, pitch rehearsal. Demo Day panel and public marketplace.",
  },
];

const outcomes = [
  {
    title: "A product that exists",
    desc: "Designed, fabricated, tested and manufactured in small batch by the student.",
  },
  {
    title: "A documented portfolio",
    desc: "Photographs, drawings, iterations and failures — the artefact selective universities ask to see.",
  },
  {
    title: "Revenue they earned",
    desc: "Money from strangers who chose to buy. Accounted for, and kept.",
  },
  {
    title: "A ninety-second pitch",
    desc: "Delivered unscripted to a panel of founders and engineers, on film.",
  },
  {
    title: "A T-Works fellowship credential",
    desc: "Issued jointly, defensible, and rare because the cohort is small.",
  },
];

const evidence = [
  "MIT Media Lab",
  "Stanford d.school",
  "Fab Lab Network",
  "Tinkering School",
  "Moonshot Pirates",
  "FIRST Robotics",
  "Design for Change",
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="eyebrow text-sm text-paper">
            FOUNDERS <span className="text-gold">OF TOMORROW</span>
          </span>
          <a
            href="#register"
            className="eyebrow rounded-full bg-gold px-4 py-2 text-xs text-ink transition-opacity hover:opacity-90"
          >
            Register interest
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink text-paper">
        <div className="grid-fade absolute inset-0" />
        <div className="glow absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24">
          <p className="eyebrow text-xs text-gold">
            Founders of Tomorrow / T-Works / Fall 2026
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            FOUNDERS
            <br />
            OF TOMORROW
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/80">
            An elite, acceptance-only fellowship that makes students
            entrepreneurship-ready. Built and run at T-Works, Hyderabad.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="rounded-md bg-gold px-7 py-3.5 font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Get early access
            </a>
            <a
              href="#programme"
              className="eyebrow text-xs text-paper/60 transition-colors hover:text-paper"
            >
              See the programme ↓
            </a>
          </div>
        </div>
      </section>

      {/* HOOK */}
      <section className="bg-paper px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            What if India&apos;s next founder is sitting in your{" "}
            <span className="text-sage">Class 7</span>?
          </h2>
          <p className="eyebrow mt-6 text-xs text-muted">
            And nothing in the timetable will ever find out.
          </p>
        </div>
      </section>

      {/* PROGRAMME STATS */}
      <section id="programme" className="bg-ink px-6 py-24 text-paper">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-xs text-gold">FOT / Programme specification</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            A 12-week fellowship. One real product. One real sale.
          </h2>
          <p className="mt-4 max-w-2xl text-paper/70">
            Selected students find a real problem, build a real product on
            industrial machines, and sell it to real customers on a public
            demo day.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-gold sm:text-5xl">
                  {s.value}
                </p>
                <p className="eyebrow mt-2 text-xs text-paper/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="bg-paper px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-xs text-sage">Structure</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Twelve weeks, three arcs, one finished venture.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {arcs.map((a) => (
              <div key={a.title} className="rounded-lg bg-sage-light p-6">
                <p className="eyebrow text-xs text-sage">{a.range}</p>
                <h3 className="mt-3 text-2xl font-bold">{a.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-semibold">
            Saturdays, four hours, at T-Works. Zero disruption to the school
            timetable.
          </p>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="bg-ink-2 px-6 py-24 text-paper">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-xs text-gold">Curriculum</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Three stacks, taught simultaneously.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stacks.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <p className="eyebrow text-xs text-paper/50">{s.tag}</p>
                <h3 className="mt-3 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-paper/70">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 italic text-paper/70">
            Most programmes teach one. The combination is the product.
          </p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-paper px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-xs text-sage">Outcome</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            What a student walks out holding.
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {outcomes.map((o) => (
              <li key={o.title} className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" />
                <div>
                  <p className="font-bold">{o.title}</p>
                  <p className="text-sm text-ink/60">{o.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EVIDENCE STRIP */}
      <section className="border-y border-black/10 bg-paper-2 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-6 text-center text-xs text-muted">
            The method draws on seven proven global programmes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {evidence.map((e) => (
              <span key={e} className="eyebrow text-xs text-ink/50">
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section
        id="register"
        className="relative overflow-hidden bg-ink px-6 py-24 text-paper"
      >
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow text-xs text-gold">Next step</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Be first to know when applications open.
          </h2>
          <p className="mt-4 text-paper/70">
            Fall 2026 applications for the founding cohort are opening soon.
            Register now to stay in the loop — early registrants get
            priority access.
          </p>
          <div className="mt-10">
            <SignupForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink px-6 py-10 text-paper/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="eyebrow text-xs">
            Founders of Tomorrow <span className="text-gold">×</span> T-Works
          </p>
          <p className="text-xs">Hyderabad, India</p>
        </div>
      </footer>
    </main>
  );
}

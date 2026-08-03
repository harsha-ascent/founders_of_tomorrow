import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="eyebrow text-sm text-paper">
            BUILDERS <span className="text-gold">OF TOMORROW</span>
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
            Builders of Tomorrow / T-Works / Fall 2026
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            BUILDERS
            <br />
            OF TOMORROW
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/80">
            An acceptance-only fellowship that makes students
            entrepreneurship-ready. At T-Works, Hyderabad.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="rounded-md bg-gold px-7 py-3.5 font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Get early access
            </a>
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
          <h2 className="text-3xl font-bold sm:text-4xl">
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
            Builders of Tomorrow <span className="text-gold">×</span> T-Works
          </p>
          <p className="text-xs">Hyderabad, India</p>
        </div>
      </footer>
    </main>
  );
}

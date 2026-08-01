# Founders of Tomorrow — sneak peek site

Single-page teaser + interest-registration form for the Founders of
Tomorrow fellowship (T-Works). Built with Next.js (App Router) + Tailwind
CSS, storing signups in Supabase Postgres.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase setup

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL Editor, run [`supabase/schema.sql`](supabase/schema.sql) to
   create the `signups` table (insert-only via the public anon key; no
   public read access).
3. Copy `.env.example` to `.env.local` and fill in your project's URL and
   anon public key (Project Settings → API).

## Deploy

Push to GitHub, import the repo in [Vercel](https://vercel.com/new), and
add the same two environment variables (`NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the project settings before deploying.

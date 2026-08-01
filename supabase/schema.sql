-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  parent_name text not null,
  parent_contact text not null,
  kid_name text not null,
  kid_school text not null,
  kid_age smallint not null
);

alter table public.signups enable row level security;

-- Anyone (the public site, using the anon key) can submit a signup...
create policy "Allow public inserts" on public.signups
  for insert
  to anon
  with check (true);

-- ...but no one can read them back through the anon key.
-- View/export signups from the Supabase Table Editor (as the project owner) instead.

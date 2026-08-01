-- Run this in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- If you already have a `signups` table from an earlier version of this
-- schema (parent_name/parent_contact/kid_name/kid_school/kid_age, no
-- unique constraint), drop it first -- there's no real registration data
-- worth preserving before launch:
--   drop table if exists public.signups;

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  parent_name text not null,
  parent_phone text not null,
  parent_email text not null default '',
  kid_name text not null,
  kid_school text not null,
  kid_age smallint not null,
  -- Lets one parent register multiple kids, but blocks submitting the
  -- exact same parent+kid combination twice.
  unique (parent_name, parent_phone, parent_email, kid_name, kid_school, kid_age)
);

alter table public.signups enable row level security;

-- Anyone (the public site, using the anon/publishable key) can submit a
-- signup...
create policy "Allow public inserts" on public.signups
  for insert
  to anon
  with check (true);

-- ...but no one can read them back through the anon key.
-- View/export signups from the Supabase Table Editor (as the project owner) instead.

create extension if not exists pgcrypto;

create table if not exists public.mvp_interactions (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.mvp_interactions enable row level security;

drop policy if exists "anon can insert mvp_interactions" on public.mvp_interactions;
create policy "anon can insert mvp_interactions"
on public.mvp_interactions
for insert
to anon
with check (true);
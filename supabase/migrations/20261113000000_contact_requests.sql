-- NEXENER · Mensajes del formulario de contacto
-- Ejecutar una vez en Supabase: SQL Editor → New query → pegar todo → Run.

create table if not exists public.contact_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 120),
  company     text check (company is null or char_length(company) <= 160),
  email       text not null check (char_length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]{2,}$'),
  topic       text check (topic is null or char_length(topic) <= 120),
  message     text not null check (char_length(message) between 1 and 5000),
  lang        text not null default 'es' check (lang in ('es', 'en')),
  status      text not null default 'nuevo' check (status in ('nuevo', 'respondido', 'archivado')),
  user_agent  text check (user_agent is null or char_length(user_agent) <= 400)
);

comment on table public.contact_requests is 'Mensajes del formulario de contacto de nexener (los escribe solo el servidor del sitio).';

create index if not exists contact_requests_created_at_idx on public.contact_requests (created_at desc);

-- Seguridad: RLS activado y SIN políticas.
-- Nadie puede leer ni escribir desde el navegador con la clave pública (anon).
-- Solo el servidor del sitio, con la clave secreta, puede insertar (la clave secreta omite RLS).
alter table public.contact_requests enable row level security;
revoke all on public.contact_requests from anon, authenticated;

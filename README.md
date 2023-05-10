# System Parlamentarny

<p align="center">
  <a href="https://github.com/informatyzacja/parliamentary-system/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/informatyzacja/parliamentary-system/ci.yml" alt="GitHub Workflow Status" />
  </a>
  <img src="https://img.shields.io/github/package-json/v/informatyzacja/parliamentary-system?filename=package.json" alt="GitHub package.json version" />
  <a href="https://status.samorzad.pwr.edu.pl/history/system-parlamentarny">
    <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/informatyzacja/uptime/master/api/system-parlamentarny/uptime.json" alt="Uptime ratio" />
  </a>
  <a href="https://status.samorzad.pwr.edu.pl/history/system-parlamentarny-api">
    <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/informatyzacja/uptime/master/api/system-parlamentarny-api/uptime.json&label=api uptime" alt="API uptime ratio" />
  </a>
  <img src="https://img.shields.io/github/license/informatyzacja/parliamentary-system" alt="License" />
</p>

Aplikacja webowa do przekazywania dokumentów Parlamentu Studenckiego.

## Tech Stack

**Backend:** Strapi

**Frontend:** Next, React, Chakra UI, Emotion, TypeScript

**Ogólne:** Docker, GitHub Actions, GraphQL

## Environment Variables

Do uruchomienia projektu niezbędne jest uruchomienie poniższego kodu oraz ustawienie poniższych zmiennych

```bash
cp .env.example .env && cp backend/.env.example backend/.env && cp frontend/.env.example frontend/.env
```

#### .env

- `DATABASE_NAME`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

#### backend/.env

- `USOS_CLIENT_ID`
- `USOS_CLIENT_SECRET`

gdzie klucze do USOS uzyskasz od swojej uczelni

- `DATABASE_NAME`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

tak samo jak wyżej w `.env`

#### frontend/.env

- `NEXT_PUBLIC_API_URL` - url backendu
- `NEXTAUTH_URL` - url frontendu
- `NEXTAUTH_SECRET` - losowo wygenerowany sekret
- `GOOGLE_CLIENT_ID` - Google OAuth client id
- `GOOGLE_CLIENT_SECRET` - Google OAuth secret token
- `USOS_CLIENT_ID`
- `USOS_CLIENT_SECRET`

tak samo jak wyżej w `backend/.env`

## Instalacja

Wykonaj poniższe polecenia

```bash
git clone https://github.com/informatyzacja/parliamentary-system.git
cd parliamentary-system
pnpm i && pnpm postinstall
cd backend && pnpm i && cd ..
pnpm dev
```

## Deployment

Aby dokonać deployu projektu uruchom podane poniżej polecenia

```bash
docker compose -f docker-compose.yml up --force-recreate -V
```

## Contributing

Zgłaszanie błędów mile widziane!

Projekt jest prowadzony przez wyznaczone osoby i nie przyjmuje na ten moment PR z zewnątrz.

<br />
<br />
<p align="center">
  <a href="https://samorzad.pwr.edu.pl/">
    <img src="public/assets/logo.svg" width="500" alt="Logo SSPWr" />
  </a>
</p>
<h1 align="center">
  Parliamentary System 
</h1>
<p align="center">
  Web application for storing and relaying documents.
</p>
<p align="center"><a href="https://parlament.samorzad.pwr.edu.pl">Production link</a></p>

<p align="center">
  <a href="https://github.com/informatyzacja/parliamentary-system/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/informatyzacja/parliamentary-system/ci.yml" alt="GitHub Workflow Status" />
  </a>
  <a title="Crowdin" target="_blank" href="https://informatyzacja.crowdin.com/parliamentary-system">
    <img src="https://badges.crowdin.net/e/2036871611307a93ae7356000c84e7c8/localized.svg" alt="Crowdin translation status">
  </a>
  <a href="https://github.com/informatyzacja/parliamentary-system/releases">
    <img src="https://img.shields.io/github/package-json/v/informatyzacja/parliamentary-system?filename=package.json" alt="GitHub package.json version" />
  </a>
  <a href="https://status.samorzad.pwr.edu.pl/history/system-parlamentarny">
    <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/informatyzacja/uptime/master/api/system-parlamentarny/uptime.json" alt="Uptime ratio" />
  </a>
  <a href="https://status.samorzad.pwr.edu.pl/history/system-parlamentarny-api">
    <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/informatyzacja/uptime/master/api/system-parlamentarny-api/uptime.json&label=api uptime" alt="API uptime ratio" />
  </a>
  <a href="https://github.com/informatyzacja/parliamentary-system/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/informatyzacja/parliamentary-system" alt="License" />
  </a>
</p>

<br>

<p>
  <img src="public/assets/system.png" alt="Landing page">
</p>

## Getting started

### Installation

```shell
git clone https://github.com/informatyzacja/parliamentary-system.git
cd parliamentary-system
yarn install --immutable
```

### Requirements

#### Development

- Volta

#### Production

- Docker

### Deployment

Aby dokonać deployu projektu uruchom podane poniżej polecenia

```bash
docker compose -f docker-compose.yml up --force-recreate -V
```

## Environment Variables

Do uruchomienia projektu niezbędne jest uruchomienie poniższego kodu oraz ustawienie poniższych zmiennych

```bash
cp .env.example .env && cp api/.env.example api/.env && cp web/.env.example web/.env
```

#### .env

- `DATABASE_NAME`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`
- `DATABASE_FOLDER`

#### api/.env

- `USOS_CLIENT_ID`
- `USOS_CLIENT_SECRET`

gdzie klucze do USOS uzyskasz od swojej uczelni

- `DATABASE_NAME`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

tak samo jak wyżej w `.env`

- `WEB_URL` - url frontendu

#### web/.env

- `NEXT_PUBLIC_API_URL` - url backendu
- `NEXTAUTH_URL` - url frontendu
- `NEXTAUTH_SECRET` - losowo wygenerowany sekret
- `GOOGLE_CLIENT_ID` - Google OAuth client id
- `GOOGLE_CLIENT_SECRET` - Google OAuth secret token
- `USOS_CLIENT_ID`
- `USOS_CLIENT_SECRET`

tak samo jak wyżej w `api/.env`

## Contributing

If you're having problems with running this project, feel free to create an issue!

Currently this project is maintained by a group of people chosen by Commission for IT of WUST's Students' Union and is not accepting pull requests from the outside.

## License

See the [LICENSE](./LICENSE) file for licensing information.

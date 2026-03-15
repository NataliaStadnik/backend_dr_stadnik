# Backend API for Dr. Stadnik's website

This is the backend service for Dr. Stadnik's website, built using the [Nest](https://github.com/nestjs/nest) framework. It provides RESTful APIs for authentication and content management.

## Features & Modules

- **Authentication** — JWT access + refresh token system with secure rotation and daily cleanup of stale tokens.
- **Reviews** — Public `GET /reviews` (visible-only), protected write/reorder endpoints.
- **Seminars** — Fully protected CRUD with localized JSON content.
- **Articles** — Public `GET /articles`, protected write operations; supports complex dynamic UI-block content via JSON.
- **Health** — `GET /api/health` endpoint for DB liveness check (readiness probe).

## Production Features

| Feature | Details |
|---------|---------|
| 🔒 Security headers | `helmet` — XSS, clickjacking, MIME-sniffing protection |
| 🌐 CORS | Configurable via `ALLOWED_ORIGINS` env var |
| 📦 Compression | `gzip` on all responses |
| 🚦 Rate limiting | 100 req/min globally; **10 req/min** on `/auth/login` and `/auth/register` |
| ⚡ Caching | 60 s in-memory cache on `GET /reviews`, `GET /seminars`, `GET /articles` |
| 🏥 Health check | `GET /api/health` — Prisma DB ping |
| 🗑️ Token cleanup | Cron job at **03:00 AM daily** — purges expired/revoked refresh tokens |
| 🛡️ Exception filter | All errors return `{ statusCode, message, path, timestamp }` |
| ✅ Env validation | `joi` schema — app crashes at startup if required vars are missing |

## Environment Variables

Copy `.env.example` (or create `.env`) with the following keys:

```dotenv
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_ACCESS_SECRET=<strong-random-secret>
JWT_REFRESH_SECRET=<strong-random-secret>
JWT_ACCESS_TTL=15m           # optional, default: 15m
JWT_REFRESH_TTL_DAYS=30      # optional, default: 30
PORT=3000                    # optional, default: 3000
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

> **Note:** `DATABASE_URL`, `JWT_ACCESS_SECRET`, and `JWT_REFRESH_SECRET` are **required** — the app will refuse to start without them.

## Database Stack

**PostgreSQL** + **Prisma ORM** with the `@prisma/adapter-pg` driver.

Models: `User`, `RefreshToken`, `Review`, `Seminar`, `Article`.
All content fields use JSON for multilingual support (`{ "ru": "...", "en": "...", "de": "..." }`).

## Installation

```bash
npm install
```

## Running the App

```bash
# Generate the Prisma Client
npx prisma generate

# Development (watch mode)
npm run start:dev

# Production
npm run start:prod
```

## Database Migrations

```bash
# Apply schema changes (development)
npx prisma db push

# Create a named migration (production-ready)
npx prisma migrate dev --name <migration-name>
```

## API Documentation

Swagger UI is available at `/api` once the server is running.

## License

[MIT](https://github.com/nestjs/nest/blob/master/LICENSE)

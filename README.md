# Backend API for Dr. Stadnik's website

This is the backend service for Dr. Stadnik's website, built using the [Nest](https://github.com/nestjs/nest) framework. It provides robust RESTful APIs to handle authentication and content management.

## Features & Modules

- **Authentication**: JWT-based authentication system.
- **Reviews Module**: Endpoints to fetch visible reviews publicly (`GET /reviews`), create reviews, and securely manage (update, delete, reorder) reviews.
- **Seminars Module**: Fully secured CRUD endpoints for managing scheduled seminars with localized content.
- **Articles Module**: A comprehensive blogging/article system. Features a complex dynamic UI-block structure (`ArticleBlock`) mapped to `JSON` providing extreme flexibility for article layouts. Includes public endpoints for reading algorithms and securely protected write operations.

## Database Stack

The project relies on **PostgreSQL** configured via **Prisma ORM**. 

- Contains models for `User`, `RefreshToken`, `Review`, `Seminar`, and `Article`.
- Employs data localization via JSON-based objects.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Generate the Prisma Client
$ npx prisma generate

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Migrations

To sync your Prisma schema with your database (during development):
```bash
$ npx prisma db push
```

## API Documentation
Once the server is running, the API endpoints and expected request/response typing schemas (including complex discriminated union definitions) are exposed via **Swagger UI** on the `/api` or `/docs` endpoint (based on your configuration).

## License

This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

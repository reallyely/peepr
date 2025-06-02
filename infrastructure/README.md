# Peepr Infrastructure Package

The Infrastructure package contains all database connections, external API integrations, and persistence logic for the Peepr application. This package follows Domain-Driven Design principles by providing the infrastructure layer that supports the core domain logic.

## Overview

- **Database**: SQLite with Drizzle ORM
- **Driver**: better-sqlite3
- **Schema**: TypeScript-first with full type inference
- **Migrations**: Managed by Drizzle Kit

## Architecture

This package sits between the domain layer (`@peepr/core`) and application layers (`@peepr/ui`, `@peepr/integration`). It provides:

- Database schema definitions
- Repository patterns for data access
- Migration utilities
- Seeding capabilities

## Installation

The infrastructure package is automatically installed as part of the workspace. Dependencies are managed at the package level.

```bash
cd peepr
pnpm install
```

## Database Setup

### Environment Variables

Set the database URL in your environment:

```env
DATABASE_URL=.data/local.db
```

For production deployments, use a persistent path:
```env
DATABASE_URL=/app/data/peepr.db
```

### Initialize Database

Generate initial migration:
```bash
cd infrastructure
pnpm db:generate
```

Run migrations:
```bash
pnpm db:migrate
```

Or use the utility script:
```bash
pnpm db:init
```

### Seed Database

Migrate existing data or create default users:
```bash
pnpm db:seed
```

## Usage

### Import the Infrastructure

```typescript
import { userRepository, initializeDatabase } from '@peepr/infrastructure';
```

### User Operations

```typescript
// Create a user
const user = await userRepository.create({
  data: { username: 'john', password: 'password123' }
});

// Find a user
const user = await userRepository.findUnique({
  where: { username: 'john' }
});

const userById = await userRepository.findUnique({
  where: { id: 'user-id' }
});
```

### Direct Database Access

```typescript
import { db, users } from '@peepr/infrastructure';
import { eq } from 'drizzle-orm';

// Raw database queries
const allUsers = await db.select().from(users);
const user = await db.select().from(users).where(eq(users.id, 'user-id'));
```

## Database Schema

### Users Table

- `id` (text, primary key) - Unique identifier
- `username` (text, unique, not null) - User's username
- `password` (text, not null) - User's password
- `created_at` (timestamp, not null) - Record creation time
- `updated_at` (timestamp, not null) - Record update time

## Available Scripts

- `pnpm db:generate` - Generate migration files from schema changes
- `pnpm db:migrate` - Run pending migrations
- `pnpm db:push` - Push schema changes directly to database (development)
- `pnpm db:studio` - Open Drizzle Studio for database inspection
- `pnpm db:init` - Initialize database with migrations
- `pnpm db:seed` - Seed database with initial/migrated data

## Development

### Adding New Tables

1. Update `src/database/schema.ts` with new table definitions
2. Generate migration: `pnpm db:generate`
3. Run migration: `pnpm db:migrate`
4. Add repository methods in `src/database/repositories.ts`
5. Export new functionality in `src/database/index.ts`

### Drizzle Studio

Inspect and modify your database with the web interface:
```bash
pnpm db:studio
```

Opens at `https://local.drizzle.studio`

## Integration with Other Packages

### UI Package

The UI package imports database functionality:
```typescript
import { userRepository } from '@peepr/infrastructure';
```

### Integration Package

Future integration with external services:
```typescript
import { userRepository, integrationRepository } from '@peepr/infrastructure';
```

## Deployment

The infrastructure package is bundled with the UI package during deployment. Database initialization happens on application startup.

### Fly.io Integration

- Database file stored on persistent volume: `/app/data/peepr.db`
- Migrations run automatically on container startup
- WAL mode enabled for better concurrent performance

## Type Safety

Full TypeScript integration with schema inference:

```typescript
import type { User, InsertUser } from '@peepr/infrastructure';

// User type is automatically inferred from schema
const user: User = await userRepository.findUnique({ where: { id: 'user-id' }});

// InsertUser type for creating new records
const newUserData: InsertUser = {
  id: 'new-id',
  username: 'newuser',
  password: 'password'
};
```

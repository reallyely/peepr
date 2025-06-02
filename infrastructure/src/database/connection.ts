import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import * as schema from './schema.ts';

// Database file path - will be created if it doesn't exist
const DATABASE_URL = process.env.DATABASE_URL || 'file:.data/local.db';

// Create the libsql client
const client = createClient({
  url: DATABASE_URL,
});

// Create Drizzle instance
export const db = drizzle(client, { schema });

// Function to run migrations
export function runMigrations() {
  try {
    migrate(db, { migrationsFolder: './drizzle' });
    console.log('Database migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    throw error;
  }
}

// Function to close the database connection
export function closeDatabase() {
  client.close();
}

// Export the raw client instance if needed for advanced operations
export { client };

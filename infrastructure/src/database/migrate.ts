import { runMigrations } from './connection.ts';

export async function initializeDatabase() {
  try {
    console.log('Initializing database...');
    runMigrations();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
  }
}

// Run this script directly if called from command line
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

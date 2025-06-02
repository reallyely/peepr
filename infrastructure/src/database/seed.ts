import { User } from "@peepr/core";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";
import { initializeDatabase } from './migrate.ts';
import { userRepository } from './repositories.ts';

const storage = createStorage({
  // @ts-ignore -- this is correct
  driver: fsLiteDriver({
    base: "./.data",
  }),
});

export async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Initialize database first
    await initializeDatabase();

    // Check if there's existing data in unstorage
    const existingUsers = await storage.getItem<Array<User>>('users:data');

    if (existingUsers && Array.isArray(existingUsers) && existingUsers.length > 0) {
      console.log(`Found ${existingUsers.length} existing users, migrating to database...`);

      for (const userData of existingUsers) {
        try {
          // Create User entity to validate the data
          const user = User.create(userData);

          // Insert into new database
          await userRepository.create({
            data: {
              username: user.username,
              password: user.password,
            }
          });

          console.log(`Migrated user: ${user.username}`);
        } catch (error) {
          console.error(`Failed to migrate user ${userData.username}:`, error);
        }
      }
    } else {
      // Create default user if no existing data
      console.log('No existing users found, creating default user...');
      await userRepository.create({
        data: {
          username: "lol",
          password: "roflmao"
        }
      });
      console.log('Default user created');
    }

    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Failed to seed database:', error);
    throw error;
  }
}

// Run this script directly if called from command line
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

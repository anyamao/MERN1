// migrate.ts// migrate.ts
import { createClient } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import * as dotenv from "dotenv";
import { migrate } from "drizzle-orm/node-postgres";

dotenv.config();

async function main() {
  const client = new createClient({
    connectionString: process.env.DATABASE_URL!,
  });
  await client.connect();

  const db = drizzle(client, { schema });

  try {
    await migrate(db, { migrationsTable: "drizzle_migrations" });
    console.log("✅ Migrations applied!");
  } catch (err) {
    console.error("❌ Migration error:", err);
  } finally {
    await client.end();
  }
}

main().catch(console.error);

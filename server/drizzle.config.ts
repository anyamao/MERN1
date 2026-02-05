import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set in .env file. Create a .env file with:\n" +
      'DATABASE_URL="postgresql://user:password@host:port/dbname"',
  );
}

export default {
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  schema: "./schema.ts",
  dialect: "postgresql",
} satisfies Config;

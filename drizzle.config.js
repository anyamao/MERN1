// drizzle.config.js
/** @type {import("drizzle-kit").Config} */
module.exports = {
  schema: "./schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgresql://localhost/postgres",
  },
};

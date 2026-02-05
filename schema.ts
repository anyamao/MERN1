import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";
export const test = pgTable("test", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
});

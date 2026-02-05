import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";
export const test = pgTable("test", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  email: varchar("email", { length: 100 }).notNull(),
  lastname: varchar("lastname"),
});

import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const votesTable = pgTable("votes_table", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  votes: integer("votes").notNull(),
});

export type InsertVote = typeof votesTable.$inferInsert;
export type SelectVote = typeof votesTable.$inferSelect;

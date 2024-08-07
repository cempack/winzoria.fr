import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const votesTable = pgTable("votes_table", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  votes: integer("votes").notNull(),
});

export const lastsVotesTable = pgTable("lasts_votes_table", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  last_vote: text("last_vote").notNull(),
  last_vote_time: text("last_vote_time").notNull(),
});

export const bestVotersTable = pgTable("best_voters_table", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  votes: integer("votes").notNull(),
});

export type InsertVote = typeof votesTable.$inferInsert;
export type SelectVote = typeof votesTable.$inferSelect;

export type InsertLastVote = typeof lastsVotesTable.$inferInsert;
export type SelectLastVote = typeof lastsVotesTable.$inferSelect;

export type InsertBestVoter = typeof bestVotersTable.$inferInsert;
export type SelectBestVoter = typeof bestVotersTable.$inferSelect;

CREATE TABLE IF NOT EXISTS "lasts_votes_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"last_vote" text NOT NULL,
	"last_vote_time" text NOT NULL,
	CONSTRAINT "lasts_votes_table_username_unique" UNIQUE("username")
);

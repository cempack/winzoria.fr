CREATE TABLE IF NOT EXISTS "best_voters_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"votes" integer NOT NULL
);

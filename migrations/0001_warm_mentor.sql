CREATE TABLE IF NOT EXISTS "votes_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"votes" integer NOT NULL,
	CONSTRAINT "votes_table_username_unique" UNIQUE("username")
);
--> statement-breakpoint
DROP TABLE "posts_table";--> statement-breakpoint
DROP TABLE "users_table";
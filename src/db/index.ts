import { sql } from "@vercel/postgres";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/vercel-postgres";

config({ path: ".env" });
export const db = drizzle(sql);

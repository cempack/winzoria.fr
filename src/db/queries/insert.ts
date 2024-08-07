import { db } from "../index";
import { InsertVote, votesTable } from "../schema";

export async function createVote(data: InsertVote) {
  await db.insert(votesTable).values(data);
}

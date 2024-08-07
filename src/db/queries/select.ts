import { eq } from "drizzle-orm";
import { db } from "../index";
import { SelectVote, votesTable } from "../schema";

export async function getUserByUsername(
  username: SelectVote["username"]
): Promise<
  Array<{
    id: number;
    username: string;
    votes: number;
  }>
> {
  return db.select().from(votesTable).where(eq(votesTable.username, username));
}

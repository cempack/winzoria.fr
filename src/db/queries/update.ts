import { eq } from "drizzle-orm";
import { db } from "../index";
import { SelectVote, votesTable } from "../schema";

export async function updateVote(
  username: SelectVote["username"],
  data: Partial<Omit<SelectVote, "id">>
) {
  await db
    .update(votesTable)
    .set(data)
    .where(eq(votesTable.username, username));
}

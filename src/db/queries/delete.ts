import { eq } from "drizzle-orm";
import { db } from "../index";
import { bestVotersTable, lastsVotesTable, votesTable } from "../schema";

export async function deleteVoteByUsername(username: string) {
  await db.delete(votesTable).where(eq(votesTable.username, username));
}

export async function deleteLastVoteByUsername(username: string) {
  await db
    .delete(lastsVotesTable)
    .where(eq(lastsVotesTable.username, username));
}

export async function deleteBestVoterByUsername(username: string) {
  await db
    .delete(bestVotersTable)
    .where(eq(bestVotersTable.username, username));
}

export async function resetBestVoters() {
  await db.delete(bestVotersTable);
}

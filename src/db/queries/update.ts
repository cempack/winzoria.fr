import { eq } from "drizzle-orm";
import { db } from "../index";
import {
  SelectBestVoter,
  SelectLastVote,
  SelectVote,
  bestVotersTable,
  lastsVotesTable,
  votesTable,
} from "../schema";

export async function updateVote(
  username: SelectVote["username"],
  data: Partial<Omit<SelectVote, "id">>
) {
  await db
    .update(votesTable)
    .set(data)
    .where(eq(votesTable.username, username));
}

export async function updateLastVote(
  username: SelectLastVote["username"],
  data: Partial<Omit<SelectLastVote, "id">>
) {
  await db
    .update(lastsVotesTable)
    .set(data)
    .where(eq(lastsVotesTable.username, username));
}

export async function updateBestVoter(
  username: SelectBestVoter["username"],
  data: Partial<Omit<SelectBestVoter, "id">>
) {
  await db
    .update(bestVotersTable)
    .set(data)
    .where(eq(bestVotersTable.username, username));
}

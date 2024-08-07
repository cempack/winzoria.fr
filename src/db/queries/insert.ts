import { db } from "../index";
import {
  InsertBestVoter,
  InsertLastVote,
  InsertVote,
  bestVotersTable,
  lastsVotesTable,
  votesTable,
} from "../schema";

export async function createVote(data: InsertVote) {
  await db.insert(votesTable).values(data);
}

export async function createLastVote(data: InsertLastVote) {
  await db.insert(lastsVotesTable).values(data);
}

export async function createBestVoter(data: InsertBestVoter) {
  await db.insert(bestVotersTable).values(data);
}

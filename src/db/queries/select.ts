import { desc, eq } from "drizzle-orm";
import { db } from "../index";
import {
  SelectLastVote,
  SelectVote,
  bestVotersTable,
  lastsVotesTable,
  votesTable,
} from "../schema";

// Define the expected structure of the returned data
type UserVote = {
  id: number;
  username: string;
  votes: number;
};

type LastVote = {
  id: number;
  username: string;
  last_vote: string;
  last_vote_time: string;
};

// Function to get user by username
export async function getUserByUsername(
  username: SelectVote["username"]
): Promise<UserVote[]> {
  return db
    .select()
    .from(votesTable)
    .where(eq(votesTable.username, username))
    .execute(); // Ensure to call execute to run the query
}

// Function to get the last vote by username and website
export async function getLastVoteByUsernameAndWebsite(
  username: SelectLastVote["username"],
  website: string
): Promise<LastVote[]> {
  return db
    .select()
    .from(lastsVotesTable)
    .where(
      eq(lastsVotesTable.username, username) &&
        eq(lastsVotesTable.last_vote, website)
    )
    .orderBy(desc(lastsVotesTable.last_vote_time));
}

// Function to get the best voters
export async function getBestVoters(): Promise<UserVote[]> {
  return db
    .select()
    .from(bestVotersTable)
    .orderBy(desc(bestVotersTable.votes))
    .limit(10)
    .execute();
}

// Get best voter by username
export async function getBestVoterByUsername(username: SelectVote["username"]) {
  return db
    .select()
    .from(bestVotersTable)
    .where(eq(bestVotersTable.username, username))
    .execute();
}

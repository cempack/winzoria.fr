"use server";

import {
  createBestVoter,
  createLastVote,
  createVote,
} from "@/db/queries/insert";
import {
  getBestVoterByUsername,
  getLastVoteByUsernameAndWebsite,
  getUserByUsername,
} from "@/db/queries/select";
import { updateBestVoter, updateVote } from "@/db/queries/update";

export default async function checkVoteWebsite(
  website: string,
  ip: string,
  username: string
) {
  interface WebsiteData {
    url: string;
    key?: string;
    value?: string | boolean | number;
    value_not?: string | boolean | number;
    time_until_next_vote_key?: string;
    time_until_next_vote: number;
  }

  const websites: { [key: string]: WebsiteData } = {
    // "https://serveur-minecraft.com/3260": {
    //   url: `https://serveur-minecraft.com/api/1/vote/3260/${ip}/json`,
    //   key: "vote",
    //   value: "1",
    //   time_until_next_vote_key: "time_until_next_vote",
    // },
    "https://serveur-prive.net/minecraft/winzoria-13681/vote": {
      url: `https://serveur-prive.net/api/v1/servers/jvRmuF9HB8hsI0V/votes/${ip}`,
      key: "success",
      value: true,
      time_until_next_vote: 5400,
    },
    "https://www.liste-serveurs-minecraft.org/vote/?idc=206300": {
      url: `https://api.liste-serveurs-minecraft.org/vote/vote_verification.php?server_id=206300&ip=${ip}&duration=3600`,
      value: "1",
      time_until_next_vote: 10800,
    },
    "https://www.serveursminecraft.org/serveur/6772/": {
      url: `https://www.serveursminecraft.org/sm_api/peutVoter.php?id=6772&ip=${ip}`,
      value_not: true,
      time_until_next_vote: 86400,
    },
    "https://www.liste-serveurs.fr/server-winzoria.723/vote": {
      url: `https://www.liste-serveurs.fr/api/checkVote/723/${ip}`,
      key: "success",
      value: true,
      time_until_next_vote: 10800,
    },
  };

  const websiteData = websites[website];
  if (!websiteData) {
    throw new Error(`Website ${website} not found in websites object`);
  }

  // Check if the user has not already voted on this website
  async function checkVoteWebsite(
    website: string,
    username: string,
    timeUntilNextVote: number
  ): Promise<boolean> {
    return getLastVoteByUsernameAndWebsite(username, website).then(
      (lastVote) => {
        if (lastVote.length === 0) {
          // User has not voted yet
          return false;
        } else {
          const lastVoteTime = new Date(lastVote[0].last_vote_time);
          if (Date.now() - lastVoteTime.getTime() > timeUntilNextVote * 1000) {
            return false;
          } else {
            return true;
          }
        }
      }
    );
  }

  if (
    await checkVoteWebsite(website, username, websiteData.time_until_next_vote)
  ) {
    return {
      hasVoted: true,
      timeUntilNextVote: "00:00:00",
      data: null,
      hasAlreadyVoted: true,
    };
  }

  const response = await fetch(websiteData.url);
  let data;

  if (websiteData.key) {
    data = await response.json();
  } else {
    data = await response.text();
  }
  console.log(data);

  let hasVoted: boolean = false;
  if (websiteData.key && data[websiteData.key]) {
    if (websiteData.value) {
      hasVoted = data[websiteData.key] === websiteData.value;
    } else if (websiteData.value_not) {
      hasVoted = data[websiteData.key] !== websiteData.value_not;
    }
  } else {
    if (websiteData.value) {
      hasVoted = data === websiteData.value;
    } else if (websiteData.value_not) {
      hasVoted = data !== websiteData.value_not;
    }
  }

  let timeUntilNextVote;
  if (websiteData.time_until_next_vote_key) {
    timeUntilNextVote = data[websiteData.time_until_next_vote_key];
  } else if (websiteData.time_until_next_vote) {
    timeUntilNextVote = websiteData.time_until_next_vote;
  } else {
    throw new Error(`Error`);
  }
  console.log(timeUntilNextVote);

  function formatSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  timeUntilNextVote = formatSeconds(timeUntilNextVote);

  async function handleVote(username: string, hasVoted: boolean) {
    if (!hasVoted) {
      console.log("User has not voted yet.");
      return;
    }

    try {
      const vote = await getUserByUsername(username);
      if (vote.length === 0) {
        // Insert vote
        await createVote({
          username: username,
          votes: 1,
        });
        console.log("Vote created successfully.");

        // Add last vote
        await createLastVote({
          username: username,
          last_vote: website,
          last_vote_time: new Date().toISOString(),
        });

        console.log("Last vote created successfully.");

        // Insert best voter
        await createBestVoter({
          username: username,
          votes: 1,
        });
        console.log("Best voter created successfully.");
      } else {
        // Update vote
        await updateVote(username, {
          votes: vote[0].votes + 1,
        });
        console.log("Vote updated successfully.");

        // Insert last vote
        await createLastVote({
          username: username,
          last_vote: website,
          last_vote_time: new Date().toISOString(),
        });

        console.log("Last vote created successfully.");

        // Update best voters
        const bestVoters = await getBestVoterByUsername(username);
        if (bestVoters.length === 0) {
          // Insert best voter
          await createBestVoter({
            username: username,
            votes: 1,
          });
          console.log("Best voter created successfully.");
        } else {
          // Update best voter
          await updateBestVoter(username, {
            votes: bestVoters[0].votes + 1,
          });
          console.log("Best voter updated successfully.");
        }
      }
    } catch (error) {
      console.error("Error handling vote:", error);
      throw new Error("Failed to handle vote");
    }
  }

  await handleVote(username, hasVoted);

  return {
    hasVoted: hasVoted,
    timeUntilNextVote: timeUntilNextVote,
    data: data,
    hasAlreadyVoted: false,
  };
}

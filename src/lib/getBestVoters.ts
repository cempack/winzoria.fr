"use server";

import { getBestVoters } from "@/db/queries/select";

export default async function getBestVotersRoute() {
  const bestVoters = await getBestVoters();
  return bestVoters;
}

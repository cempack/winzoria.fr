"use client";

import { env } from "@/app/env";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type VoterType = {
  id: number;
  username: string;
  votes: number;
};

export default function BestVoters() {
  const [bestVoters, setBestVoters] = useState<VoterType[]>([]);

  useEffect(() => {
    const fetchBestVoters = async () => {
      const baseUrl = env.NEXT_PUBLIC_BASE_URL;
      const res = await fetch(`${baseUrl}/api/best-voters`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch best voters");
      }
      const data = await res.json();
      setBestVoters(data.bestVoters);
    };

    fetchBestVoters();

    // Update data every 10 seconds
    const intervalId = setInterval(fetchBestVoters, 10000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <Table className="text-md">
        <TableHeader>
          <TableRow>
            <TableHead>Rang</TableHead>
            <TableHead>Joueur</TableHead>
            <TableHead>Votes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bestVoters.map((voter: VoterType, index: number) => (
            <TableRow key={voter.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{voter.username}</TableCell>
              <TableCell>{voter.votes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

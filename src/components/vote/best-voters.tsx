"use client";

import getBestVotersRoute from "@/lib/getBestVoters";
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
      const bestVoters = await getBestVotersRoute();
      setBestVoters(bestVoters);
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

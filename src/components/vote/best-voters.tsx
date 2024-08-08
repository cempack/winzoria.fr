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

export default async function BestVoters() {
  const bestVoters = await fetchBestVoters();

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

async function fetchBestVoters() {
  const baseUrl = process.env.PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/best-voters`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch best voters");
  }
  const data = await res.json();
  return data.bestVoters;
}

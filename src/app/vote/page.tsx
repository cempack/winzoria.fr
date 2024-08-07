import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VoteForm } from "@/components/vote/vote-form";
import { getBestVoters } from "@/db/queries/select";

type VoterType = {
  id: number;
  username: string;
  votes: number;
};

export default async function Vote() {
  const bestVoters = await getBestVoters();

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 md:gap-8">
      <div className="container space-y-4 mx-auto px-4 py-12 md:px-6 p-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Récompenses</CardTitle>
            <CardDescription>
              En votant pour Winzoria, vous recevrez des récompenses en jeu.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Récompense</TableHead>
                  <TableHead>Chances</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1 Clé de vote</TableCell>
                  <TableCell>70%</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">2 Clés de vote</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">3 Clés de vote</TableCell>
                  <TableCell>5%</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1 Clé commune</TableCell>
                  <TableCell>3%</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1 Clé Or</TableCell>
                  <TableCell>1%</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1 Clé outil</TableCell>
                  <TableCell>1%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Votez pour Winzoria</CardTitle>
            <CardDescription></CardDescription>
            <CardDescription>
              En votant pour Winzoria, vous nous aidez à nous faire connaître et
              à attirer de nouveaux joueurs. En échange, vous recevrez des
              récompenses en jeu.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VoteForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Classement</CardTitle>
            <CardDescription>
              Voici le classement des joueurs ayant voté pour Winzoria.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table className="text-md">
              <TableHeader>
                <TableRow>
                  <TableHead>Rang</TableHead>
                  <TableHead>Joueur</TableHead>
                  <TableHead>Votes</TableHead>
                </TableRow>
                {bestVoters.map((voter: VoterType, index: number) => (
                  <TableRow key={voter.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{voter.username}</TableCell>
                    <TableCell>{voter.votes}</TableCell>
                  </TableRow>
                ))}
              </TableHeader>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default function Commands() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="general">Commandes Générales</TabsTrigger>
                    <TabsTrigger value="factions">Commandes Factions</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle>Commandes Générales</CardTitle>
                            <CardDescription>Les commandes générales sont des commandes qui sont disponibles pour tous
                                les joueurs.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Commande</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">/sethome</TableCell>
                                        <TableCell>Crée un home personnel à l’endroit où vous vous trouvez. Sans grade,
                                            limité à 2 homes.
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">/home</TableCell>
                                        <TableCell>Affiche la liste des homes placés sur le serveur faction. Pour se
                                            téléporter à un home spécifique, utilisez /home [nom du home].</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/delhome [nom du home]</TableCell>
                                        <TableCell>Supprime le home désigné par le nom donné.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/spawn</TableCell>
                                        <TableCell>Téléporte au spawn après un délai de 3 secondes.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/menu</TableCell>
                                        <TableCell>Ouvre le menu d&apos;aide pour accéder et utiliser les différentes
                                            fonctionnalités du serveur.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/warp</TableCell>
                                        <TableCell>Affiche la liste des warps disponibles. Cliquez sur une icône pour
                                            vous téléporter à l&apos;emplacement correspondant.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/msg [pseudo]</TableCell>
                                        <TableCell>Envoie un message privé à la personne désignée.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/r</TableCell>
                                        <TableCell>Répond au dernier message privé reçu.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/shop</TableCell>
                                        <TableCell>Ouvre le shop de Winzoria, où vous pouvez acheter des objets du
                                            serveur.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/ah ou /hdv</TableCell>
                                        <TableCell>Ouvre le market, où les joueurs peuvent acheter et vendre des objets
                                            entre eux.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/baltop</TableCell>
                                        <TableCell>Affiche la liste des joueurs les plus riches sur le
                                            serveur.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/money</TableCell>
                                        <TableCell>Montre le montant de votre porte-monnaie.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/pay [pseudo] [montant]</TableCell>
                                        <TableCell>Envoie de l&apos;argent à la personne désignée. Assurez-vous
                                            d&apos;utiliser le
                                            bon pseudo.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/tpa [pseudo]</TableCell>
                                        <TableCell>Envoie une demande de téléportation à la personne désignée. La
                                            téléportation se fait après un délai de 3 secondes.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/tpaccept ou /tpdeny</TableCell>
                                        <TableCell>Accepte ou refuse une demande de téléportation reçue.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/discord</TableCell>
                                        <TableCell>Affiche le lien vers le Discord officiel de Winzoria.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/trade [pseudo]</TableCell>
                                        <TableCell>Envoie une demande d&apos;échange à la personne désignée.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/trade accept [pseudo]</TableCell>
                                        <TableCell>Accepte une demande d&apos;échange reçue.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/trade deny [pseudo]</TableCell>
                                        <TableCell>Refuse une demande d&apos;échange reçue.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="factions">
                    <Card>
                        <CardHeader>
                            <CardTitle>Commandes Factions</CardTitle>
                            <CardDescription>Les commandes factions sont des commandes qui sont permette d'intéragir
                                avec le plugin faction.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Commande</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">/f create [nom de faction]</TableCell>
                                        <TableCell>Crée une faction sous le nom désigné.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f disband</TableCell>
                                        <TableCell>Supprime la faction dont vous êtes chef(fe).</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f rename [nom de faction]</TableCell>
                                        <TableCell>Renomme la faction.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f upgrade</TableCell>
                                        <TableCell>Ouvre un menu qui permet de faire différentes améliorations pour
                                            votre faction.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f desc [description]</TableCell>
                                        <TableCell>Modifie la description de la faction.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f invite [pseudo]</TableCell>
                                        <TableCell>Envoie une invitation à la personne désignée.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f deinvite [pseudo]</TableCell>
                                        <TableCell>Annule l&apos;invitation envoyée à un joueur.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f join [faction]</TableCell>
                                        <TableCell>Accepte l&apos;invitation à rejoindre la faction
                                            désignée.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f leave</TableCell>
                                        <TableCell>Quitte la faction. Si vous êtes leader, vous devez faire /f
                                            disband.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f lead [pseudo]</TableCell>
                                        <TableCell>Promeut la personne désignée au rang de leader. Seul(e) un(e) leader
                                            peut utiliser cette commande.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f perm</TableCell>
                                        <TableCell>Ouvre le GUI de gestion des grades.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f kick [pseudo]</TableCell>
                                        <TableCell>Exclut la personne désignée de la faction.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f c f</TableCell>
                                        <TableCell>Permet d&apos;envoyer des messages dans le chat de faction depuis
                                            l&apos;onglet de chat général. Pour annuler, utilisez la commande /f c
                                            f.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f sethome [nom]</TableCell>
                                        <TableCell>Place un home de faction.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f delhome [nom]</TableCell>
                                        <TableCell>Supprime le home de faction désigné.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f home</TableCell>
                                        <TableCell>Téléporte au home de faction désigné.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f show [faction]</TableCell>
                                        <TableCell>Affiche le profil de la faction désignée.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f list</TableCell>
                                        <TableCell>Affiche dans le chat la liste des factions existantes.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f map</TableCell>
                                        <TableCell>Affiche dans le chat les chunks autour de vous et indique s&apos;ils
                                            sont claim ou non.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f map on</TableCell>
                                        <TableCell>Actualise l&apos;affichage des chunks dans le chat lorsque vous
                                            changez de chunk.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f map off</TableCell>
                                        <TableCell>Désactive l&apos;actualisation de l&apos;affichage des chunks dans le
                                            chat lorsque vous changez de chunk.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f showclaim</TableCell>
                                        <TableCell>Affiche la liste des claims avec leurs coordonnées, classés par
                                            ancienneté.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f claim [rayon]</TableCell>
                                        <TableCell>Claim les chunks autour de vous, dans le rayon défini.</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">/f unclaim [rayon]</TableCell>
                                        <TableCell>Unclaim les chunks autour de vous, dans le rayon défini.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

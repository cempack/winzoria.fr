import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {Castle, Crown, ShieldHalf, Star, Swords, Trophy} from "lucide-react";

export default function Ranks() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Tabs defaultValue="warrior" className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-1">
                    <TabsTrigger value="warrior">Guerrier</TabsTrigger>
                    <TabsTrigger value="knight">Chevalier</TabsTrigger>
                    <TabsTrigger value="sovereign">Souverain</TabsTrigger>
                    <TabsTrigger value="king">Roi</TabsTrigger>
                    <TabsTrigger value="emporor">Empereur</TabsTrigger>
                    <TabsTrigger value="legend">Légende</TabsTrigger>
                </TabsList>
                <TabsContent value="warrior">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le grade
                                Guerrier <Swords size={18}/></CardTitle>
                            <CardDescription>Ce grade vous est donné quand vous rejoignez le serveur.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Les avantages de ce grade sont :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Kit guerrier toutes les 4 heures</li>
                                <li className="text-sm">2 homes</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="knight">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le grade
                                Chevalier <ShieldHalf size={18}/></CardTitle>
                            <CardDescription>Pour obtenir ce grade il vous faudra payer 10 000 000$ et avoir le grade
                                Guerrier.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Les avantages de ce grade sont :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Kit chevalier toutes les 4 heures</li>
                                <li className="text-sm">3 homes</li>
                                <li className="text-sm">Accès à la commande /feed</li>
                                <li className="text-sm">Accès à la commande /top</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="sovereign">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le grade
                                Souverain <Star size={18}/></CardTitle>
                            <CardDescription>Pour obtenir ce grade il vous faudra payer 20 000 000$ et avoir le grade
                                Chevalier.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Les avantages de ce grade sont :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Accès aux commandes des grades antèrieurs</li>
                                <li className="text-sm">Kit souverain toutes les 4 heures</li>
                                <li className="text-sm">5 homes</li>
                                <li className="text-sm">Accès à la commande /near</li>
                                <li className="text-sm">Accès à la commande /invsee [Joueur]</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="king">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le grade
                                Roi <Crown size={18}/></CardTitle>
                            <CardDescription>Pour obtenir ce grade il vous faudra payer 45 000 000$ et avoir le grade
                                Souverain.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Les avantages de ce grade sont :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Accès aux commandes des grades antérieurs</li>
                                <li className="text-sm">Kit roi toutes les 4 heures</li>
                                <li className="text-sm">6 homes</li>
                                <li className="text-sm">Accès à la commande /craft</li>
                                <li className="text-sm">Accès à la commande /repair</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="emporor">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le grade
                                Empereur <Castle size={18}/></CardTitle>
                            <CardDescription>Pour obtenir ce grade il vous faudra payer 100 000 000$ et avoir le grade
                                Roi.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Les avantages de ce grade sont :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Accès aux commandes des grades antérieurs</li>
                                <li className="text-sm">Kit empereur toutes les 4 heures</li>
                                <li className="text-sm">8 homes</li>
                                <li className="text-sm">Accès à la commande /repairall</li>
                                <li className="text-sm">Accès à la commande /heal</li>
                                <li className="text-sm">Accès à la commande /back</li>
                                <li className="text-sm">Le Fly s&apos;active automatiquement à l&apos;entrée des
                                    claims
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="legend">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le grade
                                Légende <Trophy size={18}/></CardTitle>
                            <CardDescription>Pour obtenir ce grade il vous faudra payer 400 000 000$ et avoir le grade
                                Empereur.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Les avantages de ce grade sont :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Accès aux commandes des grades antérieurs</li>
                                <li className="text-sm">Kit légende toutes les 4 heures</li>
                                <li className="text-sm">10 homes</li>
                                <li className="text-sm">Votre pseudo devient Blanc</li>
                                <li className="text-sm">Le Fly s&apos;active automatiquement</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

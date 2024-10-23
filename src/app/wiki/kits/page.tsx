import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {Castle, Crown, ShieldHalf, Swords, Wheat} from "lucide-react";

export default function Ranks() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Tabs defaultValue="food" className="w-full">
                <TabsList className="grid w-full grid-cols-4 gap-1">
                    <TabsTrigger value="food">Nourriture</TabsTrigger>
                    <TabsTrigger value="warrior">Guerrier</TabsTrigger>
                    <TabsTrigger value="knight">Chevalier</TabsTrigger>
                    <TabsTrigger value="sovereign">Souverain</TabsTrigger>
                    <TabsTrigger value="king">Roi</TabsTrigger>
                    <TabsTrigger value="emporor">Empereur</TabsTrigger>
                    <TabsTrigger value="legend">Légende</TabsTrigger>
                    <TabsTrigger value="alchemist">Alchimiste</TabsTrigger>
                </TabsList>
                <TabsContent value="food">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Nourriture <Wheat size={18}/></CardTitle>
                            <CardDescription>Ce kit vous est accessible quand vous rejoignez le
                                serveur.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">Le kit Nourriture contient :</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">64 Pains</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="warrior">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Guerrier <Swords size={18}/></CardTitle>
                            <CardDescription>Ce kit vous est accessible quand vous rejoignez le
                                serveur.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">Le kit Nourriture Guerrier :</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Une armure complete avec une épée, pioche, hache et pelle le
                                    tout en fer.
                                </li>
                                <li className="text-sm">20 Torches</li>
                                <li className="text-sm">32 Pains</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="knight">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Chevalier <ShieldHalf size={18}/></CardTitle>
                            <CardDescription>Ce kit se débloque à ll&#39;achat de son grade.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Le kit Chevalier contient :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Une armure complete ( Protection 2, Solidité 1 ) avec une épée (
                                    Tranchant 2, Solidité 1 ) le tout en diamant.
                                </li>
                                <li className="text-sm">8 Pommes dl&#39;or</li>
                                <li className="text-sm">10 Carotte dorée</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="sovereign">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Souverain <ShieldHalf size={18}/></CardTitle>
                            <CardDescription>Ce kit se débloque à ll&#39;achat de son grade.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">
                                Le kit Souverain contient :
                            </div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Une armure complete ( Protection 3, Solidité 3 ) avec une épée (
                                    Tranchant 4, Solidité 3 ) le tout en diamant.
                                </li>
                                <li className="text-sm">16 Pommes dl&#39;or</li>
                                <li className="text-sm">32 Carotte dorée</li>
                                <li className="text-sm">8 Ender pearl</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="king">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Roi <Crown size={18}/></CardTitle>
                            <CardDescription>Ce kit se débloque à ll&#39;achat de son grade.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">Le kit Roi contient :</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Une armure complete ( Protection 4, Solidité 5 ) avec une épée (
                                    Tranchant 4, Solidité 5 ) le tout en diamant.
                                </li>
                                <li className="text-sm">Un Arc ( Puissance 3, Frappe 1, Solidité 5 )</li>
                                <li className="text-sm">Une Pioche ( Efficacité 6, Solidité 10, Fortune 4 )</li>
                                <li className="text-sm">32 Pommes dl&#39;or</li>
                                <li className="text-sm">64 Carotte dorée</li>
                                <li className="text-sm">8 Ender pearl</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="emporor">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Empereur <Castle size={18}/></CardTitle>
                            <CardDescription>Ce kit se débloque à ll&#39;achat de son grade.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">Le kit Empereur contient :</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Une armure complete ( Protection 5, Solidité 5 ) avec une épée (
                                    Tranchant 5, Solidité 6 ) le tout en diamant.
                                </li>
                                <li className="text-sm">Un Arc ( Puissance 5, Frappe 2, Solidité 5, Infinité 1 )</li>
                                <li className="text-sm">Une Pioche ( Efficacité 7, Solidité 15, Fortune 4 )</li>
                                <li className="text-sm">48 Pommes dl&#39;or</li>
                                <li className="text-sm">64 Carotte dorée</li>
                                <li className="text-sm">16 Ender pearl</li>
                                <li className="text-sm">2 Œuf de Creeper</li>
                                <li className="text-sm">192 Obsidienne</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="legend">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Légende <Castle size={18}/></CardTitle>
                            <CardDescription>Ce kit se débloque à ll&#39;achat de son grade.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">Le kit Légende contient :</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Deux armures completes ( Protection 5, Solidité 5 ) avec deux
                                    épées ( Tranchant 5, Solidité 7 ) le tout en diamant.
                                </li>
                                <li className="text-sm">Un Arc ( Puissance 5, Frappe 3, Solidité 6, Infinité 1 )</li>
                                <li className="text-sm">Une Pioche ( Efficacité 8, Solidité 15, Fortune 4 )</li>
                                <li className="text-sm">64 Pommes dl&#39;or</li>
                                <li className="text-sm">128 Carotte dorée</li>
                                <li className="text-sm">32 Ender pearl</li>
                                <li className="text-sm">6 Œuf de Creeper</li>
                                <li className="text-sm">384 Obsidienne</li>
                                <li className="text-sm">Un Crâne de Wither Squelette</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="alchemist">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">Le kit
                                Alchimiste <ShieldHalf size={18}/></CardTitle>
                            <CardDescription>Ce kit se débloque au palier 5 de la quête dl&#39;Alchimiste (/q en
                                jeu).</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-md font-semibold mb-2">Le kit Alchimiste contient :</div>
                            <ul className="list-disc list-inside space-y-1">
                                <li className="text-sm">Une Potion de régénération 2 (0:22)</li>
                                <li className="text-sm">Une Potion de régénération 1 (2:00)
                                </li>
                                <li className="text-sm">Une Potion de Force (3:00)
                                </li>
                                <li className="text-sm">Une Potion de vitesse (8:00)</li>
                                <li className="text-sm">Une Potion de vitesse 2 (1:30)</li>
                                <li className="text-sm">Deux Potion jetable de Soin 2</li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

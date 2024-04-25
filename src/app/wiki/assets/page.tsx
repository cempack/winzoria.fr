import {Card, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"

export default function Assets() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Tabs defaultValue="speed" className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-1">
                    <TabsTrigger value="speed">Vitesse</TabsTrigger>
                    <TabsTrigger value="resistance">Résistance</TabsTrigger>
                    <TabsTrigger value="fireResistance">Résistance au feu</TabsTrigger>
                    <TabsTrigger value="celerity">Célérité</TabsTrigger>
                    <TabsTrigger value="regeneration">Régénération</TabsTrigger>
                </TabsList>
                <TabsContent value="speed">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">L&apos;atout de Vitesse
                                :</CardTitle>
                            <CardDescription>Augmente la vitesse de déplacement de +20% par niveau.</CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="resistance">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">L&apos;atout de Résistance
                                :</CardTitle>
                            <CardDescription>Diminue les dégâts subis de -20%.</CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="fireResistance">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">L&apos;atout de Résistance au feu
                                :</CardTitle>
                            <CardDescription>Vous protège du feu et de la lave. Vous serez insensible à la chaleur, et
                                même un bain de lave ne vous fera aucun mal.</CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="celerity">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">L&apos;atout de Célérité
                                :</CardTitle>
                            <CardDescription>Augmente la vitesse de minage de +20% par niveau.</CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
                <TabsContent value="regeneration">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center gap-1">L&apos;atout de Régénération
                                :</CardTitle>
                            <CardDescription>Vous régénère de la vie très rapidement (1 coeur toutes les
                                5 secondes).</CardDescription>
                        </CardHeader>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

import {Card, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {PackageOpen, Sparkles, SquareAsterisk, Star} from "lucide-react";
import {Link} from "next-view-transitions";

export default function Wiki() {
    return (
        <div className="flex w-full flex-col">
            <h1 className="text-2xl font-bold mb-4">Bienvenue sur le wiki officiel de Winzoria.</h1>
            <div className="grid gap-6">
                <Link href="/wiki/commands">
                    <Card x-chunk="dashboard-04-chunk-1">
                        <CardHeader>
                            <div className="flex flex-row items-center gap-2">
                                <SquareAsterisk size={26}/>
                                <CardTitle className="text-xl">Les commandes</CardTitle>
                            </div>
                            <CardDescription>L&apos;ensemble des commandes auquel vous avez accès.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
                <Link href="/wiki/ranks">
                    <Card x-chunk="dashboard-04-chunk-2">
                        <CardHeader>
                            <div className="flex flex-row items-center gap-2">
                                <Star size={26}/>
                                <CardTitle className="text-xl">Les grades</CardTitle>
                            </div>
                            <CardDescription>L&apos;ensemble des grades ainsi que leurs permissions et
                                prix.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
                <Link href="/wiki/kits">
                    <Card x-chunk="dashboard-04-chunk-3">
                        <CardHeader>
                            <div className="flex flex-row items-center gap-2">
                                <PackageOpen size={26}/>
                                <CardTitle className="text-xl">Les kits</CardTitle>
                            </div>
                            <CardDescription>L&apos;ensemble des kits ainsi que leurs contenus et
                                moyen d&apos;obtention.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
                <Link href="/wiki/assets">
                    <Card x-chunk="dashboard-04-chunk-4">
                        <CardHeader>
                            <div className="flex flex-row items-center gap-2">
                                <Sparkles size={26}/>
                                <CardTitle className="text-xl">Les atouts</CardTitle>
                            </div>
                            <CardDescription>L&apos;ensemble des atouts ainsi que leurs avantages.</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

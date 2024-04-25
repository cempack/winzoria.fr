"use client"

import {Link} from "next-view-transitions";
import React from "react";
import {usePathname} from "next/navigation";
import {ArrowLeftCircle} from "lucide-react";
import {clsx} from "clsx";

export default function WikiLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    if (!pathname) return null;

    return (
        <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-col">
            <main
                className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <Link href="/wiki">
                        <h1 className="text-3xl font-semibold">Wiki</h1>
                    </Link>
                </div>
                <div
                    className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <nav className="grid gap-4 text-sm text-muted-foreground">
                        <Link href="/wiki/commands">
                            <p className={pathname === "/wiki/commands" ? "font-semibold text-primary" : ""}>
                                Commandes
                            </p>
                        </Link>
                        <Link href="/wiki/ranks">
                            <p className={pathname === "/wiki/ranks" ? "font-semibold text-primary" : ""}>
                                Grades
                            </p>
                        </Link>
                        <Link href="/wiki/kits">
                            <p className={pathname === "/wiki/kits" ? "font-semibold text-primary" : ""}>
                                Kits
                            </p>
                        </Link>
                        <Link href="/wiki/assets">
                            <p className={pathname === "/wiki/assets" ? "font-semibold text-primary" : ""}>
                                Atouts
                            </p>
                        </Link>
                        <Link className={clsx(
                            pathname !== "/wiki" ? "flex flex-row items-center gap-1" : "hidden",
                        )} href="/wiki">
                            <ArrowLeftCircle size={14}/>
                            <p>
                                Retour
                            </p>
                        </Link>
                    </nav>
                    {children}
                </div>
            </main>
        </div>
    );
}
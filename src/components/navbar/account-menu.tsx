"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {CircleUser} from "lucide-react";


export const AccountMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5"/>
                    <span className="sr-only">Basculer le menu utilisateur</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Paramètres</DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
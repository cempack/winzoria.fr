"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { useEffect, useState } from "react";

export const AccountMenu = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Fetch the session data from the API route
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/auth/session");
        const data = await response.json();
        setSession(data);
      } catch (error) {
        console.error("Failed to fetch session", error);
      }
    };

    fetchSession();
  }, []);

  // Function to handle sign-in redirection
  const signIn = () => {
    window.location.href = "/login";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">{session ? "Hey" : "aa"}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {session ? (
          <>
            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => (window.location.href = "/account/dashboard")}
            >
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => (window.location.href = "/account/settings")}
            >
              Paramètres
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => (window.location.href = "/api/auth/signout")}
            >
              Se déconnecter
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={signIn}>Se connecter</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import checkUsername from "@/lib/checkUsername";
import checkVoteWebsite from "@/lib/checkVote";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message:
        "Le nom d'utilisateur ne peut pas comporter moins de 2 caractères.",
    })
    .max(16, {
      message: "Le nom d'utilisateur ne peut pas dépasser 16 caractères.",
    }),
});

export function VoteForm() {
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [ip, setIp] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  const intervalRef = useRef<number | null>(null);
  const [isCheckingVote, setIsCheckingVote] = useState(false);

  useEffect(() => {
    async function fetchIp() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    }

    fetchIp();
  }, []);

  async function checkVote(website: string) {
    setIsCheckingVote(true);
    // Check if the vote was done
    const voteChecked = await checkVoteWebsite(
      website,
      ip,
      form.getValues().username
    );
    const hasVoted = voteChecked.hasVoted;
    const data = voteChecked.data;
    console.log(
      voteChecked,
      hasVoted,
      website,
      ip,
      voteChecked.timeUntilNextVote,
      data
    );
    const timeUntilNextVote = voteChecked.timeUntilNextVote;
    if (hasVoted) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      toast({
        title: "Merci pour votre vote !",
        description: `Prochain vote: ${timeUntilNextVote}`,
        variant: "default",
      });
    }
    setIsCheckingVote(false);
  }

  function handleButtonClick(url: string) {
    window.open(url, "_blank");
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => checkVote(url), 5000);
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const [status, result] = await checkUsername(data.username);
    if (status === "error" && result === "User does not exist") {
      toast({
        title:
          "Le nom d'utilisateur n'existe pas. Veuillez vérifier votre saisie.",
        variant: "destructive",
      });
    } else if (status === "error" && result === "An unknown error occurred") {
      toast({
        title: "Une erreur est survenue. Veuillez nous contacter.",
        variant: "destructive",
      });
    } else {
      setIsUsernameValid(true);
    }
  }

  return (
    <div>
      {!isUsernameValid ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom d&apos;utilisateur Minecraft</FormLabel>
                  <FormControl>
                    <Input placeholder="cempack" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Voter</Button>
          </form>
        </Form>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sites de vote</CardTitle>
            <CardDescription>
              Voici la liste des sites de vote sur lesquels vous pouvez voter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {/* <li>
                <Button
                  className={`flex flex-row items-center gap-1 ${
                    isCheckingVote ? "opacity-50" : ""
                  }`}
                  onClick={() =>
                    handleButtonClick("https://serveur-minecraft.com/3260")
                  }
                  disabled={isCheckingVote}
                >
                  serveur-minecraft.com <ArrowRight size={16} />
                </Button>
              </li> */}
              <li>
                <Button
                  className={`flex flex-row items-center gap-1 ${
                    isCheckingVote ? "opacity-50" : ""
                  }`}
                  onClick={() =>
                    handleButtonClick(
                      "https://serveur-prive.net/minecraft/winzoria-13681/vote"
                    )
                  }
                  disabled={isCheckingVote}
                >
                  serveur-prive.com <ArrowRight size={16} />
                </Button>
              </li>
              <li>
                <Button
                  className={`flex flex-row items-center gap-1 ${
                    isCheckingVote ? "opacity-50" : ""
                  }`}
                  onClick={() =>
                    handleButtonClick(
                      "https://www.liste-serveurs-minecraft.org/vote/?idc=206300"
                    )
                  }
                  disabled={isCheckingVote}
                >
                  liste-serveurs-minecraft.org <ArrowRight size={16} />
                </Button>
              </li>
              <li>
                <Button
                  className={`flex flex-row items-center gap-1 ${
                    isCheckingVote ? "opacity-50" : ""
                  }`}
                  onClick={() =>
                    handleButtonClick(
                      "https://www.serveursminecraft.org/serveur/6772/"
                    )
                  }
                  disabled={isCheckingVote}
                >
                  serveursminecraft.org <ArrowRight size={16} />
                </Button>
              </li>
              <li>
                <Button
                  className={`flex flex-row items-center gap-1 ${
                    isCheckingVote ? "opacity-50" : ""
                  }`}
                  onClick={() =>
                    handleButtonClick(
                      "https://www.liste-serveurs.fr/server-winzoria.723/vote"
                    )
                  }
                  disabled={isCheckingVote}
                >
                  liste-serveurs.fr <ArrowRight size={16} />
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

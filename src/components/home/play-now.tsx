"use client";

import { Copy, PlayIcon } from "lucide-react";

import { env } from "@/app/env";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "../ui/use-toast";

const ip = env.NEXT_PUBLIC_MC_SERVER_IP;

function useCopyIpToClipboard() {
  const { toast } = useToast();
  const copyIpToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      console.log("Adresse IP copiée dans le presse-papiers");
      toast({
        description: "Texte copié dans le presse-papiers !",
      });
    } catch (err) {
      console.error("Erreur lors de la copie de l'adresse IP :", err);
    }
  };

  return copyIpToClipboard;
}

export function PlayNow() {
  const copyIpToClipboard = useCopyIpToClipboard();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="landing">
          Jouer maintenant
          <PlayIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rejoindre le serveur</DialogTitle>
          <DialogDescription>
            Connectez-vous à notre serveur Minecraft en utilisant l&apos;adresse
            suivante.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={ip} readOnly />
          </div>
          <Button
            onClick={copyIpToClipboard}
            type="submit"
            size="sm"
            className="px-3"
          >
            <span className="sr-only">Copier</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fermer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

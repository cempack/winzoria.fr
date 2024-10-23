import { TiktokLogoIcon } from "@/components/home/icons/tiktok";
import { Button } from "@/components/ui/button";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://twitter.com/winzoria"
              className="text-white hover:text-slate-400 transition"
            >
              <TwitterLogoIcon />
            </a>
            <a
              target="_blank"
              href="https://discord.com/invite/z5y4A6u3G2"
              className="text-white hover:text-slate-400 transition"
            >
              <DiscordLogoIcon />
            </a>
            <a
              target="_blank"
              href="https://tiktok.com/@winzoria"
              className="text-white hover:text-slate-400 transition"
            >
              <TiktokLogoIcon
                size={14}
                className="fill-white hover:fill-slate-400 transition"
              />
            </a>
          </div>
          <p className="text-white text-center">
            &copy; {currentYear} Winzoria. Tous droits réservés.
          </p>
          <p className="text-white text-center">
            Développé avec ❤️ par{" "}
            <a
              className="underline underline-offset-2"
              href="https://elliotmoreau.fr"
              target="_blank"
            >
              cempack
            </a>
          </p>
          <a
            href="https://www.leetchi.com/fr/c/serveur-winzoria"
            target="_blank"
          >
            <Button variant="default">Faire un don</Button>
          </a>
        </div>
      </div>
    </footer>
  );
}

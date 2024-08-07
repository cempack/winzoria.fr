import {
  BookOpenText,
  Home,
  Menu,
  Newspaper,
  Scale,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "next-view-transitions";

import { AccountMenu } from "@/components/navbar/account-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "../ui/logo";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 w-full">
        <nav className="hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:gap-5 lg:text-base w-full">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold lg:text-base"
          >
            <Logo size={40} />
            <span className="sr-only">Winzoria</span>
          </Link>
          <Link
            href="/"
            className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home size={18} />
            Accueil
          </Link>
          <Link
            href="/blog"
            className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Newspaper size={18} />
            Blog
          </Link>
          <Link
            href="/wiki"
            className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <BookOpenText size={18} />
            Wiki
          </Link>
          <Link
            href="/rules"
            className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Scale size={18} />
            Règlement
          </Link>
          <Link
            href="/vote"
            className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Sparkles size={18} />
            Vote
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Activer le menu de navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <SheetTrigger asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Logo size={40} />
                  <span className="sr-only"></span>
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href="/"
                  className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home size={18} />
                  Accueil
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href="/blog"
                  className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Newspaper size={18} />
                  Blog
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href="/wiki"
                  className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <BookOpenText size={18} />
                  Wiki
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href="/rules"
                  className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Scale size={18} />
                  Règlement
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  href="/vote"
                  className="flex flex-row items-center gap-[6px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Sparkles size={18} />
                  Vote
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild></SheetTrigger>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:w-full md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <AccountMenu />
          <ModeToggle />
        </div>
      </header>
    </div>
  );
};

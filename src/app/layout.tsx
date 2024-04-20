import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { fontSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winzoria",
  description: "✨ Le site officiel de votre serveur préféré ✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

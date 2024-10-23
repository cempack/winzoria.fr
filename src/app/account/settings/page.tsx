import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cog, Lock, User2 } from "lucide-react";

export default function AccountSettings() {
  return (
    <main className="h-screen text-gray-900 dark:text-gray-50 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-7xl">
          <CardHeader>
            <CardTitle className="text-2xl">Paramètres du compte</CardTitle>
            <CardDescription>
              Modifiez les paramètres de votre compte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Exemple de paramètres</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="flex items-center">
                    <User2 className="w-5 h-5 mr-2" />
                    <span>Profil</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    <span>Mot de passe</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <Cog className="w-5 h-5 mr-2" />
                    <span>Préférences</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Button className="mr-4">Enregistrer</Button>
              <Button variant="secondary">Annuler</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

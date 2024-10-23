import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignOut } from "@/components/account/sign-out";

export default function SignOutPage() {
  return (
    <main className="h-screen text-gray-900 dark:text-gray-50 font-sans">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">
              Êtes-vous sûr de vouloir vous déconnecter ?
            </CardTitle>
            <CardDescription>
              Vous pouvez vous reconnecter à tout moment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignOut />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

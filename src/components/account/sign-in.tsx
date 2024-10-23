import { auth, signIn } from "@/../auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export default async function SignIn() {
  // If signed in, redirect to the home page
  const session = await auth();
  if (session) {
    revalidatePath("/");
    redirect("/");
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
        // Redirect to the home page after signing in
        window.location.reload();
      }}
    >
      <Button type="submit" variant="outline" className="w-full">
        Se connecter avec Google
      </Button>
    </form>
  );
}

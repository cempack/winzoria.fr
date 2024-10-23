import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signOut } from "../../../auth";
import { Button } from "../ui/button";

export async function SignOut() {
  // If signed out, redirect to the home page
  const session = await auth();
  if (!session) {
    revalidatePath("/");
    redirect("/");
  }

  return (
    <form
      action={async (formData) => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="outline" className="w-full">
        Se déconnecter
      </Button>
    </form>
  );
}

import { getUserByUsername } from "@/db/queries/select";
import { updateVote } from "@/db/queries/update";
import { NextRequest, NextResponse } from "next/server";

// Predefined token for verification
const token = "your_predefined_token";

export async function GET(request: NextRequest) {
  // Extract query parameters
  const { searchParams } = new URL(request.url);
  const player = searchParams.get("player");
  const providedToken = searchParams.get("token");

  // Ensure the player argument is provided
  if (!player) {
    return new NextResponse(
      JSON.stringify({ error: "Player argument is required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Verify the token
  if (providedToken !== token) {
    return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Fetch the player's votes from the database
    const votes = await getUserByUsername(player);

    // Check if the player has a number greater than 0
    if (votes.length > 0 && votes[0].votes > 0) {
      // Decrease the player's votes by 1
      await updateVote(player, {
        votes: votes[0].votes - 1,
      });

      return new NextResponse(JSON.stringify({ result: true }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new NextResponse(JSON.stringify({ result: false }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching or updating votes in the database:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to fetch or update votes in the database",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

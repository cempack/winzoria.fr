import { getBestVoters } from "@/db/queries/select";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const bestVoters = await getBestVoters();
    return new NextResponse(JSON.stringify({ bestVoters }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching best voters in the database:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to fetch best voters in the database",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

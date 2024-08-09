import { resetBestVoters } from "@/db/queries/delete";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  resetBestVoters();
  console.log("Best voters have been reset");
  return NextResponse.json({ ok: true });
}

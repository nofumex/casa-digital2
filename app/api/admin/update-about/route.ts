import { NextRequest, NextResponse } from "next/server";
import { verifyAdminAuth, createReadOnlyResponse } from "../_helpers";

export async function POST(req: NextRequest) {
  if (!verifyAdminAuth(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return createReadOnlyResponse("/public/cms/about.json");
}

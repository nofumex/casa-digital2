import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-admin-token") || req.nextUrl.searchParams.get("token");
  if (token !== ADMIN_PASSWORD) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.text();
  const targetDir = path.join(process.cwd(), "public", "cms");
  const target = path.join(targetDir, "contacts.json");
  try {
    await mkdir(targetDir, { recursive: true });
    const parsed = body ? JSON.parse(body) : {};
    await writeFile(target, JSON.stringify(parsed, null, 2), { encoding: "utf-8" });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}








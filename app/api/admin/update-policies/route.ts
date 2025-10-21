import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-admin-token") || req.nextUrl.searchParams.get("token");
  if (token !== ADMIN_PASSWORD) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json().catch(() => ({} as any));
  const { privacy = "", terms = "", cookies = "" } = body || {};
  const dir = path.join(process.cwd(), "public", "cms");
  try {
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "privacy.md"), privacy, "utf-8");
    await writeFile(path.join(dir, "terms.md"), terms, "utf-8");
    await writeFile(path.join(dir, "cookies.md"), cookies, "utf-8");
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}








import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

function unauthorized() {
  return new NextResponse("Unauthorized", { status: 401 });
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-admin-token") || req.nextUrl.searchParams.get("token");
  if (token !== ADMIN_PASSWORD) return unauthorized();

  const body = await req.text();
  const json = body || "[]";
  const targetDir = path.join(process.cwd(), "public", "cms");
  const target = path.join(targetDir, "blog.json");
  try {
    await mkdir(targetDir, { recursive: true });
    // ensure valid JSON
    JSON.parse(json);
    await writeFile(target, json, { encoding: "utf-8" });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 });
  }
}








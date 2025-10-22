import { NextRequest, NextResponse } from "next/server";
import { verifyAdminAuth } from "../_helpers";

export async function POST(req: NextRequest) {
  if (!verifyAdminAuth(req)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.json({ 
    ok: false, 
    error: "File uploads are not supported on Vercel serverless functions.",
    instruction: "Для загрузки файлов используйте Vercel Blob Storage или загружайте файлы напрямую в /public через GitHub.",
    alternatives: [
      "1. Загружайте файлы в /public через GitHub",
      "2. Используйте Vercel Blob Storage (требует настройки)",
      "3. Используйте внешнее хранилище (Cloudinary, S3, etc.)"
    ]
  }, { status: 501 });
}

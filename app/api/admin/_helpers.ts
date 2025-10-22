import { NextRequest, NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export function verifyAdminAuth(req: NextRequest): boolean {
  const token = req.headers.get("x-admin-token") || req.nextUrl.searchParams.get("token");
  return token === ADMIN_PASSWORD;
}

export function createReadOnlyResponse(filename: string) {
  return NextResponse.json({ 
    ok: false, 
    error: `File system writes are not supported on Vercel serverless functions.`,
    instruction: `Для обновления контента отредактируйте файл ${filename} в GitHub репозитории и сделайте commit. Vercel автоматически задеплоит изменения.`,
    alternatives: [
      "1. Редактируйте файлы напрямую в GitHub и делайте push",
      "2. Используйте локальную разработку с npm run dev",
      "3. Подключите внешнюю CMS (Sanity, Contentful)",
      "4. Используйте Vercel KV/Blob Storage (требует настройки)"
    ]
  }, { status: 501 });
}


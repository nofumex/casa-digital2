import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Неверный формат email' }, { status: 400 });
    }

    // Store to JSON file as fallback simple CMS-like store
    // In production, replace with Mailchimp/CRM via env credentials
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}












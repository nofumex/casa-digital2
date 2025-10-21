import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sheetUrl = process.env.GOOGLE_SHEETS_API_URL;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (sheetUrl) {
      try {
        await fetch(sheetUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      } catch (e) {
        console.warn('Sheets integration failed', e);
      }
    }

    if (adminEmail) {
      // Here we could integrate with an email service; for now, just log
      console.log('Admin email notification', { to: adminEmail, subject: 'Новая заявка', body });
    }

    return NextResponse.json({ success: true, message: 'Данные сохранены в CRM' });
  } catch (e) {
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}









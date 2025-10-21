import { NextResponse } from 'next/server';

export async function GET() {
  const base = 'https://www.casadigital.example';
  const urls = ['/', '/about', '/services', '/portfolio', '/blog', '/contacts'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map((u) => `<url><loc>${base}${u}</loc></url>`).join('') +
    `</urlset>`;
  return new NextResponse(body, { headers: { 'Content-Type': 'application/xml' } });
}












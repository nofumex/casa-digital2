import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { FluidBackground } from '@/components/FluidBackground';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TelegramFloat } from '@/components/TelegramFloat';
// removed NewsletterModal popup
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const viewport = {
  themeColor: '#E6E6FA',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.casadigital.example'),
  title: {
    default: 'Casa Digital — Агентство маркетинга и веб‑разработки',
    template: '%s — Casa Digital'
  },
  description:
    'Casa Digital: разработка сайтов, SMM, реклама, рост продаж и автоматизация бизнеса. Помогаем МСБ пройти цифровую трансформацию.',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512x512.png', type: 'image/png', sizes: '512x512' }
    ]
  },
  openGraph: {
    type: 'website',
    title: 'Casa Digital',
    description:
      'Разработка, маркетинг и автоматизация для малого и среднего бизнеса',
    url: 'https://www.casadigital.example'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Digital',
    description: 'Разработка, маркетинг и автоматизация для малого и среднего бизнеса',
    images: ['/icons/icon-512x512.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <script
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });`
            }}
          />
        )}
        <FluidBackground />
        <Header />
        <main className="relative z-10 min-h-[60vh] pt-24">{children}</main>
        <Footer />
        <TelegramFloat />
        <CookieBanner />
      </body>
    </html>
  );
}


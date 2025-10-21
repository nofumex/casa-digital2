import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-slate-200/60 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <img src="/icons/logo.png" alt="Логотип Casa Digital" className="w-10 h-10 rounded-lg -mt-1" />
            <span className="text-2xl font-bold">Casa Digital</span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-slate-600">
            Мы создаем высококонверсионные сайты и автоматизируем рабочие процессы. Ваш результат — наш приоритет.
          </p>
          <div className="mt-4 text-sm text-slate-600">
            <div>Email: <a className="underline" href="mailto:hello@casadigital.ru">hello@casadigital.ru</a></div>
            <div>Телефон: <a className="underline" href="tel:+79964287975">+7 (996) 428-79-75</a></div>
            <div>Время работы: Пн–Пт: 10:00–19:00 (МСК)</div>
          </div>
        </div>

          <div>
            <div className="text-sm font-semibold">Услуги</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><Link className="hover:underline" href="/services/web-development">Веб-разработка</Link></li>
              <li><Link className="hover:underline" href="/services/smm">SMM и контент</Link></li>
              <li><Link className="hover:underline" href="/services/ppc">Контекстная реклама</Link></li>
              <li><Link className="hover:underline" href="/services/automation">Автоматизация</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Компания</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><Link className="hover:underline" href="/about">О нас</Link></li>
              
              <li><Link className="hover:underline" href="/portfolio">Портфолио</Link></li>
              <li><Link className="hover:underline" href="/pricing">Цены</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Ресурсы</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><a className="hover:underline" href="/blog">Блог</a></li>
              <li><a className="hover:underline" href="/resources">Материалы</a></li>
              <li><a className="hover:underline" href="/faq">FAQ</a></li>
              <li><a className="hover:underline" href="/support">Поддержка</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="text-sm text-slate-600">
            <span className="mr-3"><Link className="hover:underline" href="/privacy">Политика конфиденциальности</Link></span>
            <span className="mr-3"><Link className="hover:underline" href="/terms">Условия использования</Link></span>
            <span><Link className="hover:underline" href="/cookies">Политика cookies</Link></span>
          </div>
          <div className="flex items-center gap-4 md:justify-end text-sm">
            <a aria-label="Telegram" href="https://t.me/CasaAgency" target="_blank" rel="noreferrer" className="hover:opacity-80">Telegram (@CasaAgency)</a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Casa Digital. Все права защищены.</div>
          <div>Разработано с заботой о производительности</div>
        </div>
      </div>
    </footer>
  );
}








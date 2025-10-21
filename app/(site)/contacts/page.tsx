import { LeadForm } from '@/components/forms/LeadForm';

export const metadata = { title: 'Контакты' };

export default async function ContactsPage() {
  let contacts: any = { phones: [], emails: [], telegram: '', hours: '', address: '' };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/contacts.json`, { cache: 'no-store' });
    if (res.ok) contacts = await res.json();
  } catch {}
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Контакты</h1>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Напишите нам</h2>
          <LeadForm />
        </div>
        <div className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
          <h2 className="text-lg font-medium">Как нас найти</h2>
          <p className="mt-2 text-slate-600">
            {contacts.emails?.length ? <>Email: {contacts.emails[0]}<br/></> : null}
            {contacts.phones?.length ? <>Тел.: {contacts.phones[0]}<br/></> : null}
            {contacts.telegram ? <>Telegram: {contacts.telegram}<br/></> : null}
            {contacts.address ? <>Адрес: {contacts.address}</> : null}
          </p>
          <div className="mt-4 aspect-[16/10] overflow-hidden rounded-3xl">
            <iframe
              title="Google Maps"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.617196978319!2d30.3141305!3d59.9387326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696311c6d5fdf39%3A0x9c0c1d9a2c8e!2sNevsky%20Prospekt!5e0!3m2!1sen!2sru!4v1680000000000"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}













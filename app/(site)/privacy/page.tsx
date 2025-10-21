export const metadata = { 
  title: 'Политика конфиденциальности - Casa Digital',
  description: 'Узнайте, как Casa Digital собирает, использует и защищает ваши персональные данные. Наша политика конфиденциальности объясняет ваши права и нашу практику обработки данных.'
};

export default async function PrivacyPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/privacy.md`, { cache: 'no-store' }).catch(()=>null);
  const md = res && res.ok ? await res.text() : '# Политика конфиденциальности\n\nСодержимое будет добавлено.';
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: md.replace(/\n/g,'<br/>') }} />
      </div>
    </div>
  );
}






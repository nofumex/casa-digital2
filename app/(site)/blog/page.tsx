export const metadata = { title: 'Блог' };

export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/blog.json`, { cache: 'no-store' }).catch(() => null);
  const posts: { slug: string; title: string; excerpt?: string }[] = res && res.ok ? await res.json() : [];
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Блог</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-[2rem] bg-white/70 p-6 ring-1 ring-black/5">
            <h2 className="text-xl font-medium">{p.title}</h2>
            {p.excerpt && <p className="mt-2 text-slate-600">{p.excerpt}</p>}
          </a>
        ))}
        {posts.length === 0 && (
          <div className="text-slate-500 text-sm">Постов пока нет.</div>
        )}
      </div>
    </div>
  );
}













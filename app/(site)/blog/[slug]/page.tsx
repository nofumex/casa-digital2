import { getPost } from '@/lib/cms';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const post = await getPost(params.slug);
  return { title: post?.title || 'Статья' };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) return <div className="mx-auto max-w-3xl px-4 py-12">Не найдено</div>;
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{post.title}</h1>
      <p className="mt-3 text-slate-600">{post.excerpt}</p>
      {post.content && (
        <div className="prose prose-slate mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      )}
    </article>
  );
}













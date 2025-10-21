import { createClient } from '@sanity/client';

type Post = { slug: string; title: string; excerpt: string; content?: string };
type Case = { id: string; title: string; result?: string; image?: string };

const sanityProjectId = process.env.SANITY_PROJECT_ID;
const sanityDataset = process.env.SANITY_DATASET;
const sanityToken = process.env.SANITY_API_TOKEN;

const sanity = sanityProjectId && sanityDataset ? createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: '2024-10-01',
  token: sanityToken,
  useCdn: true
}) : null;

export async function getPosts(): Promise<Post[]> {
  if (sanity) {
    return await sanity.fetch(`*[_type == "post"]{ "slug": slug.current, title, excerpt } | order(_createdAt desc)`);
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/blog.json`, { cache: 'no-store' }).catch(() => null);
  if (!res || !res.ok) return [];
  return await res.json();
}

export async function getPost(slug: string): Promise<Post | null> {
  if (sanity) {
    const data = await sanity.fetch(`*[_type == "post" && slug.current == $slug][0]{ "slug": slug.current, title, excerpt, content }`, { slug });
    return data || null;
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/${slug}.json`, { cache: 'no-store' }).catch(() => null);
  if (!res || !res.ok) return null;
  return await res.json();
}

export async function getCases(): Promise<Case[]> {
  if (sanity) {
    return await sanity.fetch(`*[_type == "case"]{ _id, title, result, "id": _id } | order(_createdAt desc)`);
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/cms/portfolio.json`, { cache: 'no-store' }).catch(() => null);
  if (!res || !res.ok) return [];
  return await res.json();
}













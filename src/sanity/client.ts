import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'z2w2n5ig',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-27',
});

export async function getProjects() {
  const query = `*[_type == "project"] {
    title,
    "slug": slug.current,
    subtitle,
    role,
    description,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url
  }`;
  
  return await client.fetch(query);
}

export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    subtitle,
    role,
    description,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url
  }`;
  
  return await client.fetch(query, { slug });
}

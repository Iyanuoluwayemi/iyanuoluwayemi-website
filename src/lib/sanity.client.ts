import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'z2w2n5ig',
  dataset: 'production',
  apiVersion: '2024-03-25', // Required by modern sanity clients, use current date
  useCdn: false,
});

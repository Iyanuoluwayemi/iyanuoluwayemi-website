import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectSchema } from './src/sanity/projectSchema';

export default defineConfig({
  name: 'default',
  title: 'Iyanuoluwa Portfolio',

  projectId: 'z2w2n5ig', // Replace with your actual Sanity project ID
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],

  schema: {
    types: [projectSchema],
  },
});

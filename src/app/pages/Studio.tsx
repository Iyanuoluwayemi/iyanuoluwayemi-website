import React from 'react';
import { Studio } from 'sanity';
import config from '../../../sanity.config';

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      {/* Since this is a Vite app (React Router) instead of Next.js, we use the raw `Studio` component from `sanity` instead of `next-sanity/studio`'s `NextStudio` which expects Next.js routing. */}
      <Studio config={config} />
    </div>
  );
}

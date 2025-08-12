'use client';

import { trpc } from '@/utils/trpc';

export function Greeting() {
  const { data } = trpc.hello.useQuery(
    { text: 'New user' },
    {
      trpc: { ssr: true },
    }
  );

  if (!data) return <div>Loading...</div>;

  return <h1>{data.text}</h1>;
}

'use client';

import { trpc } from '@/utils/trpc';

export function Greeting() {
  const { data } = trpc.hello.useQuery(
    { text: 'New user' },
    {
      trpc: { ssr: true },
    }
  );

  console.log('Render location:', typeof window === 'undefined' ? 'SERVER' : 'CLIENT');
  console.log('Data:', data?.text); // Данные должны быть на сервере

  if (!data) return <div>Loading...</div>;

  return <h1>{data.text}</h1>;
}

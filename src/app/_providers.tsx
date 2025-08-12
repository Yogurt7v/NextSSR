// app/_trpc/Provider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import type { AppRouter } from '@/server/trpc/routers/index';

export const trpc = createTRPCReact<AppRouter>();

export function TRPCReactProvider({
  children,
  headers,
}: {
  children: React.ReactNode;
  headers?: Headers;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: '/api/trpc',
          headers() {
            const heads = new Map(headers);
            heads.set('x-trpc-source', 'react');
            return Object.fromEntries(heads);
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

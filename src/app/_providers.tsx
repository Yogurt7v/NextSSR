'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import type { AppRouter } from '@/server/trpc/routers/index';

export const trpc = createTRPCReact<AppRouter>();

export function TRPCReactProvider({
  children,
  headersPromise,
}: {
  children: React.ReactNode;
  headersPromise?: Promise<Headers>;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: '/api/trpc',
          async headers() {
            const headers = new Headers();
            headers.set('x-trpc-source', 'react');

            if (headersPromise) {
              const awaitedHeaders = await headersPromise;
              awaitedHeaders.forEach((value, key) => {
                headers.set(key, value);
              });
            }

            return Object.fromEntries(headers);
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

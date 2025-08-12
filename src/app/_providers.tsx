'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import superjson from 'superjson';
import type { AppRouter } from '@/server/trpc/routers/index';

export const trpc = createTRPCReact<AppRouter>();

export function TRPCReactProvider({
  children,
  headersPromise,
}: {
  children: React.ReactNode;
  headersPromise?: Promise<Headers>;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: '/api/trpc',
          async headers() {
            const headers = new Headers();
            headers.set('x-trpc-source', 'react');

            try {
              if (headersPromise) {
                const awaitedHeaders = await headersPromise;
                // Более безопасное преобразование заголовков
                awaitedHeaders.forEach((value, key) => {
                  if (value && !headers.has(key)) {
                    headers.set(key, value);
                  }
                });
              }
            } catch (error) {
              console.error('Failed to set headers:', error);
            }

            // Альтернативный способ преобразования Headers
            const headersObject: Record<string, string> = {};
            headers.forEach((value, key) => {
              headersObject[key] = value;
            });

            return headersObject;
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

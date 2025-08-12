import { createContext } from '@/server/trpc/context';
import { appRouter } from '../../../../server/trpc/routers';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) => {
  console.log('✅ SSR Request to:', req.url); // Должен появиться в терминале Next.js
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST };

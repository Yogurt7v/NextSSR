import { z } from 'zod';
import { router, publicProcedure } from '../index';

export const appRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() })).query((opts) => {
    return {
      text: `Hello ${opts.input.text ?? 'world'}`,
    };
  }),

  getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // Здесь может быть запрос к БД или внешнему API
      return {
        id: input.id,
        name: 'Random User',
        email: 'john@example.com',
      };
    }),
});

export type AppRouter = typeof appRouter;

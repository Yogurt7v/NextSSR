import { z } from 'zod';
import { router, publicProcedure } from '../index';

export const appRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() })).query((opts) => {
    return {
      text: `Hello ${opts.input.text ?? 'world'}`,
    };
  }),
});

export type AppRouter = typeof appRouter;

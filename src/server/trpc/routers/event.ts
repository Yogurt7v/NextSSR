import z from 'zod';
import { router, publicProcedure } from '../index';
import prisma from '@/server/db';

export const eventRouter = router({
  findMany: publicProcedure.query(async () => {
    const data = await prisma.user.findMany();
    return data;
  }),

  findOne: publicProcedure
    .input(z.object({ name: z.string().min(1, 'Введите имя') }))
    .query(async ({ input }) => {
      const user = await prisma.user.findFirst({
        where: {
          name: input.name,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });
      if (!user) {
        throw new Error('User not found');
      }

      return user;
    }),
});

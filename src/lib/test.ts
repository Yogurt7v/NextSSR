import { PrismaClient } from '@/generated/prisma';

const db = new PrismaClient();

const main = async () => {
  const user = await db.user.create({
    data: {
      email: 'newuser121@mainModule.ru',
      name: 'Alex121',
      password: '23456',
      events: {
        create: {
          title: 'Катание на велике',
          description: 'Бессмысленные покатушки',
          date: new Date(),
        },
      },
    },
    select: {
      id: true,
      name: true,
      events: {
        select: {
          id: true,
          date: true,
        },
      },
    },
  });
  console.log(user);
};

main().then(() => db.$disconnect());

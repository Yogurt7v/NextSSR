import prisma from '@/server/db';

export async function getAllUsers() {
  const data = await prisma.user.findMany();
  return data;
}

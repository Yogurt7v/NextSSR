import { PrismaClient } from '@prisma/client/extension';

export async function createContext() {
  return {
    PrismaClient, // Добавляем Prisma в контекст
  };
}

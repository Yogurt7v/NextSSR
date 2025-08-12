'use client';

import { trpc } from '@/utils/trpc';
import { useParams } from 'next/navigation';

export function UserProfile() {
  const num = useParams();

  // Используем новую процедуру
  const userQuery = trpc.getUser.useQuery({ id: `${num.id ? num.id : 14}` });

  if (userQuery.isLoading) return <div>Loading...</div>;
  if (userQuery.error) return <div>Error: {userQuery.error.message}</div>;

  return (
    <>
      <h2>User Details</h2>
      <p>ID: {userQuery.data?.id}</p>
      <p>Name: {userQuery.data?.name}</p>
      <p>Email: {userQuery.data?.email}</p>
    </>
  );
}

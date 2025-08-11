import { getAllUsers } from '@/lib/users';
import { Suspense } from 'react';
import { Greeting } from './Greeting';

export default async function Home() {
  const data = await getAllUsers();

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        {data.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </Suspense>
      <div>
        <Greeting />
      </div>
    </>
  );
}

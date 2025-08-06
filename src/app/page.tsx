import { getAllUsers } from '@/lib/users';
import { Suspense } from 'react';

export default async function Home() {
  const data = await getAllUsers();

  return (
    <>
      {/* <div>Test</div> */}
      <Suspense fallback={<div>Loading</div>}>
        {data.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </Suspense>
    </>
  );
}

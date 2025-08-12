import { getAllUsers } from '@/lib/users';
import { Suspense } from 'react';
import { Greeting } from './Greeting';
import { EventCard } from '@/components/EventCard';

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
        <EventCard
          date="now"
          description="Будет весело"
          location="лучшее место на земле"
          title="Встреча"
        />
      </div>
    </>
  );
}

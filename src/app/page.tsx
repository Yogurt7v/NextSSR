import { notFound } from 'next/navigation';
import { GetJoke } from './lib/joke';
// import { GetServerSideProps } from 'next';

export default async function Home() {
  const joke = await GetJoke();
  return (
    <>
      <div>Test</div>
      <p>{joke.joke}</p>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const id = ctx.query.id;
//   const res = await fetch(`http://..../${id}`);
//   const data = await res.json();

// if (data.message === 'not found') {
//   return {
//     notFound: true,
//   };
// }
//   return {
//     props: {
//       singleData: data,
//     },
//   };
// };
// не работает в app router. устаревшая технология

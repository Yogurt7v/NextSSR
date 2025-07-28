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
//   return {
//     props: {
//       a: 1,
//       b: 2,
//     },
//   };
// }; не работает в app router. устаревшая технология

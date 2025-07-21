import { GetJoke } from './lib/joke';

export default async function Home() {
  const joke = await GetJoke();
  return (
    <>
      <div>Test</div>
      <p>{joke.joke}</p>
    </>
  );
}

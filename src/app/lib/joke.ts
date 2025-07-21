export async function GetJoke() {
  const res = fetch('https://v2.jokeapi.dev/joke/Programming?type=single').then(
    (response) => response.json()
  );
  return res;
}

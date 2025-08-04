export async function generateMetadata() {
  const randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(randomNumber);
  const product = await fetch(
    `https://jsonplaceholder.typicode.com/users/${randomNumber}`
  ).then((res) => res.json());

  return {
    title: product.name,
  };
}
export default function ProductCars() {
  return <div>Cars</div>;
}

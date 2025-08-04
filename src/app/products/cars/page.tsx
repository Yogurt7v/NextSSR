export async function generateMetadata() {
  const product = await fetch(`https://jsonplaceholder.typicode.com/users/1`).then(
    (res) => res.json()
  );

  return {
    title: product.name,
  };
}
export default function ProductCars() {
  return <div>Cars</div>;
}

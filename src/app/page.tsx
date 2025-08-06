import prisma from '@/server/db';

export default async function Home() {
  const data = await prisma.user.findMany();

  return (
    <>
      {/* <div>Test</div> */}
      {data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </>
  );
}

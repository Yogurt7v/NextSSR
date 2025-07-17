// const getServerSideProps = () => {
//   return { props: { name: 'boeing' } };
// };
'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ProductName() {
  const pathname = usePathname();
  const search = useSearchParams();
  const links = pathname.split('/');
  console.log(search);
  return (
    <div>
      Product Name
      {links.map((item, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <Link href={''}>{item}</Link>
        </div>
      ))}
    </div>
  );
}

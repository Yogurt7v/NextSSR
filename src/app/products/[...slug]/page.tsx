'use client';
import { usePathname } from 'next/navigation';

export default function ProductName() {
  const pathname = usePathname();
  console.log(pathname.split('/'));
  return <div>Product Name</div>;
}

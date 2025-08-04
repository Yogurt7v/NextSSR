import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Metadata test',
  description: 'simple import metadata',
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>This is Products Layout</div>
      {children}
    </>
  );
}

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

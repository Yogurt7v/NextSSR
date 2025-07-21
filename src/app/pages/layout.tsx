export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>This is Pages Layout</div>
      {children}
    </>
  );
}

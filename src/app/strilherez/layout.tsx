import { HeaderStrilherezh } from "../ui/components/header/HeaderStrilherezh";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderStrilherezh />
      <>{children}</>
    </>
  );
}

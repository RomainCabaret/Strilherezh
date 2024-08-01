import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strilherezh",
  description: "....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Strilherezh</title>
      </head>
      <body>
        <main className="bg-slate-600">{children}</main>
      </body>
    </html>
  );
}

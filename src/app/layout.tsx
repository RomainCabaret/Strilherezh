import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Footer } from "./ui/components/footer/Footer";
import { Header } from "./ui/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strilherezh",
  description:
    "Découvrez la Distillerie Strilherezh au cœur de la Bretagne, où tradition et innovation se mêlent pour créer des cidres, vins et whiskies d'exception. Fondée par une famille passionnée, cette distillerie célèbre le terroir et le savoir-faire bretons, offrant des produits de haute qualité qui incarnent l'excellence locale. Chaque bouteille invite à un voyage sensoriel unique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <title>Strilherezh</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

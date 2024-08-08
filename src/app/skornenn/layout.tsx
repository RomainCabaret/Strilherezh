import type { Metadata } from "next";
import Head from "next/head";
import "../globals.css";
import { HeaderSkornenn } from "../ui/components/header/HeaderSkornenn";

export const metadata: Metadata = {
  title: "Skornenn",
  description:
    "Découvrez la Distillerie Strilherezh au cœur de la Bretagne, où tradition et innovation se mêlent pour créer des cidres, vins et whiskies d'exception. Fondée par une famille passionnée, cette distillerie célèbre le terroir et le savoir-faire bretons, offrant des produits de haute qualité qui incarnent l'excellence locale. Chaque bouteille invite à un voyage sensoriel unique.",
};

export default function skornennLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Head>
        <title>Skornenn</title>
      </Head>
      <HeaderSkornenn />
      {children}
    </div>
  );
}

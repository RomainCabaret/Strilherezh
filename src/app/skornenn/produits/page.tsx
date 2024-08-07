import { HeaderSkornenn } from "@/app/ui/components/header/HeaderSkornenn";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import Image from "next/image";

export default function NosProduitsPage() {
  return (
    <div>
      <HeaderSkornenn />
      {/* --------  */}

      <div className="relative w-full h-[700px] max-xl:h-[600px] max-lg:h-[580px] max-md:h-[500px] max-sm:h-[400px] max-sx:h-[400px] skornenn-bg">
        <Image
          src="/img/skornenn/cidres-placeholder.jfif"
          alt="fond de présentation d'alcool breton"
          className="w-full h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <Typography
            font="outfit"
            variant="h2"
            color="gold"
            className="text-center max-sm:text-[25px] leading-5"
          >
            Nos cidres
          </Typography>
          <Typography
            font="outfit"
            variant="h1"
            color="white"
            className="text-center max-sm:text-[50px] "
          >
            {"SKORNENN"}
          </Typography>
        </div>
      </div>
      {/* --------  */}
    </div>
  );
}

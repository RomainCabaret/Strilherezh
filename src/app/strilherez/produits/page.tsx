"use client";

import { Filter } from "@/app/ui/components/drawer/Filter";
import { HeaderStrilherezh } from "@/app/ui/components/header/HeaderStrilherezh";
import { SellCard } from "@/app/ui/components/sellCard/SellCard";
import { ArrowIcon } from "@/app/ui/design-system/svg/ArrowIcon";
import { FilterIcon } from "@/app/ui/design-system/svg/FilterIcon";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function StrilherezhProduitsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navBarRef = useRef<HTMLDivElement | null>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navBarRef.current &&
      !navBarRef.current.contains(event.target as Node)
    ) {
      closeDrawer();
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  const underlineAnimationBlack =
    "bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";
  const underlineAnimationWhite =
    "bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";

  return (
    <>
      <HeaderStrilherezh />
      {/* --------  */}

      <div className="relative w-full h-[700px] max-xl:h-[600px] max-lg:h-[580px] max-md:h-[500px] max-sm:h-[400px] max-sx:h-[400px]">
        <Image
          src="/img/alcool-breton-bg.png"
          alt="fond de présentation d'alcool breton"
          className="w-full h-full object-cover brightness-50"
          layout="fill"
        />
        <div className="absolute z-10 flex justify-center items-center ml-[40px] pt-[25px] ">
          <Link
            href={"/"}
            className="!bg-[#F4F4F4] rounded-full text-center p-[1px] mt-1 mr-[10px]"
          >
            <ArrowIcon
              direction="left"
              className="w-[25px] h-[25px] hover:-translate-x-1 animate"
            />
          </Link>

          <div className="group transition-all duration-300 ease-in-out mr-[5px]">
            <Link
              href={"/"}
              className={clsx(
                "text-white text-[14px] font-light tracking-[0.7px] font-quicksand",
                underlineAnimationWhite
              )}
            >
              Skornenn
            </Link>
          </div>
          <div className="mr-[5px]">
            <Typography
              font="quicksand"
              className="text-white text-[14px] font-light tracking-[0.7px]"
            >
              /
            </Typography>
          </div>
          <div className="group transition-all duration-300 ease-in-out mr-[5px]">
            <Link
              href={"/strilherez/produits"}
              className={clsx(
                "text-white text-[14px] font-light tracking-[0.7px] font-quicksand",
                underlineAnimationWhite
              )}
            >
              Nos produits
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Typography
            font="outfit"
            variant="h2"
            color="gold"
            className="text-center max-sm:text-[25px] leading-5"
          >
            STRILHEREZH
          </Typography>
          <Typography
            font="outfit"
            variant="h1"
            color="white"
            className="text-center max-sm:text-[50px] "
          >
            {"L'ALCOOL BRETON"}
          </Typography>
        </div>
      </div>
      {/* --------  */}

      <div className="w-full flex h-[50px] justify-between items-center px-[40px] max-sm:px-[20px]">
        <div>
          <Typography
            font="outfit"
            className="text-[#AAAAAA] text-[18px] tracking-[0.8px] max-sm:text-[14px] max-xs:text-[12px]"
          >
            16 Résultat(s) Trouvé(s)
          </Typography>
        </div>
        <button
          className="group transition-all duration-300 ease-in-out flex gap-2"
          onClick={toggleDrawer}
        >
          <Typography
            font="outfit"
            className={clsx(
              "tracking-[0.8px] text-[#505050] font-medium max-xs:text-[14px]",
              underlineAnimationBlack
            )}
          >
            Filtres
          </Typography>
          <FilterIcon />
        </button>
      </div>

      {/* --------  */}

      <div className="px-[40px] gap-6 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-3 max-xs:grid-cols-2 max-sm:px-[20px] max-sm:gap-3 bg-[#FCFCFC] pt-[40px] pb-10">
        <SellCard />
        <SellCard />
        <SellCard />
        <SellCard />

        <SellCard />
        <SellCard />
        <SellCard />
        <SellCard />

        <SellCard />
        <SellCard />
        <SellCard />
        <SellCard />

        <SellCard />
        <SellCard />
        <SellCard />
        <SellCard />
      </div>
      {/* --------  */}
      <Filter isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

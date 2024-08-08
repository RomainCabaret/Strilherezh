"use client";

import { CommentCard } from "@/app/ui/components/card/CommentCard";
import { SellCard } from "@/app/ui/components/card/SellCard";
import { DrawerAmounts } from "@/app/ui/components/drawer/DrawerAmounts";
import { Button } from "@/app/ui/design-system/button/Button";
import { ArrowIcon } from "@/app/ui/design-system/svg/ArrowIcon";
import { ChevronIcon } from "@/app/ui/design-system/svg/ChevronIcon";
import { StarIcon } from "@/app/ui/design-system/svg/StarIcon";
import { Typography } from "@/app/ui/design-system/typography/Typography";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// export const metadata = {
//   title: "Détails du Produit",
//   description: "Détails spécifiques du produit.",
// };

// const fetchProduct = async (id) => {
//   const { data, error } = await supabase
//     .from('products') // Assurez-vous que le nom de votre table est correct
//     .select('*')
//     .eq('id', id)
//     .single();
//   if (error) {
//     console.error('Error fetching product:', error);
//     return null;
//   }
//   return data;
// };

// Définir l'interface pour les paramètres de la page
interface PageParams {
  params: {
    "nom]#[id": string;
  };
}

// Définir l'interface pour le produit
interface Product {
  id: string;
  name: string;
  description: string;
  [key: string]: any;
}

export default function StrilherezProductPage({ params }: PageParams) {
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

  // const paramValue = params["nom]#[id"];
  // const [nom, id] = paramValue.split("#");
  const underlineAnimationBlack =
    "bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";
  const underlineAnimationWhite =
    "bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out";

  return (
    <>
      <div className="w-full py-[15px] px-[40px]">
        <div className="flex items-center">
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
                "text-[14px] font-light tracking-[0.7px] font-quicksand",
                underlineAnimationBlack
              )}
            >
              Strilherez
            </Link>
          </div>
          <div className="mr-[5px]">
            <Typography
              font="quicksand"
              className="text-[14px] font-light tracking-[0.7px]"
            >
              /
            </Typography>
          </div>
          <div className="group transition-all duration-300 ease-in-out mr-[5px]">
            <Link
              href={"/strilherez/produits"}
              className={clsx(
                "text-[14px] font-light tracking-[0.7px] font-quicksand",
                underlineAnimationBlack
              )}
            >
              Nos produits
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[600px] bg-[#F4F4F4] px-[40px] grid grid-cols-3 max-md:grid-cols-1 max-md:h-[1300px]">
        <div className="flex flex-col justify-center">
          <div>
            <Typography
              font="outfit"
              variant="h1"
              className="!text-[30px] mb-[20px] !tracking-normal"
            >
              Vin rouge breton
            </Typography>
          </div>
          <div className="pb-[40px]">
            <Typography
              font="quicksand"
              variant="p"
              className="!text-[14px] text-[#AAA]"
            >
              {
                "Le cidre breton parfumé est une déclinaison du célèbre cidre de Bretagne, reconnu pour son caractère authentique et ses méthodes de production traditionnelles. Enrichi d'arômes naturels, ce cidre offre une expérience gustative unique en combinant les saveurs classiques"
              }
            </Typography>
          </div>
          <div>
            <Typography
              font="quicksand"
              className="text-[20px] font-semibold mb-[15px]"
            >
              Type de vin
            </Typography>
            <div className="flex gap-[15px] h-[75px]">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="vin"
                  className="hidden peer"
                  defaultChecked
                />
                <div className="relative rounded-full h-[75px] w-[75px] flex items-center justify-center peer-checked:border-yellow-500 border-2 border-transparent duration-300">
                  <div className="relative rounded-full h-[71px] w-[71px] p-[2px] bg-white">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src="/img/wine/red-wine.jfif"
                        alt="Vin 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </label>

              <label className="cursor-pointer">
                <input type="radio" name="vin" className="hidden peer" />
                <div className="relative rounded-full h-[75px] w-[75px] flex items-center justify-center peer-checked:border-yellow-500 border-2 border-transparent duration-300">
                  <div className="relative rounded-full h-[71px] w-[71px] p-[2px] bg-white">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src="/img/strilherezh/white_wine.jfif"
                        alt="Vin 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </label>

              <label className="cursor-pointer">
                <input type="radio" name="vin" className="hidden peer" />
                <div className="relative rounded-full h-[75px] w-[75px] flex items-center justify-center peer-checked:border-yellow-500 border-2 border-transparent duration-300">
                  <div className="relative rounded-full h-[71px] w-[71px] p-[2px] bg-white">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src="/img/strilherezh/pink_wine.jfif"
                        alt="Vin 3"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="relative p-11 max-md:row-start-1 max-md:h-[450px] ">
          <Image
            src={"/img/strilherezh/blank-wine.png"}
            alt="représentation du produit"
            className=""
            layout="fill"
          />
        </div>

        <div className="flex flex-col justify-center max-sm:mt-[25px]">
          <div className="flex flex-col">
            <Typography font="outfit" className="mb-[15px] !tracking-normal">
              Volume
            </Typography>
            <div className="flex gap-[15px] h-[50px] mb-[25px]">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="volume"
                  value="25CL"
                  className="hidden peer"
                  defaultChecked
                />
                <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] bg-white text-black  border-black border-[1px] peer-checked:border-gold peer-checked:bg-gold peer-checked:text-white font-quattrocento text-[15px] font-medium animate">
                  25CL
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="volume"
                  value="33CL"
                  className="hidden peer"
                />
                <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] bg-white text-black border-[1px] border-black peer-checked:border-gold  peer-checked:bg-gold peer-checked:text-white font-quattrocento text-[15px] font-medium animate">
                  33CL
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="volume"
                  value="50CL"
                  className="hidden peer"
                />
                <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] bg-white text-black border-[1px] border-black peer-checked:border-gold peer-checked:bg-gold peer-checked:text-white font-quattrocento text-[15px] font-medium animate">
                  50CL
                </div>
              </label>
            </div>
          </div>
          <div className="border-t bt-[#E3E3E3] py-[25px] flex justify-between">
            <Typography
              font="quicksand"
              variant="p"
              className="!text-[14px] text-[#AAA] font-semibold"
            >
              {"Note du produit"}
            </Typography>
            <div className="flex gap-[8px]">
              <StarIcon fill />
              <StarIcon fill />
              <StarIcon fill />
              <StarIcon fill />
              <StarIcon />
            </div>
          </div>
          <div className="border-t bt-[#E3E3E3] py-[25px] flex justify-between">
            <Typography
              font="quicksand"
              variant="p"
              className="!text-[14px] text-[#AAA] font-semibold"
            >
              {"Prix"}
            </Typography>
            <div className="flex">
              <Typography
                font="quattrocento"
                variant="p"
                className="!text-[14px] text-[#AAA] font-bold"
              >
                1.70€
              </Typography>
            </div>
          </div>
          <div className="py-[25px] flex flex-col gap-[20px]">
            <button
              className="w-[158px] h-[40px] flex justify-between items-center bg-white group gap-[15px]"
              onClick={toggleDrawer}
            >
              <div className="text-end ml-[15px]">
                <Typography
                  font="outfit"
                  color="gray"
                  className="font-light text-end w-[40px]"
                >
                  Quantité
                </Typography>
              </div>
              <div className="w-[25px] ml-[15px]">
                <Typography
                  font="outfit"
                  color="gray"
                  className="font-light w-[40px] mr-[14px]"
                >
                  12
                </Typography>
              </div>
              <div className="transition-colors duration-300 group-hover:bg-gray-200 rounded h-full flex items-center w-10 justify-center">
                <ChevronIcon color="gray" />
              </div>
            </button>
            <Button variant="tertiary" className="py-[12px]">
              Tertiary button
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 px-[40px] py-[80px] gap-[40px]">
        <div>
          <Typography
            font="outfit"
            className="text-[20px] font-semibold mb-[20px]"
          >
            Présentation
          </Typography>
          <Typography
            color="gray"
            font="quicksand"
            className="!text-[14px] font-normal"
          >{`Le cidre breton parfumé est une déclinaison du célèbre cidre de Bretagne, reconnu pour son caractère authentique et ses méthodes de production traditionnelles. Enrichi d'arômes naturels, ce cidre offre une expérience gustative unique en combinant les saveurs classiques des pommes bretonnes avec des notes de fruits ou d'épices, telles que la framboise, la vanille, ou le gingembre. Fabriqué dans le respect des savoir-faire locaux, le cidre breton parfumé se distingue par sa qualité et son goût raffiné. Il est parfait pour accompagner les crêpes et galettes bretonnes, ou simplement pour être savouré en apéritif. Avec une teneur en alcool modérée et une palette de saveurs variée, il séduit les amateurs de boissons artisanales à la recherche d'authenticité et d'originalité.`}</Typography>
        </div>
        <div>
          <Typography
            font="outfit"
            className="text-[20px] font-semibold mb-[20px]"
          >
            Composition du produit
          </Typography>
          <div className="flex justify-between items-center border-t border-[#E3E3E3] py-[20px]">
            <Typography font="quicksand" className="!text-[14px] font-semibold">
              Contenant
            </Typography>
            <Typography
              color="gray"
              font="quicksand"
              className="!text-[14px] font-normal"
            >
              Canette de 33CL
            </Typography>
          </div>
          <div className="flex justify-between items-center border-t border-[#E3E3E3] py-[20px]">
            <Typography font="quicksand" className="!text-[14px] font-semibold">
              Ingrédients
            </Typography>
            <Typography
              color="gray"
              font="quicksand"
              className="!text-[14px] font-normal w-1/2 text-end"
            >
              80% Pommes BIO, 10% Oranges sanguine BIO, 5% Eau, 3% Sucre, 0.1%
              Conservateurs
            </Typography>
          </div>
          <div className="flex justify-between items-center border-t border-[#E3E3E3] py-[20px]">
            <Typography font="quicksand" className="!text-[14px] font-semibold">
              Catégorie
            </Typography>
            <Typography
              color="gray"
              font="quicksand"
              className="!text-[14px] font-normal"
            >
              Produit
            </Typography>
          </div>
          <div className="flex justify-between items-center border-t border-[#E3E3E3] py-[20px]">
            <Typography font="quicksand" className="!text-[14px] font-semibold">
              Catégorie
            </Typography>
            <Typography
              color="gray"
              font="quicksand"
              className="!text-[14px] font-normal"
            >
              Produit
            </Typography>
          </div>
        </div>
      </div>
      <div className="px-[40px] pb-[40px]">
        <Typography font="outfit" className="text-[20px] font-semibold">
          Avis client
        </Typography>
      </div>
      <div className="bg-gold h-[481px] p-[40px] max-sm:px-[20px] mb-[80px] grid grid-cols-4 max-xl:grid-cols-3  max-lg:grid-cols-2 max-md:grid-cols-1 gap-[25px] max-xs:h-[580px]">
        <CommentCard
          className="max-md:m-auto"
          title="Titre de l’avis"
          content="Lorem ipsum dolor sit amet consectetur. Vitae bibendum auctor pellentesque ultrices tincidunt amet. Arcu urna congue tortor orci accumsan volutpat. Vitae faucibus urna ut lorem nisl risus sed integer. Et nisl suspendisse ornare laoreet auctor semper. Amet a risus ut in sit scelerisque varius faucibus. Molestie turpis vestibulum maecenas fermentum dictum. In sit iaculis quis commodo. Eu dui odio sed fermentum quis suscipit egestas scelerisque sed. Non at congue eu adipiscing quis interdum nibh vitae at."
        />
        <CommentCard
          className="max-md:hidden"
          title="Titre de l’avis"
          content="Lorem ipsum dolor sit amet consectetur. Vitae bibendum auctor pellentesque ultrices tincidunt amet. Arcu urna congue tortor orci accumsan volutpat. Vitae faucibus urna ut lorem nisl risus sed integer. Et nisl suspendisse ornare laoreet auctor semper. Amet a risus ut in sit scelerisque varius faucibus."
        />
        <CommentCard
          className="max-lg:hidden"
          title="Titre de l’avis"
          content="Lorem ipsum dolor sit amet consectetur. Vitae bibendum auctor pellentesque ultrices tincidunt amet. Arcu urna congue tortor orci accumsan volutpat. Vitae faucibus urna ut lorem nisl risus sed integer. Et nisl suspendisse ornare laoreet auctor semper. Amet a risus ut in sit scelerisque varius faucibus. Molestie turpis vestibulum maecenas fermentum dictum. In sit iaculis quis commodo. Eu dui odio sed fermentum quis suscipit egestas scelerisque sed. Non at congue eu adipiscing quis interdum nibh vitae at."
        />
        <CommentCard
          className="max-xl:hidden"
          title="Titre de l’avis"
          content="Lorem ipsum dolor sit amet consectetur. Vitae bibendum auctor pellentesque ultrices tincidunt amet. Arcu urna congue tortor orci accumsan volutpat. Vitae faucibus urna ut lorem nisl risus sed integer. Et nisl suspendisse ornare laoreet auctor semper. Amet a risus ut in sit scelerisque varius faucibus."
        />
      </div>
      <div className="px-[40px] max-sm:px-[20px]">
        <Typography font="outfit" className="text-[20px] font-semibold">
          Produits similaires
        </Typography>
      </div>
      <div className="px-[40px] gap-6 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-3 max-xs:grid-cols-2 max-sm:px-[20px] max-sm:gap-3 bg-[#FCFCFC] pt-[40px] pb-10">
        <SellCard />
        <SellCard />
        <SellCard className="max-md:hidden max-sm:block" />
        <SellCard className="max-lg:hidden max-sm:block" />

        <SellCard className="hidden max-sm:block" />
        <SellCard className="hidden max-sm:block" />
      </div>
      {<DrawerAmounts isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />}
    </>
  );
}

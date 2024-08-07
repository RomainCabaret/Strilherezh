import Image from "next/image";
import Carousel from "../ui/components/carrousel/Carrousel";
import { HeaderSkornenn } from "../ui/components/header/HeaderSkornenn";
import { SellCard } from "../ui/components/sellCard/SellCard";
import { Button } from "../ui/design-system/button/Button";
import { Typography } from "../ui/design-system/typography/Typography";

export default function skornennPage() {
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
          <Typography
            font="quicksand"
            variant="p"
            color="white"
            className="text-[18px] text-center max-sm:text-[12px] font-light"
          >
            {"l'Authenticité de la Bretagne. Pomme après Pomme."}
          </Typography>
        </div>
      </div>
      {/* --------  */}

      <div className="relative w-full h-[100px] flex flex-col justify-center items-center bg-[#003D75] max-sm:h-[50px]">
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="w-[506px] max-xl:w-[396px] max-lg:w-[263px] max-md:w-[180px] max-sm:w-[75px] h-full">
            <Image
              src="/img/skornenn/ice-bg.png"
              alt="fond de présentation d'alcool breton"
              className="w-full h-full object-cover rotate-180"
              width={606}
              height={100}
            />
          </div>
          <Typography
            variant="h2"
            color="black"
            className="!text-[29px] text-white tracking-wide font-normal max-sm:!text-[20px]"
            font="quattrocento"
          >
            Nouveautés
          </Typography>
          <div className="w-[506px] max-xl:w-[396px] max-lg:w-[263px] max-md:w-[180px] max-sm:w-[75px] h-full">
            <Image
              src="/img/skornenn/ice-bg.png"
              alt="fond de présentation d'alcool breton"
              className="w-full h-full object-cover"
              width={606}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* --------  */}

      <div className="px-[40px] py-10 gap-6 grid grid-cols-4 grid-rows-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-3 max-xs:grid-cols-2 max-xs:grid-flow-row-4 max-sm:px-[20px] max-sm:gap-3 ">
        <SellCard favorie={true} />
        <SellCard />
        <SellCard />
        <SellCard />

        <SellCard className="max-md:hidden max-sm:block max-xs:block" />
        <SellCard className="max-md:hidden max-sm:block max-xs:block" />
        <SellCard className="max-lg:hidden max-xs:block" />
        <SellCard className="max-lg:hidden max-xs:block" />
      </div>
      {/* --------  */}

      <div className="relative w-full h-[100px] flex flex-col justify-center items-center bg-[#003D75] max-sm:h-[50px]">
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="w-[506px] max-xl:w-[396px] max-lg:w-[263px] max-md:w-[180px] max-sm:w-[75px] h-full">
            <Image
              src="/img/skornenn/ice-bg.png"
              alt="fond de présentation d'alcool breton"
              className="w-full h-full object-cover rotate-180"
              width={606}
              height={100}
            />
          </div>
          <Typography
            variant="h2"
            color="black"
            className="!text-[29px] text-white tracking-wide font-normal max-sm:!text-[20px]"
            font="quattrocento"
          >
            A découvrir
          </Typography>
          <div className="w-[506px] max-xl:w-[396px] max-lg:w-[263px] max-md:w-[180px] max-sm:w-[75px] h-full">
            <Image
              src="/img/skornenn/ice-bg.png"
              alt="fond de présentation d'alcool breton"
              className="w-full h-full object-cover"
              width={606}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* --------  */}

      <Carousel className="h-[1000px] max-xl:h-[800px] max-lg:h-[600px] max-md:h-[625px] max-sm:h-[400px]" />

      {/* --------  */}

      <div className="relative w-full h-[1000px] max-xl:h-[800px] max-md:h-[700px] max-sm:h-[726px] max-xs:h-[924px]">
        <Image
          src="/img/skornenn/history-bg.jfif"
          alt="Phare surplombant les cotes bretonne"
          className="w-full h-full object-cover brightness-50"
          layout="fill"
        />
        <div className="relative flex flex-col justify-center w-full h-full py-[180px] px-[130px] max-lg:px-[40px] max-lg:py-[130px] max-sm:py-[150px] max-sm:px-[20px]">
          <div className="flex-col justify-center w-[830px] max-xl:w-[590px] max-lg:w-[510px] max-md:w-full">
            <Typography
              variant="h4"
              font="outfit"
              className="text-[40px] mb-[20px] tracking-[2px] font-medium max-sm:text-[30px]"
              color="white"
            >
              Notre histoire
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[15px] max-sm:text-[14px]"
              color="white"
            >
              {`Au cœur de la Bretagne, terre de légendes et de traditions, la distillerie Skornenn se distingue par son engagement à produire des cidres d'exception. Fondée par des passionnés du terroir breton, Skornenn allie savoir-faire ancestral et innovation moderne pour offrir une gamme de cidres doux et parfumés, disponibles avec et sans alcool, en canette et en bouteille.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[15px] max-sm:text-[14px]"
              color="white"
            >
              {`Les vergers de Skornenn, situés dans les vallons verdoyants de la Bretagne, bénéficient d'un climat tempéré idéal pour la culture des pommes à cidre. Chaque pomme est sélectionnée pour sa qualité et son goût unique, garantissant ainsi un cidre authentique et savoureux.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[40px] max-sm:text-[14px]"
              color="white"
            >
              {`À Skornenn, la production du cidre est un véritable art. Les pommes, récoltées à la main, sont pressées selon des méthodes traditionnelles pour en extraire le meilleur jus. La fermentation est réalisée lentement, permettant de développer des arômes riches et complexes. Cette attention portée à chaque étape de la production assure un cidre doux et parfumé, reflet du terroir breton.`}
            </Typography>
            <Button
              variant="primary"
              skornenn
              className="text-[16px] py-[10px] px-[40px] w-[267px] max-sm:w-full"
            >
              Découvrir notre histoire
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[1000px] max-xl:h-[800px] max-md:h-[700px] max-sm:h-[726px] max-xs:h-[924px]">
        <Image
          src="/img/skornenn/product-bg.jfif"
          alt="Phare surplombant les cotes bretonne"
          className="w-full h-full object-cover brightness-50"
          layout="fill"
        />
        <div className="relative flex flex-col justify-center items-end w-full h-full py-[180px] px-[130px] max-lg:px-[40px] max-lg:py-[130px] max-sm:py-[150px] max-sm:px-[20px]">
          <div className="flex-col justify-center w-[830px] max-xl:w-[590px] max-lg:w-[510px] max-md:w-full">
            <Typography
              variant="h4"
              font="outfit"
              className="text-[40px] mb-[20px] tracking-[2px] font-medium max-sm:text-[30px] text-end"
              color="white"
            >
              Nos produits
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[15px] max-sm:text-[14px] text-end"
              color="white"
            >
              {`•  Skornenn propose une gamme diversifiée de cidres pour répondre à toutes les envies :`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[15px] max-sm:text-[14px] text-end"
              color="white"
            >
              {`•  Cidre nature : Un cidre délicatement sucré, parfait pour accompagner les moments de détente. Sa douceur naturelle et ses arômes fruités en font une boisson rafraîchissante et agréable.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[15px] max-sm:text-[14px] text-end"
              color="white"
            >
              {`•  Cidre Parfumé : Enrichi d'essences naturelles, ce cidre offre une explosion de saveurs en bouche. Chaque gorgée révèle des notes subtiles et harmonieuses, faisant de chaque dégustation une expérience sensorielle unique.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] max-sm:text-[14px] mb-[40px] text-end"
              color="white"
            >
              {`• Cidre Sans Alcool : Pour ceux qui souhaitent profiter des saveurs du cidre sans les effets de l'alcool, Skornenn propose une version désalcoolisée, tout aussi savoureuse et aromatique.`}
            </Typography>
            <div className="flex flex-col gap-[20px] items-end">
              <Button
                variant="primary"
                skornenn
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right "
              >
                Nos cidres natures
              </Button>
              <Button
                variant="primary"
                skornenn
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right"
              >
                Nos cidres parfumés
              </Button>
              <Button
                variant="primary"
                skornenn
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right"
              >
                Nos cidres sans alcool
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100px] flex flex-col justify-center items-center bg-[#003D75] max-sm:h-[50px]">
        <div className="absolute inset-0 flex items-center justify-between">
          <div className="w-[506px] max-xl:w-[396px] max-lg:w-[263px] max-md:w-[180px] max-sm:w-[75px] h-full">
            <Image
              src="/img/skornenn/ice-bg.png"
              alt="fond de présentation d'alcool breton"
              className="w-full h-full object-cover rotate-180"
              width={606}
              height={100}
            />
          </div>
          <Typography
            variant="h2"
            color="black"
            className="!text-[29px] text-white tracking-wide font-normal max-sm:!text-[20px]"
            font="quattrocento"
          >
            Titre catégorie
          </Typography>
          <div className="w-[506px] max-xl:w-[396px] max-lg:w-[263px] max-md:w-[180px] max-sm:w-[75px] h-full">
            <Image
              src="/img/skornenn/ice-bg.png"
              alt="fond de présentation d'alcool breton"
              className="w-full h-full object-cover"
              width={606}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* --------  */}

      <div className="px-[40px] py-10 gap-6 grid grid-cols-4 grid-rows-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-3 max-xs:grid-cols-2 max-xs:grid-flow-row-4 max-sm:px-[20px] max-sm:gap-3 ">
        <SellCard favorie={true} />
        <SellCard />
        <SellCard />
        <SellCard />

        <SellCard className="max-md:hidden max-sm:block max-xs:block" />
        <SellCard className="max-md:hidden max-sm:block max-xs:block" />
        <SellCard className="max-lg:hidden max-xs:block" />
        <SellCard className="max-lg:hidden max-xs:block" />
      </div>

      {/* --------  */}
    </div>
  );
}

import Image from "next/image";
import { CategoryCard } from "./ui/components/category/CategoryCard";
import { Header } from "./ui/components/header/Header";
import { HeaderStrilherezh } from "./ui/components/header/HeaderStrilherezh";
import { SellCard } from "./ui/components/sellCard/SellCard";
import { Button } from "./ui/design-system/button/Button";
import { Typography } from "./ui/design-system/typography/Typography";
import { Footer } from "./ui/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderStrilherezh />

      {/* --------  */}

      <div className="relative w-full h-[700px] max-xl:h-[600px] max-lg:h-[580px] max-md:h-[500px] max-sm:h-[400px] max-sx:h-[400px]">
        <Image
          src="/img/alcool-breton-bg.png"
          alt="fond de présentation d'alcool breton"
          className="w-full h-full object-cover brightness-50"
          layout="fill"
        />
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
          <Typography
            font="quicksand"
            variant="p"
            color="white"
            className="text-[18px] text-center max-sm:text-[12px] font-normal	"
          >
            {"L'Essence de la Bretagne en Chaque goutte."}
          </Typography>
        </div>
      </div>
      {/* --------  */}

      <div className="w-full h-[180px] bg-[#F4F4F4] flex flex-col justify-center items-center max-xl:h-[140px] max-lg:h-[140px] max-md:h-[140px] max-sm:h-[105px] max-sx:h-[105px]">
        <Typography
          variant="h2"
          color="black"
          className="text-[29px] tracking-wide font-normal max-sm:text-[20px]"
          font="outfit"
        >
          Nos maisons
        </Typography>
        <Typography
          variant="p"
          color="gray"
          className="text-[16px] tracking-normal font-normal text-gray max-sm:text-[12px]"
          font="quicksand"
        >
          Découvrez nos différentes produits
        </Typography>
      </div>
      {/* --------  */}

      <div className="w-full h-[700px] grid grid-cols-4 grid-rows-1 gap-0 max-xl:h-[650px] max-lg:h-[550px] max-k:h-[920px] max-sm:h-[1000px] max-k:grid-cols-1 max-k:grid-rows-4 max-xs:h-[800px]">
        <CategoryCard
          placeholderPath="/img/whiskeys-placeholder.png"
          title="Nos whiskys"
          content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          est."
        />
        <CategoryCard
          placeholderPath="/img/cidres-placeholder.png"
          title="Nos cidres"
          content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          est."
        />
        <CategoryCard
          placeholderPath="/img/wine-placeholder.png"
          title="Nos vins"
          content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          est."
        />
        <CategoryCard
          placeholderPath="/img/exclus-placeholder.png"
          title="Nos exclus"
          content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          est."
        />
      </div>

      {/* --------  */}
      <div>
        <Typography
          color="black"
          className="text-[30px] text-center mt-[100px] mb-[80px] max-xl:mt-[80px] max-xl:mb-[60px] max-sm:my-[40px]"
        >
          Nouveautés
        </Typography>
      </div>
      <div className="px-[40px] gap-6 grid grid-cols-4 grid-rows-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-3 max-xs:grid-cols-2 max-xs:grid-flow-row-4 max-sm:px-[20px] max-sm:gap-3 ">
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
      <div className="mt-5 relative w-full h-[1000px] max-xl:h-[800px] max-md:h-[700px] max-sm:h-[726px] max-xs:h-[924px]">
        <Image
          src="/img/history-bg.png"
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
              {`Située au cœur de la Bretagne, la Distillerie Strilherezh est un
            joyau de la tradition et de l'innovation, mêlant l'art ancestral de
            la production de cidre, de vin et de whisky. Fondée par une famille
            passionnée par les richesses de leur terre natale, cette distillerie
            incarne l'excellence bretonne à travers une diversité de produits
            qui célèbrent le terroir et le savoir-faire local.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[15px] max-sm:text-[14px]"
              color="white"
            >
              {`À la Distillerie Strilherezh, chaque produit est le fruit d'un savoir-faire unique et d'une attention méticuleuse portée à chaque étape de la production.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] mb-[40px] max-sm:text-[14px]"
              color="white"
            >
              {`La Distillerie Strilherezh est un symbole de l'excellence bretonne, une fusion harmonieuse de tradition et d'innovation. En célébrant le cidre, le vin et le whisky, elle offre une gamme de produits qui capturent l'essence de la Bretagne et la passion de ceux qui la façonnent. Chaque bouteille est une invitation à un voyage sensoriel au cœur de la culture bretonne, un hommage à la richesse de son terroir et à la maîtrise de ses artisans.`}
            </Typography>
            <Button
              variant="primary"
              className="text-[16px] py-[10px] px-[40px] w-[267px] max-sm:w-full"
            >
              Découvrir notre histoire
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[1000px] max-xl:h-[800px] max-md:h-[700px] max-sm:h-[726px] max-xs:h-[924px]">
        <Image
          src="/img/product-bg.png"
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
              {`À la Distillerie du Triskel, chaque produit est le fruit d'un savoir-faire unique et d'une attention méticuleuse portée à chaque étape de la production.`}
            </Typography>
            <Typography
              variant="p"
              font="quicksand"
              className="text-[16px] max-sm:text-[14px] mb-[40px] text-end"
              color="white"
            >
              {`La Distillerie du Triskel est profondément engagée dans une démarche écoresponsable. Les vergers, vignobles et champs de céréales sont cultivés sans pesticides chimiques, en respectant les principes de l'agriculture biologique. La distillerie utilise des énergies renouvelables et met en œuvre des pratiques de production durable pour minimiser son impact environnemental.`}
            </Typography>
            <div className="flex flex-col gap-[20px] items-end">
              <Button
                variant="primary"
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right "
              >
                Découvrir nos whisky
              </Button>
              <Button
                variant="primary"
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right"
              >
                Découvrir nos cidres
              </Button>
              <Button
                variant="primary"
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right"
              >
                Découvrir nos vins
              </Button>
              <Button
                variant="primary"
                className="text-[16px] py-[10px] px-[40px] w-[300px] max-sm:w-full max-sm:text-center text-right"
              >
                Découvrir nos exclusivités
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

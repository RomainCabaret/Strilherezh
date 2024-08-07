"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../../design-system/svg/ArrowIcon";
import { ChevronIcon } from "../../design-system/svg/ChevronIcon";
import { CrossIcon } from "../../design-system/svg/CrossIcon";
import { StrilherezhLogo } from "../../design-system/svg/StrilherezhLogo";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const NavBar = ({ isOpen, toggleDrawer }: Props) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMenu, setShowMenu] = useState(isOpen);
  const [currentContent, setCurrentContent] = useState<string | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const isClickInsideDrawer =
        drawerRef.current && drawerRef.current.contains(event.target as Node);
      const isClickInsideContent =
        document.querySelectorAll(".content-menu").length > 0 &&
        Array.from(document.querySelectorAll(".content-menu")).some((content) =>
          content.contains(event.target as Node)
        );
      const isClickOnLink = (event.target as HTMLElement).closest("a[href]");

      if (!isClickInsideDrawer && !isClickInsideContent) {
        toggleDrawer();
        setCurrentContent(null);
      }

      if (isClickOnLink) {
        setTimeout(() => {
          toggleDrawer();
          setCurrentContent(null);
        }, 200);
      }
    },
    [toggleDrawer]
  );

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true);
      setIsAnimating(true);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShowMenu(false);
        document.removeEventListener("mousedown", handleClickOutside);
      }, 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const fontStyle =
    "text-[20px] tracking-[1px] font-light hover:font-normal animate";

  const chevronStyle = "flex justify-center items-center";

  const handleButtonClick = (content: string) => {
    if (currentContent === content) {
      setCurrentContent(null);
    } else {
      setCurrentContent(content);
    }
  };

  const closeAllDrawer = () => {
    toggleDrawer();
    setCurrentContent(null);
  };

  const renderContent = () => {
    if (currentContent === null) return null;

    switch (currentContent) {
      case "Strilherezh":
        return (
          <StrilherezhContent
            key="Strilherezh"
            onClose={() => setCurrentContent(null)}
          />
        );
      case "Skornenn":
        return (
          <SkornennContent
            key="Skornenn"
            onClose={() => setCurrentContent(null)}
          />
        );
      case "Vins":
        return (
          <VinsContent key="Vins" onClose={() => setCurrentContent(null)} />
        );
      case "Whisky":
        return (
          <WhiskyContent key="Whisky" onClose={() => setCurrentContent(null)} />
        );
      case "Exclusivites":
        return (
          <ExclusivitesContent
            key={"Exclusivites"}
            onClose={() => setCurrentContent(null)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div
            id="nav-container"
            ref={drawerRef}
            className={clsx(
              "fixed top-0 left-0 w-[500px] max-xl:w-[360px] max-lg:w-[300px] max-md:w-[250px] h-full bg-white shadow-lg z-50 p-10",
              isOpen && isAnimating ? "slide-in" : "slide-out"
            )}
          >
            <div className="flex justify-between items-center h-[90px] border-b border-b-[#E3E3E3] mb-10">
              <Typography
                font="outfit"
                variant="h3"
                className="text-[25px] tracking-[1.25px] font-normal max-lg:text-[22px]"
              >
                Nos maisons
              </Typography>
              <button
                onClick={() => {
                  toggleDrawer();
                  setCurrentContent(null);
                }}
                className="!bg-[#F4F4F4] rounded-full text-center p-[10px] mt-1"
              >
                <CrossIcon />
              </button>
            </div>
            <nav>
              <ul className="flex flex-col gap-8 max-sm:gap-4">
                <li>
                  <button
                    onClick={() => handleButtonClick("Strilherezh")}
                    className="flex justify-between items-center nav-element w-full"
                  >
                    <Typography font="outfit" className={clsx(fontStyle)}>
                      Strilherezh
                    </Typography>
                    <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                      <div
                        className={clsx(
                          chevronStyle,
                          "arrow-container animate opacity-0"
                        )}
                      >
                        <ChevronIcon />
                      </div>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleButtonClick("Skornenn")}
                    className="flex justify-between items-center nav-element w-full"
                  >
                    <Typography font="outfit" className={clsx(fontStyle)}>
                      Skornenn
                    </Typography>
                    <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                      <div
                        className={clsx(
                          chevronStyle,
                          "arrow-container animate opacity-0"
                        )}
                      >
                        <ChevronIcon />
                      </div>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleButtonClick("Vins")}
                    className="flex justify-between items-center nav-element w-full"
                  >
                    <Typography font="outfit" className={clsx(fontStyle)}>
                      Vins
                    </Typography>
                    <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                      <div
                        className={clsx(
                          chevronStyle,
                          "arrow-container animate opacity-0"
                        )}
                      >
                        <ChevronIcon />
                      </div>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleButtonClick("Whisky")}
                    className="flex justify-between items-center nav-element w-full"
                  >
                    <Typography font="outfit" className={clsx(fontStyle)}>
                      Whisky
                    </Typography>
                    <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                      <div
                        className={clsx(
                          chevronStyle,
                          "arrow-container animate opacity-0"
                        )}
                      >
                        <ChevronIcon />
                      </div>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleButtonClick("Exclusivites")}
                    className="flex justify-between items-center nav-element w-full"
                  >
                    <Typography font="outfit" className={clsx(fontStyle)}>
                      Exclusivités
                    </Typography>
                    <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                      <div
                        className={clsx(
                          chevronStyle,
                          "arrow-container animate opacity-0"
                        )}
                      >
                        <ChevronIcon />
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {renderContent()}
        </div>
      )}
    </>
  );
};

interface DrawerProps {
  onClose: () => void;
}

const StrilherezhContent = ({ onClose }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !document
          .getElementById("nav-container")
          ?.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsAnimating(true);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const fontStyle =
    "text-[20px] tracking-[1px] font-light hover:font-normal animate";

  const chevronStyle = "flex justify-center items-center";

  return (
    <div
      ref={drawerRef}
      className={clsx(
        "content-menu fixed top-0 left-[500px] w-[500px] max-xl:left-[360px] max-xl:w-[360px] max-lg:left-[300px] max-lg:w-[300px] max-md:left-[250px] max-md:w-[250px] max-sm:left-[0] h-full  bg-white shadow-lg z-50 p-10",
        isAnimating ? "slide-in" : "slide-out"
      )}
    >
      <div className="relative flex justify-center items-center h-[90px] border-b border-b-[#E3E3E3] mb-10 py-5">
        <button
          onClick={onClose}
          className="absolute left-0 !bg-[#F4F4F4] rounded-full text-center p-[5px] mt-1 max-md:-left-5"
        >
          <ArrowIcon direction="left" className="w-[20px] h-[20px]" />
        </button>
        <StrilherezhLogo className="w-[200px] h-[80px] mb-5" />
      </div>
      <nav>
        <ul className="flex flex-col gap-8 max-sm:gap-4">
          <li>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Tout voir
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/strilherez/produits"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Tous nos produits
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Notre histoire
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const SkornennContent = ({ onClose }: { onClose: () => void }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !document
          .getElementById("nav-container")
          ?.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsAnimating(true);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const fontStyle =
    "text-[20px] tracking-[1px] font-light hover:font-normal animate";

  const chevronStyle = "flex justify-center items-center";

  return (
    <div
      ref={drawerRef}
      className={clsx(
        "content-menu fixed top-0 left-[500px] w-[500px] max-xl:left-[360px] max-xl:w-[360px] max-lg:left-[300px] max-lg:w-[300px] max-md:left-[250px] max-md:w-[250px] max-sm:left-[0] h-full  bg-white shadow-lg z-50 p-10 overflow-auto no-scroll",
        isAnimating ? "slide-in" : "slide-out"
      )}
    >
      <div className="relative flex justify-center items-center h-[90px] border-b border-b-[#E3E3E3] mb-10 py-5 ">
        <button
          onClick={onClose}
          className="absolute left-0 !bg-[#F4F4F4] rounded-full text-center p-[5px] mt-1 max-md:-left-5"
        >
          <ArrowIcon direction="left" className="w-[20px] h-[20px]" />
        </button>
        <div className="w-[200px] h-[50px] max-lg:w-[120px] max-lg:h-[20px]">
          <Image
            src={"/img/skornenn/skornenn-logo.png"}
            alt="fond de présentation d'alcool breton"
            width={300}
            height={60}
          />
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-8 max-sm:gap-4">
          <li>
            <Link
              href={"/skornenn"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Tout voir
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Histoire de Skornenn
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[250px] max-lg:hidden">
              <Image
                src={"/img/skornenn/slide/cidre-aromatise.png"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Cidre parfumé
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[250px] max-lg:hidden">
              <Image
                src={"/img/skornenn/cidre-orange-sanguine.png"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Cidre nature
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[220px] max-lg:hidden">
              <Image
                src={"/img/skornenn/cidre-arthur.png"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Cidre arthur
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const VinsContent = ({ onClose }: { onClose: () => void }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !document
          .getElementById("nav-container")
          ?.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsAnimating(true);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const fontStyle =
    "text-[20px] tracking-[1px] font-light hover:font-normal animate";

  const chevronStyle = "flex justify-center items-center";

  return (
    <div
      ref={drawerRef}
      className={clsx(
        "content-menu fixed top-0 left-[500px] w-[500px] max-xl:left-[360px] max-xl:w-[360px] max-lg:left-[300px] max-lg:w-[300px] max-md:left-[250px] max-md:w-[250px] max-sm:left-[0] h-full  bg-white shadow-lg z-50 p-10 overflow-auto no-scroll",
        isAnimating ? "slide-in" : "slide-out"
      )}
    >
      <div className="relative flex justify-center items-center h-[90px] border-b border-b-[#E3E3E3] mb-10 py-5 ">
        <button
          onClick={onClose}
          className="absolute left-0 !bg-[#F4F4F4] rounded-full text-center p-[5px] mt-1 max-md:-left-5"
        >
          <ArrowIcon direction="left" className="w-[20px] h-[20px]" />
        </button>
        <div className="w-[200px] h-[50px] max-lg:w-[120px] max-lg:h-[20px] text-center mb-5">
          <Typography
            font="quattrocento"
            className="text-[40px] text-[#A20E31] font-bold space tracking-[2px]"
          >
            VINS
          </Typography>
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-8 max-sm:gap-4">
          <li>
            <Link
              href={"/skornenn"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Tout voir
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                {`Histoire de "Vins"`}
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[250px] max-lg:hidden">
              <Image
                src={"/img/wine/white-wine.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vins blancs
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[350px] max-lg:hidden">
              <Image
                src={"/img/wine/red-wine.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vins rouges
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[320px] max-lg:hidden">
              <Image
                src={"/img/wine/rose-wine.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vin rosé
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const WhiskyContent = ({ onClose }: { onClose: () => void }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !document
          .getElementById("nav-container")
          ?.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsAnimating(true);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const fontStyle =
    "text-[20px] tracking-[1px] font-light hover:font-normal animate";

  const chevronStyle = "flex justify-center items-center";

  return (
    <div
      ref={drawerRef}
      className={clsx(
        "content-menu fixed top-0 left-[500px] w-[500px] max-xl:left-[360px] max-xl:w-[360px] max-lg:left-[300px] max-lg:w-[300px] max-md:left-[250px] max-md:w-[250px] max-sm:left-[0] h-full  bg-white shadow-lg z-50 p-10 overflow-auto no-scroll",
        isAnimating ? "slide-in" : "slide-out"
      )}
    >
      <div className="relative flex justify-center items-center h-[90px] border-b border-b-[#E3E3E3] mb-10 py-5 ">
        <button
          onClick={onClose}
          className="absolute left-0 !bg-[#F4F4F4] rounded-full text-center p-[5px] mt-1 max-md:-left-5"
        >
          <ArrowIcon direction="left" className="w-[20px] h-[20px]" />
        </button>
        <div className="w-[200px] h-[50px] max-lg:w-[120px] max-lg:h-[20px] text-center mb-5">
          <Typography
            font="quattrocento"
            className="text-[40px] max-lg:text-[30px] text-[#000] font-bold space tracking-[2px]"
          >
            WHISKY
          </Typography>
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-8 max-sm:gap-4">
          <li>
            <Link
              href={"/skornenn"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Tout voir
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                {`Histoire de "Vins"`}
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[250px] max-lg:hidden">
              <Image
                src={"/img/whisky/whisky-nice.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vins blancs
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[350px] max-lg:hidden">
              <Image
                src={"/img/whisky/french_whisky.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vins rouges
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[320px] max-lg:hidden">
              <Image
                src={"/img/whisky/black-label.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vin rosé
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const ExclusivitesContent = ({ onClose }: { onClose: () => void }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !document
          .getElementById("nav-container")
          ?.contains(event.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsAnimating(true);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const fontStyle =
    "text-[20px] tracking-[1px] font-light hover:font-normal animate";

  const chevronStyle = "flex justify-center items-center";

  return (
    <div
      ref={drawerRef}
      className={clsx(
        "content-menu fixed top-0 left-[500px] w-[500px] max-xl:left-[360px] max-xl:w-[360px] max-lg:left-[300px] max-lg:w-[300px] max-md:left-[250px] max-md:w-[250px] max-sm:left-[0] h-full  bg-white shadow-lg z-50 p-10 overflow-auto no-scroll",
        isAnimating ? "slide-in" : "slide-out"
      )}
    >
      <div className="relative flex justify-center items-center h-[90px] border-b border-b-[#E3E3E3] mb-10 py-5 ">
        <button
          onClick={onClose}
          className="absolute !bg-[#F4F4F4] rounded-full text-center p-[5px] mb-3 -left-5"
        >
          <ArrowIcon direction="left" className="w-[20px] h-[20px]" />
        </button>
        <div className="text-center mb-5">
          <Typography
            font="quattrocento"
            className="text-[30px] max-lg:text-[25px] max-md:text-[20px] text-[#E0AA3E] font-bold space tracking-[2px] max-md:tracking-[1px] text-center w-full"
          >
            EXCLUSIVITÉ
          </Typography>
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-8 max-sm:gap-4">
          <li>
            <Link
              href={"/skornenn"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Tout voir
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                {`Histoire de "Vins"`}
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[250px] max-lg:hidden">
              <Image
                src={"/img/exclu/whisky.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vins blancs
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[350px] max-lg:hidden">
              <Image
                src={"/img/exclu/whisky-armoir.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vins rouges
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div className="relative w-full h-[320px] max-lg:hidden">
              <Image
                src={"/img/exclu/jack-daniels.jfif"}
                alt="fond de présentation d'alcool breton"
                layout="fill"
              />
            </div>
            <Link
              href={"/"}
              className="flex justify-between items-center nav-element w-full pt-[15px] max-lg:pt-0"
            >
              <Typography font="outfit" className={clsx(fontStyle)}>
                Vin rosé
              </Typography>
              <div className="h-[30px] w-[30px] !bg-[#ffffff9f]">
                <div
                  className={clsx(
                    chevronStyle,
                    "arrow-container animate opacity-0"
                  )}
                >
                  <ChevronIcon />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

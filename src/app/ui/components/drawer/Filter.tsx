"use client";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../../design-system/button/Button";
import { CheckIcon } from "../../design-system/svg/CheckIcon";
import { CrossIcon } from "../../design-system/svg/CrossIcon";
import { ReloadIcon } from "../../design-system/svg/ReloadIcon";
import { Typography } from "../../design-system/typography/Typography";
import { Accordion } from "../accordion/Accordion";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const Filter = ({ isOpen, toggleDrawer }: Props) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMenu, setShowMenu] = useState(isOpen);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const isClickInsideDrawer =
        drawerRef.current && drawerRef.current.contains(event.target as Node);

      if (!isClickInsideDrawer) {
        toggleDrawer();
      }
    },
    [toggleDrawer]
  );

  const handleSaveFilter = () => {
    toggleDrawer();
  };

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

  return (
    <>
      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div
            id="nav-container"
            ref={drawerRef}
            className={clsx(
              "fixed top-0 right-0 w-[500px] max-xl:w-[360px] max-lg:w-[320px] h-full bg-white shadow-lg z-50 overflow-auto no-scroll",
              isOpen && isAnimating ? "reverseSlide-in" : "reverseSlide-out"
            )}
          >
            <div className="p-10">
              <div className="flex justify-between items-center h-[90px] border-b border-b-[#E3E3E3] mb-10">
                <Typography
                  font="outfit"
                  variant="h3"
                  className="text-[25px] tracking-[1.25px] font-normal max-lg:text-[22px]"
                >
                  Filtres <span className="text-[#AAA] text-[18px]">(2)</span>
                </Typography>
                <button
                  onClick={() => {
                    toggleDrawer();
                  }}
                  className="!bg-[#F4F4F4] rounded-full text-center p-[10px] mt-1"
                >
                  <CrossIcon />
                </button>
              </div>
              <nav>
                <ul className="flex flex-col gap-8 max-sm:gap-4">
                  <li>
                    <Accordion title="Trier par">
                      <div className="py-[20px]">
                        <input
                          type="radio"
                          name="sort"
                          id="new"
                          className="label-radio"
                        />
                        <label htmlFor="new" className="pl-[20px] label-radio">
                          Nouveautés
                        </label>
                      </div>
                      <div className="pb-[20px]">
                        <input
                          type="radio"
                          name="sort"
                          id="increase"
                          className="label-radio"
                        />
                        <label
                          htmlFor="increase"
                          className="pl-[20px] label-radio"
                        >
                          Prix croissant
                        </label>
                      </div>
                      <div className="pb-[20px]">
                        <input
                          type="radio"
                          name="sort"
                          id="decrease"
                          className="label-radio"
                        />
                        <label
                          htmlFor="decrease"
                          className="pl-[20px] label-radio"
                        >
                          Prix décroissant
                        </label>
                      </div>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion title="Contenant">
                      <div className="py-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="can"
                            className="sr-only custom-checkbox"
                            name="can"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="can"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Canette
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="bottle"
                            className="sr-only custom-checkbox"
                            name="bottle"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="bottle"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Bouteille
                        </label>
                      </div>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion title="Volume :">
                      <div className="py-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="25cl"
                            className="sr-only custom-checkbox"
                            name="25cl"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="25cl"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          25CL
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="33cl"
                            className="sr-only custom-checkbox"
                            name="33cl"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="33cl"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          33CL
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="50cl"
                            className="sr-only custom-checkbox"
                            name="50cl"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="50cl"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          50CL
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="1l"
                            className="sr-only custom-checkbox"
                            name="1l"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="1l"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          1L
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="1.5l"
                            className="sr-only custom-checkbox"
                            name="1.5l"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="1.5l"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          1.5L
                        </label>
                      </div>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion title="Parfum">
                      <div className="py-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="redFruits"
                            className="sr-only custom-checkbox"
                            name="redFruits"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="redFruits"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Fruits rouges
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="bloodOrange"
                            className="sr-only custom-checkbox"
                            name="bloodOrange"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="bloodOrange"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Orange sanguine
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="Pear"
                            className="sr-only custom-checkbox"
                            name="Pear"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="Pear"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Poire
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="passionfruit"
                            className="sr-only custom-checkbox"
                            name="passionfruit"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="passionfruit"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Fruit de la passion
                        </label>
                      </div>
                    </Accordion>
                  </li>
                  <li>
                    <Accordion title="Alcool">
                      <div className="py-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="alcohol"
                            className="sr-only custom-checkbox"
                            name="alcohol"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="alcohol"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Alcool
                        </label>
                      </div>
                      <div className="pb-[20px] flex">
                        <label className="relative flex items-center cursor-pointer animate w-[20px]">
                          <input
                            type="checkbox"
                            id="noAlcohol"
                            className="sr-only custom-checkbox"
                            name="noAlcohol"
                          />
                          <span className="w-[15px] h-[15px] inline-block border-2 border-gray-400 rounded-sm bg-white relative animate">
                            <CheckIcon />
                          </span>
                        </label>
                        <label
                          htmlFor="noAlcohol"
                          className="pl-[3px] font-outfit text-[16px] font-extralight"
                        >
                          Sans alcool
                        </label>
                      </div>
                    </Accordion>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="sticky bottom-0 w-full p-[20px] bg-white"
              style={{
                boxShadow: "0px -5px 40px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex gap-[20px]">
                <Button
                  variant="secondary"
                  className="py-[10px] w-full"
                  onClick={handleSaveFilter}
                >
                  Appliquer les filtres
                </Button>
                <button className="flex flex-col items-center reload-button">
                  <ReloadIcon className="icon rotate-0" />
                  <Typography
                    font="quattrocento"
                    className="text-[14px] tracking-[0.7px] font-bold "
                  >
                    Réinitialiser
                  </Typography>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

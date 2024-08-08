"use client";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { CrossIcon } from "../../design-system/svg/CrossIcon";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const DrawerAmounts = ({ isOpen, toggleDrawer }: Props) => {
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

  const handleSaveAmounts = () => {
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

  const buttonStyle =
    "flex items-center h-[50px] w-full bg-white text-black peer-checked:border-gold peer-checked:bg-[#AAAAAA] peer-checked:text-white font-outfit text-[16px] font-light animate hover:bg-[#E3E3E3] pl-10 ";

  const amounts = [
    1, 2, 4, 6, 12, 24, 36, 48, 60, 72, 84, 96, 108, 132, 144, 156,
  ];

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
            <div>
              <div className="p-10">
                <div className="flex justify-between items-center h-[90px] border-b border-b-[#E3E3E3]">
                  <Typography
                    font="outfit"
                    variant="h3"
                    className="!text-[25px] tracking-[1.25px] font-normal max-lg:!text-[20px]"
                  >
                    Choisissez une quantité
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
              </div>
              <nav>
                <ul className="flex flex-col">
                  {amounts.map((amount) => (
                    <li key={amount}>
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="amount"
                          value={amount}
                          className="hidden peer"
                          onClick={handleSaveAmounts}
                        />
                        <div className={buttonStyle}>{amount}</div>
                      </label>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AccountIcon } from "../../design-system/svg/AccountIcon";
import { ShoppingCart } from "../../design-system/svg/ShoppingCart";
import { StrilherezhLogo } from "../../design-system/svg/StrilherezhLogo";
import { Typography } from "../../design-system/typography/Typography";
import { NavBar } from "../drawer/Navbar";

export const Header = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navBarRef = useRef<HTMLDivElement | null>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navBarRef.current && !navBarRef.current.contains(event.target as Node)) {
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


  const typoStyle = "font-extralight tracking-wider text-[16px] max-sm:hidden";
  const iconSyle = "mr-[12px] max-sm:mr-0";

  return (
    <header className="w-full h-[75px] max-sm:h-[50px] bg-white flex justify-between items-center px-10 relative max-md:px-5">
      <div className="">
        <button onClick={toggleDrawer} className="flex items-center">
          <div className={clsx("mr-[12px]")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
            >
              <path d="M0.428711 0.5H17.5716" stroke="#505050" />
              <path d="M0.428711 6.5H17.5716" stroke="#505050" />
              <path d="M0.428711 12.5H17.5716" stroke="#505050" />
            </svg>
          </div>
          <Typography
            font="outfit"
            className={clsx("font-extralight tracking-wider text-[16px]")}
          >
            Menu
          </Typography>
        </button>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <StrilherezhLogo className="w-[103px] h-[60px] max-sm:w-[69px] max-sm:h-[40px]" />
        </Link>
      </div>
      <div className="flex">
        <button className="flex items-center mr-[30px] max-sm:mr-[22px]">
          <AccountIcon className={clsx(iconSyle)} />
          <Typography font="outfit" className={clsx(typoStyle)}>
            Compte
          </Typography>
        </button>
        <button className="flex items-center">
          <ShoppingCart className={clsx(iconSyle)} empty={false} />
          <Typography font="outfit" className={clsx(typoStyle)}>
            Panier
          </Typography>
        </button>
      </div>
      <NavBar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

    </header>
  );
};

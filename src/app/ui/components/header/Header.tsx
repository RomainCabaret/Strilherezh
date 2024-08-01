import clsx from "clsx";
import { Typography } from "../../design-system/typography/Typography";

export const Header = ({}) => {
  const typoStyle = "font-extralight tracking-wider text-[20px]";
  const iconSyle = "block w-[18px] h-[12px] bg-black mr-1";

  return (
    <header className="w-full h-[75px] bg-white flex justify-between items-center px-10">
      <div className="w-[171px]">
        <button className="flex items-center">
          <div className={clsx(iconSyle)}></div>
          <Typography font="outfit" className={clsx(typoStyle)}>
            Menu
          </Typography>
        </button>
      </div>
      <div>
        <div className="block w-[103px] h-[60px] bg-black"></div>
      </div>
      <div className="flex gap-5 w-[171px]">
        <button className="flex items-center">
          <div className={clsx(iconSyle)}></div>
          <Typography font="outfit" className={clsx(typoStyle)}>
            Compte
          </Typography>
        </button>
        <button className="flex items-center">
          <div className={clsx(iconSyle)}></div>
          <Typography font="outfit" className={clsx(typoStyle)}>
            Panier
          </Typography>
        </button>
      </div>
    </header>
  );
};

import { clsx } from "clsx";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  color?: "white" | "black" | "gray" | "lightgray";
  font?: "outfit" | "quicksand";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "p",
  color = "black",
  font = "quicksand",
  className,
  children,
}: Props) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={clsx(
            `text-${color} font-${font} font-light text-[80px] tracking-widest`,
            className
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={clsx(
            `text-${color} font-${font} font-light text-[40px] tracking-widest`,
            className
          )}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={clsx(
            `text-${color} font-${font} font-normal text-[30px] tracking-widest`,
            className
          )}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={clsx(
            `text-${color} font-${font} text-[20px] font-normal tracking-widest`,
            className
          )}
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p
          className={clsx(`text-${color} font-${font} text-[16px]`, className)}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span className={clsx(`text-${color}`, className)}>{children}</span>
      );
    default:
      return null;
  }
};

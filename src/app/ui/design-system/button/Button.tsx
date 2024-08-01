import clsx from "clsx";

interface Props {
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  className?: string;
  skornenn?: boolean;
}

export const Button = ({
  variant = "primary",
  skornenn = false,
  children,
  className,
}: Props) => {
  let variantStyles: string = "";

  switch (variant) {
    case "primary": // DEFAULT
      variantStyles = !skornenn
        ? "border border-2 border-white text-white hover:text-gold hover:border-gold rounded"
        : "border border-2 border-white text-white hover:text-cyan hover:border-cyan rounded";
      break;
    case "secondary":
      variantStyles = !skornenn
        ? "border border-2 border-gold text-gold hover:text-white hover:bg-gold rounded"
        : "border border-2 border-cyan text-cyan hover:text-white hover:bg-cyan rounded";
      break;
    case "tertiary":
      variantStyles = !skornenn
        ? "text-white bg-gold hover:bg-lightgold rounded"
        : "text-white bg-blue hover:bg-cyan rounded";
      break;
  }

  return (
    <>
      <button
        type="button"
        className={clsx(className, variantStyles, "animate font-bold")}
      >
        {children}
      </button>
    </>
  );
};

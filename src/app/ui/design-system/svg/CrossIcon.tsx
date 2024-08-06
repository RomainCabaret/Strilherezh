import clsx from "clsx";

interface Props {
  className?: string;
  color?: "black" | "white" | "aqua";
}

export const CrossIcon = ({ className, color = "black" }: Props) => {
  let colorStyle = "";

  switch (color) {
    case "black": // DEFAULT
      colorStyle = "#000000";
      break;
    case "white":
      colorStyle = "#FFFFFF";
      break;
    case "aqua":
      colorStyle = "#33CEF1";
      break;
    default:
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={clsx(className)}
    >
      <path
        d="M6.46484 17.7773L17.7786 6.46364"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M17.6572 17.6562L6.34352 6.34254"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

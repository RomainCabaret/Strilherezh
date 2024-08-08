interface Props {
  color?: "black" | "gray";
}

export const ChevronIcon = ({ color = "black" }: Props) => {
  let colorStyle = "";
  switch (color) {
    case "black": // DEFAULT
      colorStyle = "#505050";
      break;
    case "gray":
      colorStyle = "#AAAAAA";
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.14216 4.28711L12.8564 10.0014L7.14216 15.7157"
        stroke={colorStyle}
        strokeWidth="1.5"
      />
    </svg>
  );
};

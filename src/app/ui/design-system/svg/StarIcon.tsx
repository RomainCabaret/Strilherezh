interface Props {
  fill?: boolean;
}

export const StarIcon = ({ fill = false }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
    >
      <path
        d="M7 0L9.05725 4.16844L13.6574 4.83688L10.3287 8.08156L11.1145 12.6631L7 10.5L2.8855 12.6631L3.6713 8.08156L0.342604 4.83688L4.94275 4.16844L7 0Z"
        fill={fill ? "#E0AA3E" : "#E3E3E3"}
      />
    </svg>
  );
};

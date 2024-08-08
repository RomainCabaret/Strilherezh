import clsx from "clsx";
import { StarIcon } from "../../design-system/svg/StarIcon";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
  title: string;
  content: string;
  className?: string;
}

export const CommentCard = ({ title, content, className }: Props) => {
  return (
      <div
        className={clsx("bg-white p-[40px] flex flex-col h-fit", className)} 
        style={{ boxShadow: "5px 5px 20px 0px rgba(0, 0, 0, 0.50)" }}
      >
        <Typography
          font="quattrocento"
          className="text-[20px] font-bold pb-[10px]"
        >
          {title}
        </Typography>
        <div className="flex gap-[8px] mb-[20px]">
          <StarIcon fill />
          <StarIcon fill />
          <StarIcon fill />
          <StarIcon fill />
          <StarIcon />
        </div>
        <Typography
          color="gray"
          font="quicksand"
          className="!text-[13px] font-normal"
        >
          {content}
        </Typography>
      </div>
  );
};

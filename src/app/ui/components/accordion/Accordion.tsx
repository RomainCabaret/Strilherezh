"use client"

import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { CaretIcon } from "../../design-system/svg/CaretIcon";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  open?: boolean;
}

export const Accordion = ({
  title,
  children,
  className,
  open = true,
}: Props) => {
  const [isOpen, setOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
      contentRef.current.style.opacity = '1';
    } else if (contentRef.current) {
      contentRef.current.style.height = '0px';
      contentRef.current.style.opacity = '0';
    }
  }, [isOpen]);

  return (
    <div className="pb-[20px] flex flex-col border-b border-b-[#E3E3E3]">
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setOpen(!isOpen)}
      >
        <Typography
          font="outfit"
          className={clsx("text-start text-[20px] font-medium", className)}
        >
          {title}
        </Typography>
        <div className={clsx("animate", isOpen && "rotate-180")}>
          <CaretIcon />
        </div>
      </button>
      <div
        ref={contentRef}
        className="accordion-content pl-[10px] transition-all duration-300 overflow-hidden animate"
      >
        {children}
      </div>
    </div>
  );
};

"use client";

import { ReactNode } from "react";

const Stat = ({
  value,
  title,
  extra,
  titleSmall,
  Icon,
}: {
  value: ReactNode;
  title: string;
  extra?: string;
  titleSmall?: string;
  Icon?: ReactNode;
}) => {
  return (
    <>
      {/* desktop - left align design */}
      <div className="w-full flex gap-2 items-center justify-end shadow  bg-gradient-to-tr from-neutral-50 via-neutral-50 to-orange-50 h-24 rounded-xl p-5 px-6 animate-enter-token">
        <div className="flex flex-col justify-start w-full">
          <div className="text-gray-500">{title}</div>
          <div className="font-bold text-xl">
            {extra} {value}
          </div>
        </div>
        <div className="h-[60px] bg-brickly400 w-[80px] rounded-xl flex items-center justify-center">
          <img src="/home/icons/office.svg" height="30" width={30} />
        </div>
      </div>
    </>
  );
};

export default Stat;

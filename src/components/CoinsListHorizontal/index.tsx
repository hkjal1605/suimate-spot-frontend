import Image from "next/image";
import React from "react";

interface IPropType {
  coins: {
    name: string;
    icon: string;
    balance: number;
  }[];
}

const CoinsListHorizontal = (props: IPropType) => {
  const { coins } = props;

  return (
    <div className="flex justify-center items-center mr-1.5">
      {coins.map((coin) => (
        <div key={coin.name} className="-mr-1.5 cursor-pointer">
          <Image
            src={coin.icon}
            alt={coin.name}
            width={24}
            height={24}
            unoptimized
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default CoinsListHorizontal;

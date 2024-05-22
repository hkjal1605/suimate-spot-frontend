import React from "react";

import Image from "next/image";

// import { SUI_DECIMALS } from '@/constants';
// import MarketsData from '@/constants/markets';
// import type { PastTradesType } from '@/types/dataTypes/pastTrades';
// import { capitalizeFirstLetter } from '@/utils/capitaliseFirstLetter';
// import { isBignumberPositive, toDecimalString } from '@/utils/parseBignum';

// interface IPropType {
//   trade: PastTradesType;
// }

const TradeCard = () => {
  // const { trade } = props;

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex flex-col justify-center items-start w-full flex-[0.6]">
        <p className="text-sm text-black-800">9:05 PM</p>
        <p className="text-xs text-black-800">16/05/2024</p>
      </div>
      <div className="flex justify-center items-center gap-1 w-full flex-1">
        <Image
          src="https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/sui.svg/public"
          alt="Sui"
          width={24}
          height={24}
          unoptimized
          className="rounded-full"
        />
        <p className="text-sm text-black-900">24 SUI</p>
      </div>
      <div className="flex justify-center items-center gap-1 w-full flex-1">
        <Image
          src="https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/usdc.png/public"
          alt="USDC"
          width={24}
          height={24}
          unoptimized
          className="rounded-full"
        />
        <p className="text-sm text-black-900">62 USDC</p>
      </div>
      <div className="w-full flex justify-end items-center flex-[0.5]">
        <Image
          src="https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/cetus.jpeg/public"
          alt="Cetus"
          width={28}
          height={28}
          unoptimized
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default TradeCard;

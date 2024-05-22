import React from "react";

import Image from "next/image";

// import MarketsData from '@/constants/markets';
// import type { TradersMarketDataType } from '@/types/dataTypes/tradersMarketData';
// import { isBignumberPositive, toDecimalString } from "@/utils/parseBignum";

// interface IPropType {
//   market: TradersMarketDataType;
// }

const TraderHoldingsCard = () => {
  //   const { market } = props;

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex justify-start items-center gap-2 flex-[1.2] w-full">
        <Image
          src="https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/sui.svg/public"
          alt="Sui"
          height={30}
          width={30}
          unoptimized
        />
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-sm text-black-900">Sui</p>
          <p className="text-xs text-black-800">9:05 PM, 16/05/2004</p>
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center gap-1">
        <p className="text-sm text-black-900">20,185 SUI</p>
        <p className="text-sm text-black-700">$48,641</p>
      </div>
      <div className={`w-full flex-1 text-sm text-end text-green-300`}>
        $17,932.00
      </div>
    </div>
  );
};

export default TraderHoldingsCard;

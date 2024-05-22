"use client";

import React from "react";

// import useTradersStats from '@/stores/useTradersStats';
// import { isBignumberPositive, toDecimalString } from "@/utils/parseBignum";

const TradersStats = () => {
  // const { stats } = useTradersStats();

  return (
    <div className="w-full flex flex-col items-center justify-start gap-3 pt-3">
      <div className="w-full flex items-center justify-between border-b-[1px] border-black-400 px-3 pb-1">
        <div className="flex flex-col items-start justify-center">
          <p className="text-base text-black-800">Account Balance</p>
          <p className="text-3xl font-semibold text-black-1000">
            {/* ${toDecimalString(stats.accountBalance)} */}
            $40,325.52
          </p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-base text-black-800">1 Week Change</p>
          <p className={`text-3xl font-semibold text-green-300`}>+$1,325.00</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3 px-3 border-b-[1px] border-black-400 pb-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Spot Exchanges Made</p>
          <p className="text-sm text-black-900">423</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Volume Swapped</p>
          <p className="text-sm text-black-900">$12,295</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Last Swap Made At</p>
          <p className="text-sm text-black-900">9:05 PM, 16th May 2024</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Biggest Bag</p>
          <p className="text-sm text-black-900">Sui (50,230)</p>
        </div>
      </div>
    </div>
  );
};

export default TradersStats;

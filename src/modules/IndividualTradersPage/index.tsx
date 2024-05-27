"use client";

import React, { useEffect } from "react";
import TraderHeader from "./components/TraderHeader";
import { usePathname } from "next/navigation";
import ComingSoon from "./components/ComingSoon";
import TradersStats from "./components/TraderStats";
import TradersHoldings from "./components/TradersHoldings";
import PastTrades from "./components/PastTrades";
import { fetchPastTrades } from "./utils/fetchPastTrades";
import { fetchTradersStats } from "./utils/fetchTradersStats";
import { fetchUserHoldings } from "./utils/fetchUserHoldings";

const IndividualTradersModule = () => {
  const pathname = usePathname();
  const address = pathname.split("/").pop() || "";

  useEffect(() => {
    if (address) {
      fetchPastTrades(address);
      fetchTradersStats(address);
      fetchUserHoldings(address);
    }
  }, [address]);

  return (
    <div className="w-full flex flex-col items-center justify-start h-[calc(100vh-116px)]">
      <TraderHeader address={address} />
      <div className="w-full flex items-stretch justify-center h-full">
        <ComingSoon />
        <div className="w-full h-full border-x-[1px] border-black-400 flex flex-col items-center justify-start">
          <TradersStats />
          <TradersHoldings />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start">
          <PastTrades />
        </div>
      </div>
    </div>
  );
};

export default IndividualTradersModule;

"use client";

import React, { useState } from "react";
import IntroFilter from "./components/IntroFilter";
import TraderCard from "./components/TraderCard";
import { type OrderTradersBy } from "./types/orderTradersBy";

const SampleTrader = {
  address: "0x4a81a450d6cbb3c373c80b542c20523f7eab8c39c346ef521c54526e61d2baa6",
  totalVolumeSwapped: 62461237623789,
  totalSwapsMade: 123,
  lastTradedTimestamp: 1716395913305,
};

export default function HomePageModule() {
  const [topFilter, setTopFilter] =
    useState<OrderTradersBy>("totalVolumeSwapped");
  const [dexFilter, setDexFilter] = useState<string>("All Spot Exchanges");

  return (
    <div className="text-black-900 w-full">
      <div className="flex flex-col items-center justify-start px-5 w-full">
        <IntroFilter
          topFilter={topFilter}
          setTopFilter={setTopFilter}
          dexFilter={dexFilter}
          setDexFilter={setDexFilter}
        />
        <div className="w-full grid grid-cols-3 gap-4">
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
          <TraderCard trader={SampleTrader} />
        </div>
      </div>
    </div>
  );
}

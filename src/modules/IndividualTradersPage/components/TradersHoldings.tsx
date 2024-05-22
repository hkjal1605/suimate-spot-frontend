import React from "react";
import TraderHoldingsCard from "./TraderHoldingsCard";

// import useTradersMarketsDataStore from "@/stores/useTradersMarketDataStore";

// import MarketsTradedCard from "./MarketsTradedCard";

const TradersHoldings = () => {
  // const { tradersMarketData } = useTradersMarketsDataStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-full overflow-hidden">
      <p className="text-base text-black-800">Current Holdings</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm w-full flex-[1.2] text-left text-black-700">
          Coin / Last Bought At
        </p>
        <p className="text-sm w-full flex-1 text-center text-black-700">
          Net Holding
        </p>
        <p className="text-sm w-full flex-1 text-end text-black-700">
          Total Gains Till Date
        </p>
      </div>
      {/* <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        {tradersMarketData.map((market) => (
          <MarketsTradedCard market={market} key={market.perpId} />
        ))}
      </div> */}
      <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
        <TraderHoldingsCard />
      </div>
    </div>
  );
};

export default TradersHoldings;

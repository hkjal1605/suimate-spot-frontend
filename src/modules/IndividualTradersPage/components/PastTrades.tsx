import React from "react";
import TradeCard from "./TradeCard";

// import usePastTradesStore from '@/stores/usePastTradesStore';

// import TradeCard from './TradeCard';

const PastTrades = () => {
  // const { trades } = usePastTradesStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-[100%] overflow-hidden">
      <p className="text-base text-black-800">Past Spot Trades</p>
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-black-700 w-full flex-[0.6] text-left">
          Time
        </p>
        <p className="text-sm text-black-700 w-full flex-1 text-center">
          Coin In
        </p>
        <p className="text-sm text-black-700 w-full flex-1 text-center">
          Coin Out
        </p>
        <p className="text-sm text-black-700 w-full flex-[0.5] text-end">
          Platform
        </p>
      </div>
      {/* <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        {trades.map((trade) => (
          <TradeCard trade={trade} key={trade.id} />
        ))}
      </div> */}
      <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
      </div>
    </div>
  );
};

export default PastTrades;

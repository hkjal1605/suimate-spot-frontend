import React from 'react';

import Spinner from '@/components/Spinner';
import usePastTradesStore from '@/stores/usePastTradesStore';

import TradeCard from './TradeCard';

const PastTrades = () => {
  const { trades, loaded } = usePastTradesStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-[100%] overflow-hidden">
      <p className="text-base text-black-800">Past Spot Trades</p>
      <div className="w-full flex items-center justify-between gap-2">
        <p className="text-sm text-black-700 w-full flex-[0.6] text-left">
          Time
        </p>
        <p className="text-sm text-black-700 w-full flex-1 text-left">
          Coin In
        </p>
        <p className="text-sm text-black-700 w-full flex-1 text-left">
          Coin Out
        </p>
        <p className="text-sm text-black-700 w-full flex-[0.2] text-end">
          Platform
        </p>
      </div>
      {loaded ? (
        <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
          {trades.map((trade) => (
            <TradeCard
              trade={trade}
              key={`${trade.txnDigest}-${trade.eventSeq}`}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-28 flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default PastTrades;

import React from 'react';

import Spinner from '@/components/Spinner';
import useUserHoldingsStore from '@/stores/useUserHoldingsStore';

import TraderHoldingsCard from './TraderHoldingsCard';

const TradersHoldings = () => {
  const { holdings, loaded } = useUserHoldingsStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-full overflow-hidden">
      <p className="text-base text-black-800">Current Holdings</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm w-full flex-[1.2] text-left text-black-700">
          Coin
        </p>
        <p className="text-sm w-full flex-1 text-end text-black-700">
          Net Holding
        </p>
      </div>
      {loaded ? (
        <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
          {holdings.map((holding) => (
            <TraderHoldingsCard coin={holding} key={holding.coinType} />
          ))}
        </div>
      ) : (
        <div className="w-full h-20 flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default TradersHoldings;

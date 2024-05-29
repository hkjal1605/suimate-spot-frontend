import React from 'react';

import {
  type CoinBalance,
  type CoinMetadata
} from '@mysten/sui.js/dist/cjs/client';
import Image from 'next/image';

interface IPropType {
  coins: (CoinBalance & CoinMetadata)[];
}

const CoinsListHorizontal = (props: IPropType) => {
  const { coins } = props;

  return (
    <div className="flex justify-center items-center gap-1">
      {coins.map((coin) => (
        <div key={coin.name} className="cursor-pointer">
          <Image
            src={coin.iconUrl!}
            alt={coin.name}
            width={24}
            height={24}
            unoptimized
            className="min-w-6 min-h-6 max-h-6 max-w-6 object-cover rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default CoinsListHorizontal;

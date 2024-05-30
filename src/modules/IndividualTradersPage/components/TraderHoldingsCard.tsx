import React from 'react';

import BigNumber from 'bignumber.js';
import Image from 'next/image';

import CoinsList from '@/constants/coinsList';
import type { UserHoldingsType } from '@/types/dataTypes/userHoldings';
import {
  convertToInternationalCurrencySystem,
  toDecimalBigNumberValue
} from '@/utils/parseBignum';

interface IPropType {
  coin: UserHoldingsType;
}

const TraderHoldingsCard = (props: IPropType) => {
  const { coin } = props;

  const coinIcon =
    CoinsList.find((c) => c.symbol === coin.symbol)?.iconUrl ||
    coin.iconUrl ||
    '';

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex justify-start items-center gap-2 flex-[1.2] w-full">
        <Image
          src={coinIcon}
          alt={coin.symbol}
          height={30}
          width={30}
          unoptimized
          className="rounded-full max-h-[30px] max-w-[30px] object-cover"
        />
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-sm text-black-900">{coin.symbol}</p>
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-end gap-1">
        <p className="text-sm text-black-900">
          {convertToInternationalCurrencySystem(
            toDecimalBigNumberValue(BigNumber(coin.totalBalance), coin.decimals)
          )}{' '}
          {coin.symbol}
        </p>
        <p className="text-sm text-black-700">
          $
          {BigNumber(coin.totalBalance)
            .dividedBy(BigNumber(10 ** coin.decimals))
            .multipliedBy(BigNumber(coin.coinPrice))
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TraderHoldingsCard;

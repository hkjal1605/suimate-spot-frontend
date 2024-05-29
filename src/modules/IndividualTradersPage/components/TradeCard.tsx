import React from 'react';

import { DateTime } from 'luxon';
import Image from 'next/image';

import CoinsList from '@/constants/coinsList';
import { AvailableDexs } from '@/constants/platforms';
import type { PastTradesType } from '@/types/dataTypes/pastTrades';
import { toDecimalString } from '@/utils/parseBignum';

interface IPropType {
  trade: PastTradesType;
}

const TradeCard = (props: IPropType) => {
  const { trade } = props;

  const tokenInMetadata = trade.atob
    ? trade.tokenAMetadata
    : trade.tokenBMetadata;
  const tokenOutMetadata = trade.atob
    ? trade.tokenBMetadata
    : trade.tokenAMetadata;

  const tokenInIcon =
    CoinsList.find((coin) => coin.symbol === tokenInMetadata.symbol)?.iconUrl ||
    tokenInMetadata.iconUrl ||
    '';
  const tokenOutIcon =
    CoinsList.find((coin) => coin.symbol === tokenOutMetadata.symbol)
      ?.iconUrl ||
    tokenOutMetadata.iconUrl ||
    '';

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex flex-col justify-center items-start w-full flex-[0.6]">
        <p className="text-sm text-black-800">
          {DateTime.fromMillis(trade.timestampMs).toFormat('hh:mm a')}
        </p>
        <p className="text-xs text-black-800">
          {DateTime.fromMillis(trade.timestampMs).toFormat('MM/dd/yyyy')}
        </p>
      </div>
      <div className="flex justify-start items-center gap-1 w-full flex-1">
        <Image
          src={tokenInIcon}
          alt={tokenInMetadata.symbol}
          width={24}
          height={24}
          unoptimized
          className="rounded-full"
        />
        <p className="text-sm text-black-900">
          {toDecimalString(trade.amountIn, tokenInMetadata.decimals)}{' '}
          {tokenInMetadata.symbol}
        </p>
      </div>
      <div className="flex justify-start items-center gap-1 w-full flex-1">
        <Image
          src={tokenOutIcon}
          alt={tokenOutMetadata.symbol}
          width={24}
          height={24}
          unoptimized
          className="rounded-full"
        />
        <p className="text-sm text-black-900">
          {toDecimalString(trade.amountOut, tokenOutMetadata.decimals)}{' '}
          {tokenOutMetadata.symbol}
        </p>
      </div>
      <div className="w-full flex justify-end items-center flex-[0.2]">
        <Image
          src={
            AvailableDexs.find((dex) => dex.key === trade.platform)?.image || ''
          }
          alt={trade.platform}
          width={28}
          height={28}
          unoptimized
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default TradeCard;

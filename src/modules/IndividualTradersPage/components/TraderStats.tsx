"use client";

import React, { useEffect, useState } from "react";

import useTradersStats from "@/stores/useTradersStats";
import numberWithCommas from "@/utils/numberWithComma";
import { DateTime } from "luxon";
import useUserHoldingsStore from "@/stores/useUserHoldingsStore";
import BigNumber from "bignumber.js";

const TradersStats = () => {
  const { stats } = useTradersStats();
  const { holdings, loaded } = useUserHoldingsStore();

  const [accountBalance, setAccountBalance] = useState(0);
  const [biggestHolding, setBiggestHolding] = useState({
    icon: "",
    symbol: "",
    balance: 0,
  });

  useEffect(() => {
    if (loaded && holdings.length > 0) {
      let total = 0;
      holdings.forEach((coin) => {
        const balanceUsd = BigNumber(coin.totalBalance)
          .dividedBy(BigNumber(10 ** coin.decimals))
          .multipliedBy(BigNumber(coin.coinPrice))
          .toNumber();

        total += balanceUsd;

        if (balanceUsd > biggestHolding.balance) {
          setBiggestHolding({
            icon: coin.iconUrl || "",
            symbol: coin.symbol,
            balance: BigNumber(coin.totalBalance)
              .dividedBy(BigNumber(10 ** coin.decimals))
              .toNumber(),
          });
        }
      });

      setAccountBalance(total);
    }
  }, [loaded, holdings]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-3 pt-3">
      <div className="w-full flex items-center justify-between border-b-[1px] border-black-400 px-3 pb-1">
        <div className="flex flex-col items-start justify-center">
          <p className="text-base text-black-800">Account Balance</p>
          <p className="text-3xl font-semibold text-black-1000">
            ${numberWithCommas(accountBalance.toFixed(2))}
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
          <p className="text-sm text-black-900">{stats.totalSwapsMade}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Volume Swapped</p>
          <p className="text-sm text-black-900">
            ${numberWithCommas(stats.totalVolumeSwapped.toFixed(2))}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Last Swap Made At</p>
          <p className="text-sm text-black-900">
            {DateTime.fromMillis(stats.lastSwapTimestampMs).toFormat(
              "hh:mm a, dd LLL yyyy"
            )}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Biggest Bag</p>
          <p className="text-sm text-black-900">
            {numberWithCommas(biggestHolding.balance.toFixed(2))}{" "}
            {biggestHolding.symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradersStats;

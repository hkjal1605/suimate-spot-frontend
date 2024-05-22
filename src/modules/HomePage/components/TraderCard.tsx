"use client";

import React from "react";

import { useCurrentAccount } from "@mysten/dapp-kit";
import Avatar from "boring-avatars";
import Image from "next/image";
import Link from "next/link";

import PrimaryButton from "@/components/PrimaryButton";
import useFavoriteTradersStore from "@/stores/useFavoriteTradersStore";
import getEllipsisTxt from "@/utils/getEllipsisText";
import { toDecimalString } from "@/utils/parseBignum";
import { type TradersType } from "@/types/dataTypes/tradersType";
import CoinsListHorizontal from "@/components/CoinsListHorizontal";
import CoinsList from "@/constants/coinsList";

// import { addToFavorite, removeFromFavorite } from '../utils/modifyFavorites';

interface IPropType {
  trader: TradersType;
}

const sampleCoinsList = [
  {
    name: "Sui",
    balance: 0,
  },
  {
    name: "USDC",
    balance: 0,
  },
  {
    name: "Cetus Token",
    balance: 0,
  },
  {
    name: "Turbos",
    balance: 0,
  },
  {
    name: "USDT",
    balance: 0,
  },
];

const TraderCard = (props: IPropType) => {
  const { trader } = props;
  const { favoriteTraders } = useFavoriteTradersStore();
  const account = useCurrentAccount();

  return (
    <div className="w-full p-4 rounded-md bg-black-200 flex flex-col items-center justify-center gap-3 border-2 border-transparent border-black-300 hover:border-black-500 transition-all duration-300">
      <div className="w-full flex justify-start items-center gap-2">
        <Avatar
          size={40}
          name={trader.address}
          variant="beam"
          colors={["#96ceb4", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <p className="text-black-800 text-sm">
          {getEllipsisTxt(trader.address, 6, 5)}
        </p>
        <div className="w-px h-5 bg-black-500" />
        <Image src="/assets/images/sui.svg" alt="sui" width={20} height={20} />
        <Image
          src={
            favoriteTraders.includes(trader.address)
              ? "/assets/images/star-filled.svg"
              : "/assets/images/star.svg"
          }
          alt="Favourite"
          className="ml-auto cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            if (!account?.address) return;

            if (!favoriteTraders.includes(trader.address)) {
              // addToFavorite(account?.address, trader.address);
            } else {
              // removeFromFavorite(account?.address, trader.address);
            }
          }}
        />
        <Link href={`/traders/${trader.address}`}>
          <Image
            src="/assets/images/chevron.svg"
            alt="Favourite"
            className="cursor-pointer -rotate-90"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* <div className="w-full -mt-8 -mb-5">
          <TraderCardChart />
        </div> */}
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-sm text-black-800">Total Volume Swapped</p>
        <p className={`text-3xl font-semibold text-green-300`}>
          ${toDecimalString(trader.totalVolumeSwapped)}
        </p>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-sm text-black-700">Total Swaps Made</p>
          <p className="text-base text-black-900">1055</p>
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <p className="text-sm text-black-700">Last Swap Txn</p>
          <p className="text-base text-black-900">9:05 PM, 16/05/2024</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-black-700">Biggest Holdings:</p>
          <CoinsListHorizontal
            coins={sampleCoinsList.map((coin) => {
              const icon = CoinsList.find(
                (c) => c.name === coin.name
              )?.iconUrl!;
              return { ...coin, icon };
            })}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-black-700">Most Swapped In:</p>
          <CoinsListHorizontal
            coins={sampleCoinsList.map((coin) => {
              const icon = CoinsList.find(
                (c) => c.name === coin.name
              )?.iconUrl!;
              return { ...coin, icon };
            })}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-black-700">Most Swapped Out:</p>
          <CoinsListHorizontal
            coins={sampleCoinsList.map((coin) => {
              const icon = CoinsList.find(
                (c) => c.name === coin.name
              )?.iconUrl!;
              return { ...coin, icon };
            })}
          />
        </div>
      </div>
      <div className="w-full flex justify-start items-center gap-3">
        <Link href={`/traders/${trader.address}`}>
          <PrimaryButton className="max-w-[180px]">
            <p className="text-sm text-black-900">View All Trades</p>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default TraderCard;

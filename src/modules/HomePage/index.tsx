"use client";

import Spinner from "@/components/Spinner";
import { AvailableDexs } from "@/constants/platforms";
import useTopTradersStore from "@/stores/useTopTradersStore";
import { useCurrentAccount } from "@mysten/dapp-kit";
import React, { useEffect, useState } from "react";
import IntroFilter from "./components/IntroFilter";
import TraderCard from "./components/TraderCard";
import { type OrderTradersBy } from "./types/orderTradersBy";
import fetchTopTraders from "./utils/fetchTopTraders";
import fetchUserData from "./utils/fetchUserData";

export default function HomePageModule() {
  const [topFilter, setTopFilter] =
    useState<OrderTradersBy>("totalVolumeSwapped");
  const [dexFilter, setDexFilter] = useState<string>("All Spot Exchanges");

  const account = useCurrentAccount();

  const { topTraders, loaded } = useTopTradersStore();

  useEffect(() => {
    fetchTopTraders(
      topFilter,
      AvailableDexs.find((dex) => dex.name === dexFilter)?.key
    );
  }, [topFilter, dexFilter]);

  useEffect(() => {
    if (account?.address) {
      fetchUserData(account.address);
    }
  }, [account?.address]);

  return (
    <div className="text-black-900 w-full">
      <div className="flex flex-col items-center justify-start px-5 w-full">
        <IntroFilter
          topFilter={topFilter}
          setTopFilter={setTopFilter}
          dexFilter={dexFilter}
          setDexFilter={setDexFilter}
        />
        {loaded ? (
          <div className="w-full grid grid-cols-3 gap-4">
            {topTraders.map((trader) => (
              <TraderCard key={trader.address} trader={trader} />
            ))}
          </div>
        ) : (
          <div className="w-full h-28 flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useEffect } from 'react';

import { useCurrentAccount } from '@mysten/dapp-kit';
import { usePathname } from 'next/navigation';

import ComingSoon from './components/ComingSoon';
import PastTrades from './components/PastTrades';
import TraderHeader from './components/TraderHeader';
import TradersHoldings from './components/TradersHoldings';
import TradersStats from './components/TraderStats';
import { fetchPastTrades } from './utils/fetchPastTrades';
import { fetchTradersStats } from './utils/fetchTradersStats';
import { fetchUserHoldings } from './utils/fetchUserHoldings';
import fetchUserData from '../HomePage/utils/fetchUserData';

const IndividualTradersModule = () => {
  const pathname = usePathname();
  const address = pathname.split('/').pop() || '';

  const account = useCurrentAccount();

  useEffect(() => {
    if (address) {
      fetchPastTrades(address);
      fetchTradersStats(address);
      fetchUserHoldings(address);
    }
  }, [address]);

  useEffect(() => {
    if (account?.address) fetchUserData(account?.address);
  }, [account?.address]);

  return (
    <div className="w-full flex flex-col items-center justify-start h-[calc(100vh-116px)]">
      <TraderHeader address={address} />
      <div className="w-full flex items-stretch justify-center h-full">
        <ComingSoon />
        <div className="w-full h-full border-x-[1px] border-black-400 flex flex-col items-center justify-start">
          <TradersStats />
          <TradersHoldings />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start">
          <PastTrades />
        </div>
      </div>
    </div>
  );
};

export default IndividualTradersModule;

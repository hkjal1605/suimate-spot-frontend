'use client';

import React from 'react';

import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider
} from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') }
});

const queryClient = new QueryClient();

const WalletProviderWrapper = (props: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider autoConnect>{props.children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default WalletProviderWrapper;

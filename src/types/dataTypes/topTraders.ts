import {
  type CoinBalance,
  type CoinMetadata
} from '@mysten/sui.js/dist/cjs/client';

export type TopTradersType = {
  totalLiquidityProvided: number;
  totalSwapsMade: number;
  swapData: {
    cetus: {
      totalSwapsMade: number;
      totalVolumeSwapped: number;
    };
    kriya: {
      totalSwapsMade: number;
      totalVolumeSwapped: number;
    };
    turbos: {
      totalSwapsMade: number;
      totalVolumeSwapped: number;
    };
  };
  lastSwapTimestampMs: number;
  lastLiquidityProvidedTimestampMs: number;
  liquidityFeesCollected: number;
  totalVolumeSwapped: number;
  lastTradedTimestampMs: number;
  totalStaked: number;
  address: string;
  balances: (CoinMetadata & CoinBalance & { balanceInUsd: string })[];
};

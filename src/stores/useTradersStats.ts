import { createStore } from "zustand/vanilla";

import type { TradersStatsType } from "@/types/dataTypes/traderStats";
import createBoundedUseStore from "@/utils/createBoundedUseStore";

type State = {
  stats: TradersStatsType;
  loaded: boolean;
};

type Action = {
  setStats: (statsData: State["stats"]) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const tradersStatsStore = createStore<State & Action>()((set) => ({
  stats: {
    totalLiquidityProvided: 0,
    totalSwapsMade: 0,
    swapData: {
      cetus: {
        totalSwapsMade: 0,
        totalVolumeSwapped: 0,
      },
      kriya: {
        totalSwapsMade: 0,
        totalVolumeSwapped: 0,
      },
      turbos: {
        totalSwapsMade: 0,
        totalVolumeSwapped: 0,
      },
    },
    lastSwapTimestampMs: 0,
    lastLiquidityProvidedTimestampMs: 0,
    liquidityFeesCollected: 0,
    totalVolumeSwapped: 0,
    lastTradedTimestampMs: 0,
    totalStaked: 0,
  },
  loaded: false,
  setStats: (stats) =>
    set(() => ({
      stats,
      loaded: true,
    })),
}));

// Create a hook to be used inside react components
const useTradersStatsStore = createBoundedUseStore(tradersStatsStore);

export default useTradersStatsStore;

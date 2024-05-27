import { createStore } from "zustand/vanilla";

import type { TopTradersType } from "@/types/dataTypes/topTraders";
import createBoundedUseStore from "@/utils/createBoundedUseStore";

type State = {
  topTraders: TopTradersType[];
  loaded: boolean;
};

type Action = {
  setTopTraders: (tradersData: State["topTraders"]) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const topTradersStore = createStore<State & Action>()((set) => ({
  topTraders: [],
  loaded: false,
  setTopTraders: (topTraders) =>
    set(() => ({
      topTraders,
      loaded: true,
    })),
}));

// Create a hook to be used inside react components
const useTopTradersStore = createBoundedUseStore(topTradersStore);

export default useTopTradersStore;

import { createStore } from 'zustand/vanilla';

import type { UserHoldingsType } from '@/types/dataTypes/userHoldings';
import createBoundedUseStore from '@/utils/createBoundedUseStore';

type State = {
  holdings: UserHoldingsType[];
  loaded: boolean;
};

type Action = {
  setHoldings: (holdings: State['holdings']) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const userHoldingsStore = createStore<State & Action>()((set) => ({
  holdings: [],
  loaded: false,
  setHoldings: (holdings) =>
    set(() => ({
      holdings,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const useUserHoldingsStore = createBoundedUseStore(userHoldingsStore);

export default useUserHoldingsStore;

import { createStore } from "zustand/vanilla";

import createBoundedUseStore from "@/utils/createBoundedUseStore";

type State = {
  traderAlertsList: string[];
  loaded: boolean;
};

type Action = {
  setTraderAlertsList: (traderAlertsList: State["traderAlertsList"]) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const traderAlertsListStore = createStore<State & Action>()((set) => ({
  traderAlertsList: [],
  loaded: false,
  setTraderAlertsList: (traderAlertsList) =>
    set(() => ({
      traderAlertsList,
      loaded: true,
    })),
}));

// Create a hook to be used inside react components
const useTraderAlertsListStore = createBoundedUseStore(traderAlertsListStore);

export default useTraderAlertsListStore;

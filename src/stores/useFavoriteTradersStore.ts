import { createStore } from "zustand/vanilla";

import createBoundedUseStore from "@/utils/createBoundedUseStore";

type State = {
  favoriteTraders: string[];
  loaded: boolean;
};

type Action = {
  setFavoriteTraders: (favoriteTraders: State["favoriteTraders"]) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const favoriteTradersStore = createStore<State & Action>()((set) => ({
  favoriteTraders: [],
  loaded: false,
  setFavoriteTraders: (favoriteTraders) =>
    set(() => ({
      favoriteTraders,
      loaded: true,
    })),
}));

// Create a hook to be used inside react components
const useFavoriteTradersStore = createBoundedUseStore(favoriteTradersStore);

export default useFavoriteTradersStore;

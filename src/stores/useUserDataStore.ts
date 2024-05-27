import { createStore } from 'zustand/vanilla';

import type { UserDataType } from '@/types/dataTypes/userData';
import createBoundedUseStore from '@/utils/createBoundedUseStore';

type State = {
  userData: UserDataType;
  loaded: boolean;
};

type Action = {
  setUserData: (userData: State['userData']) => void;
};

// using createStore from zustand/vanilla instead of store because we want to use this state outside of react components
export const userDataStore = createStore<State & Action>()((set) => ({
  userData: {
    address: '0x',
    favorites: [],
    alerts: []
  },
  loaded: false,
  setUserData: (userData) =>
    set(() => ({
      userData,
      loaded: true
    }))
}));

// Create a hook to be used inside react components
const useUserDataStore = createBoundedUseStore(userDataStore);

export default useUserDataStore;

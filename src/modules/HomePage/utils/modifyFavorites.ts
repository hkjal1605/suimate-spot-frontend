import ApiService from '@/services/apiService';
import { favoriteTradersStore } from '@/stores/useFavoriteTradersStore';
import { logger } from '@/utils/Logger';

export const addToFavorite = async (
  userAddress: string,
  traderAddress: string
) => {
  try {
    favoriteTradersStore.setState({
      favoriteTraders: [
        ...favoriteTradersStore.getState().favoriteTraders,
        traderAddress
      ]
    });

    await ApiService.addTraderToFavoriteList(userAddress, traderAddress);
  } catch (error) {
    logger.error(error);
    favoriteTradersStore.setState({
      favoriteTraders: favoriteTradersStore
        .getState()
        .favoriteTraders.filter((address) => address !== traderAddress)
    });
  }
};

export const removeFromFavorite = async (
  userAddress: string,
  traderAddress: string
) => {
  try {
    favoriteTradersStore.setState({
      favoriteTraders: favoriteTradersStore
        .getState()
        .favoriteTraders.filter((address) => address !== traderAddress)
    });

    await ApiService.removeTraderFromFavoriteList(userAddress, traderAddress);
  } catch (error) {
    logger.error(error);
    favoriteTradersStore.setState({
      favoriteTraders: [
        ...favoriteTradersStore.getState().favoriteTraders,
        traderAddress
      ]
    });
  }
};

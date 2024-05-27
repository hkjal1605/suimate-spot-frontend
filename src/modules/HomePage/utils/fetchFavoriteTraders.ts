import ApiService from '@/services/apiService';
import { favoriteTradersStore } from '@/stores/useFavoriteTradersStore';
import { logger } from '@/utils/Logger';

const fetchFavoriteTraders = async (userAddress: string) => {
  try {
    favoriteTradersStore.setState({
      loaded: false
    });

    const response = await ApiService.getFavoriteTraders(userAddress);

    favoriteTradersStore.setState({
      favoriteTraders: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};

export default fetchFavoriteTraders;

import ApiService from "@/services/apiService";
import { favoriteTradersStore } from "@/stores/useFavoriteTradersStore";
import { traderAlertsListStore } from "@/stores/useTraderAlertsStore";
import { userDataStore } from "@/stores/useUserDataStore";
import { logger } from "@/utils/Logger";

const fetchUserData = async (userAddress: string) => {
  try {
    userDataStore.setState({
      loaded: false,
    });

    const userData = await ApiService.getUserData(userAddress);

    userDataStore.setState({
      userData: userData.data,
      loaded: true,
    });

    favoriteTradersStore.setState({
      favoriteTraders: userData.data.favorites,
      loaded: true,
    });

    traderAlertsListStore.setState({
      traderAlertsList: userData.data.alerts,
    });
  } catch (error) {
    logger.error(error);
  }
};

export default fetchUserData;

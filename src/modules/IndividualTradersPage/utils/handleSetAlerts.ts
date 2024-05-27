import ApiService from '@/services/apiService';
import { traderAlertsListStore } from '@/stores/useTraderAlertsStore';
import { logger } from '@/utils/Logger';

export const addTraderToAlertsList = async (
  userAddress: string,
  traderAddress: string
) => {
  try {
    await ApiService.addTraderToAlertList(userAddress, traderAddress);
    traderAlertsListStore.setState((state) => ({
      traderAlertsList: [...state.traderAlertsList, traderAddress]
    }));
  } catch (err) {
    logger.error(err);
  }
};

export const removeTraderFromAlertsList = async (
  userAddress: string,
  traderAddress: string
) => {
  try {
    await ApiService.removeTraderFromAlertList(userAddress, traderAddress);
    traderAlertsListStore.setState((state) => ({
      traderAlertsList: state.traderAlertsList.filter(
        (address) => address !== traderAddress
      )
    }));
  } catch (err) {
    logger.error(err);
  }
};

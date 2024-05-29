import ApiService from '@/services/apiService';
import { userHoldingsStore } from '@/stores/useUserHoldingsStore';
import { logger } from '@/utils/Logger';

export const fetchUserHoldings = async (address: string) => {
  try {
    userHoldingsStore.setState({
      loaded: false
    });

    const response = await ApiService.getTraderHoldings(address);

    userHoldingsStore.setState({
      holdings: response.data,
      loaded: true
    });
  } catch (error) {
    logger.error(error);
  }
};

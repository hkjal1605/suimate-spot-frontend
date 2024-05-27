import ApiService from "@/services/apiService";
import { tradersStatsStore } from "@/stores/useTradersStats";
import { logger } from "@/utils/Logger";

export const fetchTradersStats = async (address: string) => {
  try {
    tradersStatsStore.setState({
      loaded: false,
    });

    const response = await ApiService.getTraderStats(address);

    tradersStatsStore.setState({
      stats: response.data,
      loaded: true,
    });
  } catch (error) {
    logger.error(error);
  }
};

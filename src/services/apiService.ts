import axios from "axios";

import type { GetTopTradersApiPayload } from "@/types/apiPayload/getTopSpotTraders";

import {
  ALERTS_FUNCTIONS_ENDPOINT,
  GET_PAST_TRADES_ENDPOINT,
  GET_TOP_TRADERS_ENDPOINT,
  GET_TRADER_HOLDINGS_ENDPOINT,
  GET_TRADER_STATS_ENDPOINT,
  USER_FUNCTIONS_ENDPOINT,
} from "./constants";

export default class ApiService {
  static getTopSpotTraders(data: GetTopTradersApiPayload) {
    return axios.post(GET_TOP_TRADERS_ENDPOINT, data);
  }

  static getTraderStats(address: string) {
    return axios.get(`${GET_TRADER_STATS_ENDPOINT}?address=${address}`);
  }

  static getTraderHoldings(address: string) {
    return axios.get(`${GET_TRADER_HOLDINGS_ENDPOINT}?address=${address}`);
  }

  static getPastTrades(address: string) {
    return axios.get(`${GET_PAST_TRADES_ENDPOINT}?address=${address}`);
  }

  static createUser(userAddress: string) {
    return axios.post(`${USER_FUNCTIONS_ENDPOINT}/createUser`, { userAddress });
  }

  static addTraderToFavoriteList(userAddress: string, traderAddress: string) {
    return axios.post(`${USER_FUNCTIONS_ENDPOINT}/addToFavorites`, {
      userAddress,
      traderAddress,
    });
  }

  static removeTraderFromFavoriteList(
    userAddress: string,
    traderAddress: string
  ) {
    return axios.post(`${USER_FUNCTIONS_ENDPOINT}/removeFromFavorites`, {
      userAddress,
      traderAddress,
    });
  }

  static getFavoriteTraders(userAddress: string) {
    return axios.get(
      `${USER_FUNCTIONS_ENDPOINT}/getUserFavorites?userAddress=${userAddress}`
    );
  }

  static getUserData(userAddress: string) {
    return axios.get(
      `${USER_FUNCTIONS_ENDPOINT}/userData?userAddress=${userAddress}`
    );
  }

  static getChatId(userAddress: string) {
    return axios.get(
      `${ALERTS_FUNCTIONS_ENDPOINT}/getChatId?userAddress=${userAddress}`
    );
  }

  static addTraderToAlertList(userAddress: string, traderAddress: string) {
    return axios.post(`${ALERTS_FUNCTIONS_ENDPOINT}/addTraderToAlerts`, {
      userAddress,
      traderAddress,
    });
  }

  static removeTraderFromAlertList(userAddress: string, traderAddress: string) {
    return axios.post(`${ALERTS_FUNCTIONS_ENDPOINT}/removeTraderFromAlerts`, {
      userAddress,
      traderAddress,
    });
  }

  static getUserAlertList(userAddress: string) {
    return axios.get(
      `${ALERTS_FUNCTIONS_ENDPOINT}/getTraderAlertsListForUser?userAddress=${userAddress}`
    );
  }
}

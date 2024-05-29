import {
  Aftermath,
  type RouterTradeRoute,
  type Router,
  type ExternalFee,
  type RouterTradeCoin
} from 'aftermath-ts-sdk';

import { MY_ADDRESS, SLIPPAGE_TOLERANCE, SWAP_FEE_PERCENT } from '@/constants';
import CoinsList from '@/constants/coinsList';

import { toBigNumberFromDecimal, toDecimalString } from '../parseBignum';

class AftermathSdk {
  private afSdk: Aftermath;

  // @ts-ignore
  private router: Router;

  constructor() {
    this.afSdk = new Aftermath('MAINNET');
    this.initializeSdk();
  }

  async initializeSdk() {
    await this.afSdk.init();
    this.router = this.afSdk.Router();
  }

  async getSwapRoute(
    coinInType: string,
    coinOutType: string,
    amountIn: string
  ) {
    try {
      const coinIn = CoinsList.find((coin) => coin.coinID === coinInType)!;
      const coinOut = CoinsList.find((coin) => coin.coinID === coinOutType)!;

      const route = await this.router.getCompleteTradeRouteGivenAmountIn({
        coinInType,
        coinOutType,
        coinInAmount: BigInt(toBigNumberFromDecimal(amountIn, coinIn.decimals)),
        referrer: MY_ADDRESS,
        externalFee: {
          recipient: MY_ADDRESS,
          feePercentage: SWAP_FEE_PERCENT
        }
      });

      return {
        ...route,
        outputAmount: toDecimalString(
          route.coinOut.amount.toString(),
          coinOut.decimals,
          2
        )
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async performSwap(
    walletAddress: string,
    routeData: {
      coinIn: RouterTradeCoin;
      coinOut: RouterTradeCoin;
      spotPrice: number;
      routes: RouterTradeRoute[];
      referrer?: string;
      externalFee?: ExternalFee;
    }
  ) {
    try {
      const tx = await this.router.getTransactionForCompleteTradeRoute({
        walletAddress,
        completeRoute: routeData,
        slippage: SLIPPAGE_TOLERANCE
      });

      tx.setSender(walletAddress);
      return tx;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const aftermathSdk = new AftermathSdk();
export default aftermathSdk;

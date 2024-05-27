import { type CoinMetadata } from "@mysten/sui.js/dist/cjs/client";

export type PastTradesType = {
  amountIn: string;
  amountOut: string;
  atob: boolean;
  event: string;
  eventSeq: string;
  fees: string;
  platform: string;
  pool: string;
  poolType: string;
  sender: string;
  timestampMs: number;
  tokenAType: string;
  tokenBType: string;
  totalLiquidityInPool: string;
  txnDigest: string;
  tokenAMetadata: CoinMetadata;
  tokenBMetadata: CoinMetadata;
};

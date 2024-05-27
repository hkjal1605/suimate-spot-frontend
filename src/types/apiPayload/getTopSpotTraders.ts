import type { OrderTradersBy } from "@/modules/HomePage/types/orderTradersBy";

export type GetTopTradersApiPayload = {
  orderBy: OrderTradersBy;
  limit?: number;
  platform?: string;
};

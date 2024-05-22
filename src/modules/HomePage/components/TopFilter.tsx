"use client";

import React from "react";

import DropdownComponent from "@/components/Dropdown";

import type { OrderTradersBy } from "../types/orderTradersBy";

interface IPropType {
  topFilter: OrderTradersBy;
  setTopFilter: (topFilter: OrderTradersBy) => void;
}

const Options: Record<OrderTradersBy, string> = {
  totalSwapsMade: "Most Swaps Made",
  totalVolumeSwapped: "Largest Swap Volume",
  lastTradeDate: "Most Recent Swap",
};

const TopFilter = (props: IPropType) => {
  const { topFilter, setTopFilter } = props;

  return (
    <DropdownComponent
      title={<p className="text-base text-blue-200">{Options[topFilter]}</p>}
      menuItems={Object.keys(Options).map((key) => {
        const value = Options[key as OrderTradersBy];

        return {
          label: (
            <p
              className={`text-sm ${topFilter === key ? "text-blue-200" : "text-black-800"}`}
              onClick={() => setTopFilter(key as OrderTradersBy)}
            >
              {value}
            </p>
          ),
          key: 0,
        };
      })}
    />
  );
};

export default TopFilter;

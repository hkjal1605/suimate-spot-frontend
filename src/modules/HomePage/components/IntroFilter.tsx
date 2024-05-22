import React from "react";

import DexFilter from "./DexFilter";
import type { OrderTradersBy } from "../types/orderTradersBy";
import TopFilter from "./TopFilter";

interface IPropType {
  topFilter: OrderTradersBy;
  setTopFilter: (topFilter: OrderTradersBy) => void;
  dexFilter: string;
  setDexFilter: (dexFilter: string) => void;
}

const IntroFilter = (props: IPropType) => {
  const { topFilter, setTopFilter, dexFilter, setDexFilter } = props;

  return (
    <div className="flex w-full justify-start items-center py-4 gap-2">
      <p className="text-xl text-black-1000">Copy on-chain traders with</p>
      <TopFilter topFilter={topFilter} setTopFilter={setTopFilter} />
      <p className="text-xl text-black-1000">who performed spot exchanges on</p>
      <DexFilter dexFilter={dexFilter} setDexFilter={setDexFilter} />
    </div>
  );
};

export default IntroFilter;

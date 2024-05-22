"use client";

import React from "react";

import Image from "next/image";

import DropdownComponent from "@/components/Dropdown";

interface IPropType {
  dexFilter: string;
  setDexFilter: (dexFilter: string) => void;
}

const AvailableDexs = [
  {
    image: "/assets/images/all-options.png",
    name: "All Spot Exchanges",
  },
  {
    image: "/assets/images/platforms/cetus.webp",
    name: "Cetus",
  },
  {
    image: "/assets/images/platforms/kriya.webp",
    name: "KriyaDex",
  },
  {
    image: "/assets/images/platforms/aftermath.webp",
    name: "Aftermath Finance",
  },
  {
    image: "/assets/images/platforms/turbos.webp",
    name: "Turbos",
  },
];

const DexFilter = (props: IPropType) => {
  const { dexFilter, setDexFilter } = props;

  return (
    <DropdownComponent
      title={
        <div className="flex items-center justify-start">
          <Image
            src={
              AvailableDexs.find((dex) => dex.name === dexFilter)?.image || ""
            }
            alt={dexFilter}
            width={22}
            height={22}
            unoptimized={true}
            className="rounded-full"
          />
          <p className="text-base text-blue-200 ml-1.5">{dexFilter}</p>
        </div>
      }
      menuItems={[
        ...AvailableDexs.map((dex, index) => {
          return {
            label: (
              <div
                className="flex items-center justify-start"
                onClick={() => setDexFilter(dex.name)}
              >
                <Image
                  src={dex.image}
                  alt={dex.name}
                  width={18}
                  height={18}
                  unoptimized={true}
                  className="rounded-full"
                />
                <p className="text-sm text-blue-200 ml-1.5">{dex.name}</p>
              </div>
            ),
            key: index + 1,
          };
        }),
        {
          label: (
            <p className="text-xs text-black-600">More DEXs coming soon</p>
          ),
          key: 5,
        },
      ]}
    />
  );
};

export default DexFilter;

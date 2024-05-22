"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ConnectWallet from "../ConnectWallet";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-start items-center py-3 px-5 border-b-[1px] border-black-400 gap-5">
      <div className="flex justify-start items-center gap-2">
        <Image
          src="/assets/images/logo-white.png"
          alt="SuiMate"
          width={40}
          height={40}
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl font-semibold text-black-1000 leading-7">
            SuiMate
          </p>
          <p className="text-sm font-normal text-blue-300">
            Copy Trading on Sui
          </p>
        </div>
        <a href="perps.suimate.trade" target="_blank" className="ml-10">
          <p className="text-black-900 text-base font-medium">Perps</p>
        </a>
        <a href="perps.suimate.trade" target="_blank" className="ml-10">
          <p className="text-blue-200 text-base font-medium">Spot</p>
        </a>
        <a href="perps.suimate.trade" target="_blank" className="ml-10">
          <p className="text-black-900 text-base font-medium">
            Liquidity Supply
          </p>
        </a>
      </div>
      <div className="flex justify-end items-center relative ml-auto">
        <Link href="/">
          <p className="text-black-900 text-base font-medium w-32 text-center cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/markets">
          <p className="text-black-900 text-base font-medium w-32 text-center cursor-pointer">
            Markets
          </p>
        </Link>
        <Link href="/traders">
          <p className="text-black-900 text-base font-medium w-32 text-center cursor-pointer">
            Traders Explorer
          </p>
        </Link>
        <div
          className={`absolute bottom-[-25px] w-32 bg-blue-200 h-2 rounded-t transition-all duration-300 ${pathname === "/" ? "left-0" : pathname === "/markets" ? "left-32" : "left-64"}`}
        />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Header;

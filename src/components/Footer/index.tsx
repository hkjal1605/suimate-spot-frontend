import React from 'react';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 px-5 border-t-[1px] border-black-400 fixed bottom-0">
      <div className="flex justify-start items-center gap-1">
        <p className="text-sm text-black-800">Last updated at:</p>
        <p className="text-sm text-yellow-300 font-medium">
          04/27/2024 12:00:00 UTC
        </p>
      </div>
      <p className="text-base text-black-1000 font-medium">
        SuiMate | Copy Trading Platform for DEXs on Sui
      </p>
      <div className="flex justify-end items-center gap-1">
        <p className="text-sm text-black-800">Built with love by:</p>
        <p className="text-sm text-blue-300 font-medium">Harsh Kumar Jha</p>
        <Link href="/contact">
          <p className="text-sm text-blue-200 underline">(Contact)</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

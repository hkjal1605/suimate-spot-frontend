'use client';

import React, { useState } from 'react';

import { useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit';
import Image from 'next/image';

import getEllipsisTxt from '@/utils/getEllipsisText';

import ConnectWalletModal from './ConnectWalletModal';
import DropdownComponent from '../Dropdown';

const ConnectWallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const account = useCurrentAccount();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div>
      {account ? (
        <DropdownComponent
          menuItems={[
            {
              label: (
                <div
                  className="flex justify-start items-center gap-1 cursor-pointer"
                  onClick={() => disconnect()}
                >
                  <Image
                    src="/assets/images/disconnect.svg"
                    alt="Disconnect"
                    width={14}
                    height={14}
                  />
                  <p className="text-sm text-red-300">Disconnect</p>
                </div>
              ),
              key: 1
            }
          ]}
        >
          <div className="py-1 px-2.5 rounded-full bg-black-200 border-2 border-black-600 flex justify-center items-center gap-1 cursor-pointer hover:bg-black-300 transition-all duration-200">
            <p className="text-black-900 text-sm font-medium">
              {getEllipsisTxt(account.address, 6, 4)}
            </p>
          </div>
        </DropdownComponent>
      ) : (
        <div
          className="py-1 px-2.5 rounded-full bg-black-200 border-2 border-black-600 flex justify-center items-center gap-1 cursor-pointer hover:bg-black-300 transition-all duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          <p className="text-black-900 text-sm font-medium">Connect Wallet</p>
        </div>
      )}
      <ConnectWalletModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default ConnectWallet;

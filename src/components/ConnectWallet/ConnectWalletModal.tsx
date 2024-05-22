"use client";

import React from "react";

import { useWallets, useConnectWallet } from "@mysten/dapp-kit";
import { notification } from "antd";
import Image from "next/image";

import CustomModal from "@/components/CustomModal";
import mixpanelAnalytics from "@/utils/Analytics/mixpanel";

interface IPropType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ConnectWalletModal = (props: IPropType) => {
  const { isOpen, setIsOpen } = props;
  const wallets = useWallets();
  const { mutate: connect } = useConnectWallet();

  const handleConnectWalletSuccess = (data: any) => {
    notification.success({ message: "Wallet Connected" });
    setIsOpen(false);
    mixpanelAnalytics.identify(data.accounts[0].address);
  };

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-200 border-[1px] border-black-400 rounded-lg flex-col items-start justify-center gap-4">
        <p className="text-base text-black-800">Connect Your Wallet</p>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="bg-black-300 w-full rounded-md cursor-pointer border-2 border-black-400 hover:border-black-500 flex justify-start items-center px-3 py-2 gap-2"
              onClick={() => {
                connect(
                  { wallet },
                  {
                    onSuccess: handleConnectWalletSuccess,
                  }
                );
              }}
            >
              <Image
                src={wallet.icon}
                alt={wallet.name}
                width={24}
                height={24}
              />
              <p className="text-black-800 text-base font-medium">
                {wallet.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CustomModal>
  );
};

export default ConnectWalletModal;

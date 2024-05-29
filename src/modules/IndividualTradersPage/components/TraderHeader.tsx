'use client';

import React, { useState } from 'react';

import { useCurrentAccount } from '@mysten/dapp-kit';
import { notification } from 'antd';
import Avatar from 'boring-avatars';
import Image from 'next/image';

// import { TELEGRAM_BOT_URL } from '@/constants';
// import fetchUserData from '@/modules/HomePage/utils/fetchUserData';
import { TELEGRAM_BOT_URL } from '@/constants';
import {
  addToFavorite,
  removeFromFavorite
} from '@/modules/HomePage/utils/modifyFavorites';
import useFavoriteTradersStore from '@/stores/useFavoriteTradersStore';
import useTraderAlertsListStore from '@/stores/useTraderAlertsStore';
import useUserDataStore from '@/stores/useUserDataStore';
import getEllipsisTxt from '@/utils/getEllipsisText';

import SwapModal from './SwapModal';
import {
  addTraderToAlertsList,
  removeTraderFromAlertsList
} from '../utils/handleSetAlerts';

interface IPropType {
  address: string;
}

const TraderHeader = (props: IPropType) => {
  const account = useCurrentAccount();
  const { userData } = useUserDataStore();
  const { traderAlertsList } = useTraderAlertsListStore();
  const { favoriteTraders } = useFavoriteTradersStore();

  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const { address } = props;

  const handleSetAlertsClick = async () => {
    if (!account?.address) {
      notification.error({
        message: 'Please connect your wallet to set alerts'
      });
      return;
    }

    if (!userData.chatId) {
      window.open(`${TELEGRAM_BOT_URL}?start=${userData.userId}`, '_blank');
      return;
    }

    if (traderAlertsList.includes(address)) {
      await removeTraderFromAlertsList(account?.address, address);
      notification.success({
        message: 'Trader removed from alerts list'
      });
    } else {
      await addTraderToAlertsList(account?.address, address);
      notification.success({
        message: 'Trader added to alerts list'
      });
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    notification.success({
      message: 'Address copied to clipboard'
    });
  };

  return (
    <div className="w-full flex px-5 py-3 justify-start items-center gap-4 border-b-[1px] border-black-400">
      <Avatar
        size={40}
        name={address}
        variant="beam"
        colors={['#96ceb4', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />
      <div className="flex flex-col items-start justify-center">
        <div className="flex gap-1.5 justify-start items-center">
          <p className="text-black-1000 text-base font-medium">
            {getEllipsisTxt(address)}
          </p>
          <Image
            src="/assets/images/copy.svg"
            alt="Copy"
            width={16}
            height={16}
            className="cursor-pointer"
            onClick={handleCopyAddress}
          />
          <Image
            src={
              favoriteTraders.includes(address)
                ? '/assets/images/star-filled.svg'
                : '/assets/images/star.svg'
            }
            alt="Favourite"
            className="ml-auto cursor-pointer"
            width={16}
            height={16}
            onClick={() => {
              if (!account?.address) return;

              if (!favoriteTraders.includes(address)) {
                addToFavorite(account?.address, address);
              } else {
                removeFromFavorite(account?.address, address);
              }
            }}
          />
          <a href={`https://suivision.xyz/account/${address}`} target="_blank">
            <Image
              src="/assets/images/external.svg"
              alt="View on Explorer"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </a>
        </div>
        <div className="flex justify-start items-center gap-1">
          <p className="text-xs text-black-700">Trader on</p>
          <Image
            src="/assets/images/sui.svg"
            alt="Sui"
            width={18}
            height={18}
          />
          <p className="text-xs text-blue-200">Sui</p>
        </div>
      </div>
      <div className="ml-auto h-10 w-px bg-black-400" />
      <div
        className="flex justify-center items-center gap-1 cursor-pointer"
        onClick={handleSetAlertsClick}
      >
        <Image
          src={
            traderAlertsList.includes(address)
              ? '/assets/images/bell-filled.svg'
              : '/assets/images/bell.svg'
          }
          alt="bell"
          width={16}
          height={16}
        />
        <p className="text-base text-black-800">
          {traderAlertsList.includes(address)
            ? 'Notifications ON'
            : 'Notify on New Trades'}
        </p>
      </div>
      <div className=" h-10 w-px bg-black-400" />
      <div
        className="flex justify-center items-center gap-1 cursor-pointer"
        onClick={() => {
          setIsSwapModalOpen(true);
        }}
      >
        <Image
          src="/assets/images/trade.svg"
          alt="trade"
          width={16}
          height={16}
        />
        <p className="text-base text-black-800">Perform a Swap</p>
      </div>
      <SwapModal isOpen={isSwapModalOpen} setIsOpen={setIsSwapModalOpen} />
    </div>
  );
};

export default TraderHeader;

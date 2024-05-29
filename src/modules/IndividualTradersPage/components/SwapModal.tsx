'use client';

import React, { useEffect, useState } from 'react';

import {
  useCurrentAccount,
  useSignAndExecuteTransactionBlock
} from '@mysten/dapp-kit';
import type { CoinBalance } from '@mysten/sui.js/dist/cjs/client';
import { notification } from 'antd';
import Image from 'next/image';

import CustomModal from '@/components/CustomModal';
import DropdownComponent from '@/components/Dropdown';
import PrimaryButton from '@/components/PrimaryButton';
import CoinsList from '@/constants/coinsList';
import aftermathSdk from '@/utils/Aftermath';
import { toDecimalString } from '@/utils/parseBignum';
import client from '@/utils/sui';

interface IPropType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SwapModal = (props: IPropType) => {
  const { isOpen, setIsOpen } = props;

  const [tokenIn, setTokenIn] = useState('0x2::sui::SUI');
  const [tokenOut, setTokenOut] = useState(
    '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN'
  );
  const [balances, setBalances] = useState<CoinBalance[]>([]);
  const [tokenInAmount, setTokenInAmount] = useState('');
  const [swapRoute, setSwapRoute] = useState<any>();
  const [isSwapRouteLoading, setIsSwapRouteLoading] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  const { mutate: signAndExecuteTransaction } =
    useSignAndExecuteTransactionBlock();
  const account = useCurrentAccount();

  const fetchBalances = async () => {
    if (!account?.address) return;

    const allTokenBalances = await client.getAllBalances({
      owner: account.address
    });

    setBalances(allTokenBalances);
  };

  useEffect(() => {
    if (account?.address) {
      fetchBalances();
    }
  }, [account]);

  const selectedCoin = {
    ...CoinsList.find((coin) => coin.coinID === tokenIn),
    ...balances.find((coin) => coin.coinType === tokenIn)
  };

  const tokenOutData = {
    ...CoinsList.find((coin) => coin.coinID === tokenOut)
  };

  const findSwapRoutes = async () => {
    setIsSwapRouteLoading(true);

    const swapRouteFromSdk = await aftermathSdk.getSwapRoute(
      tokenIn,
      tokenOut,
      tokenInAmount
    );

    setSwapRoute(swapRouteFromSdk);
    setIsSwapRouteLoading(false);
  };

  useEffect(() => {
    if (tokenInAmount && tokenIn && tokenOut) {
      findSwapRoutes();
    }
  }, [tokenInAmount, tokenIn, tokenOut]);

  const handleConfirmSwap = async () => {
    if (!account?.address || !swapRoute) return;

    setIsSwapping(true);

    const { coinIn, coinOut, spotPrice, routes, referrer, externalFee } =
      swapRoute;
    const txb = await aftermathSdk.performSwap(account.address, {
      coinIn,
      coinOut,
      spotPrice,
      routes,
      referrer,
      externalFee
    });

    if (!txb) {
      notification.error({
        message: 'Swap failed',
        description: 'Please try again later'
      });
      return;
    }

    signAndExecuteTransaction(
      {
        transactionBlock: txb,
        account,
        chain: 'sui:mainnet'
      },
      {
        onSuccess: (result) => {
          notification.success({
            message: `Swap successful. View txn: https://suivision.xyz/txblock/${result.digest}`,
            description: 'Your tokens have been swapped'
          });
          setIsSwapping(false);
          setIsOpen(false);
        },
        onError: (error) => {
          console.error('error executing transaction', error);
          setIsSwapping(false);
          notification.error({
            message: 'Swap failed',
            description: 'Please try again later'
          });
        }
      }
    );
  };

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-100 border-[1px] border-black-400 rounded-lg flex-col items-start justify-center gap-5">
        <p className="text-base font-bold text-black-900">Swap your tokens</p>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <p className="text-sm text-black-700">Select Input Token</p>
          <div className="w-full flex justify-start items-stretch gap-2">
            <DropdownComponent
              title={
                <div className="flex items-center justify-start py-1 w-[120px]">
                  <Image
                    src={
                      CoinsList.find((coin) => coin.coinID === tokenIn)
                        ?.iconUrl || ''
                    }
                    alt={tokenIn}
                    width={22}
                    height={22}
                    unoptimized
                    className="rounded-full"
                  />
                  <p className="text-base text-blue-200 ml-1.5">
                    {CoinsList.find((coin) => coin.coinID === tokenIn)?.name}
                  </p>
                </div>
              }
              // @ts-ignore
              menuItems={[
                ...balances.map((coin, index) => {
                  if (CoinsList.find((c) => c.coinID === coin.coinType))
                    return {
                      label: (
                        <div
                          className="flex items-center justify-start py-0.5"
                          onClick={() => setTokenIn(coin.coinType)}
                        >
                          <Image
                            src={
                              CoinsList.find((c) => c.coinID === coin.coinType)
                                ?.iconUrl || ''
                            }
                            alt={coin.coinType}
                            width={22}
                            height={22}
                            unoptimized
                            className="rounded-full"
                          />
                          <p className="text-sm text-blue-200 ml-1.5">
                            {CoinsList.find((c) => c.coinID === coin.coinType)
                              ?.name || ''}
                          </p>
                        </div>
                      ),
                      key: index + 1
                    };

                  return null;
                })
              ]}
            />
            <input
              value={tokenInAmount}
              onChange={(e) => setTokenInAmount(e.target.value)}
              type="number"
              className={`w-full border-[1px] border-black-400 bg-black-300 rounded px-3 text-black-800 border-none outline-none ${
                parseFloat(tokenInAmount) >
                parseFloat(
                  toDecimalString(
                    selectedCoin.totalBalance || 0,
                    selectedCoin.decimals
                  )
                )
                  ? 'outline-red-300'
                  : ''
              }`}
              placeholder="Enter amount"
            />
          </div>
          <div className="flex w-full justify-start items-center gap-2">
            <p className="text-black-700 text-sm">
              Balance:{' '}
              <span className="text-black-900 font-medium">
                {toDecimalString(
                  selectedCoin.totalBalance || 0,
                  selectedCoin.decimals
                )}{' '}
                {selectedCoin.symbol}
              </span>
            </p>
            <p
              className="text-blue-200 cursor-pointer text-sm font-demibold ml-auto"
              onClick={() =>
                setTokenInAmount(
                  toDecimalString(
                    selectedCoin.totalBalance || 0,
                    selectedCoin.decimals
                  )
                )
              }
            >
              Max
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <p className="text-sm text-black-700">Select Output Token</p>
          <div className="w-full flex justify-start items-stretch gap-2">
            <DropdownComponent
              title={
                <div className="flex items-center justify-start py-1 w-[120px]">
                  <Image
                    src={
                      CoinsList.find((coin) => coin.coinID === tokenOut)
                        ?.iconUrl || ''
                    }
                    alt={tokenOut}
                    width={22}
                    height={22}
                    unoptimized
                    className="rounded-full"
                  />
                  <p className="text-base text-blue-200 ml-1.5">
                    {CoinsList.find((coin) => coin.coinID === tokenOut)?.name}
                  </p>
                </div>
              }
              // @ts-ignore
              menuItems={[
                ...CoinsList.map((coin, index) => {
                  return {
                    label: (
                      <div
                        className="flex items-center justify-start py-0.5"
                        onClick={() => setTokenOut(coin.coinID)}
                      >
                        <Image
                          src={coin?.iconUrl || ''}
                          alt={coin.coinType}
                          width={22}
                          height={22}
                          unoptimized
                          className="rounded-full"
                        />
                        <p className="text-sm text-blue-200 ml-1.5">
                          {coin.name || ''}
                        </p>
                      </div>
                    ),
                    key: index + 1
                  };
                })
              ]}
            />
            <div className="w-full border-[1px] border-black-400 bg-black-300 rounded px-3 flex justify-start items-center">
              <p className="text-black-800 text-base">
                {swapRoute?.outputAmount || 0}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <p className="text-sm text-black-900">
            You will receive {swapRoute?.outputAmount} {tokenOutData.symbol} for
            swapping {tokenInAmount} {selectedCoin.symbol}
          </p>
        </div>
        <PrimaryButton
          disabled={isSwapRouteLoading || isSwapping}
          onClick={handleConfirmSwap}
        >
          <p className="text-sm text-black-800">
            {isSwapRouteLoading
              ? 'Finding the best route...'
              : isSwapping
                ? 'Txn in progress...'
                : swapRoute
                  ? 'Confirm Swap'
                  : 'No Route Found'}
          </p>
        </PrimaryButton>
        <div className="flex justify-center items-center w-full gap-1">
          <p className="text-black-700 text-xs">Powered by</p>
          <Image
            src="/assets/images/platforms/aftermath.webp"
            alt="Aftermath"
            unoptimized
            width={20}
            height={20}
            className="rounded-full"
          />
          <p className="text-black-700 text-xs">Aftermath Finance</p>
        </div>
      </div>
    </CustomModal>
  );
};

export default SwapModal;

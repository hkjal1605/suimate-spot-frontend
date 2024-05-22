'use client';

import React, { useEffect } from 'react';

import { notification } from 'antd';
import Image from 'next/image';

import CustomModal from '@/components/CustomModal';
import mixpanelAnalytics from '@/utils/Analytics/mixpanel';

import PrimaryButton from '../PrimaryButton';

interface IPropType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  featureName: string;
}

const ComingSoonModal = (props: IPropType) => {
  const { isOpen, setIsOpen, featureName } = props;

  useEffect(() => {
    if (isOpen) {
      mixpanelAnalytics.track('Coming Soon Modal Opened', { featureName });
    }
  }, [isOpen]);

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-200 border-[1px] border-black-400 rounded-lg flex-col items-center justify-center">
        <Image
          src="/assets/images/building-block.png"
          alt="block"
          width={40}
          height={40}
        />
        <p className="text-2xl text-blue-200 font-semibold mt-3">
          Building New Features
        </p>
        <p className="text-xl font-bold text-black-700 -mt-1.5">
          Block by Block
        </p>
        <p className="text-sm text-black-800 mt-3">
          Working very hard to ship this feature soon!
        </p>
        <p className="text-sm text-black-800 mb-4">
          Vote for this feature below so that I know what&apos;s needed the most
        </p>
        <PrimaryButton
          className="!w-2/3"
          onClick={() => {
            mixpanelAnalytics.track('Feature Vote', { featureName });
            notification.success({
              message: 'Vote Submitted'
            });
          }}
        >
          <p className="text-sm text-black-800">
            Vote for {featureName} feature
          </p>
        </PrimaryButton>
      </div>
    </CustomModal>
  );
};

export default ComingSoonModal;

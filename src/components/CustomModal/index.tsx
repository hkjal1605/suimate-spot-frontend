import React from 'react';

import { Modal } from 'antd';

interface IPropType {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  footer?: React.ReactNode;
}

const CustomModal = (props: IPropType) => {
  const { children, isModalOpen, setIsModalOpen, footer } = props;

  const handleOk = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={footer || []}
      closeIcon={null}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;

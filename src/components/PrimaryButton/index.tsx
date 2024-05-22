import React from 'react';

import { Button } from 'antd';

interface IPropType {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'primary' | 'default';
  className?: string;
}

const PrimaryButton = (props: IPropType) => {
  const { children, type, className, onClick, disabled } = props;
  return (
    <Button
      type={type || 'primary'}
      className={`${className || ''} w-full rounded-full bg-blue-200 hover:!bg-blue-100  hover:border-[1px] hover:border-blue-200`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

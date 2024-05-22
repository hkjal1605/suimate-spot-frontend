import React, { type ReactNode } from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

interface IPropType {
  title?: ReactNode;
  menuItems: MenuProps['items'];
  children?: ReactNode;
}

const DropdownComponent = (props: IPropType) => {
  const { menuItems, title, children } = props;

  return (
    <Dropdown
      menu={{ items: menuItems }}
      dropdownRender={(menu) => (
        <div className="bg-black-300 rounded-md">
          {React.cloneElement(menu as React.ReactElement)}
        </div>
      )}
      trigger={['click']}
    >
      {title ? (
        <a onClick={(e) => e.preventDefault()}>
          <div className="cursor-pointer flex justify-center items-center gap-1 bg-black-200 rounded px-3 py-0.5 border-[1px] border-black-500">
            {title}
            <DownOutlined className="text-blue-200 w-3" />
          </div>
        </a>
      ) : (
        children
      )}
    </Dropdown>
  );
};

export default DropdownComponent;

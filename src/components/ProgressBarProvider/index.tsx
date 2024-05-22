'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

interface IPropType {
  children: React.ReactNode;
}

const ProgressBarProvider = (props: IPropType) => {
  return (
    <>
      {props.children}
      <ProgressBar
        height="3px"
        color="#1293f5"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;

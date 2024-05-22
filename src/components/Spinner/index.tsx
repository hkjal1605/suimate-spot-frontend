import React from 'react';

const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black-800" />
    </div>
  );
};

export default Spinner;

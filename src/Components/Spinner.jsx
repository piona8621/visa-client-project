import React from 'react';
import { RingLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <RingLoader color="#36d7b7" size={60} />
    </div>
  );
};

export default Spinner;

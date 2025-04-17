import React, { useDebugValue, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeActiveButton } from '../utils/moreinfoslice';

const MoreInfoOptions = () => {
    const dispatch = useDispatch()
  // State to track the active button
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
    dispatch(changeActiveButton(index))
  };

  return (
    <div className="flex justify-between w-full px-10">
      <button
        className={`flex-1 text-center mx-2 py-2 transition-all ${
          activeButton === 0
            ? "opacity-100 transform -translate-y-1 border-b-4 border-red-500 font-bold"
            : "opacity-50"
        }`}
        onClick={() => handleClick(0)}
      >
        OVERVIEW
      </button>

      <button
        className={`flex-1 text-center mx-2 py-2 transition-all ${
          activeButton === 1
            ? "opacity-100 transform -translate-y-1 border-b-4 border-red-500 font-bold"
            : "opacity-50"
        }`}
        onClick={() => handleClick(1)}
      >
        TRAILERS & MORE
      </button>

      <button
        className={`flex-1 text-center mx-2 py-2 transition-all ${
          activeButton === 2
            ? "opacity-100 transform -translate-y-1 border-b-4 border-red-500 font-bold"
            : "opacity-50"
        }`}
        onClick={() => handleClick(2)}
      >
        MORE LIKE THIS
      </button>
    </div>
  );
};

export default MoreInfoOptions;

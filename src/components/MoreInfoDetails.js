import React from 'react'
import MovieGeneralDetails from './MovieGeneralDetails'
import MoreInfoOptions from './MoreInfoOptions'
import Overview from './Overview'

const MoreInfoDetails = ({ movie }) => {
  return (
    <div className='grid grid-rows-12 min-h-screen overflow-hidden'>

      {/* Row span 4: General Details */}
      <div className='row-span-1'>
        <MovieGeneralDetails movie={movie} />
      </div>

      {/* Row span 1: Options Bar */}
      <div className='row-span-1 mt-10'>
        <MoreInfoOptions />
      </div>

      {/* Row span 7: Overview Content */}
      <div className='row-span-10 overflow-auto'>
        <Overview movie={movie} />
      </div>

    </div>
  );
};


export default MoreInfoDetails
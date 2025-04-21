import React from 'react'
import { useSelector } from 'react-redux'
import MovieGeneralDetails from './MovieGeneralDetails'
import MoreInfoOptions from './MoreInfoOptions'
import Overview from './Overview'
import TrailerAndMore from './TrailerAndMore'

const MoreInfoDetails = ({ movie }) => {
  const activeButton = useSelector((state) => state.moreinfo.activeButton)

  return (
    <div className='grid grid-rows-12 min-h-screen overflow-hidden'>

      {/* Row span 1: General Details */}
      <div className='row-span-1'>
        <MovieGeneralDetails movie={movie} />
      </div>

      {/* Row span 1: Options Bar */}
      <div className='row-span-1 mt-10'>
        <MoreInfoOptions />
      </div>

      {/* Row span 10: Dynamic Content Area */}
      <div className='row-span-10 overflow-auto'>
        {activeButton === 0 && <Overview movie={movie} />}
        {activeButton === 1 && <TrailerAndMore movie={movie} />}
        {/* You can add more like this: */}
        {/* {activeButton === 2 && <MoreLikeThis movie={movie} />} */}
      </div>

    </div>
  )
}

export default MoreInfoDetails

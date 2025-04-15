import React from 'react'
import MovieGeneralDetails from './MovieGeneralDetails'

const MoreInfoDetails = ({movie}) => {
    console.log(movie)
    console.log(movie.runtime)
    // console.log(movie.runtime)
  return (
    <div className='rowgrid = 12'>
        <div className='rowspan=4'>
        <MovieGeneralDetails movie={movie} />
        </div>
    </div>
  )
}

export default MoreInfoDetails
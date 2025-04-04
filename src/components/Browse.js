import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import {addMovies} from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
const Browse = () => {
  useNowPlayingMovies()

  return (
    <div>
      <Header/>
      Browse
   </div>
  )
}

export default Browse

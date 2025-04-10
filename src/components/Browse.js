import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import {addMovies} from '../utils/moviesSlice'
import { useDispatch, useSelector, useStore } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const user = useStore(store => store.user)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      {
        user && (showGptSearch ? <GptSearch/>
          :
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        )
      }
   </div>
  )
}

export default Browse

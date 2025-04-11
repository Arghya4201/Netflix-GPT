import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { changeMainMovie } from '../utils/moviesSlice'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    const dispatch = useDispatch()
    const mainMovie = useSelector(store => store.movies?.mainMovie)
    if(movies === null || mainMovie === null) return

    // const randomIndex = Math.floor(Math.random() * 20) + 1;
    // const mainMovie = movies[randomIndex]   

    const {original_title, overview} = mainMovie

  return (
    <div>
        <VideoBackground movieId={mainMovie.id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer
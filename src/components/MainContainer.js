import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(movies === null) return

    const mainMovie = movies[0]
    const {original_title, overview} = mainMovie

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie={mainMovie}/>
        {/* <VideoTitle title={original_title} overview={overview}/> */}
    </div>
  )
}

export default MainContainer
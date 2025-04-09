import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(movies === null) return

    const randomIndex = Math.floor(Math.random() * 20) + 1;
    const mainMovie = movies[randomIndex]
    const {original_title, overview} = mainMovie

  return (
    <div>
        {/* <VideoTitle title={original_title} overview={overview}/> */}
        <VideoBackground movieId={mainMovie.id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer
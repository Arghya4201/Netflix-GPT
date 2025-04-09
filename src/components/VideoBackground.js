import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useMovieTrailer(movieId)

    return (
        <div className='w-screen absolute'>
            <iframe className='w-screen aspect-video h-full'
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?autoplay=1&mute=1&controls=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
            </iframe>
            {/* <img
                className="w-screen aspect-video object-cover"
                src="https://image.tmdb.org/t/p/w780//yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
                alt="Movie Background"
            /> */}

        </div>
    )
}

export default VideoBackground
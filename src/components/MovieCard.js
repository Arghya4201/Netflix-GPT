import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { changeMainMovie } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'

const MovieCard = ({movie}) => {
    // console.log(IMG_CDN_URL+movie.poster_path)
    const dispatch = useDispatch()
    const handleChangeMainMovie = () => {
        dispatch(changeMainMovie(movie))
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
      <div className="w-48 pr-4 transform transition-transform duration-300 hover:scale-110 hover:z-20" onClick={handleChangeMainMovie}>
        <img alt='Movie Card'
        src={IMG_CDN_URL + movie.poster_path} />
    </div>
  )
}

export default MovieCard
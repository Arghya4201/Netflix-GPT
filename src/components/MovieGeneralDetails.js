import React from 'react'
import useMovieMainDetails from '../hooks/useMovieMainDetails'
import { useSelector } from 'react-redux'
const MovieGeneralDetails = ({ movie }) => {
    useMovieMainDetails(movie.id)
    const generalInfo = useSelector(store => store.moreinfo)
    return (
        <div className='flex justify-between w-full colgrid-12 items-center'>
            <div className='col-span-9'>
                <h1 className='text-6xl font-extrabold'>{movie.title}</h1>
                <p className='w-4/5 opacity-50'>{generalInfo.releaseYear + "    |   " + generalInfo.runtime+"min    |   "+generalInfo.ageRating+"+" }</p>
            </div>
            <div className='col-span-3 text-3xl font-bold'>
                <h1>{generalInfo.rating+ "⭐"}</h1>
            </div>
        </div>
    )
}

export default MovieGeneralDetails
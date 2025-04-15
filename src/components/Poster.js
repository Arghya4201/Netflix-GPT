import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useStore } from 'react-redux'

const Poster = () => {
    const movie = JSON.parse(localStorage.getItem('mainMovie'));
    console.log(movie)
  return (
    <div className='h-screen'>
        <img className='w-full h-4/5 my-5 pt-[20%]' alt='Movie poster'
                src={IMG_CDN_URL + movie.poster_path} />
    </div>
  )
}

export default Poster
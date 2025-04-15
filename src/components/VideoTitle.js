import React from 'react'
import { useSelector, useStore } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const VideoTitle = ({ title, overview }) => {
    const movie = useSelector(store => store.movies.mainMovie)
    const navigate = useNavigate()
    return (
        <div className='pt-[20%] px-24 background-gradient-to-r from-black w-screen aspect-video relative z-1'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-large w-1/2'>{overview}</p>
            <div className='flex gap-4 mt-4'>
                <button className='bg-red-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-red-700 transition hover:bg-opacity-50'>
                    ▶️ Play Now
                </button>
                <button className='bg-gray-500 text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-600 transition' onClick={()=> {
                    localStorage.setItem('mainMovie', JSON.stringify(movie))
                    navigate('/moreinfo')}}>
                ⓘ More Info
                </button>
            </div>

        </div>
    )
}

export default VideoTitle

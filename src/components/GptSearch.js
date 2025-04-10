import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div className='relative min-h-screen'>
            {/* Background image */}
            <div className='absolute inset-0 -z-10'>
                <img
                    src={BG_URL}
                    alt="Netflix Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Foreground components */}
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch

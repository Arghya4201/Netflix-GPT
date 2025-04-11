import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return null;
    // console.log(movies)
    return (
        <div className='px-6'>
            <h1 className="text-white text-3xl py-2 font-bold scrollbar-hide">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex ">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;

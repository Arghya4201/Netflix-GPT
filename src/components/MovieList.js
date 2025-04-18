import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className='px-6'>
            <h1 className="text-white text-3xl py-2 font-bold">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex ">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;

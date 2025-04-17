import React from 'react'
import { API_OPTIONS, IMG_CDN_URL } from '../utils/constants'
import { addTrailerVideo, changeMainMovie } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'

const MovieCard = ({ movie }) => {
  // console.log(IMG_CDN_URL+movie.poster_path)
  const dispatch = useDispatch()
  const handleChangeMainMovie = async() => {
    dispatch(changeMainMovie(movie))
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
  
      if (!json.results) return;
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
  
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Failed to fetch trailer:", err);
    }
  }

  return (
    <div className="w-48 pr-4 transform transition-transform duration-300 hover:scale-110 hover:z-20" onClick={handleChangeMainMovie}>
      <img alt='Movie Card'
        src={IMG_CDN_URL + movie.poster_path} />
    </div>
  )
}

export default MovieCard
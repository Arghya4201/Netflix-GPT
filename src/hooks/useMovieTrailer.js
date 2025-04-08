import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    //Fetch movie trailer video and updating it in redux store
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        // console.log(json)
        //adding safe check
        if(!json.results) return
        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }


    useEffect(() => {
        getMovieVideos()
    }, [])

}
export default useMovieTrailer
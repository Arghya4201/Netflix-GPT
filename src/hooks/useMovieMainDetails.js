import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addReleaseYear, addCertification, addAgeRating, addRuntime, addRating } from "../utils/moreinfoslice";

const useMovieMainDetails = (movie_id) => {
  const dispatch = useDispatch();

  const getReleaseInfo = async () => {
    try {
      // 1. Fetch release year
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const releaseYear = json.release_date
        ? new Date(json.release_date).getFullYear()
        : "Unknown";
      dispatch(addReleaseYear(releaseYear));

      // 2. Fetch certification info
      const certData = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/release_dates`,
        API_OPTIONS
      );
      const certJson = await certData.json();

      let certification = "Not Rated";
      for (const country of certJson.results) {
        for (const release of country.release_dates) {
          if (release.certification && /\d/.test(release.certification)) {
            certification = release.certification;
            break;
          }
        }
        if (certification !== "Not Rated") break;
      }

      dispatch(addAgeRating(certification));
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  const getRunTime = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const runtime = json.runtime ? json.runtime : "Unknown";
      const rating = json.vote_average ? json.vote_average : "Unknown";
      dispatch(addRuntime(runtime));
      dispatch(addRating(rating));
    } catch (err) {
      console.error("Error fetching movie details:", err);
    }
  };

  useEffect(() => {
    if (movie_id) getReleaseInfo();
    if (movie_id) getRunTime();
  }, [movie_id]);
};

export default useMovieMainDetails;

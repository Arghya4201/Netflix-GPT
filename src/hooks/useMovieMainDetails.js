import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addReleaseYear, addCertification, addAgeRating, addRuntime, addRating, addOverView, addCast, addCreatedBy, addGenre, addRecommendations, addVideos } from "../utils/moreinfoslice";

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
      const overview = json.overview ? json.overview : "Unknown";
      dispatch(addRuntime(runtime));
      dispatch(addRating(rating));
      dispatch(addOverView(overview));
    } catch (err) {
      console.error("Error fetching movie runtime", err);
    }
  };

  const getCredits = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      let starring = json.cast
        .filter(person => person.known_for_department === "Acting")
        .map(person => person.name);

      let created_by = (json.crew || [])
        .filter(person => person.known_for_department === "Production")
        .map(person => person.name);

      if (starring.length > 3) {
        starring = starring.slice(0, 3);
      }

      if (created_by.length > 3) {
        created_by = created_by.slice(0, 3);
      }
      dispatch(addCast(starring));
      dispatch(addCreatedBy(created_by));
    } catch (err) {
      console.error("Error fetching movie credits:", err);
    }
  };

  const getGenre = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const genre = json.genres.map((genre) => genre.name);
      dispatch(addGenre(genre));
    } catch (err) {
      console.error("Error fetching movie genre:", err);
    }
  };

  const getRecommendations = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addRecommendations(json.results));
    } catch (err) {
      console.error("Error fetching movie recommendations:", err);
    }
  }

  const getVideos = async() => {
    try{
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,API_OPTIONS);
      const json = await data.json();
      dispatch(addVideos(json.results))
    } catch(err){
      console.error("Error fetching movie videos:", err);
    }
  }

  useEffect(() => {
    if (movie_id) getReleaseInfo();
    if (movie_id) getRunTime();
    if (movie_id) getCredits();
    if(movie_id) getGenre();
    if(movie_id) getRecommendations();
    if(movie_id) getVideos();
  }, [movie_id]);
};

export default useMovieMainDetails;

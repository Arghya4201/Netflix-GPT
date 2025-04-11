import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        mainMovie: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        changeMainMovie: (state, action) => {
            state.mainMovie = action.payload
        }
    }
})

export const { addMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, changeMainMovie } = moviesSlice.actions;
export const { addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
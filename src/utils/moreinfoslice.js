import { createSlice } from "@reduxjs/toolkit";

const moreinfoslice = createSlice({
    name : "primarydetails",
    initialState : {
        releaseYear : null,
        runtime : null,
        ageRating : null,
        rating : null,
        activeButton : 0,
        overview : null,
        cast : [],
        createdby: [],
        Genre: [],
        Recommendations : null,
        videos: null
    },
    reducers : {
        addAgeRating : (state,action) => {
            state.ageRating = action.payload
        },
        addReleaseYear : (state,action) => {
            state.releaseYear = action.payload
        },
        addRuntime : (state,action) => {
            state.runtime = action.payload
        },
        addRating : (state,action) => {
            state.rating = action.payload
        },
        changeActiveButton : (state,action) => {
            state.activeButton = action.payload
        },
        addOverView : (state,action) => {
            state.overview = action.payload
        },
        addCast : (state,action) => {
            state.cast = action.payload
        },
        addCreatedBy : (state,action) => {
            state.createdby = action.payload
        },
        addGenre : (state,action) => {
            state.Genre = action.payload
        },
        addRecommendations : (state,action) => {
            state.Recommendations = action.payload
        },
        addVideos : (state,action) => {
            state.videos = action.payload
        }
    }
})

export const { addAgeRating, addReleaseYear, addRuntime, addRating, changeActiveButton, addOverView, addCast, addCreatedBy, addGenre, addRecommendations, addVideos } = moreinfoslice.actions;
export default moreinfoslice.reducer;
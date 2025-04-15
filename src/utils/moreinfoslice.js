import { createSlice } from "@reduxjs/toolkit";

const moreinfoslice = createSlice({
    name : "primarydetails",
    initialState : {
        releaseYear : null,
        runtime : null,
        ageRating : null,
        rating : null
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
        }
    }
})

export const { addAgeRating, addReleaseYear, addRuntime, addRating } = moreinfoslice.actions;
export default moreinfoslice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const configSLice = createSlice({
    name: "config",
    initialState: {
        language: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})
export const { changeLanguage } = configSLice.actions;
export default configSLice.reducer;
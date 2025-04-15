import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptreducer from "./gptSlice"
import configReducer from "./configSlice"
import moreInfoReducer from "./moreinfoslice"

const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : moviesReducer,
        gpt: gptreducer,
        config: configReducer,
        moreinfo : moreInfoReducer
    }
})

export default appStore
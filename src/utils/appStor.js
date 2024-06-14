import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import MoviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configSliceReducer from "./ConfigSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer, 
        movies : MoviesReducer,
        gpt : gptReducer,
        config : configSliceReducer,
    },
});

export default appStore;
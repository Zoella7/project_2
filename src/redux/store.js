import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";


const rootReducer = combineReducers({
    movies: movieReducer
});

const setupStore =() =>configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
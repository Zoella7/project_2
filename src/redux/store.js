import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, authReducer} from "./slices";


const rootReducer = combineReducers({
  movies: movieReducer,
    auth: authReducer

});

const setupStore = ()=> configureStore({

    reducer: rootReducer
})

export {setupStore}
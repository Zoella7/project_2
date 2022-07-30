import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {movieService} from "../../services/movie.service"


const initialState= {
    movie:[],
    errors: null

}
const getMovies =  createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {rejectWithValue})=>{
        try{
            const {data} = await movieService.getAll()
            return data;
        }catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)


const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.errors = null
                state.movies = action.payload
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.errors  = action.payload
            })

});

const {reducers:movieReducer} = movieSlice;


const movieActions={getMovies}

export {movieReducer, movieActions}
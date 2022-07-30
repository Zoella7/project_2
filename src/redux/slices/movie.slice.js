import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {movieService} from "../../services/movie.service"


const initialState= {
    movie:[],
    errors: null

}
const getAll =  createAsyncThunk(
    'movieSlice/getAll',
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
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.movies = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors  = action.payload
            })

});

const {reducers:movieReducer} = movieSlice;


const movieActions={getAll}

export {movieReducer, movieActions}
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {genreService} from "../../services"


const initialState= {
    genres:[],
    errors: null

}
const getAllGenres =  createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue})=>{
        try{
            const {data} = await genreService()
            return data;
        }catch (e){
            return rejectWithValue(e.response.data)

        }

    }
)


const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.errors = null
                state.genres = action.payload
            })
            .addCase(getAllGenres.rejected, (state, action) => {
                state.errors  = action.payload
            })

});

const {reducer:genreReducer} = genreSlice;


const genreActions={getAllGenres}


export {genreReducer, genreActions}

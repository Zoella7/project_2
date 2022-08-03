import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {movieService} from "../../services"


const initialState= {
    movies:[],
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

const getById =  createAsyncThunk(
    'movieSlice/getById',
    async (id, {rejectWithValue})=>{
        try{
            const {data} = await movieService.getById(id)
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

            .addCase(getById.fulfilled,(state, action)=>{

                 // const currentMovie = state.movies.find(movie=> movie.id === action.payload)
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if([type] === 'rejected'){
                    state.errors  = action.payload
                }else{
                    state.errors=null
                }
            })

});

const {reducer:movieReducer} = movieSlice;


const movieActions={getAll,getById}


export {movieReducer, movieActions}

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {movieService} from "../../services"


const initialState = {
    movies: [],
    errors: null,
    moviesByGenre: [],
    next:null,
    prev:null,
    search:[]

}
const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)

        }

    }
)


const search = createAsyncThunk(
    'movieSlice/search',
    async ({obj}, {rejectWithValue})=>{
        try{
            const {data} = await movieService.search(obj)
            return data;
        }catch(e){
            return rejectWithValue(e.response.data)
        }
    }

)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.movies = action.payload;
                state.prev = action.payload.prev;
                state.next=action.payload.next;
            })

            .addCase(getById.fulfilled, (state, action) => {

                state.moviesByGenre = action.payload
            })

            .addCase(search.fulfilled,(state, action)=>{
                state.errors=null;
                state.search=action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if ([type] === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })

});

const {reducer: movieReducer} = movieSlice;


const movieActions = {getAll, getById,search}


export {movieReducer, movieActions}

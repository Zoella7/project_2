import {createSlice} from "@reduxjs/toolkit"

const initialState={


}

createAsyncThunk(
    'authSlice/register',
    async ({user},{reje})
)

const authSlice =  createSlice({
    name:'authSlice',
    initialState,
    reducers:{}
   })
const {reducer: authReducer, actions} = authSlice

const authActions = {

}

export {authReducer, authActions}
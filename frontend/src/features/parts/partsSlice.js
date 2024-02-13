import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import partsService from './partsService'

const initialState = {
    parts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createPart = createAsyncThunk('parts/create', async (partData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await partsService.createPart(partData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()

        return thunkAPI.rejectWithValue((message))
    }
})

export const getParts = createAsyncThunk('parts/getAll', async(_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await partsService.getParts(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()

        return thunkAPI.rejectWithValue((message))
    }
})

export const partsSlice = createSlice({
    name: 'parts',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(createPart.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createPart.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.computers.push(action.payload)
        })
        .addCase(createPart.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getParts.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getParts.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.computers = action.payload
        })
        .addCase(getParts.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = partsSlice.actions
export default partsSlice.reducer
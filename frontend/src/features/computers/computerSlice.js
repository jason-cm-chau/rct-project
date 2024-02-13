import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import compterService from './computerService'

const initialState = {
    computers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createComputer = createAsyncThunk('computer/create', async (computerData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await compterService.createComputer(computerData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()

        return thunkAPI.rejectWithValue((message))
    }
})

export const getComputers = createAsyncThunk('computer/getAll', async(_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await compterService.getComputers(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()

        return thunkAPI.rejectWithValue((message))
    }
})

export const computerSlice = createSlice({
    name: 'computer',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(createComputer.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createComputer.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.computers.push(action.payload)
        })
        .addCase(createComputer.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getComputers.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getComputers.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.computers = action.payload
        })
        .addCase(getComputers.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = computerSlice.actions
export default computerSlice.reducer
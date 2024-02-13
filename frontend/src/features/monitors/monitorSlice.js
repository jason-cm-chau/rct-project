import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import monitorService from './monitorService'

const initialState = {
    monitors: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createMonitor = createAsyncThunk('monitor/create', async (monitorData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await monitorService.createMonitor(monitorData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()

        return thunkAPI.rejectWithValue((message))
    }
})

export const getMonitors = createAsyncThunk('monitor/getAll', async(_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await monitorService.getMonitors(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message || error.toString()

        return thunkAPI.rejectWithValue((message))
    }
})

export const monitorSlice = createSlice({
    name: 'monitor',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(createMonitor.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createMonitor.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.computers.push(action.payload)
        })
        .addCase(createMonitor.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getMonitors.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getMonitors.fulfilled, (state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.computers = action.payload
        })
        .addCase(getMonitors.rejected, (state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = monitorSlice.actions
export default monitorSlice.reducer
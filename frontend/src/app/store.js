import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import computerReducer from '../features/computers/computerSlice'
import monitorReducer from '../features/monitors/monitorSlice'
import partsReducer from '../features/parts/partsSlice'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    computer: computerReducer,
    monitor: monitorReducer,
    parts: partsReducer,
  },
});

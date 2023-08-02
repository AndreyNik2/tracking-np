import { configureStore } from '@reduxjs/toolkit'
import  trackingReduser  from './trackingSlice'

const store = configureStore({
    reducer: {
        ttn: trackingReduser
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
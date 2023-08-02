import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TtnsState = {
    list: string[],
}

const initialState: TtnsState = {
    list: [],
}

const trackingSlice = createSlice({
    name: 'ttns',
    initialState,
    reducers: {
        addTtns(state, action: PayloadAction<string>) {
            state.list.push(action.payload)
        },
        removeTtns(state, _) {
            state.list = []
        }
    },
})

export const { addTtns, removeTtns } = trackingSlice.actions;

export default trackingSlice.reducer;
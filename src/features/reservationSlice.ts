import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: ['Ram']
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        }
    }
});

export const {addReservation} = reservationsSlice.actions;

export default reservationsSlice.reducer;

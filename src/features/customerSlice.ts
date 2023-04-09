import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

export interface FoodPayload {
  id: string;
  food: string;
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<FoodPayload>) => {
      state.value
        .find((customer) => customer.id === action.payload.id)
        ?.food.push(action.payload.food);
    },
  },
});

export const { addCustomer, addFood } = customerSlice.actions;
export default customerSlice.reducer;

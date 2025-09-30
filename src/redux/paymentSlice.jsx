// src/redux/paymentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  status: "idle", // idle | loading | success | error
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    //    toast.success("AddtoCart Successfully",{position:"top-right"})
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = paymentSlice.actions;
export default paymentSlice.reducer;

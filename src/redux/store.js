import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counterSlice';
// import userReducer from './userSlice';
import employeeSlice from './employeeSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import paymentReducer from './paymentSlice';

const store = configureStore({
    reducer:{
        // counter:counterReducer,
        // user:userReducer,
        empdata:employeeSlice,
        product:productReducer,
        cart:cartReducer,
        payment:paymentReducer,
        
    }
}); 

export default store
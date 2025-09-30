 import { createSlice } from "@reduxjs/toolkit"; 
 import {toast} from 'react-toastify';
 const initialState = {
    items:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :[],
   cartTotalAmount:0,
   cartTotalQuantity:0
 }

 const cartSlice = createSlice({
    name:"cart",
    initialState, 
    reducers:{
         addToCart:(state,action) =>{
            const findItem = state.items.findIndex((item,index)=> item.id===action.payload.id)
            if(findItem>-1){
              state.items[findItem].quantity++
              toast.info("Quantity Increased..." ,{position:"top-right"})
            }
            else
            {
               const newItem = {...action.payload,quantity:1}
               state.items.push(newItem);
               toast.success("AddtoCart Successfully",{position:"top-right"})
            }
            localStorage.setItem("cartItems",JSON.stringify(state.items))
           
         },
         removeFromCart:(state,action)=>{
            const remitems = state.items.filter((item)=>item.id!==action.payload.id);
            state.items = remitems;
            localStorage.setItem("cartItems",JSON.stringify(state.items))
            toast.error("Item removed successfully from the cart",{position:"top-right"})
           
         },
         clearCart:(state,action)=>{
            state.items = []
            localStorage.setItem("cartItems",JSON.stringify(state.items))
            toast.error("All item removed successfully from the cart",{position:"top-right"})
         },
         decrementCartQuantity:(state,action)=>{
            const findItem = state.items.findIndex((item,index)=> item.id===action.payload.id)
            if(state.items[findItem].quantity>1)
            {
               state.items[findItem].quantity--;
               toast.info("cart decremented successfully",{position:"top-right"})
            }
            else if(state.items[findItem].quantity===1)
               {
                  const remitems = state.items.filter((item)=>item.id!==action.payload.id);
                  state.items = remitems;
                  toast.error("Item removed successfully from the cart",{position:"top-right"})
               }
               localStorage.setItem("cartItems",JSON.stringify(state.items))

         },
         getTotal:(state,action)=>{
            const {totalPrice,totalQuantity} = state.items.reduce((cartInfo,item)=>{
               const total = item.price * item.quantity;
               cartInfo.totalPrice += total;
               cartInfo.totalQuantity += item.quantity;
               return cartInfo;
            },{totalPrice:0,totalQuantity:0});
            state.cartTotalAmount = totalPrice;
            state.cartTotalQuantity = totalQuantity;
         }

    }
 })
 export const {addToCart,removeFromCart,clearCart,decrementCartQuantity,getTotal} = cartSlice.actions
 
 export default cartSlice.reducer
 
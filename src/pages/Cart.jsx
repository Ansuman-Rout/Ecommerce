import React from 'react'
import Banner from '../components/Banner'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeFromCart,clearCart,addToCart,decrementCartQuantity} from '../redux/cartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items)
    const totalAmount = useSelector((state)=>state.cart.cartTotalAmount)
   // console.log(cartItems)
    const dispatch = useDispatch()
  return (
    <>
    <Banner title = "Cart"/>
    <section id = "cart" className="cart mt-5">
        <div className="container">
            {
                (cartItems.length > 0) ?  <table className = "table table-darktable table-success table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    cartItems.map((item, index) =>  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                        <button className="btn btn-sm btn-danger mx-2" onClick={()=>dispatch(decrementCartQuantity(item))}>-</button>
                           {item.quantity}
                        <button className="btn btn-sm btn-success mx-2 " onClick={()=>dispatch(addToCart(item))}>+</button>
                    </td>
                    <td>{(item.price*item.quantity).toFixed(2)}</td>
                    <td>
                        <button className="btn btn-sm btn-danger" onClick={()=>dispatch(removeFromCart(item))}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>)
}
                   
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} align="right">Total</td>
                        <td>{totalAmount}</td>
                    </tr>
                </tfoot>
            </table>:null
            
}
            <div className="d-flex justify-content-between">
                {
                    (cartItems.length>0) && <button className="btn btn-sm btn-danger" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
                }
                
                <Link to="/shop" className="btn btn-sm btn-success">Continue Shopping</Link>
                <Link to="/payment"className="btn btn-sm btn-primary">Proceed Checkout </Link>
          
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart
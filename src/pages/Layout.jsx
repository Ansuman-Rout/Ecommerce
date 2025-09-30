import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import  '../components/css/layout.css'
import {useDispatch,useSelector} from 'react-redux'
import {getTotal} from "../redux/cartSlice"
import {useEffect} from 'react'
const Layout = () => {
  const product = useSelector((state)=>state.cart.items)
  const totalQuantity = useSelector((state)=>state.cart.cartTotalQuantity)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotal())
  },[product,dispatch])
  return (
   <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand custom-brand" to="/">
          CLEVER MONKEY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link custom-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/employee">
                Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/payment">
                PaymentForm
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart" className="btn btn-outline-dark custom-cart-btn">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{totalQuantity}</span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
    <Outlet/>
   </>
  )
}

export default Layout

import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Employee from "./pages/Employee";
import { ToastContainer } from 'react-toastify';
import PaymentForm from "./pages/PaymentForm";



function MainContainer() {


    return (
        <BrowserRouter>
        <ToastContainer/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/employee" element={<Employee/>}/>
                    <Route path="/payment" element={<PaymentForm/>}/>
                  </Route>  
            </Routes>
        </BrowserRouter>
    )
} 

export default MainContainer

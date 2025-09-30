// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateField, resetForm } from "./paymentSlice";

// const MainContainer = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items)
//   const payment = useSelector((state) => state.payment);
//   const [formData, setFormData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     mobile: "",
//     address: "",
//     country: "",
//     city: "",
//     state: "",
//     pincode: "",
//     totalAmount: "",
//   });

  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePayment = (e) => {
//     e.preventDefault();
//     const options = {
//       key: "rzp_test_vv1FCZvuDRF6lQ",
//       amount: parseInt(formData.totalAmount) * 100,
//       currency: "INR",
//       name: "Clever Monkey",
//       description: "Test Payment",
//       handler: (response) => {
//         console.log("Payment successful", response.razorpay_payment_id);
//         dispatch(resetForm());
//         setFormData({
//           fname: "",
//           lname: "",
//           email: "",
//           mobile: "",
//           address: "",
//           country: "",
//           city: "",
//           state: "",
//           pincode: "",
//           totalAmount: "",
//         });
//       },
//       theme: { color: "#07a291db" },
//     };
//     const pay = new window.Razorpay(options);
//     pay.open();
//   };

//   return (
//     <div className="container d-flex justify-content-center mt-5">
//       <div className="row w-100">
//         {/* Cart Section */}
//         <div className="col-md-4">
//           <div className="card p-3 shadow-lg">
//             <h4 className="mb-3 text-center" style={{ color: "#07a291db" }}>
//               Cart Summary
//             </h4>
//             <ul className="list-group mb-3">
//               {cartItems.map((item) => (
//                 <li key={item.id} className="list-group-item d-flex justify-content-between">
//                   {item.name} <span>₹{item.price}</span>
//                 </li>
//               ))}
//             </ul>
//             <h5 className="text-center">Total: ₹{formData.totalAmount}</h5>
//           </div>
//         </div>

//         {/* Payment Form */}
//         <div className="card p-4 shadow-lg col-md-8">
//           <h2 className="mb-4 text-center" style={{ color: "#07a291db" }}>Checkout Form</h2>
//           <form onSubmit={handlePayment} className="d-flex flex-column">
//             <input type="text" placeholder="Card Number" value={payment.cardNumber} onChange={(e) => dispatch(updateField({ field: "cardNumber", value: e.target.value }))} className="form-control mb-3" required />
//             <input type="text" placeholder="Expiry Date" value={payment.expiryDate} onChange={(e) => dispatch(updateField({ field: "expiryDate", value: e.target.value }))} className="form-control mb-3" required />
//             <input type="text" placeholder="CVV" value={payment.cvv} onChange={(e) => dispatch(updateField({ field: "cvv", value: e.target.value }))} className="form-control mb-3" required />
//             <button type="submit" className="btn btn-primary" style={{ background: "#07a291db", borderColor: "#07a291db", fontSize: "19px" }}>Pay Now</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContainer;
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector,useDispatch} from "react-redux";

const stripePromise = loadStripe("pk_test_51R7VdaPU5Ia5XVw73SJ6C0tgt7WZADxdStFETYXLbIvU4Mm5Q8M5xql3rlq8JwXgugrfHvT4Ww8bH3V7gjnTp4x000YcCyyZjk");

const PaymentForm = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) =>state.cart.cartTotalAmount)
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { name },
    });

    if (error) {
      console.error(error);
      alert(error)
    } else {
      console.log("Payment Method Created:", paymentMethod);
      alert("Payment Successful");
      navigate("/shop");
    }
  };

  return (
   
    <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: "1400px" }}>
      <div className="container mt-4 d-flex gap-4 align-items-start">
        {/* Cart Section */}
        {cartItems.length > 0 && (
          <div className="cart-section flex-grow-1">
            <h3 className="mb-3">My Cart</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <div>
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-0">Price: Rs {item.price * item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <div className="total d-flex justify-content-between">
              <h4>Total:Rs{totalAmount}</h4>
              {/* <h4>Rs {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4> */}
              
            </div>
          </div>
        )}

        {/* Payment Form */}
        <div className="payment-form flex-grow-1">
          <h2 className="text-center text-primary">Payment Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Cardholder Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Card Details</label>
              <div className="form-control p-2">
                <CardElement />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3" disabled={!stripe}>
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

const StripePaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePaymentForm;

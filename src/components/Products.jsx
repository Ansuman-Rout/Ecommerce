import '../components/css/product.css'
import React from 'react';
import Rating from './Rating'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Products = ({ product }) => {
    const dispatch = useDispatch()
    return (
        // <div className="row g-2"> {/* g-4 adds spacing between columns */}
            <div className="col-md-5" style={{margin:"30px"}}> {/* Defines proper column size for responsiveness */}
                <div className="card h-100 product-card" style={{ width: "18rem" }}>
                    {/* Sale Badge */}
                    <div className="badge sale-badge">Sale</div>

                    {/* Product Image */}
                    <img
                        className="card-img-top product-image"
                        src={product.image}
                        alt={product.title}
                        
                    />

                    {/* Product Details */}
                    <div className="card-body p-4 ">
                        <div className="text-center">
                            <h5 className="fw-bolder" style ={{fontSize:"15px"}}>{product.title}</h5>

                            {/* Product Reviews */}
                            <Rating product={product} />

                            {/* Product Price */}
                            <span className="ms-2 text-success">Rs.{product.price}</span>
                        </div>
                    </div>

                    {/* Product Actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button onClick={()=>dispatch(addToCart(product))} className="btn add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        //</div>
    );
};

export default Products;

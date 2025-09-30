import { useSelector,useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";


const Shop = () => {
    const product = useSelector((state) => state.product.item);
    const status = useSelector((state)=> state.product.status);
    const error = useSelector((state)=> state.product.error);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(status=="idle"){
            dispatch(fetchProducts())
        }
    },[product,dispatch])
    console.log(product)
    console.log(status)
    return (
        <>

            {/* Header*/}
            <Banner title="Shop" />
            {/* ProductSection*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {status=="loading" && <p>Loading..</p>}
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                      {
                        (product.length>0) ? product.map((item,index)=>  <Products product={item} key={index} />):null
                      }
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </>
    );
}

export default Shop
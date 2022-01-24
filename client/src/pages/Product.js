import React, { useState, useEffect } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import classes from './Product.module.css';
import { publicRequest } from "../requestMethods";
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
      const handleQuantity = (type) => {
          if (type === "dec") {
              quantity > 1 && setQuantity(quantity - 1)
          } else {
            setQuantity(quantity + 1)
          }
      }
      const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }))
      }

    return (
        <>
        <Navbar />
           <Announcement /> 
            <div className={classes.my_container}>
                    <div>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={classes.right}>
                        <h1>{product.title}</h1>
                        <div className={classes.description}>
                            {product.desc}
                        </div>
                        <span>${product.price}</span>
                        <div className={classes.filterMainCont}>
                            <div className={classes.filterContainer}>
                                <h6 className={classes.filterTitle }>Color</h6>
                                {product.color?.map((c)=>(
                                    <span onClick={()=> setColor(c)} key={c} style={{backgroundColor: `${c}`}}></span>
                                ))}
                            </div>
                            <div className={classes.filterSize}>
        <Form.Select onChange={(e)=> setSize(e.target.value)}>
        {product.size?.map((size)=> <option key={size}>{size}</option> )}
        </Form.Select>
                            </div>
                        </div>
                        <div className={classes.addContainer}>
                            <div className={classes.amountContainer}>
                                <span onClick={()=>handleQuantity("dec")}>-</span>
                                <span className={classes.input}>{quantity}</span>
                                <span onClick={()=>handleQuantity("inc")}>+</span>
                            </div>
                            <button onClick={handleClick}>Add to Cart</button>
                        </div>
                    </div>
            </div>
            <NewsLetter />
           <Footer />
        </>
    );
};

export default Product;
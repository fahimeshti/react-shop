import classes from './Cart.module.css';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userRequest } from "../requestMethods";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
      };
    useEffect(() => {
        const makeRequest = async () => {
          try {
            const res = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: 500,
            });
            history.push("/success", {
              stripeData: res.data,
              products: cart, });
          } catch {}
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart, cart.total, history]);


return (
        <>
            <Navbar />
           <Announcement />
           <div className={classes.wrapper}>
                <h1>Your Cart</h1>
                <div className={classes.top}>
                    <button>CONTINUE SHOPPING</button>
                    <div className={classes["top-center"]}>
                        <span>Shopping Bag (2)</span>
                        <span>Your Wishlist (0)</span>
                    </div>
                    <button>Checkout now</button>
                </div>
           </div>
           <Row className={classes.info}>
               <Col md={8} className={classes.allProds}>
        {cart.products.map(product => (
                  <section key={product._id} className={classes.infoLeft}>
                    <div className={classes["product-img"]}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className={classes.prodInfo}>
                        <div className={classes.left}>
                            <span><b>Product:</b>{product.title}</span>
                            <span><b>ID:</b>{product._id}</span>
                            <span className={classes["product-color"]} style={{backgroundColor: `${product.color}`}}><b></b></span>
                            <span><b>Size:</b>{product.size}</span>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.amountContainer}>
                                <span>+</span>
                                <span className={classes.input}>{product.quantity}</span>
                                <span>-</span>
                            </div>
                            <span className={classes.dollar}>${product.price * product.quantity}</span>
                        </div>
                    </div>
                  </section>
                ))}
               </Col>
               <Col md={4} className={classes.summery}>
                    <h2>Order Summery</h2>
                    <div className={classes.summeryItem}>
                        <span className={classes.summeryItemText}>
                        Subtotal
                        </span>
                        <span className={classes.summeryItemPrice}>
                        ${cart.total}
                        </span>
                    </div>
                    <div className={classes.summeryItem}>
                        <span className={classes.summeryItemText}>
                        Estimated Shipping
                        </span>
                        <span className={classes.summeryItemPrice}>
                        $ 80
                        </span>
                    </div>
                    <div className={classes.summeryItem}>
                        <span className={classes.summeryItemText}>
                        Shipping Discount
                        </span>
                        <span className={classes.summeryItemPrice}>
                        $ 80
                        </span>
                    </div>
                    <div style={{fontSize:"19px",fontWeight:"bold"}} className={classes.summeryItem}>
                        <span className={classes.summeryItemText}>
                        Total
                        </span>
                        <span className={classes.summeryItemPrice}>
                        $ 80
                        </span>
                    </div>
                    <StripeCheckout
                        name="Kroy Shop"
                        image="https://firebasestorage.googleapis.com/v0/b/shop-24c11.appspot.com/o/android-chrome-512x512.png?alt=media&token=da5f9b67-d6a4-4165-8586-f439a2448172"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <button>CHECKOUT NOW</button>
                    </StripeCheckout>
               </Col>
           </Row>
           <Footer /> 
        </>
    );
};

export default Cart;
import React from 'react';
import classes from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Container>
            <Row className={classes.wrapper}>
                <Col md={4} className={classes.left}>
                    <h1>Kroy.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptatum velit exercitationem magnam voluptatibus doloremque esse, natus vitae placeat cum?</p>
                    <div className={classes.social}>
                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                        <span><FontAwesomeIcon icon={faPinterest} /></span>
                    </div>
                </Col>
                <Col md={4} className={classes.center}>
                    <h4>Useful Links</h4>
                    <div className={classes.links}>
                        <ul>
                            <li>Home</li>
                            <li>Man Fashion</li>
                            <li>Accessories</li>
                            <li>Order Tracking</li>
                            <li>Categories</li>
                        </ul>
                        <ul>
                            <li>Cart</li>
                            <li>Women Fashion</li>
                            <li>My Account</li>
                            <li>Wishlist</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </Col>
                <Col md={4} className={classes.right}>
                    <h4>Contact</h4>
                    <address>
                        <span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path></svg>
                        Dhaka, Bangladesh.</span>
                        <span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path></svg>
                        +123 4556 789</span>
                        <span>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 150.2V128C48 119.2 55.18 112 64 112zM448 400H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4C204.3 342.8 229.8 352 256 352s51.75-9.188 71.97-25.98L464 212.7V384C464 392.8 456.8 400 448 400z"></path></svg>
                            contact@kroy.com</span>
                    </address>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
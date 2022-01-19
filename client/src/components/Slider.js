import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel  } from 'react-bootstrap';
import classes from './Slider.module.css';
import bg01 from '../resources/solid-color-image.png';
import bg02 from '../resources/solid-color-image2.png';
import bg03 from '../resources/solid-color-image3.png';
import ShopNowBtn from './ShopNowBtn';

const Slider = () => {
    return (
        <Carousel variant="dark" indicators={false} className={classes.carouseel}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg01}
      alt="First slide"
    />
    <div className={classes.carousel_caption}>
        <h2>Summer sale</h2>
      <p>Dont compromise on style! Get flat 30% off for new arrivals.</p>
      <ShopNowBtn />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg02}
      alt="Second slide"
    />
    <div className={classes.carousel_caption}>
        <h2>Summer sale</h2>
      <p>Dont compromise on style! Get flat 30% off for new arrivals.</p>
      <ShopNowBtn />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bg03}
      alt="Third slide"
    />
    <div className={classes.carousel_caption}>
        <h2>Summer sale</h2>
      <p>Dont compromise on style! Get flat 30% off for new arrivals.</p>
      <ShopNowBtn />
    </div>
  </Carousel.Item>
</Carousel>
    );
};

export default Slider;
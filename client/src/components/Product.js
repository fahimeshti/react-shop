import React, { useState } from 'react';
import classes from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {

    return (
        <div className={classes.container}>
            <img src={props.item.img} alt="" />
        <div className={classes.info}>
        <span>
            <FontAwesomeIcon className={classes.my_icons} icon={ faCartPlus } />
        </span>
        <Link to={`/product/${props.item._id}`}>
            <span>
                <FontAwesomeIcon className={classes.my_icons} icon={ faSearch } />
            </span>
        </Link>
        <span>
            <FontAwesomeIcon className={classes.my_icons} icon={ faHeart } />
        </span>
        </div>
        </div>
    );
};

export default Product;
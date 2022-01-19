import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CategoryItem.module.css';
import ShopNowBtn from './ShopNowBtn';

const CategoryItem = (props) => {
    return (
        <div className={classes['cate-container']}>
            <Link to={`/products/${props.item.cat}`}>
            <img src={props.item.img} alt="" />
            <div className={classes.info}>
                <h2>{props.item.title}</h2>
                <ShopNowBtn />
            </div>
            </Link>
        </div>
    );
};

export default CategoryItem;
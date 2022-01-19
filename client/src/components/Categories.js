import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import classes from './Categories.module.css';

const Categories = () => {
    return (
        <section>
            <h1>Categories</h1>
            <div className={classes['shop-categories']}>
                {categories.map((item)=>(
                    <CategoryItem item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Categories;
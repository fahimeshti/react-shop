import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import classes from './ProductList.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import FilterBySize from '../components/FilterBySize';
import { useLocation } from 'react-router-dom';


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })

    }
    // console.log(filters)
    return (
        <>
            <Navbar />
           <Announcement />
           <h1 className={classes['filter-title']}>{cat}</h1>
           <div className={classes['filter-container']}>
                <span className={classes.filters}>
                    <h6>Filter Products:</h6>
                <Form.Select name="color" onChange={handleFilters} size="sm" className={classes.formSelect}>
                    <option>Color</option>
                    <option>white</option>
                    <option>black</option>
                    <option>red</option>
                    <option>blue</option>
                    <option>yellow</option>
                    <option>green</option>
                </Form.Select>
                    <FilterBySize onChange={handleFilters} />
                </span>
                <span className={classes.filters}>
                <h6>Sort Products:</h6>
                <Form.Select onChange={(e) => setSort(e.target.value)} size="sm" className={classes.formSelect}>
                    <option value="newest">Newest</option>
                    <option value="asc">Price (asc)</option>
                    <option value="desc">Price (desc)</option>
                </Form.Select>
                </span>
           </div>
           <Products cat={cat} filters={filters} sort={sort} />
           <NewsLetter />
           <Footer />
        </>
    );
};

export default ProductList;
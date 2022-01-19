import React from 'react';
import classes from './Navbar.module.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    const userLoggedIn = useSelector((state) => state.user.currentUser);
    const admin = userLoggedIn.isAdmin
    const adminUser = userLoggedIn.username

return (
        <div className={classes.container}>
            <div className={classes.navWrapper}>
                <div className={classes.navLeft}>
                    <span>EN</span>
                    <span className={classes.navSearch}>
                        <input type="text" />
                        <FontAwesomeIcon className={classes.my_icons} icon={ faSearch } />
                    </span>
                </div>
                <div className={classes.navCenter}>
                    <h1>Kroy.</h1>
                </div>
                <div className={classes.navRight}>
                    {!userLoggedIn && <Link to="/register"><span>Register</span></Link>}
                    {!userLoggedIn && <Link to="/login"><span>Signin</span></Link>}
                    { admin && <Link to="/dashboard"><span>Dashboard ({adminUser})</span></Link>}
                    <Link to="/cart">
                        <span className={classes.cart}>
                            <FontAwesomeIcon className={classes.my_icons} icon={ faCartArrowDown } />
                            <span className={classes.badge}>{quantity}</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Product from './pages/Product';
import Success from './pages/Success';
import DashBoard from './pages/dashboard/DashBoard';
import ProductListAdmin from './admin/pages/productList/ProductListAdmin';
import SingleProductAdmin from './admin/pages/singleProductAdmin/SingleProductAdmin';
import NewProduct from './admin/pages/newProduct/NewProduct';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/dashboard">
            {user ? <DashBoard /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/dashboard/products">
            {user ? <ProductListAdmin /> : <Redirect to="/" />}
          </Route>
          <Route path="/dashboard/products/:productId">
            {user ? <SingleProductAdmin /> : <Redirect to="/" />}
          </Route>
          <Route path="/dashboard/newproduct">
            {user ? <NewProduct /> : <Redirect to="/" />}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

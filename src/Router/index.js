/* eslint-disable react-hooks/rules-of-hooks */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import productsContext from '../Context/index';
import {ScrollToTop} from '../hooks/hooks';
import Home from '../Components/Home/Home';
import Products from '../Components/BestProducts/BestProducts';
import ProductsDetail from '../Components/ProductDetail/ProductDetail';
import CartProd from '../Components/Cart/Cart';
import Footer from '../Components/Footer/Footer';


import logo from '../images/logo-letra.png';
import './style.css';

const index = () => {
    const { setCart, cart } = useContext(productsContext);
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(false);

    // // this is the local store that allows you to save the products in the cart
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) {
            setCart(dataCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);


    return (
        <>
            <Router>
                <ScrollToTop setMenu={setMenu} />
                <nav className="sectionMenu" id="top">
                    <div className={menu === true ? 'menuDos' : 'menu'}>
                        <Link className="itemMenu" to="/">home</Link>
                        <Link className="itemMenu" to="/mostsold">offers</Link>
                    </div>
                    <section className="containerUser">
                        <div className="background">
                            <img className="logo" src={logo}></img>
                            <span className="countProducts">{cart.length}</span>
                            <span className="cart icon-cart-arrow-down" onClick={() => setShow(!show)}></span>
                            {(show) && <CartProd setShow={setShow} />}
                            <span className="icon-th-list" onClick={() => setMenu(!menu)}></span>
                        </div>
                    </section>
                </nav>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/mostsold" element={<Products />} />
                    <Route path="/productdetail/:id" element={<ProductsDetail />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default index;
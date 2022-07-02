import React, {useState, useEffect} from 'react';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App(item, items) {
    //const {newItem} = props;
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (sum, {quantity}) => sum + quantity,
            0
        );
    };
    return (

        <div className='window'>
                <Routes>
                    <Route path="/about" exact element={<About/>}/>
                    <Route path="/contact" exact element={<Contact/>}/>
                </Routes>
            <Header/>
            <div className='elements'>
                <Product cart={cart} setCart={setCart}/>
                <Cart cart={cart} setCart={setCart}/>
                <List/>
            </div>
            <Footer/>
        </div>
    )
        ;
};

export default App;
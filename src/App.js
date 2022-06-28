import React, {useState, useEffect} from 'react';
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus} from '@fortawesome/free-solid-svg-icons';
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from './data';
import Product from "./components/Product";
import Cart from "./components/Cart";
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
function App  (item, items){
    //const {newItem} = props;
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantity }) => sum + quantity,
            0
        );
    };
    return (
        <div className='window'>
            <Header></Header>
                <div className='elements'>
                    <Product cart={cart} setCart={setCart} />
                    <List/>
                    <Cart cart={cart} setCart={setCart} />
                </div>

        </div>
    )
        ;
};

export default App;
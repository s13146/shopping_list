import React, {useState, useEffect, Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronRight, faChevronLeft, faCircle, faCheckCircle, faBasketShopping
} from '@fortawesome/free-solid-svg-icons';

export default function List(props) {

    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [totalItemCount, setTotalItemCount] = useState('');
    const [totalItemCountPrice, setTotalItemCountPrice] = useState('');

    const handleAddButtonClick = () => {

        const newItem = {
            itemName: inputValue, quantity: inputQuantity, price: inputPrice, isSelected: false,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValue('');
        setInputPrice('');
        setInputQuantity('');
        calculateTotal();
        calculateTotalPrice();
    };




    const handleQuantityIncrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);
        calculateTotal();
        calculateTotalPrice();

    };

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;

        setItems(newItems);
        calculateTotal();
        calculateTotalPrice();

    };

    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
    };

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);

        setTotalItemCount(totalItemCount);
    };
    const calculateTotalPrice = () => {
        const totalItemCountPrice = items.reduce((totalPrice, item) => {
            return totalPrice + (item.quantity * item.price);
        }, 0);

        setTotalItemCountPrice(totalItemCountPrice);
    };


    return (
<div className='app-background'>
        <div className='main-container'>
            <div className='add-item-box'>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}
                       className='add-item-input' placeholder='Podaj produkt...'/>
            </div>
            <div className='add-item-box'>

                <input value={inputQuantity} onChange={(event) => setInputQuantity(event.target.value)}
                       className='add-item-input' placeholder='Podaj ilość...'/>

            </div>
            <div className='add-item-box'>
                <input value={inputPrice} onChange={(event) => setInputPrice(event.target.value)}
                       className='add-item-input' placeholder='Podaj cene...'/>
            </div>
            <FontAwesomeIcon icon={faBasketShopping} onClick={() => handleAddButtonClick()}/>

            <div className='item-list'>
                {items.map((item,index) => (
                    <div className='item-container'>

                    <>
                        <div className='item-name' onClick={() => toggleComplete(index)}>
                            {item.isSelected ? (<>
                                <FontAwesomeIcon icon={faCheckCircle}/>
                                <span className='completed'>{item.itemName}</span>
                            </>) : (<>
                                <FontAwesomeIcon icon={faCircle}/>
                                <span>{item.itemName}</span>
                            </>)}
                        </div>
                        <div className='quantity'>
                            <span></span>
                            <span> {item.price}</span>
                            <span></span>
                        </div>
                        <div className='quantity'>

                            <button>
                                <FontAwesomeIcon icon={faChevronLeft}
                                                 onClick={() => handleQuantityDecrease(index)}/>
                            </button>
                            <span> {item.quantity} </span>
                            <button>
                                <FontAwesomeIcon icon={faChevronRight}
                                                 onClick={() => handleQuantityIncrease(index)}/>
                            </button>
                        </div>
                    </>
                    </div>))}
            </div>
            <div className='total'>Ilość produktów: {totalItemCount}</div>
            <div className='total'>Wartość produktów: {totalItemCountPrice}</div>
        </div>
        </div>);
};


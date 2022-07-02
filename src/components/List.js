import React, {useState, useEffect, Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronRight, faChevronLeft, faCircle, faCheckCircle, faBasketShopping, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

export default function List(props) {

    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(0);
    const [totalItemCountPrice, setTotalItemCountPrice] = useState(0);

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
    const removeFromCart = (productToRemove) => {
        setItems(
            items.filter((item) => item !== productToRemove)
        );
        calculateTotal();
        calculateTotalPrice();
    };


    return (
        <div className='app-background'>
            <div className='main-container'>
                <h2>Stwórz własną liste</h2>
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
                <button className='button-white' onClick={() => handleAddButtonClick()}>
                    <FontAwesomeIcon icon={faBasketShopping}/>
                    <p>Dodaj na listę</p></button>
                <div className='item-list'>
                    {items.map((item, index) => (
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

                                    <button className='click-old'>
                                        <FontAwesomeIcon icon={faChevronLeft}
                                                         onClick={() => handleQuantityDecrease(index)}/>
                                    </button>
                                    <span> {item.quantity} </span>
                                    <button className='click-old'><FontAwesomeIcon icon={faChevronRight}
                                                                                   onClick={() => handleQuantityIncrease(index)}/>
                                    </button>
                                </div>
                                <div className='quantity'>
                                    <span></span>
                                    <span> {item.price} zł</span>
                                    <span></span>
                                </div>
                                <button className='button-white' onClick={() => removeFromCart(item)}>
                                    <FontAwesomeIcon icon={faTrashCan}/>

                                </button>
                            </>
                        </div>))}
                </div>
                <div className='total'>Ilość produktów: {totalItemCount} szt</div>
                <div className='total'>Wartość produktów: {totalItemCountPrice} zł</div>
            </div>
        </div>);
};


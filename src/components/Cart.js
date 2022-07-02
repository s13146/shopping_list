import React from 'react';

export default function Cart({cart, setCart}) {
    const getTotalSum = () => {
        return cart.reduce(
            (sum, {cost, quantity}) => sum + cost * quantity,
            0
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    };
    function sortByQuantity() {
        cart.sort((a, b) => (a.quantity > b.quantity ? 1 : -1));
        setCart([...cart]);
    }



    return (
        <>
            <div className='app-background'>
                <div className='basket-main-container'>
                    <h2>Wybrane produkty</h2>
                    <div className="item-list">
                        <button className="button-white" onClick={() => sortByQuantity()}>Sortuj według ilości</button>
                        <button className="button-white" onClick={() => clearCart()}>Wyczyść koszyk</button>

                        <div className='item-container'> Wartość produktów: {getTotalSum()} zł</div>

                        {cart.map((product, idx) => (
                            <div className="product-cart" key={idx} >
                                <h3>{product.name}</h3>
                                <h4>Cena: {product.cost} zł</h4>
                                <h4>Zmień ilość</h4>

                                <div className='add-item-box'>
                                <input className= 'add-item-input'
                                    value={product.quantity}
                                    onChange={(e) =>
                                        setQuantity(
                                            product,
                                            parseInt(e.target.value)
                                        )
                                    }
                                />
                                </div>

                                <img className='img-cart' src={product.image} alt={product.name}/>

                                <button className='button' onClick={() => removeFromCart(product)}>
                                    Usuń
                                </button>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    );
}
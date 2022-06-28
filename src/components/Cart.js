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

    return (
        <>
            <div className='app-background'>
                <div className='basket-main-container'>
                    <div className="item-list">
                        {cart.map((product, idx) => (
                            <div className="product" key={idx}>
                                <h3>{product.name}</h3>
                                <h4>${product.cost}</h4>
                                <div className='add-item-box'>

                                <input className= 'add-item-input' placeholder='Podaj ilość..'
                                    value={product.quantity}
                                    onChange={(e) =>
                                        setQuantity(
                                            product,
                                            parseInt(e.target.value)
                                        )
                                    }
                                />
                                </div>
                                <img src={product.image} alt={product.name}/>
                                <button className='button-white' onClick={() => removeFromCart(product)}>
                                    Usuń
                                </button>
                            </div>
                        ))}
                    </div>

                    <div> Wartość: {getTotalSum()} zł</div>
                </div>
            </div>
        </>
    );
}
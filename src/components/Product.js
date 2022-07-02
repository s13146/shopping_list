import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons';

const HOME_GARDEN = 'Dla domu';
const FOOD = 'Jedzenie';

export default function Products({setCart, cart}) {
    const [products] = useState([
        {
            category: FOOD,
            name: 'Woda ',
            cost: 2.00,
            image: 'https://cdn.metro-group.com/pl/pl_pim_663040001002_01.png?w=400&h=400&mode=pad',
        },
        {
            category: FOOD,
            name: 'Sok',
            cost: 3.50,
            image: 'https://www.carrefour.pl/images/product/org/tymbark-sok-100-jablko-1-l-u8-sqs8g5.jpg'
        },
        {
            category: FOOD,
            name: 'Chleb',
            cost: 4.00,
            image:'data:image/jpeg;base64,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'
        },
        {
            category: FOOD,
            name: 'Szynka',
            cost: 6.00,
            image: 'data:image/jpeg;base64,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'
        },
        {
            category: FOOD,
            name: 'Ser',
            cost: 5.00,
            image: 'https://paulinka.sklepkupiec.pl/23103-thickbox_default/spomlek-ser-zolty-z-oczkiem.jpg'
        },
        {
            category: FOOD,
            name: 'Mleko',
            cost: 3.00,
            image: 'https://res.cloudinary.com/dj484tw6k/image/upload/v1634597294/13747.png'
        },
        {
            category: HOME_GARDEN,
            name: 'Płyn do mycia naczyń ',
            cost: 5.00,
            image: 'https://dlabiura24.pl/plyn-do-mycia-naczyn-ludwik-cytrynowy-900ml,bdahcd,hae,a.jpg',
        },
        {
            category: HOME_GARDEN,
            name: 'Gąbka',
            cost: 2.50,
            image: 'https://8.allegroimg.com/s512/01a02f/e99c7bd24a789bc126f975d4b798/MERIDA-ZMYWAK-GABKA-DO-MYCIA-NACZYN-3-SZT-SRH001'
        },
        {
            category: HOME_GARDEN,
            name: 'Miotła',
            cost: 4.00,
            image: 'https://mopserwis.pl/6252-large_default/miotla-angoli-vileda-profilowana-z-kijem.jpg'
        },
        {
            category: HOME_GARDEN,
            name: 'Szufelka',
            cost: 6.00,
            image: 'data:image/jpeg;base64,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',
        },
        {
            category: HOME_GARDEN,
            name: 'Mop',
            cost: 5.00,
            image: 'https://f01.esfr.pl/foto/9/90018586009/29162ce5cfcce528327b0194e37258c6/vileda-turbo-3w1,90018586009_8.jpg'
        },
        {
            category: HOME_GARDEN,
            name: 'Żarówka',
            cost: 3.00,
            image: 'data:image/jpeg;base64,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'
        },

    ]);


    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    const [category, setCategory] = useState(FOOD);


    const getProductsInCategory = () => {
        return products.filter(
            (product) => product.category === category
        );
    };

    function sortByTitle() {
        products.sort((a, b) => (a.name > b.name ? 1 : -1));
        setCart([...cart]);
        console.log('tytul');

    }
    function sortByPrice() {
        console.log('prod');
        products.sort((a, b) => (a.cost > b.cost ? 1 : -1));
        console.log(products);
        setCart([...cart]);

    }
    function shuffle() {
        products.sort(() => Math.random() - 0.5);
        setCart([...cart]);
    }

    return (
        <>
            <div className='app-background'>
                <div className='main-container'>
                    <h2>Produkty</h2>
                    <div className='item-container'>
                        <h2>Wybierz kategorie</h2>
                        <select className='add-item-box' onChange={(e) => setCategory(e.target.value)}>
                            <option value={FOOD}>{FOOD}</option>
                            <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
                        </select>
                    </div>
                    <div className='item-container'>
                        <button className="button-white " onClick={() => sortByPrice()}>Sortuj wg ceny</button>
                        <button className="button-white " onClick={() => sortByTitle()}>Sortuj alfabetycznie</button>
                        <button className="button-white " onClick={() => shuffle()}>Sortuj randomowo</button>
                    </div>

                    <div className="product-list">
                        {getProductsInCategory().map((product, idx) => (
                            <div className="product" key={idx}><div className='item-list'>
                                <h4>{product.name}</h4>
                                <p>Cena: {product.cost} zł</p>
                            </div>
                                <img className='img' src={product.image} alt={product.name}/>

                                <button className='button-white' onClick={() => addToCart(product)}>
                                    <FontAwesomeIcon icon={faBasketShopping}/> Kup
                                </button>
                            </div>
                        ))} </div>
                </div>
            </div>
        </>
    );
}
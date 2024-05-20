import React from 'react';

const Cart = ({ cart, setPage }) => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <div className="cart">
            <h2>My Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index}>
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total.toFixed(2)}</p>
                    <button onClick={() => setPage('checkout')}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;

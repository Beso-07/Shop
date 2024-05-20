import React from 'react';

const Checkout = () => {
    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form>
                <label>Name on Card:</label>
                <input type="text" required />
                <label>Card Number:</label>
                <input type="text" required />
                <label>Expiration Date:</label>
                <input type="text" required />
                <label>CVV:</label>
                <input type="text" required />
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default Checkout;

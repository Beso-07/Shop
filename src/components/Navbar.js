import React from 'react';

const Navbar = ({ setPage }) => {
    return (
        <nav className="navbar">
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('cart')}>Cart</button>
            </nav>
    );
};

export default Navbar;

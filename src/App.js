import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminPanel from './admin/AdminPanel';
import './App.css';
import initialProducts from './products';

const App = () => {
    const [page, setPage] = useState('login');
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(initialProducts);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <Home products={products} addToCart={addToCart} />;
            case 'login':
                return <Login setPage={setPage} />; 
            case 'signup':
                return <Signup />;
            case 'cart':
                return <Cart cart={cart} setPage={setPage} />;
            case 'checkout':
                return <Checkout />;
            case 'admin':
                return <AdminPanel addProduct={addProduct} />;
            default:
                return <Home products={products} addToCart={addToCart} />;
        }
    };

    return (
        <div className="App">
            <Navbar setPage={setPage} />
            {renderPage()}
        </div>
    );
};

export default App;

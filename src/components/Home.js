import React from 'react';

const Home = ({ products, addToCart }) => {
    return (
        <div className="home">
            <h2> Welcome to the eCommerce Site</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Home;


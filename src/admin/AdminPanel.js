import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const AdminPanel = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        setImageFile(acceptedFiles[0]);
    };

    const handleUpload = async () => {
        const imageUrl = `E:\\prog\\Xampp\\htdocs\\shop\\images\\${imageFile.name}`;
        setImage(imageUrl);

        addProduct({ id: Math.random(), name, price: parseFloat(price), image: imageUrl });
    };
    
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.random(),
            name,
            price: parseFloat(price),
            image,
        };
        addProduct(newProduct);
        setName('');
        setPrice('');
        setImage('');
        setImageFile(null);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className="admin-panel">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                
                <label>Image:</label>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {imageFile ? <p>{imageFile.name}</p> : <p>Upload Image</p>}
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AdminPanel;

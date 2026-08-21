import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';





function AddProduct() {


  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  const [price, setPrice] = useState('');

  const [stockQuantity, setStockQuantity] = useState('');

  const [image, setImage] = useState(null);

  const [error, setError] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError('');

    const formData = new FormData();


    formData.append('name', name);


    formData.append('description', description);


    formData.append('price', price);


    formData.append('stockQuantity', stockQuantity);


    if (image) formData.append('image', image);

    try {

    
        await axios.post('http://localhost:3000/api/products', formData, {
       
            headers: {
       
                Authorization: `Bearer ${localStorage.getItem('token')}`
     
            }
      });



      navigate('/');



    } catch (err) {

  
        setError(err.response?.data?.message || 'Failed to add product');
  
    }
  };

  return (


    <div className="add-product-container">

      <h2>Add Product</h2>

 
      {error && <p className="add-product-error">{error}</p>}
    
      <form onSubmit={handleSubmit} className="add-product-form">
     
     
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
  
  
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />


        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
   
        <input type="number" placeholder="Stock Quantity" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
   
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
    

        <button type="submit">Add Product</button>
    
    
    
    
      </form>
  
    </div>
  );
}



export default AddProduct;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';




function ProductDetails() {
    
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [error, setError] = useState('');





  useEffect(() => {

    const fetchProduct = async () => {

      try {
     
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
      
        setProduct(response.data);
    
    } catch (err) {
       
        setError('Product not found');
   
    }
    };


    fetchProduct();

  }, [id]);


  
  if (error) return <p className="details-error">{error}</p>;
 
 
  if (!product) return <p className="details-loading">Loading...</p>;

  return (

    <div className="details-container">

      {product.imageUrl && (

    
        <img src={`http://localhost:3000${product.imageUrl}`} alt={product.name} />
    
    
    )}
    
      <h2>{product.name}</h2>
   
      <p>{product.description}</p>
    
      <p><strong>${product.price}</strong></p>
    
      <p>In stock: {product.stockQuantity}</p>
  
    </div>
 

);
}

export default ProductDetails;
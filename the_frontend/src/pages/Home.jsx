import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Home.css';


function Home() {

  const [products, setProducts] = useState([]);

  const [error, setError] = useState('');


  useEffect(() => {

    const fetchProducts = async () => {


      try {

     
        const response = await axios.get('http://localhost:3000/api/products');
     
        setProducts(response.data);
    
    } catch (err) {
     
        setError('Failed to load products');
    
    }
    };


    fetchProducts();


  }, []);


  return (

    <div className="home-container">

      <h2>Products</h2>

      {error && <p className="home-error">{error}</p>}
      

      <div className="product-grid">

        {products.map((product) => (

        
            <ProductCard key={product.id} product={product} />
      
      ))}
    
    
      </div>
   
    </div>

  );

}



export default Home;
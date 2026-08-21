import { Link } from 'react-router-dom';
import './ProductCard.css';


function ProductCard({ product }) {

  
    return (
   
   <Link to={`/products/${product.id}`} className="product-card">
     
      {product.imageUrl && (
      
      <img src={`http://localhost:3000${product.imageUrl}`} alt={product.name} />
 
 )}
    
      <h3>{product.name}</h3>
 
     <p>${product.price}</p>
   
   
    </Link>

);
}

export default ProductCard;
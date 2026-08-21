import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css';

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    navigate('/login');

  };

  return (

    <nav className="navbar">

      <Link to="/" className="navbar-logo">

        Phone Accessories Store

      </Link>


      <div className="navbar-links">

        {user?.role === 'admin' && (

         
            <Link to="/admin/add-product">Add Product</Link>
        )}

        {token ? (

        
            <button onClick={handleLogout}>Logout</button>
      
      
        ) : (
        
        
        <>
         
            <Link to="/login">Login</Link>
           
           
            <Link to="/register">Register</Link>
        
        
          </>
        )}
      
      </div>
    
    
    </nav>
  );
}

export default Navbar;
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Register() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');



  const navigate = useNavigate();



  const handleSubmit = async (e) => {

    e.preventDefault();

    setError('');


    try {

      await axios.post('http://localhost:3000/api/users/register', {
      
        name,
        
        email,
      
        password

      });

      navigate('/login');

  
    } catch (err) {
   
        setError(err.response?.data?.message || 'Registration failed');
   
    }

};

  return (

    <div className="auth-container">

      <h2>Register</h2>

    
      {error && <p className="auth-error">{error}</p>}
     
     <form onSubmit={handleSubmit} className="auth-form">
    
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
       
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
       
      
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
       
       
        <button type="submit">Register</button>
      
      
      </form>
    
      <p>Already have an account? <Link to="/login">Login</Link></p>
    
    </div>
    
  );
}

export default Register;
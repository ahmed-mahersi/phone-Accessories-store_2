import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';





function Login() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();



  const handleSubmit = async (e) => {

    e.preventDefault();

    setError('');

    
    try {

     
        const response = await axios.post('http://localhost:3000/api/users/login', {
       
            email,
      
            password
    
        });

     
        localStorage.setItem('token', response.data.token);
      
        localStorage.setItem('user', JSON.stringify(response.data.user));

     
        navigate('/');
   
    } catch (err) {
    
        setError(err.response?.data?.message || 'Login failed');
  
    }
  };



  return (

    <div className="auth-container">

      <h2>Login</h2>

      {error && <p className="auth-error">{error}</p>}

      <form onSubmit={handleSubmit} className="auth-form">

       
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
        <button type="submit">Login</button>
      
      </form>
    
      <p>No account? <Link to="/register">Register</Link></p>
    
    </div>
  );
}

export default Login;
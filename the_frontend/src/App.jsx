import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';
import ProtectedRoute from './components/ProtectedRoute';





function App() {

  return (

    <div>

      <Navbar />

      <Routes>

    
        <Route path="/" element={<Home />} />
      
        <Route path="/login" element={<Login />} />
      
        <Route path="/register" element={<Register />} />
       
        <Route path="/products/:id" element={<ProductDetails />} />
     
        <Route


          path="/admin/add-product"


          element={

            <ProtectedRoute>

              <AddProduct />

            </ProtectedRoute>

          }

        />

      </Routes>


    </div>
  );
}




export default App;
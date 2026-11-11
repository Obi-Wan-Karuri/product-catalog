import { useState, useEffect } from 'react';
import {Routes , Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import ProductForm from './pages/ProductForm.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const API_URL = 'https://dummyjson.com/products?limit=30';

function App(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts(){
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data.products);
      }
      catch (error) {
        setError('Failed to fetch products. Please try again later.');
      }
      finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={ <ProtectedRoute><Home products={products} loading={loading} error={error} /></ProtectedRoute>} />
      <Route path="/products/new" element={<ProtectedRoute><ProductForm /></ProtectedRoute>}/>
      <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>}/>
      <Route path="/products/:id/edit" element={<ProtectedRoute><ProductForm /></ProtectedRoute>}/>

    </Routes>
  );
}

export default App;
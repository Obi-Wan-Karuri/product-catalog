import {Routes , Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import ProductForm from './pages/ProductForm.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={ <ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/products/new" element={<ProtectedRoute><ProductForm /></ProtectedRoute>}/>
      <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>}/>
      <Route path="/products/:id/edit" element={<ProtectedRoute><ProductForm /></ProtectedRoute>}/>

    </Routes>
  );
}

export default App;
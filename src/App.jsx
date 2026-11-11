import {Routes , Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import ProductForm from './pages/ProductForm.jsx';
import ProductDetail from './pages/ProductDetail.jsx';


function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/products/new" element={<ProductForm />}/>
      <Route path="/products/:id" element={<ProductDetail />}/>
      <Route path="/products/:id/edit" element={<ProductForm />}/>

    </Routes>
  );
}

export default App;
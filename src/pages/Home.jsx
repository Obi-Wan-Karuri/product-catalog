import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';

function Home({ products, loading, error }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  // Derived from the fetched products, not hardcoded
  const categories = [...new Set(products.map((product) => product.category))];

  const visibleProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="page">
      <h1>Welcome to the product catalog.</h1>

      <div className="toolbar">
        <button onClick={() => navigate('/products/new')}>Add Product</button>
        <button onClick={handleLogout}>Logout</button>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {loading && <Spinner />}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="grid">
          {visibleProducts.map((product) => (
            <div className="card" key={product.id}>
              <Link to={`/products/${product.id}`} className="card-link">
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
              </Link>
              <div className="card-actions">
                <button
                  onClick={() => navigate(`/products/${product.id}/edit`)}
                >
                  Edit
                </button>
                {/* Delete gets wired up in Part 6 */}
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';

function Home({products, loading, error}) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <h1>Welcome to the product catalog.</h1>
      <button onClick={handleLogout}>Logout</button>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>Loaded {products.length} products.</p>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';

function ProductDetail({ products, loading }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Wait for the fetch to finish before deciding the product is missing
  if (loading) {
    return <Spinner />;
  }

  const product = products.find((p) => p.id === Number(id));

  // Not in state (bad id, failed fetch): go home
  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page">
      <button onClick={() => navigate('/')}>Back</button>

      <div className="detail">
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <p>{product.description}</p>

          <button onClick={() => navigate(`/products/${product.id}/edit`)}>
            Edit
          </button>
          {/* Delete gets wired up in Part 6 */}
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <h1>Welcome to the product catalog.</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
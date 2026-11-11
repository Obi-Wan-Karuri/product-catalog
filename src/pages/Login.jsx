import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password');
      return;
    }
    localStorage.setItem('token', 'dummy');
    navigate('/');
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}


export default Login;
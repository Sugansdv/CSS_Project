import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import loginGif from '../images/loginLogo.gif';

const syl = {
  fontFamily: 'Quicksand,FontAwesome'
};

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    console.log('Login successful for:', username);
    setError('');
    navigate('/MainPage');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <div className="loginmain">
        <div className="loginbox1">
          <img src={loginGif} alt="Login Animation" />
        </div>
        <div className="loginbox2">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="logform">
              <input
                style={syl}
                type="text"
                placeholder="&#xf0e0;   Enter your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /> <br />
              <div className="password-input-wrapper">
                <input
                  style={syl}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="&#xf023;   Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>
            <p>Forgot password?</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="loginbtn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
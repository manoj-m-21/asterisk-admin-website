import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (username === 'admin' && password === 'ECO!@#') {
            localStorage.setItem('userToken', 'authenticated');
            navigate('/home'); // Redirect to home page on success
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h1 className="title">ASTERISK</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Username</label>
                    <div className="input-wrapper">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;

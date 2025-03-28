import React, { useState } from 'react';
import "../styles/Navbar.css";
import { FaQuestionCircle, FaComments, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem('userToken');
            navigate('/'); // Redirect to home (login) page
        }
    };

    const handleGoHome = () => {
        navigate('/home'); // Navigate to /home when clicking ASTERISK
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='navbar'>
                <div className='leftside'>
                    <button className="menu-btn" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <h1 onClick={handleGoHome} style={{ cursor: 'pointer' }}>ASTERISK</h1>
                </div>
                <div className='rightside'>
                    <input type="text" className="search-bar" placeholder="Enter your search query" />
                    <button className="icon-btn">
                        <Link to="/help">
                            <FaQuestionCircle />
                        </Link>
                    </button>
                    <button className="icon-btn">
                        <Link to="/support">
                            <FaComments />
                            <span>Support</span>
                        </Link>
                    </button>
                    <button className="icon-btn">
                        <Link to="/notification">
                            <FaBell />
                        </Link>
                    </button>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Side Menu */}
            <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/home" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/extension" onClick={toggleMenu}>Add Extension</Link>
                    </li>
                    <li>
                        <Link to="/modify" onClick={toggleMenu}>Modify Extension</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;

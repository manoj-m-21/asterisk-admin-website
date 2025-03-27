import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const openNav = () => {
        setMenuOpen(true);
    };

    const closeNav = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div id="mySidenav" className={`sidenav ${menuOpen ? 'open' : ''}`}>
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <h2>Animated Sidenav Example</h2>
            <p>Click on the element below to open the side navigation menu.</p>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
                &#9776; open
            </span>
        </>
    );
}

export default Sidebar;

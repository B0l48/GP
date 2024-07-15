// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que uses react-router-dom para la navegación

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nuevo-video">Nuevo Video</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;



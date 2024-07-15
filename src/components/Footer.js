
// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src="/path-to-your-logo.png" alt="Logo" />
            </div>
            <p>Desarrollado por Daniel Jerónimo. 2024 &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;


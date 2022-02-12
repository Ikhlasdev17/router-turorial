import React from 'react';
import { Link } from "react-router-dom"
function Header(props) {
    return (
        <header className='header'>
            <h1><Link to="/" className="logo">Ikhlas</Link></h1>
            <nav className='header__nav'>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;
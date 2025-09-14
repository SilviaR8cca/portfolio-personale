import React from "react";
import {Link} from 'react-router-dom';
import'./Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
           
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Chi sono</Link></li>
                    <li><Link to="/skills">Competenze</Link></li>
                    <li><Link to="/Contact">Contatti</Link></li>
                    
                </ul>
            
        </nav>
    );
};

export default Navbar;
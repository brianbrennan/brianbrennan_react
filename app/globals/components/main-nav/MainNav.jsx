import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        );
    }
}

module.exports = MainNav;
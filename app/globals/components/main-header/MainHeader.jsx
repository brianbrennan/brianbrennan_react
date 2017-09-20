import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../main-nav/MainNav.jsx';

class MainHeader extends React.Component {
    render() {
        return (
            <header className="main-header container">
                <div className="row">
                    <Link to="/">
                        <div className="logo">

                        </div>
                    </Link>
                    <MainNav/>
                </div>
            </header>
        );
    }
}

module.exports = MainHeader;
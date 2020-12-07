import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="nav-link" to="/">useContext</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

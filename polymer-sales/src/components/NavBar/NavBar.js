import "./NavBar.css";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo-full.svg';

function NavBar() {

    return (
        <div className='navbar-wrapper'>
            <div className="nav-bar">
                <div style={{width: "50%"}}>
                    <img src={logo} />
                </div>

                <ul className="links">
                    <li>Solutions</li>
                    <li>Customers</li>
                    <li>Pricing</li>
                    <li>Company</li>
                    <li>Talk to Sales</li>
                </ul>

                <Link to='/hello'>
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default NavBar;
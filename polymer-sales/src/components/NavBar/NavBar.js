import "./NavBar.css";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo-full.svg';

function NavBar() {

    return (
        <div className='navbar-wrapper'>
            <div className="nav-bar">
                <div style={{width: "50%"}}>
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                </div>

                <ul className="links">
                    <Link to='/product-info'>
                        <li>Solutions</li>
                    </Link>
                    <Link to='/'>
                        <li>Customers</li>
                    </Link>
                    <Link to='/contact-us'>
                        <li>Pricing</li>
                    </Link>
                    <Link to='/'>
                        <li>Company</li>
                    </Link>
                    <Link to='/contact-us'>
                        <li>Talk to Sales</li>
                    </Link>
                </ul>

                <Link to='/contact-us'>
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default NavBar;
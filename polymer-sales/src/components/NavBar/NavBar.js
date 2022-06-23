import "./NavBar.css";
import React, {Component, useRef} from 'react';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    const ref = useRef();
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        try {
            if (scrollTop > ref.current.clientHeight) {
                document.getElementsByClassName("navbar-wrapper")[0].classList.add("translucent");
            } else {
                document.getElementsByClassName("navbar-wrapper")[0].classList.remove("translucent");
            }
        } catch (e) {}
    });

    const openMenu = e => {
        document.getElementsByClassName("links")[0].classList.remove("from-right");
    }

    const closeMenu = e => {
        document.getElementsByClassName("links")[0].classList.add("from-right");
    }


    return (
        <div className='navbar-wrapper' ref={ref}>
            <div className="nav-bar">
                <div style={{width: "50%"}}>
                    <HashLink to='/#'>
                        <img className="logo-full" src={require('../../img/logo-full.png')} />
                        <img className="logo-small hidden" src={require('../../img/logo.png')} />
                    </HashLink>
                </div>

                <ul className="links from-right">
                    <HashLink to='/product-info#'>
                        <li>Solutions</li>
                    </HashLink>
                    <HashLink to='/contact-us#'>
                        <li>
                            <button className="special-btn">Get Started</button>
                        </li>
                    </HashLink>
                    <span id="close-links" className="hidden" onClick={closeMenu}>✖</span>
                </ul>

                <div className="hidden menu-container">
                    <i className='bx bx-menu' onClick={openMenu}></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

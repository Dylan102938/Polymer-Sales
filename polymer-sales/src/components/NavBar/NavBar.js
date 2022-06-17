import "./NavBar.css";
import React, {Component, useRef} from 'react';
import { Link } from 'react-router-dom';

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


    return (
        <div className='navbar-wrapper' ref={ref}>
            <div className="nav-bar">
                <div style={{width: "50%"}}>
                    <Link to='/'>
                        <img src={require('../../img/logo-full.png')} />
                    </Link>
                </div>

                <ul className="links">
                    <Link to='/product-info'>
                        <li>Solutions</li>
                    </Link>
                    <Link to='/contact-us'>
                        <li>
                            <button className="special-btn">Get Started</button>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;

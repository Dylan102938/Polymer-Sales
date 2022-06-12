import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="main">
                <div className="flex flex-row" style={{justifyContent: 'space-between' }}>
                    <div style={{width: '40%'}}>
                        <img src={require('../../img/logo-full.png')} />
                    </div>
                    <div className="flex flex-row" style={{justifyContent: 'space-between', width: '60%'}}>
                        <div className="footer-list">
                            <ul>
                                <li className="header">Products</li>
                                <Link to="/product-info">
                                    <li>Price Elasticity Estimator</li>
                                </Link>
                                <Link to="/product-info">
                                    <li>Simulated Marketplace</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="footer-list">
                            <ul>
                                <li className="header">Company</li>
                                <Link to="/">
                                    <li>About</li>
                                </Link>
                                <Link to="/contact-us">
                                    <li>Pricing</li>
                                </Link>
                                <Link to="/product-info">
                                    <li>Methodology</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="footer-list">
                            <ul>
                                <li className="header">Find Us</li>
                                <Link to="/">
                                    <li>Facebook</li>
                                </Link>
                                <Link to="/">
                                    <li>Linkedin</li>
                                </Link>
                                <Link to="/">
                                    <li>Twitter</li>
                                </Link>
                            </ul>
                        </div>

                        <div className="footer-list">
                            <ul>
                                <li className="header">Contact</li>
                                <li>ted@trypolymer.com</li>
                                <li>dylan@trypolymer.com</li>
                                <li>kunal@trypolymer.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-row align-center footer-bottom"}>
                    <span>Copyright © 2022 Polymer Analytics, Inc. All rights reserved.</span>
                    <Link to="/product-info">
                        <span>Terms of Use & Privacy Policy</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
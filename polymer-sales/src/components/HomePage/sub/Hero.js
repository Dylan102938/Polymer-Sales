import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='hero-section'>
            <div className='main'>
                <h1 style={{margin: 0, fontWeight: 500}}>Optimal Prices,</h1>
                <h1 style={{margin: 0, fontweight: 400}}>Revealed by Real Customers</h1>
                <div className="hero-buttons">
                    <Link to='/product-info'>
                        <button style={{backgroundColor: 'var(--blue)', color: 'white', fontSize: '0.9rem'}} className='custom-btn'>Learn More</button>
                    </Link>

                    <Link to='/contact-us'>
                        <button style={{backgroundColor: 'var(--mint)', color: 'black', fontSize: '0.9rem'}} className=' get-started custom-btn'>Get Started</button>
                    </Link>
                </div>
            </div>

            <div className="our-customers" style={{display: 'none'}}>
                <div style={{marginBottom: "40px"}}>Servicing the world's most reliable enterprise companies</div>
                <ul>
                    <li><img src='https://scale.com/static/images/logos/customers/brex.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/etsy.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/general-motors.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/flexport.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/instacart.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/square.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/nvidia.svg' /></li>
                    <li><img src='https://scale.com/static/images/logos/customers/openai.svg' /></li>
                </ul>
            </div>
        </div>
    )
}

export default Hero;
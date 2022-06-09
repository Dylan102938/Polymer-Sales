import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import lottie1 from './assets/lottie-1.json';
import lottie2 from './assets/lottie-2.json';

function Intro() {
    return (
        <div className='main intro' style={{padding: "100px 2rem"}}>
            <div className="flex flex-row align-center" style={{columnGap: "100px"}}>
                <div style={{width: "80%"}}>
                    <h2>
                        Real-World Research, No Guesswork.
                    </h2>
                    <p>Thousands of consumers make buying decisions in Polymer’s simulated e-commerce marketplace. Their aggregated behavior at different price points creates a detailed picture of price elasticity. Pricing models based on sparse historical data is a thing of the past.</p>
                    <Link to='/product-info'>
                        <button className='btn' style={{backgroundColor: 'var(--blue)', color: 'var(--white)', marginTop: "60px"}}>Learn More</button>
                    </Link>
                </div>

                <div className="lottie-container">
                    <Lottie
                        animationData={lottie1} 
                        background="transparent"  
                        speed={1}  
                        style={{width: "500px", height: "500px"}} 
                        loop play 
                    />
                </div>
            </div>

            <div className="flex flex-row align-center" style={{columnGap: "100px"}}>
                <div className="lottie-container">
                    <Lottie
                        animationData={lottie2} 
                        background="transparent"  
                        speed={1}  
                        style={{width: "600px", height: "450px"}} 
                        loop play 
                    />
                </div>

                <div>
                    <div>
                        <h2>
                            Run Detailed Market Simulations.
                        </h2>
                        <p>Buying decisions are not made in a vaccum. Polymer presents your product to surveyed customers alongside competitors' offerings and key decison drivers such as reviews, shipping time, and product description.</p>
                        <Link to='/product-info'>
                            <button className='btn' style={{backgroundColor: 'var(--blue)', color: 'var(--white)', marginTop: "60px"}}>Learn More</button>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Intro;
import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import Hero from './sub/Hero';
import Intro from './sub/Intro';
import CallToAction from './sub/CallToAction';
import React, { Component } from 'react';

function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Intro />
            <div style={{height: '300vh'}}>
                <div style={{position: 'sticky', width: '100%', height: '100vh', backgroundColor: 'yellow', top: 0}}>

                </div>
            </div>
            <CallToAction />
        </div>
    )
}

export default HomePage;
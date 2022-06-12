import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import Hero from './sub/Hero';
import Intro from './sub/Intro';
import CallToAction from './sub/CallToAction';
import Process from './sub/Process';
import Footer from '../Footer/Footer';
import React from 'react';

function HomePage() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Intro />
            <Process />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default HomePage;
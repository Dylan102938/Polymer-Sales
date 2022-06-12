import './App.css';
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ContactUs from './components/ContactUs/ContactUs';
import Loading from './components/Loading/Loading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('loading').classList.add('invisible');
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
            }, 500);
        }, 500);
    }, []);

    return (
        <div>
            <Loading additionalStyles={{backgroundColor: 'var(--white)'}} />
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/product-info' element={<ProductInfo />} />
                    <Route exact path='/contact-us' element={<ContactUs />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

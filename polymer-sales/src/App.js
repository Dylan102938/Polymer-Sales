import './App.css';
import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ContactUs from './components/ContactUs/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/product-info' element={<ProductInfo />} />
                <Route exact path='/contact-us' element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;

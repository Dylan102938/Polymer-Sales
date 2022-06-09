import './App.css';
import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react'
import ReactDom from 'react-dom'
import ReactDOM from "react-dom/client";
import './App.css'
import Navbar from './Navbar'
import Hero_Page from './Hero_Page'
import About_Us from './About_Us'
import Peripheral_Menu from './Peripheral_Menu'
import Reviews from './Reviews'
import Menu from './Menu.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Feedback_Page from './Feedback_Page.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero_Page />
            <About_Us />
            <Peripheral_Menu />
            <Reviews />
            <Feedback_Page/>
        </div>
    )
}
export default App


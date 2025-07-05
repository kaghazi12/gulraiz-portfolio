import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Background from "./components/Background.jsx";
import ThemeToggle from "./components/Themetoggle.jsx";
import './index.css';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <div>
            <Background/>
            <ThemeToggle/>
            <Navbar/>
            <Home/>
            <About/>
            <Contact/>
        </div>
        )
}
export default App;
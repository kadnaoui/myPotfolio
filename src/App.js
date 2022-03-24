import React from "react";
import Navbar from './Navbar';
import Header from './Header';
import Page1 from "./Page1";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import './style.css'

export default function App() {
    return (
        <><Navbar />
            <Header />
            <Page1 />
            <Projects />
            <Contact />
            <Footer />
        </>

    )
}
import React from "react";
import logo from './image/aa.png';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container-fluid" >

                <a className="navbar-brand  " href="#home"><img src={logo} id="logo" /><h1>Abderrahim KDN</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutme">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projectsdiv">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cntct">Contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}
import React from 'react';
import './Navbar.css';
import { logo } from './../../../images/saim-logo.png';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <a id="home" className="nav-link fw-bolder text-secondary " href="#">SAIM </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <ul className="navbar-nav ms-auto">
                            <a id="home" className="nav-link fw-bold " aria-current="page" href="#">Home</a>
                            <a className="nav-link fw-bold" href="#about">About</a>
                            <a className="nav-link fw-bold" href="#projects">Projects</a>
                            <a className="nav-link fw-bold " href="#contact">Contact</a>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import ContactMe from './ContactMe';
import './Footer.css';
// import logo from "./../../images/saim-logo.png";

const Footer = () => {
    return (
        <div id="contact">
            <ContactMe></ContactMe>

            <hr />
            <div className='text-center'>
                <p>Copyright &copy; 2021, Saim Hasan - All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
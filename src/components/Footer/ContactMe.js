import React, { useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactMe.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactWithEmail from './ContactWithEmail';

const ContactMe = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <section className="container mt-5 pt-5" id='contact'>
            <h1 className='text-center brand-font4 brand-color2 pb-2'>Get in <span className="brand-color">Touch</span></h1><hr className="hr2" />
            <div className="row py-4">
                <div className="col-md-5 address-media" data-aos="fade-right">
                    <div className="d-flex align-items-center my-2">
                        {/* <FontAwesomeIcon className="icon active-icon" icon={faPhoneAlt} /> */}
                        <div className='ps-3 brand-font4'>
                            <h4>Phone</h4>
                            <h6>+088 01956091010</h6>
                        </div>
                    </div>

                    <div className="d-flex align-items-center my-2">
                        {/* <FontAwesomeIcon className="icon active-icon" icon={faMailBulk} /> */}
                        <div className='ps-3 brand-font4'>
                            <h4>Email</h4>
                            <h6>saimhasan091010@gmail.com</h6>
                        </div>
                    </div>

                    <div className="d-flex align-items-center my-2">
                        {/* <FontAwesomeIcon className="icon active-icon" icon={faLocationArrow} /> */}
                        <div className='ps-3 brand-font4'>
                            <h4>Location</h4>
                            <h6>Boikali, Khulna-9000</h6>
                        </div>
                    </div>
                    {/* <div className="social-media py-5">
                        <a href="https://www.linkedin.com/in/fahimahammedfiroz/" target='_blank'><FontAwesomeIcon className="icon active-icon" icon={faLinkedin} /></a>
                        <a href="https://www.facebook.com/fahimahammed.firoz.5/" target='_blank'><FontAwesomeIcon className="icon active-icon" icon={faFacebook} /></a>
                        <a href="https://github.com/fahimahammed" target='_blank'><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a>
                        <a href="https://fahimahammed-cse.medium.com/" target='_blank'><FontAwesomeIcon className="icon active-icon" icon={faMedium} /></a>
                    </div> */}

                </div>
                <div className="col-md-7">
                    <ContactWithEmail></ContactWithEmail>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
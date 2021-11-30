import React from 'react';

const TopHeader = () => {
    return (
        <div className="container d-flex align-items-center">
            <div data-aos="fade-right" className="col-md-6 mt-5">
                <h4>Hi, I'm</h4>
                <h1 className="fw-bolder text-secondary">Saim Hasan Nahid</h1>
                <span>Frontend Developer</span> <br />
                <a target="_blank" href="https://drive.google.com/file/d/1qvlHo14El3jbLIGceIEu5uiv_5ZyqPls/view?usp=sharing" >
                    <button className="btn btn-primary mt-3">Download Resume</button></a>
            </div>
            <div data-aos="fade-left" className="col-md-6">
                <img className="img-fluid w-100 p-5" src="https://i.ibb.co/4KpBWzN/profile.png" border="0"></img>
            </div>
        </div>
    );
};

export default TopHeader;
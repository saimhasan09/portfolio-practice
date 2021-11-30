import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';
// import ProjectCard from '../ProjectCard/ProjectCard';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div id="home">
            <Navbar></Navbar>
            <TopHeader></TopHeader>
            {/* <ProjectCard></ProjectCard> */}
            <Projects></Projects>
            <About></About>
            <Footer></Footer>

        </div>
    );
};

export default Home;
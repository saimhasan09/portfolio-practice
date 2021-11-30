import React, { useEffect, useState } from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';

const Projects = () => {
    const [project, setProject] = useState('');
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);
    return (
        <div id="projects" className="container">
            <h1 className="text-center fw-bolder text-primary mb-5">PROJECTS</h1>
            <div className="d-flex justify-content-between">
                {
                    project && project.map(singleProject => <ProjectCard data={singleProject} key={singleProject.id}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;
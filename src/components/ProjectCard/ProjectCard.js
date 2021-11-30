import React from 'react';

const ProjectCard = ({ data }) => {
    const { id, name, img, description, liveSite, github } = data;
    return (
        <div data-aos="zoom-in">
            <div class="card" style={{ width: '18rem' }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-body">
                    <a href={liveSite} target="_blank"><button className="btn btn-primary me-2">Live Site </button></a>
                    <a href={github} target="_blank"><button className="btn btn-primary ms-2"> GitHub </button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
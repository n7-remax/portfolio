import React from 'react';
import Popup from "reactjs-popup";

import myProjects from './myProjects'

function ProjectList() {
    const projectList = myProjects.map((project) => {
        return <Project key={project.id} project={project} />;
    });
    return (<div className="portfolio-projects">{projectList}</div>)
}

function Project(props) {
    const project = props.project
    return (
        <div className="container">
            <div className="hovereffect">
                <img className="img-responsive" src={project.image} alt={project.name}></img>
                <Popup className="pop" trigger={<div className="overlay"> <h3>{project.name}</h3><span className="info">{project.type}</span></div>} modal>
                    {close => (
                        <div className="modal">
                            <img className="modal-img" src={project.image} alt={project.name}></img>
                            <div class="description-box">
                                <h4>{project.name}</h4>
                                <p>{project.description}</p>
                            </div>
                            <div className="actions">
                                <a className="pop-button transition-smooth" href={project.linkToProject} target="_blank" rel="noopener noreferrer">Посмотреть</a>
                                <div className="pop-button transition-smooth" onClick={() => { close(); }}>
                                    <span>Закрыть</span>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        </div>
    )
}

export default ProjectList

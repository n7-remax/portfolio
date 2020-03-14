import React from 'react';
import Popup from "reactjs-popup";

import './project.css'
import myProjects from './myProjects'

function ProjectList() {
    const projectList = myProjects.map((project) => {
        return <Project key={project.id} project={project} />;
    });
    return (<div className="portfolio-projects">{projectList}</div>)
}

function ProjectImage(props) {
    return (<img className={props.className} src={props.image} alt={props.name}/>)
}

function Project(props) {
    const project = props.project
    return (
        <div className="container">
            <div className="hovereffect">
                <ProjectImage className="img-responsive" image={project.image} name={props.name}/>
                <Popup className="pop" trigger={<div className="overlay"> <h3>{project.name}</h3><span className="info">{project.type}</span></div>} modal>
                    {close => (
                        <div className="modal">
                            <ProjectImage className="modal-img" image={project.image} name={props.name}/>
                            <div class="description-box">
                                <h4>{project.name}</h4>
                                <p>{project.description}</p>
                                <a href={project.linkToGit} title="github" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i> GitHub</a>
                            </div>
                            <div className="actions">
                                <a className="pop-button transition-smooth" href={project.linkToProject} target="_blank" rel="noopener noreferrer">View</a>
                                <div className="pop-button transition-smooth" onClick={() => { close(); }}>
                                    <span>Close</span>
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

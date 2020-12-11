import React from 'react';

import './portfolio.css';

import ProjectList from './Project/ProjectList';

function Portfolio() {
    return (
        <section id="portfolio">
            <div className="row">
                <ProjectList/>
            </div>
        </section>
    );
}

export default Portfolio;

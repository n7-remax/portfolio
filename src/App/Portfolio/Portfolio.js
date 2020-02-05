import React from 'react';

import './portfolio.css';

import ProjectList from './Project/ProjectList';

function Portfolio() {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="portfolio-heading">
                    <h2>Портфолио</h2>
                </div>
                <ProjectList/>
            </div>
        </section>
    );
}

export default Portfolio;

import React from 'react';
import './portfolio.css';

// src={require('../../common/images/flora.jpg')}

function Portfolio() {
    return (
        <section id="portfolio">
            <div className="row">
                <div className="portfolio-heading">
                    <h2>Портфолио</h2>
                </div>
                <div className="portfolio-projects">
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/flora.jpg')} alt=""></img>
                            <div className="overlay">
                                <h3>Massage Studio 'Flora'</h3>
                                <a className="info" href="https://www.massage-flora.com.ua/" target="_blank" rel="noopener noreferrer">Коммерческий проект</a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/gaming-blog.jpg')} alt=""></img>
                            <div className="overlay">
                                <h3>Gaming blog</h3>
                                <a className="info" href="https://n7-remax.github.io/blog-project/" target="_blank" rel="noopener noreferrer">Первый проект на ReactJS</a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/margarinno.jpg')} alt=""></img>
                            <div className="overlay">
                                <h3>Artwork gallery</h3>
                                <a className="info" href="https://margarinno-artwork.herokuapp.com/" target="_blank" rel="noopener noreferrer">Проект на Java</a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/redux.jpg')} alt=""></img>
                            <div className="overlay">
                                <h3>React with Redux</h3>
                                <a className="info" href="https://n7-remax.github.io/react_first_project/" target="_blank" rel="noopener noreferrer">Тестовый проект</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

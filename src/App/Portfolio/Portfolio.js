import React from 'react';
import Popup from "reactjs-popup";
import './portfolio.css';

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
                            <img className="img-responsive" src={require('../../common/images/flora.jpg')} alt="massage-flora"></img>
                            <Popup className="pop" lockScroll="true" trigger={<div className="overlay"> <h3>Massage Studio 'Flora'</h3><span className="info">Коммерческий проект</span></div>} modal>
                                {close => (
                                    <div className="modal">
                                        <img className="modal-img" src={require('../../common/images/flora.jpg')} alt="massage-flora"></img>
                                        <div class="description-box">
                                            <h4>Massage Flora</h4>
                                            <p>Проект свёрстан в рамках коммерческого заказа. С использованием Html5 - CSS3 - JS - ReactJS, а так же реализация сетки страницы при помощи flexbox. Кроссбраузерный, отображается корректно на всех последних версиях браузеров</p>
                                        </div>
                                        <div className="actions">
                                            <a className="pop-button transition-smooth" href="https://www.massage-flora.com.ua/" target="_blank" rel="noopener noreferrer">Посмотреть</a>
                                            <div
                                                className="pop-button transition-smooth"
                                                onClick={() => {
                                                    close();
                                                }}
                                            >
                                                <span>Закрыть</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/gaming-blog.jpg')} alt="gaming-blog"></img>
                            <Popup className="pop" lockScroll="true" trigger={<div className="overlay"> <h3>Gaming Blog</h3><span className="info">Тестовый проект</span></div>} modal>
                                {close => (
                                    <div className="modal">
                                        <img className="modal-img" src={require('../../common/images/gaming-blog.jpg')} alt="gaming-blog"></img>
                                        <div class="description-box">
                                            <h4>Gaming Blog</h4>
                                            <p>Проект свёрстан в рамках тестового задания. С использованием Html - CSS - JS - ReactJS. Кроссбраузерный, отображается корректно на всех последних версиях браузеров</p>
                                        </div>
                                        <div className="actions">
                                            <a className="pop-button transition-smooth" href="https://n7-remax.github.io/blog-project/" target="_blank" rel="noopener noreferrer">Посмотреть</a>
                                            <div
                                                className="pop-button transition-smooth"
                                                onClick={() => {
                                                    close();
                                                }}
                                            >
                                                <span>Закрыть</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/margarinno.jpg')} alt="margarinno-artwork"></img>
                            <Popup className="pop" lockScroll="true" trigger={<div className="overlay"> <h3>Margarinno Artwork</h3><span className="info">Коммерческий проект</span></div>} modal>
                                {close => (
                                    <div className="modal">
                                        <img className="modal-img" src={require('../../common/images/margarinno.jpg')} alt="margarinno-artwork"></img>
                                        <div class="description-box">
                                            <h4>Margarinno Artwork</h4>
                                            <p>Проект свёрстан в рамках коммерческого заказа. С использованием Html5 - CSS3 - JS - HerokuApp - Java - Spring. Кроссбраузерный, отображается корректно на всех последних версиях браузеров. Адаптивный, отображается корректно на различных мобильных устройствах.</p>
                                        </div>
                                        <div className="actions">
                                            <a className="pop-button transition-smooth" href="https://margarinno-artwork.herokuapp.com/" target="_blank" rel="noopener noreferrer">Посмотреть</a>
                                            <div
                                                className="pop-button transition-smooth"
                                                onClick={() => {
                                                    close();
                                                }}
                                            >
                                                <span>Закрыть</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hovereffect">
                            <img className="img-responsive" src={require('../../common/images/redux.jpg')} alt="redux"></img>
                            <Popup className="pop" lockScroll="true" trigger={<div className="overlay"> <h3>React with Redux</h3><span className="info">Тестовый проект</span></div>} modal>
                                {close => (
                                    <div className="modal">
                                        <img className="modal-img" src={require('../../common/images/redux.jpg')} alt="redux"></img>
                                        <div class="description-box">
                                            <h4>React with Redux</h4>
                                            <p>Проект свёрстан в рамках тестового задания. С использованием Html - CSS - JS - ReactJS - Redux. Реализовано управление данных посредством общего контейнера Redux</p>
                                        </div>
                                        <div className="actions">
                                            <a className="pop-button transition-smooth" href="https://n7-remax.github.io/react_first_project/" target="_blank" rel="noopener noreferrer">Посмотреть</a>
                                            <div
                                                className="pop-button transition-smooth"
                                                onClick={() => {
                                                    close();
                                                }}
                                            >
                                                <span>Закрыть</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

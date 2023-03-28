import React from 'react';
import "./portfolio.css";
import Cinerama from "../../assets/Cinerama.PNG";
import KomeWaza from "../../assets/KomeWaza.png";
import Zanzibar from "../../assets/Zanzibar.PNG";
import ThéBootstrap from "../../assets/ThéBootstrap.PNG";
import Travel_Blog from "../../assets/Travel_Blog.PNG";
import TravelTheWorld from "../../assets/TravelTheWorld.PNG";


const PortfolioTest = () => {
    return (
        <section className="portfolio section" id="projects">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Travaux personnels</span>

            <div className="portfolio__container container grid">
                <div className="portfolio__content">
                    <img src={Cinerama} alt="project image" className="project__img" />

                    <div>
                        <span className="project__subtitle">Web</span>
                        <h1 className="project__title">Ciné web site</h1>

                        <a href="#" className="project__button">
                            View demo <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content">
                    <img src={KomeWaza} alt="project image" className="project__img" />

                    <div>
                        <span className="project__subtitle">Web</span>
                        <h1 className="project__title">Site de nourriture</h1>

                        <a href="#" className="project__button">
                            View demo <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content">
                    <img src={Zanzibar} alt="project image" className="project__img" />

                    <div>
                        <span className="project__subtitle">Web</span>
                        <h1 className="project__title">Site de voyage</h1>

                        <a href="#" className="project__button">
                            View demo <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content">
                    <img src={ThéBootstrap} alt="project image" className="project__img" />

                    <div>
                        <span className="project__subtitle">Web</span>
                        <h1 className="project__title">Site de thé</h1>

                        <a href="#" className="project__button">
                            View demo <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content">
                    <img src={Travel_Blog} alt="project image" className="project__img" />

                    <div>
                        <span className="project__subtitle">Web</span>
                        <h1 className="project__title">Blog de voyage</h1>

                        <a href="#" className="project__button">
                            View demo <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="portfolio__content">
                    <img src={TravelTheWorld} alt="project image" className="project__img" />

                    <div>
                        <span className="project__subtitle">Web</span>
                        <h1 className="project__title">Site de voyage</h1>

                        <a href="#" className="project__button">
                            View demo <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PortfolioTest
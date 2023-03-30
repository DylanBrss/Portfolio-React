import React from "react";
import "./portfolio.css";
import Cinerama from "../../assets/Cinerama.PNG";
import KomeWaza from "../../assets/KomeWaza.png";
import Zanzibar from "../../assets/Zanzibar.PNG";
import ThéBootstrap from "../../assets/ThéBootstrap.PNG";
import Travel_Blog from "../../assets/Travel_Blog.PNG";
import TravelTheWorld from "../../assets/TravelTheWorld.PNG";
import Icon from "./Icon";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="projects">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Travaux personnels</span>

      <div className="portfolio__container container grid mb-sm-2">
        <div className="portfolio__content cinerama">
          <Icon
            img={Cinerama}
            title="Cinerama"
            desc="Projet sur la formation de développeur Front-End, l'objectif est l'apprentissage de framework VueJs avec l'utilisation de l'API TheMovieDB"
            techno1="HTML - CSS - Bootstrap - Vue"
            link="https://dylanbrss.github.io/Cinerama/"
          />
        </div>

        <div className="portfolio__content komewaza">
          <Icon
            img={KomeWaza}
            title="Cinerama"
            desc="Deuxième projet sur la formation de développeur Front-End, l'objectif est l'apprentissage et la mise en oeuvre des langages HTML et CSS tout en utilisant les Flex Box et en respectant un cahier des charges"
            techno1="HTML - CSS"
            link="https://dylanbrss.github.io/TP_Kome_Waza/"
          />
        </div>

        <div className="portfolio__content zanzibar">
          <Icon
            img={Zanzibar}
            title="Zanzibar"
            desc="Troisième projet sur la formation de développeur Front-End, l'objectif est l'apprentissage et la mise en oeuvre des langages HTML et CSS tout en utilisant les Flex Box et en respectant un cahier des charges"
            techno1="HTML - CSS"
            link="https://dylanbrss.github.io/TP_Zanzibar/"
          />
        </div>

        <div className="portfolio__content thebootstrap">
          <Icon
            img={ThéBootstrap}
            title="ThéBootstrap"
            desc="Projet bootstrap sur la formation de développeur Front-End, l'objectif est l'apprentissage et la mise en oeuvre des langages HTML, CSS et Bootstrap tout en respectant un cahier des charges"
            techno1="HTML - CSS - Bootstrap"
            link="https://dylanbrss.github.io/TP_the_bootstrap/"
          />
        </div>

        <div className="portfolio__content travel_blog">
          <Icon
            img={Travel_Blog}
            title="Travel Blog"
            desc="Dernier projet sur la formation de développeur Front-End, l'objectif est l'apprentissage et la mise en oeuvre des langages HTML et CSS tout en utilisant du Grid et en respectant un cahier des charges"
            techno1="HTML - CSS"
            link="https://dylanbrss.github.io/TP_Travel_blog/"
          />
        </div>

        <div className="portfolio__content traveltheworld">
          <Icon
            img={TravelTheWorld}
            title="Travel The World"
            desc="Projet sur la formation de développeur Front-End, l'objectif est l'apprentissage de la méthode Agile et la mise en oeuvre des langages HTML, CSS tout en respectant les demande d'un client"
            techno1="HTML - CSS"
            link="https://dylanbrss.github.io/TravelTheWorld/"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

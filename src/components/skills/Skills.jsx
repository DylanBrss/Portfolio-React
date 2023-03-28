import React, { useState } from "react";
import "./skills.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Ce que je sais faire</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="bx bx-devices services__icon"></i>
            <h3 className="services__title">
              Site <br /> Responsive
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Site Responsive</h3>
              <p className="services__modal-description">
                Un site responsive est un site qui est conçu et développé de
                façon à pouvoir s’adapter à toutes les résolutions d’écran.
                C’est donc un seul et même site qui peut être consulté sur
                ordinateur, sur smartphone ou sur tablette.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je développe l'interface utilisateur en format web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je développe l'interface utilisateur en format tablette.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je développe l'interface utilisateur en format téléphone.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-group services__icon"></i>
            <h3 className="services__title">
              Travail <br /> D'équipe
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Travailler en équipe, c'est faire partie d'un groupe d'individus
                avec lesquels on collabore pour réaliser des projets et
                atteindre des objectifs communs. Le travail d'équipe exclut la
                concurrence entre collègues, qui reconnaissent leur appartenance
                au groupe et ont à cœur de soutenir les autres membres pour le
                bien commun.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interaction.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of productsfor companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="bx bx-window-alt services__icon"></i>
            <h3 className="services__title">
              Maquettage <br />
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Maquettage</h3>
              <p className="services__modal-description">
                Une maquette de site web est une ébauche d'un site Internet qui
                est présentée sous forme statique à l'annonceur commanditaire.
                Sur les pages de la maquette ne figurent généralement que
                l'identification des différentes zones de contenus.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je créer une maquette sur figma.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

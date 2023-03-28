import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Brisseau</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">A Propos</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projets</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Technologies</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/dylan-brisseau-7a2a18239/" target="_blank" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/DylanBrss" target="_blank" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="mailto:dylanbrisseau79@gmail.com" className="footer__social-link" target="_blank">
                        <i className="bx bx-envelope"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Dylan Brisseau. Touts droits réservés</span>
            </div>
        </footer>
    )
}

export default Footer
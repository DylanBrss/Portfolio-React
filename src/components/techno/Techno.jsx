import React from 'react';
import './techno.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Technologies</h2>
            <span className="section__subtitle">Mon voyage technique</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills
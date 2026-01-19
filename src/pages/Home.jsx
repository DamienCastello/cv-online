import React from 'react';
import '../styles/home.css';
import { FaBolt, FaDocker } from "react-icons/fa";
import profilePic from '../../public/images/profile_image.jpg';

const Home = () => {
    return (
        <div className="home-container fade-in">
            <header className="home-header">
                <h1 className="home-title">👋 Salut, moi c’est Damien</h1>
                <h2 className="home-sub-title">Freelance Fullstack JavaScript (React / Node.js)</h2>

                <p className="home-pitch">
                    Renfort d’équipe en régie: développement de features, refonte front, intégration API,
                    stabilisation et réduction de la dette technique.
                </p>

                <div className="home-highlights">
                    <div className="highlight yellow"><FaBolt /> React / TypeScript (UI, refacto, perf)</div>
                    <div className="highlight">🔧 Node.js / Sequelize / SQL (API, intégration)</div>
                    <div className="highlight">📱 React Native (expérience agence)</div>
                    <div className="highlight blue"><FaDocker /> Docker (opérationnel: compose, env)</div>
                </div>

                <div className="home-cta">
                    <a className="cta-btn primary" href="mailto:d.castello.13200@gmail.com?subject=Mission%20freelance%20React%2FNode">
                        ✉️ Me contacter
                    </a>

                    <a className="cta-btn" href="https://www.linkedin.com/in/castello-damien/" target="_blank" rel="noreferrer">
                        🔗 LinkedIn
                    </a>

                    <a className="cta-btn" href="https://github.com/DamienCastello" target="_blank" rel="noreferrer">
                        🧩 GitHub
                    </a>
                </div>

                <p className="home-meta">📍 Arles • Remote • Disponible: immédiatement</p>
            </header>
            <div className="home-content">
                <div className="home-image">
                    <img src={profilePic} alt="Photo de Damien Castello" />
                </div>
                <div className="cv-download-container">
                    <a href="/Developpeur-Freelance_JS_2026.pdf" download className="cv-download-button">
                        <span className="cv-icon">⬇️</span> Mon CV en PDF
                    </a>
                </div>
                <p className="home-description">
                    Je ne suis pas tombé dans le code comme Obélix dans la potion.
                    J’ai appris, tâtonné, raté, recommencé.
                    Et un jour, j’ai compris que ce que j’aimais, c’était façonner.
                    <br /><br />
                    <span className="home-icon">🛠️</span>
                    Je sculpte des interfaces, j’assemble des APIs comme d’autres construisent des horloges.
                    <br /><br />
                    <span className="home-icon">⏱️</span>
                    Mon éditeur de code est mon établi.
                    <br />
                    <span className="home-icon">💻</span>
                    Mon terminal, un feu de forge.
                    <br />
                    <span className="home-icon">🎨</span>
                    Je travaille le pixel comme on travaille le bois: avec précision, patience et un brin d’improvisation.
                </p>
            </div>
        </div>
    );
};

export default Home;

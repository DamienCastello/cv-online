import React from 'react';
import '../styles/home.css';
import { FaBolt, FaDocker, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


import profilePic from '../../public/images/profile_image.jpg';

const Home = () => {
    return (
        <div className="home-container fade-in">
            <header className="home-header">
                <h1 className="home-title">👋 Salut, moi c’est Damien</h1>

                <h2 className="home-sub-title">
                    Développeur Full Stack JavaScript <br/> En formation Java & Angular
                </h2>

                <p className="home-pitch">
                    Développeur web & mobile avec 4 ans d’expérience en agence et sur projets personnels.
                    Actuellement en formation Concepteur Développeur d’Applications (Java / Angular),
                    je recherche un stage d’octobre à février pour continuer à évoluer sur ces technologies au sein d’une équipe tech.
                </p>

                <div className="home-highlights">
                    <div className="highlight">
                        <FaReact style={{ color: '#00a2ff' }} /> React
                    </div>

                    <div className="highlight">
                        <SiTypescript style={{ color: '#00a2ffe0' }} /> Typescript
                    </div>

                    <div className="highlight">
                        <FaNodeJs style={{ color: '#33ff00cb' }} /> Node.js
                    </div>

                    <div className="highlight">
                        📱 React Native
                    </div>

                    <div className="highlight">
                        <FaJava style={{ color: '#ffc400cb' }} /> Java / Spring Boot
                    </div>

                    <div className="highlight">
                        🅰️ Angular
                    </div>

                    <div className="highlight blue">
                        <FaDocker /> Docker / environnements conteneurisés
                    </div>
                </div>

                <div className="home-cta">
                    <a
                        className="cta-btn primary"
                        href="mailto:d.castello.13200@gmail.com?subject=Stage%20Java%20Angular"
                    >
                        ✉️ Me contacter
                    </a>

                    <a
                        className="cta-btn"
                        href="https://www.linkedin.com/in/castello-damien/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        🔗 LinkedIn
                    </a>

                    <a
                        className="cta-btn"
                        href="https://github.com/DamienCastello"
                        target="_blank"
                        rel="noreferrer"
                    >
                        🧩 GitHub
                    </a>
                </div>

                <p className="home-meta">
                    📍 Arles • Remote / Hybride • Recherche stage Octobre → Février
                </p>
            </header>
            <div className="home-content">
                <div className="home-image">
                    <img src={profilePic} alt="Photo de Damien Castello" />
                </div>
                <div className="cv-download-container">
                    <a href="/Developpeur_Fullstack_2026.pdf" download className="cv-download-button">
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

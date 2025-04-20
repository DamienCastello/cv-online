import React from 'react';
import '../styles/home.css';
import profilePic from '../../public/images/profile_image.jpg';

const Home = () => {
    return (
        <div className="home-container fade-in">
            <h1 className="home-title">👋 Salut, moi c’est Damien</h1>
            <div className="home-content">
                <div className="home-image">
                    <img src={profilePic} alt="Moi, le dev de légende" />
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
                    Je travaille le pixel comme on travaille le bois : avec précision, patience et un brin d’improvisation.
                </p>
                <div className="cv-download-container">
                    <a href="/developpeur_JS_2025.pdf" download className="cv-download-button">
                        <span className="cv-icon">⬇️</span> Mon CV en PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;

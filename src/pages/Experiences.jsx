import '../styles/experiences.css'

import ProgressBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';

const formations = [
    {
        date: 'Septembre 2024 - Octobre 2024',
        title: 'Certifications Microsoft powerApps & PowerPlatform',
    },
    {
        date: 'Novembre Juin 2023',
        title: 'Certifications Neo4J',
    },
    {
        date: 'Juillet 2023',
        title: 'Certifications Cypher',
    },
    {
        date: 'Fév 2019 - Jan 2020',
        title: 'Titre professionnel "Développeur Web & Mobile"',
        level: 'Équivalent Bac+2',
    },
    {
        date: 'Juil 2011',
        title: 'Baccalauréat STG - Comptabilité et Finance d\'Entreprise',
    },
];

const projets = [
    {
        id: 1,
        link: 'agorium',
        name: 'Agorium',
        company: 'Projet personnel',
        date: 'Novembre 2024 - Aujourd\hui',
        title: 'plateforme de diffusion en cours de développement.',
    },
    {
        id: 2,
        link: 'gdp',
        name: 'Glanum GDP',
        company: 'Agence Glanum',
        date: 'Octobre 2022 - Février 2024',
        title: 'Refonte d\'un outil interne de gestion RH en Remix.',
    },
    {
        id: 3,
        link: 'soundstore',
        name: 'Soundstore',
        company: 'Agence Glanum',
        date: 'Octobre 2023 - Décembre 2023',
        title: 'Projet d\'entrainement dans le cadre d\'une montée en compétence PHP',
    },
    {
        id: 4,
        link: 'stepper',
        name: 'Stepper Peter',
        company: 'Agence Glanum',
        date: 'Mars 2022 - Novembre 2022',
        title: 'Développement d’un stepper pour automatiser l’onboarding des affiliés du programme Peter.',
    },
    {
        id: 5,
        link: 'meeye',
        name: 'Me&Eye',
        company: 'Agence Glanum',
        date: 'Novembre 2021 - Mai 2022',
        title: 'Développement d\'un prototype en React Native pour visagistes et opticiens',
    },
    {
        id: 6,
        link: 'fidwell',
        name: 'Fid’well',
        company: 'Agence Glanum',
        date: 'Octobre 2021 - Septembre 2022',
        title: 'Application React Native pour favoriser le commerce de proximité via un système de cashback.',
    },
    {
        id: 7,
        link: 'lina',
        name: 'PLUValue® LINA®',
        company: 'LKSpatialist',
        date: 'Mai 2020 - Avril 2021',
        title: 'Service en ligne de prospection et de développement foncier',
    },
    {
        id: 8,
        link: 'wekolo',
        name: 'Wekolo',
        company: 'Société Proximus',
        date: 'Septembre 2019 - Décembre 2019',
        title: 'Solution Marketing pour les gérants d\'enseigne / Franchise et les agences marketing. ',
    },
    {
        id: 9,
        link: 'coiffinthestreet',
        name: 'Coiff In The Street',
        company: 'Wild code school',
        date: 'Mai 2019 - Juillet 2019',
        title: 'Application React Native pour permettre à des coiffeurs de gérer le mouvement COIFF IN THE STREET.',
    },
    {
        id: 10,
        link: 'dataweek',
        name: 'Deuxième place du Hackathon Dataweek',
        company: 'Wild code school',
        date: 'Juin 2019',
        title: 'Prototype d\'application mobile HandiPaca livré en 48h comprenant une app Front, un backend, un backoffice et un cahier des charges.',
    },
    {
        id: 11,
        link: 'easteregg',
        name: 'Première place du Hackathon Easter Egg',
        company: 'Wild code school',
        date: 'Mars 2019',
        title: 'Création d\'un mini-jeu vidéo Easter Game sur navigateur en 2D en 36 heures sur le thème de pâques.',
    },
];

const skills = [
    { name: 'React', level: 95 },
    { name: 'React Native', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'Vue 3', level: 65 },
    { name: 'GraphQL', level: 50 },
    { name: 'Laravel', level: 20 },
];

const Experiences = () => {
    return (
        <div className="experiences">
            <section className="formations">
                <h2>Formations</h2>
                <ul>
                    {formations.map((formation, index) => (
                        <li key={index}>
                            <strong>{formation.date}</strong> — {formation.title}
                            {formation.level && <span> ({formation.level})</span>}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="projets">
                <h2>Projets Professionnels</h2>
                {projets.map((projet) => (
                    <div key={projet.id} className="projet">
                        <h3>{projet.name}</h3>
                        <p className="projet-date">{projet.company} de {projet.date}</p>
                        <p>{projet.title}</p>
                        <Link to={`/portfolio#${projet.link}`} className="projet-link">Plus d'info</Link>
                    </div>
                ))}
            </section>

            <section className="competences">
                <h2>Compétences</h2>
                {skills.map((skill, index) => (
                    <ProgressBar key={index} name={skill.name} level={skill.level} />
                ))}
            </section>
        </div>
    );
};

export default Experiences;
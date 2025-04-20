import '../styles/experiences.css'

import ProgressBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDocker, FaSass, FaLaravel, FaVuejs } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiAngularjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiRemixRunFill } from "react-icons/ri";



const formations = [
    {
        date: 'Septembre 2024 - Octobre 2024',
        title: 'Certifications Microsoft powerApps & PowerPlatform',
    },
    {
        date: 'Juillet 2023',
        title: 'Certifications Cypher',
    },
    {
        date: 'Juin 2023',
        title: 'Certifications Neo4J',
    },
    {
        date: 'Février 2019 - Janvier 2020',
        title: 'Titre professionnel "Développeur Web & Mobile"',
        level: 'Équivalent Bac+2',
    },
    {
        date: 'Juillet 2011',
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
        technologies: ['html', 'css', 'vue3', 'nodejs', 'sequelize', 'docker']
    },
    {
        id: 2,
        link: 'gdp',
        name: 'Glanum GDP',
        company: 'Agence Glanum',
        date: 'Octobre 2022 - Février 2024',
        title: 'Refonte d\'un outil interne de gestion RH en Remix.',
        technologies: ['html', 'css', 'react', 'remix', 'tailwind', 'graphql', 'nodejs']
    },
    {
        id: 3,
        link: 'soundstore',
        name: 'Soundstore',
        company: 'Agence Glanum',
        date: 'Octobre 2023 - Décembre 2023',
        title: 'Projet d\'entrainement dans le cadre d\'une montée en compétence PHP.',
        technologies: ['html', 'css', 'laravel']
    },
    {
        id: 4,
        link: 'stepper',
        name: 'Stepper Peter',
        company: 'Agence Glanum',
        date: 'Mars 2022 - Novembre 2022',
        title: 'Développement d’un stepper pour automatiser l’onboarding des affiliés du programme Peter.',
        technologies: ['html', 'css', 'react']
    },
    {
        id: 5,
        link: 'meeye',
        name: 'Me&Eye',
        company: 'Agence Glanum',
        date: 'Novembre 2021 - Mai 2022',
        title: 'Développement d\'un prototype en React Native pour visagistes et opticiens.',
        technologies: ['html', 'css', 'reactNative']
    },
    {
        id: 6,
        link: 'fidwell',
        name: 'Fid’well',
        company: 'Agence Glanum',
        date: 'Octobre 2021 - Septembre 2022',
        title: 'Application React Native pour favoriser le commerce de proximité via un système de cashback.',
        technologies: ['html', 'css', 'sass', 'reactNative', 'graphql', 'scss']
    },
    {
        id: 7,
        link: 'lina',
        name: 'PLUValue® LINA®',
        company: 'LKSpatialist',
        date: 'Mai 2020 - Avril 2021',
        title: 'Service en ligne de prospection et de développement foncier.',
        technologies: ['html', 'css', 'angularjs', 'docker']
    },
    {
        id: 8,
        link: 'wekolo',
        name: 'Wekolo',
        company: 'Société Proximus',
        date: 'Septembre 2019 - Décembre 2019',
        title: 'Solution Marketing pour les gérants d\'enseigne / Franchise et les agences marketing. ',
        technologies: ['html', 'css', 'reactNative', 'typescript', 'graphql']
    },
    {
        id: 9,
        link: 'coiffinthestreet',
        name: 'Coiff In The Street',
        company: 'Wild code school',
        date: 'Mai 2019 - Juillet 2019',
        title: 'Application React Native pour permettre à des coiffeurs de gérer le mouvement COIFF IN THE STREET.',
        technologies: ['html', 'css', 'bootstrap', 'reactNative', 'nodejs', 'sequelize']
    },
    {
        id: 10,
        link: 'dataweek',
        name: 'Deuxième place du Hackathon Dataweek',
        company: 'Wild code school',
        date: 'Juin 2019',
        title: 'Prototype d\'application mobile HandiPaca livré en 48h comprenant une app Front, un backend, un backoffice et un cahier des charges.',
        technologies: ['html', 'css', 'bootstrap', 'react', 'nodejs', 'sequelize']
    },
    {
        id: 11,
        link: 'easteregg',
        name: 'Première place du Hackathon Easter Egg',
        company: 'Wild code school',
        date: 'Mars 2019',
        title: 'Création d\'un mini-jeu vidéo Easter Game sur navigateur en 2D en 36 heures sur le thème de pâques.',
        technologies: ['html', 'css', 'react']
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
    const technoIcons = {
        html: <FaHtml5 style={{ color: '#ffa500' }} className="techno-icon" />,
        css: <FaCss3Alt style={{ color: '#003cff' }} className="techno-icon" />,
        bootstrap: <FaBootstrap style={{ color: '#5900ff' }} className="techno-icon" />,
        react: <FaReact style={{ color: '#00a2ff' }} className="techno-icon" />,
        reactNative: <TbBrandReactNative style={{ color: '#0099ff' }} className="techno-icon" />,
        nodejs: <FaNodeJs style={{ color: '#33ff00cb' }} className="techno-icon" />,
        sequelize: <SiSequelize style={{ color: '#006eff' }} className="techno-icon" />,
        angularjs: <RiAngularjsFill style={{ color: '#ff2600e0' }} className="techno-icon" />,
        typescript: <SiTypescript style={{ color: '#00a2ffe0' }} className="techno-icon" />,
        graphql: <GrGraphQl style={{ color: '#ff00ffd5' }} className="techno-icon" />,
        docker: <FaDocker style={{ color: '#00b7ffd5' }} className="techno-icon" />,
        sass: <FaSass style={{ color: '#ff00f2' }} className="techno-icon" />,
        tailwind: <RiTailwindCssFill style={{ color: '#00b7ffd5' }} className="techno-icon" />,
        laravel: <FaLaravel style={{ color: '#ff0015' }} className="techno-icon" />,
        remixjs: <RiRemixRunFill style={{ color: '#00ffff' }} className="techno-icon" />,
        vue3: <FaVuejs style={{ color: '#00ff0d' }} className="techno-icon" />
    };

    const getIcon = (techno) => technoIcons[techno] || null;

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
                        <div className='project-title'>
                            <h3>{projet.name}</h3>
                            <p>{projet.company}</p>
                        </div>  
                        <p className="projet-date">{projet.date}</p>
                        <p>{projet.title}</p>
                        <div className='card-footer'>
                            <Link to={`/portfolio#${projet.link}`} className="projet-link">Plus d'info</Link>
                            <div>
                                {
                                    projet.technologies.map((techno, index) => (
                                        <span key={index}>{getIcon(techno)}</span>
                                    ))
                                }
                            </div>
                        </div>
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
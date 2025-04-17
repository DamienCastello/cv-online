import '../styles/portfolio.css';
import Player from '../components/Player';
import { useEffect } from 'react';

const projects = [
    {
        id: 1,
        link: 'agorium',
        image: 'images/agorium.gif',
        name: 'Agorium',
        company: '404 Not found ?',
        city: 'Arles',
        date: 'Novembre 2024 - Aujourd\hui',
        title: 'Plateforme de diffusion en cours de développement (projet personnel)',
        description: `Développement de l'interface, des fonctionnalités Front-end et backend. Dockerisation du projet et mise en place d'une CI/CD.`,
    },
    {
        id: 2,
        link: 'gdp',
        image: 'images/GDP.png',
        name: 'Glanum GDP',
        company: 'Agence Glanum',
        city: 'Avignon',
        date: 'Octobre 2022 - Février 2024',
        title: 'Refonte d\'un outil interne de gestion RH en Remix',
        description: `Refonte d'un outil interne en vue d'améliorer les performances. En charge du développement de l’interface et des fonctionnalités Front-end.`,
    },
    {
        id: 3,
        link: 'soundstore',
        image: 'images/soundstore.gif',
        name: 'Soundstore',
        company: 'Agence Glanum',
        city: 'Avignon',
        date: 'Octobre 2023 - Décembre 2023',
        title: 'Projet d\'entrainement dans le cadre d\'une montée en compétence PHP',
        description: `Projet (au choix) dans le cadre d'une montée en compétence Php Laravel. Développement d'une interface et d'un backend permettant de partager des musiques.`,
    },
    {
        id: 4,
        link: 'stepper',
        image: 'images/stepper.gif',
        name: 'Stepper Peter',
        company: 'Agence Glanum',
        city: 'Avignon',
        date: 'Mars 2022 - Novembre 2022',
        title: 'Développement d’un stepper pour automatiser l’onboarding',
        description: `Peter était un sous-programme de Fidwell en phase de développement regroupant plusieurs modules pour les établissements sportifs. Ma mission: Développement de l'interface et des fonctionnalités des étapes du stepper pour automatiser l’onboarding des affiliés du programme Peter.`,
    },
    {
        id: 5,
        link: 'meeye',
        image: '',
        name: 'Me&Eye',
        company: 'Agence Glanum',
        city: 'Avignon',
        date: 'Novembre 2021 - Mai 2022',
        title: 'Développement d\'un prototype en React Native pour visagistes et opticiens',
        description: `Développement d'un prototype en React Native avec un kit caméra et éclairage pour
        proposer une expérience innovante aux visagistes et opticiens par une recommandation
        de paires de lunettes suite à un traitement de l'image coté IA.`,
    },
    {
        id: 6,
        link: 'fidwell',
        image: '',
        name: 'Fid’well',
        company: 'Agence Glanum',
        city: 'Avignon',
        date: 'Octobre 2021 - Septembre 2022',
        title: 'Application React Native pour favoriser le commerce de proximité',
        description: `Fidwell est une application pour le commerce de proximité via un système de cashback. Celui-ci est décliné en plusieurs sous-programme dont Fidwell qui est une zone fictive qui correspond à la version démo. Boni&Price est quant à lui un sous-programme de l'application Fidwell qui correspond est une version utilisée actuellement dans la commune de Malemort. mes missions étaient de continuer le développement de l'interface et des fonctionnalités mobiles Front-end et de déployer un sous-programme Peter destiné aux acteurs sportifs de Aix-en-Provence.`,
    },
    {
        id: 7,
        link: 'lina',
        image: 'images/lina.gif',
        name: 'PLUValue® LINA®',
        company: 'LKSpatialist',
        city: 'Montpellier',
        date: 'Mai 2020 - Avril 2021',
        title: 'Service en ligne de prospection et de développement foncier',
        description: `Développer l'interface dynamique de l'application web Lina, débogage des fonctionnalités attendues et refonte totale du backoffice en un seul module incorporant tous les outils backoffice et un nouveau module d'administration des veilles foncières.`,
    },
    {
        id: 8,
        link: 'wekolo',
        image: 'images/wekolo.png',
        name: 'Wekolo',
        company: 'Société Proximus',
        city: 'Nice',
        date: 'Septembre 2019 - Décembre 2019',
        title: 'Solution Marketing pour les gérants d\'enseigne / Franchise et les agences marketing',
        description: `Développer l'interface statique et dynamique du module des briefs et des interventions, écriture des requêtes et des mutations, adaptation du code existant suite à la modification de structure de la base de donnée et débogage des fonctionnalités attendues.`,
    },
    {
        id: 9,
        link: 'coiffinthestreet',
        image: 'images/coiffInTheStreet.png',
        name: 'Coiff In The Street',
        company: 'Wild code school',
        city: 'Marseille',
        date: 'Mai 2019 - Juillet 2019',
        title: 'Application React Native pour permettre à des coiffeurs de gérer le mouvement COIFF IN THE STREET',
        description: `Révision du Wireframe proposé et suggérer les modifications au client, codage des composants du Front-end et mise en place des fonctionnalités Front-end et codage d'une partie de l'api Back-end.`,
    },
    {
        id: 10,
        link: 'dataweek',
        image: 'images/dataweek.jpeg',
        name: 'Deuxième place du Hackathon Dataweek',
        company: 'Wild code school',
        city: 'Marseille',
        date: 'Juin 2019',
        title: 'Prototype d\'application mobile HandiPaca',
        description: `Application livrée en 48h comprenant une app Front, un backend, un backoffice et un cahier des charges. Le but de l'application est de permettre le signalement sur une carte d'un manque de zone d'accessibilité pour handicapés afin d'alerter les mairies de traveaux à réaliser. Ma mission dans l'équipe: Construction de l'api backend et pitch devant les jurys.`,
    },
    {
        id: 11,
        link: 'easteregg',
        image: 'images/easter_egg.gif',
        name: 'Première place du Hackathon Easter Egg',
        company: 'Wild code school',
        city: 'Marseille',
        date: 'Mars 2019',
        title: 'Création d\'un mini-jeu vidéo Easter Game sur navigateur en 2D en 36 heures sur le thème de pâques',
        description: `Ma mission dans l'équipe: Codage de la map, du player, des mouvements possibles et des mouvements restreints.`,
    }
];

export default function Portfolio() {
useEffect(() => {
  const scrollToAnchorWithOffset = (id, offset = 100, attempts = 10) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (attempts > 0) {
      setTimeout(() => scrollToAnchorWithOffset(id, offset, attempts - 1), 300); // délai augmenté
    }
  };

  const hash = window.location.hash;
  if (hash) {
    const anchor = hash.substring(1);
    const isSmallScreen = window.innerWidth < 768;
    const offset = isSmallScreen ? 230 : 0;
    setTimeout(() => scrollToAnchorWithOffset(anchor, offset), 800);
  }
}, []);


  const scrollToAnchorWithOffset = (id, offset = 100, attempts = 5) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });

    } else if (attempts > 0) {
      setTimeout(() => scrollToAnchorWithOffset(id, offset, attempts - 1), 100);
    }
  };
  
  return (
    <div className="portfolio-container fade-in">
      <h1 className='portfolio-title'>Mon Portfolio</h1>
      {projects.map((project) => (
        <div className="wrap animate pop" key={project.id} id={project.link}>
          <div className="overlay">
            <div className="overlay-content animate slide-left delay-2">
            <h1 className="animate slide-left pop delay-4">{project.name}</h1>
              <p className="animate slide-left pop delay-6 link-btn">
                Voir plus →
              </p>
            </div>
            <div
              className="image-content animate slide delay-5"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
            </div>
          </div>
          <div className="text">
          <h2 className="animate slide-left pop delay-4">{project.title}</h2>
          <p>{project.description}</p>
          {project.id === 9 ? <Player /> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

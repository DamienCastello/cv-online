import '../styles/sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBriefcase, FaHome, FaPencilRuler } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
      <div>
        <h2>Damien Castello</h2>
      </div>

        <nav>
          <NavLink to="/"><FaHome className='icon-nav' />Accueil</NavLink>
          <NavLink to="/experiences"><FaBriefcase className='icon-nav' />Expériences</NavLink>
          <NavLink to="/portfolio"><FaPencilRuler className='icon-nav' />Portfolio</NavLink>
        </nav>
      </div>

      <div className="contact">
        <p><FaMapMarkerAlt /> Arles, France</p>
        <p><FaPhoneAlt /> <a href="tel:+33612267038">+33 6 12 26 70 38</a></p>
        <p><FaEnvelope /> <a href="mailto:d.castello.13200@gmail.com">d.castello.13200@gmail.com</a></p>
        <p><FaGithub /> <a href="https://github.com/DamienCastello" target="_blank" rel="noreferrer">GitHub</a></p>
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/castello-damien/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </div>
  );
}

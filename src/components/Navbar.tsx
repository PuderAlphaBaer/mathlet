// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Mathe Netzwerk</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/ankuendigungen">Ankündigungen</Link></li>
        <li><Link to="/foerderung">Förderung in Deutschland</Link></li>
        <li><Link to="/materialien">Materialien</Link></li>
        <li><Link to="/kursleiter-werden">Kursleiter werden</Link></li>
        <li><Link to="/ueber-uns">Über uns</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

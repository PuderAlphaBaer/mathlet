// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => setPage('home')}>
        Mathe Netzwerk
      </div>
      <ul className="navbar-links">
        <li onClick={() => setPage('ankuendigungen')}>Ankündigungen</li>
        <li onClick={() => setPage('foerderung')}>Förderung in Deutschland</li>
        <li onClick={() => setPage('materialien')}>Materialien</li>
        <li onClick={() => setPage('kursleiter-werden')}>Kursleiter werden</li>
        <li onClick={() => setPage('ueber-uns')}>Über uns</li>
      </ul>
    </nav>
  );
};

export default Navbar;

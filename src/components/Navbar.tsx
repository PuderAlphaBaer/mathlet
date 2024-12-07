import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Ankündigungen</Link>
        </li>
        <li>
          <Link to="/foerderung">Förderung in Deutschland</Link>
        </li>
        <li>
          <Link to="/materialien">Materialien</Link>
        </li>
        <li>
          <Link to="/kursleiter">Kursleiter werden</Link>
        </li>
        <li>
          <Link to="/ueber-uns">Über uns</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// src/pages/Foerderung.tsx
import React from 'react';

const Foerderung: React.FC = () => {
  return (
    <div className="container">
      <h1>Förderung in Deutschland</h1>
      <p>
        In Deutschland gibt es zahlreiche Möglichkeiten, Schüler im Bereich Mathematik zu fördern. Hier sind einige Programme und Wettbewerbe:
      </p>
      <ul>
        <li>
          <strong>Mathematik-Olympiade:</strong> Ein jährlicher Wettbewerb für Schüler aller Klassenstufen.
        </li>
        <li>
          <strong>Jugend forscht:</strong> Ein Wettbewerb für Schüler, die innovative Projekte in Mathematik und Naturwissenschaften präsentieren möchten.
        </li>
        <li>
          <strong>Bundeswettbewerb Mathematik:</strong> Ein anspruchsvoller Wettbewerb für fortgeschrittene Schüler.
        </li>
      </ul>
      <p>
        Weitere Informationen finden Sie auf den offiziellen Websites der jeweiligen Wettbewerbe.
      </p>
    </div>
  );
};

export default Foerderung;

// src/pages/Materialien.tsx
import React from 'react';

const Materialien: React.FC = () => {
  return (
    <div className="container">
      <h1>Materialien</h1>
      <p>
        Hier finden Sie Unterrichtsmaterialien, Skripte und Übungsaufgaben zu verschiedenen Themenbereichen der Mathematik:
      </p>
      <ul>
        <li>
          <a href="/files/kombinatorik.pdf" target="_blank">Kombinatorik Skript (PDF)</a>
        </li>
        <li>
          <a href="/files/geometrie.pdf" target="_blank">Geometrie Skript (PDF)</a>
        </li>
        <li>
          <a href="/files/aufgabensammlung.zip" target="_blank">Aufgabensammlung (ZIP)</a>
        </li>
      </ul>
      <p>
        Wenn Sie Materialien hinzufügen möchten, kontaktieren Sie uns oder laden Sie sie direkt hoch.
      </p>
    </div>
  );
};

export default Materialien;

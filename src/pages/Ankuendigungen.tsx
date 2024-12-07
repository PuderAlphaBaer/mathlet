// src/pages/Ankuendigungen.tsx
import React from 'react';

const Ankuendigungen: React.FC = () => {
  return (
    <div className="container">
      <h1>Ankündigungen</h1>
      <p>Hier finden Sie alle Neuigkeiten und Ankündigungen des Mathe Netzwerks.</p>
      <ul>
        <li>01.12.2024: Neues Skript zur Kombinatorik veröffentlicht.</li>
        <li>15.11.2024: Mathematik-Olympiade Runde 2 startet nächste Woche!</li>
        <li>30.10.2024: Neue Kursleiter in Berlin und München.</li>
      </ul>
    </div>
  );
};

export default Ankuendigungen;

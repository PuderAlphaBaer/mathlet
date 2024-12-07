// src/pages/KursleiterWerden.tsx
import React from 'react';

const KursleiterWerden: React.FC = () => {
  return (
    <div className="container">
      <h1>Kursleiter werden</h1>
      <p>
        Möchten Sie Teil unseres Netzwerks werden und eine Mathe-AG an Ihrer Schule leiten? Hier erfahren Sie, wie Sie Kursleiter werden können:
      </p>
      <ol>
        <li>Füllen Sie unser Online-Bewerbungsformular aus.</li>
        <li>Schreiben Sie uns über Ihre mathematische Erfahrung und Ihre Motivation.</li>
        <li>Nach erfolgreicher Bewerbung erhalten Sie Zugriff auf unsere Materialien.</li>
      </ol>
      <p>
        <a href="/apply">Jetzt bewerben!</a>
      </p>
      <p>
        Bei Fragen können Sie uns jederzeit kontaktieren: <a href="mailto:info@mathenetzwerk.de">info@mathenetzwerk.de</a>
      </p>
    </div>
  );
};

export default KursleiterWerden;

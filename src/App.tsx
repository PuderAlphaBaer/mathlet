// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Ankuendigungen from './pages/Ankuendigungen';
import Foerderung from './pages/Foerderung';
import Materialien from './pages/Materialien';
import KursleiterWerden from './pages/KursleiterWerden';
import UeberUns from './pages/UeberUns';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'ankuendigungen':
        return <Ankuendigungen />;
      case 'foerderung':
        return <Foerderung />;
      case 'materialien':
        return <Materialien />;
      case 'kursleiter-werden':
        return <KursleiterWerden />;
      case 'ueber-uns':
        return <UeberUns />;
      default:
        return <h1>Willkommen beim Mathe Netzwerk</h1>;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
};

export default App;

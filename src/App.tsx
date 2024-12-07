// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ankuendigungen from './pages/Ankuendigungen';
import Foerderung from './pages/Foerderung';
import Materialien from './pages/Materialien.tsx';
import KursleiterWerden from './pages/KursleiterWerden.tsx';
import UeberUns from './pages/UeberUns.tsx';
import Home from './pages/Home'; // Import the new Home component

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add the new route */}
        <Route path="/ankuendigungen" element={<Ankuendigungen />} />
        <Route path="/foerderung" element={<Foerderung />} />
        <Route path="/materialien" element={<Materialien />} />
        <Route path="/kursleiter-werden" element={<KursleiterWerden />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
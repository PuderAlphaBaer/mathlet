import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ankuendigungen from "./pages/Ankuendigungen";
import Foerderung from "./pages/Foerderung";
import Materialien from "./pages/Materialien";
import Kursleiter from "./pages/KursleiterWerden";
import UeberUns from "./pages/UeberUns";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ankuendigungen />} />
        <Route path="/foerderung" element={<Foerderung />} />
        <Route path="/materialien" element={<Materialien />} />
        <Route path="/kursleiter" element={<Kursleiter />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
      </Routes>
    </div>
  );
};

export default App;

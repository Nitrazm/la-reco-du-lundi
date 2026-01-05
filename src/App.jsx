import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Detail from "./pages/Detail";
import History from "./pages/History";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-light">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choisir" element={<Choose />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/historique" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}
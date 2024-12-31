import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlendIn from './pages/BlendIn';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
     <Router>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/BlendIn" element={<BlendIn />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

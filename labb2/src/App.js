
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Cv from './pages/Cv';
import Fotogalleri from './pages/Fotogalleri';
import Github from './pages/Github';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/fotogalleri" element={<Fotogalleri />} />
          <Route path="/github" element={<Github />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
  );
}

export default App;

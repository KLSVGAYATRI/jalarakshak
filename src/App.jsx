import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();

  const isContactPage = location.pathname === '/contact';
  const mainClass = isContactPage ? '' : 'py-8';

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

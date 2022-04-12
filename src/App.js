import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import NotFound from './pages/404';
import Info from './pages/Info';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/info/:id" element={<Info />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

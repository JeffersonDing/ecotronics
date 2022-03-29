import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

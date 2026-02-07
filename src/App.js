import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import BrowsingPetsPage from './pages/BrowsingPetsPage/BrowsingPetsPage.js';
import './App.css';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets-namorando" element={<BrowsingPetsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
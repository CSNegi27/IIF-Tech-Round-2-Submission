import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import EventGallery from './components/EventGallery';
import EventRegistration from './components/EventRegistration';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<EventGallery />} />
        <Route path="/register" element={<EventRegistration />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
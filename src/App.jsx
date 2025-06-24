import React from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Feedback from './components/Feedback';
import Organization from './components/Organization';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Gallery />
      <Appointment />
      <Feedback />
      <Organization />
      <Contact />
      <Footer />
    </>
  );
}
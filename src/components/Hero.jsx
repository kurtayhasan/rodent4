import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <img src="images/hero.jpg" alt="Klinik Ortamı" />
      <div className="hero-content">
        <h1>Yenilikçi Ağız & Diş Merkezi</h1>
        <p>Konforlu, güvenli ve estetik tedavi çözümleriyle sağlıklı gülüşler.</p>
        <a href="#services" className="btn">Başlayalım</a>
      </div>
    </section>
);
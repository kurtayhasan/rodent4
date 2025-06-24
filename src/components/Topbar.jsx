import { useState } from 'react';

export default function Topbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ['Anasayfa', '#hero'],
    ['Hakkımızda', '#about'],
    ['Vizyon & Misyon', '#vision-mission'],
    ['Hizmetlerimiz', '#services'],
    ['Galeri', '#gallery'],
    ['Randevu', '#appointment'],
    ['Görüş', '#feedback'],
    ['Organizasyon', '#organizasyon'],
    ['İletişim', '#contact']
  ];

  return (
    <header className="topbar">
      <a href="#hero" className="logo">
        <img src="images/logo.png" alt="Rodent Logo" />
      </a>
      <nav className={open ? 'mobile-open' : ''}>
        <ul>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={()=>setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="toggle-btn" onClick={()=>setOpen(o=>!o)}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
}
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Kofi Arthur</div>
        <div>
          <ul className="nav-links">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#experience">Skills</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Kofi Arthur</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <Menu />
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="#experience" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="#projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </div>
        </div>
      </nav>
    </>
  );
}
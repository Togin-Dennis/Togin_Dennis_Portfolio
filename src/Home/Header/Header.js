import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Headermaindiv">
      <div
        className="Hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ opacity: menuOpen ? 0 : 1 }} />
        <div style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </div>
      <nav style={{ display: menuOpen ? 'flex' : '', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
        <button className="Headerbutton">HOME</button>
        <button className="Headerbutton">ABOUT</button>
        <button className="Headerbutton">SKILLS</button>
        <button className="Headerbutton">PROJECTS</button>
        <button className="Headerbutton">CERTIFICATIONS</button>
        <button className="Headerbutton">RESUME</button>
        <button className="Headerbutton">CONTACT</button>
      </nav>
    </header>
  );
}

export default Header;

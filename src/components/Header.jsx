import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <svg className="icon-svg" style={{marginRight: '8px', color: 'var(--accent-orange)'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 3v2"></path>
            <path d="M12 19v2"></path>
            <path d="M3 12h2"></path>
            <path d="M19 12h2"></path>
          </svg>
          Ray Peat <span className="summer-italic" style={{fontWeight: 400}}>Summary</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/topics/metabolic-rate">Topics</Link>
          <Link to="/guide">Beginner's Guide</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

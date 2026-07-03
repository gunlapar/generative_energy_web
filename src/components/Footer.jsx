import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '64px', borderTop: '1px solid var(--border-color)', padding: '32px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
      <p>Berdasarkan penelitian <a href="https://raypeat.com/" target="_blank" rel="noopener noreferrer">Dr. Ray Peat</a></p>
      <p style={{ marginTop: '8px', fontSize: '0.85rem' }}>© {new Date().getFullYear()} Ray Peat Research Summary | Non-commercial educational resource</p>
    </footer>
  );
};

export default Footer;

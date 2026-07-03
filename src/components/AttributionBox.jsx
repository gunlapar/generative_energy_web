import React from 'react';

const AttributionBox = () => {
  return (
    <div className="attribution-box">
      <h3>Sumber & Atribusi</h3>
      <p>
        Ringkasan ini didasarkan pada penelitian Dr. Raymond Peat PhD 
        dalam bidang biologi, fisiologi, dan endokrinologi. 
        Untuk artikel lengkap dan referensi ilmiah yang lebih dalam, 
        silakan kunjungi <a href="https://raypeat.com/" target="_blank" rel="noopener noreferrer">raypeat.com</a>
      </p>
      <p>
        <strong>Penting:</strong> Ini adalah ringkasan edukatif dan BUKAN 
        pengganti informasi dari sumber asli. Kami sangat mendorong Anda 
        untuk membaca penelitian Ray Peat secara langsung.
      </p>
      <p>
        <em>Dibuat dengan tujuan edukatif non-komersial untuk mempermudah 
        akses informasi di perangkat mobile.</em>
      </p>
    </div>
  );
};

export default AttributionBox;

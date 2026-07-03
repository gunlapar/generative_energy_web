import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const WhoIsRayPeat = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Siapakah <span className="summer-italic">Dr. Ray Peat?</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 22 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Level: Beginner
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Biografi Singkat</h2>
        <p>
          Dr. Raymond Peat (sering disebut Ray Peat) adalah seorang ahli biologi, fisiologi, dan penulis yang memiliki pendekatan unik terhadap kesehatan, nutrisi, dan penuaan. Ia wafat pada akhir tahun 2022 di usia 86 tahun, meninggalkan warisan intelektual yang besar di bidang bioenergetika.
        </p>

        <h2>Pendidikan & Latar Belakang</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Ph.D. dalam Biologi:</strong> Beliau mendapatkan gelar Ph.D. dari University of Oregon, dengan fokus penelitian pada endokrinologi reproduktif dan penuaan.</li>
          <li><span className="dot dot-orange"></span><strong>Fokus Riset:</strong> Sepanjang kariernya, ia mempelajari interaksi antara hormon (terutama progesteron, estrogen, dan tiroid), pernapasan selular (respirasi), dan faktor lingkungan terhadap kesehatan manusia.</li>
        </ul>

        <h2>Kontribusi Utama</h2>
        <p>
          Pandangan Dr. Peat sering kali sangat berbeda dengan dogma medis arus utama. Beliau mendekati tubuh sebagai sistem energi (bioenergetika), di mana:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span>Kesehatan optimal berasal dari produksi energi yang efisien di tingkat sel (mitokondria).</li>
          <li><span className="dot dot-yellow"></span>Segala sesuatu yang menghambat produksi energi seluler (seperti stres, PUFA, dominasi estrogen) akan mempercepat penuaan dan penyakit.</li>
          <li><span className="dot dot-yellow"></span>Beliau menyoroti peran penting kelenjar tiroid sebagai pengatur utama laju metabolisme, dan progesteron sebagai hormon pelindung (protektif) anti-stres.</li>
        </ul>

        <h2>Warisan & Pengaruh</h2>
        <p>
          Meskipun Ray Peat tidak pernah bermaksud menciptakan "Diet Ray Peat", filosofinya memicu lahirnya komunitas "Pro-Metabolik" di seluruh dunia. Pendekatannya menekankan <em>perceiving</em> (merasakan) dan memahami bagaimana tubuh merespons makanan dan lingkungan, bukan mengikuti aturan diet yang kaku dan menyiksa.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: Biografi Dr. Ray Peat | <a href="https://raypeat.com/about" target="_blank" rel="noopener noreferrer">raypeat.com/about</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default WhoIsRayPeat;

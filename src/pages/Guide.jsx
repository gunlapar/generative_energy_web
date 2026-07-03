import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Guide = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          Beginner's <span className="summer-italic">Guide</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Panduan terstruktur untuk mulai memahami riset Ray Peat.</p>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Langkah 1: Siapakah Ray Peat?</h2>
        <p>
          Mulailah dengan memahami siapa sosok di balik filosofi ini. Dr. Ray Peat adalah seorang biolog yang memandang tubuh sebagai sistem energi (bioenergetika).
        </p>
        <Link to="/topics/who-is-ray-peat" className="btn" style={{ marginBottom: '24px' }}>Baca Biografi Ray Peat</Link>

        <h2>Langkah 2: Pahami Konsep Utama</h2>
        <p>
          Kesehatan yang baik bertumpu pada laju metabolisme yang tinggi. Semakin efisien sel Anda menghasilkan energi, semakin sehat Anda.
        </p>
        <Link to="/topics/metabolic-rate" className="btn" style={{ marginBottom: '24px' }}>Pelajari Metabolic Rate</Link>

        <h2>Langkah 3: Makanan Pro-Metabolik</h2>
        <p>
          Ketahui apa yang harus dimakan untuk memberi bahan bakar pada tiroid Anda, dan apa yang harus dihindari (seperti PUFA) agar tidak meracuni sel.
        </p>
        <Link to="/topics/foods" className="btn" style={{ marginBottom: '24px' }}>Pelajari Nutrisi & Makanan</Link>

        <h2>Langkah 4: Keseimbangan Hormon</h2>
        <p>
          Pahami mengapa estrogen bukan hanya "hormon wanita" melainkan hormon stres, dan bagaimana progesteron melindungi tubuh dari penuaan.
        </p>
        <Link to="/topics/hormones" className="btn" style={{ marginBottom: '24px' }}>Pelajari Hormon (Estrogen vs Progesteron)</Link>

        <h2>Langkah 5: Aplikasi & Miskonsepsi</h2>
        <p>
          Setelah paham teorinya, luruskan kesalahpahaman yang sering beredar di internet, dan pelajari cara mengukur metabolisme Anda di rumah.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/topics/misconceptions" className="btn">Miskonsepsi Umum</Link>
          <Link to="/topics/practical-app" className="btn">Aplikasi Praktis</Link>
        </div>

        <h2 style={{ marginTop: '48px' }}>Sumber Referensi Lanjutan</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span>Website Resmi Dr. Ray Peat: <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></li>
          <li><span className="dot dot-orange"></span>Buku "How to Heal Your Metabolism" oleh Kate Deering (rekomendasi sekunder yang bagus untuk pemula)</li>
        </ul>
      </section>
    </article>
  );
};

export default Guide;

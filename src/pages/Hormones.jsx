import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Hormones = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Hormones: <span className="summer-italic">Progesterone & Estrogen</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 20 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> Level: Intermediate
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Pergeseran Paradigma Hormonal</h2>
        <p>
          Salah satu kontribusi paling revolusioner dari Dr. Ray Peat adalah pandangannya terhadap hormon seks, khususnya estrogen dan progesteron. Berbeda dengan pandangan medis konvensional yang sering menganggap estrogen semata-mata sebagai "hormon wanita yang baik", Ray Peat melihatnya dari sudut pandang bioenergetik.
        </p>

        <h2>Estrogen: Hormon Pertumbuhan & Stres</h2>
        <p>
          Ray Peat mengklasifikasikan estrogen sebagai hormon yang berhubungan dengan pembelahan sel, pertumbuhan, dan stres (syok). 
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Mengurangi Oksigenasi:</strong> Estrogen dalam jumlah berlebihan dapat menggeser metabolisme dari menggunakan oksigen secara efisien menjadi glikolisis (fermentasi).</li>
          <li><span className="dot dot-orange"></span><strong>Estrogen Dominance:</strong> Kondisi di mana rasio estrogen terhadap progesteron terlalu tinggi, sering dikaitkan dengan penuaan, infertilitas, dan risiko tumor.</li>
          <li><span className="dot dot-orange"></span><strong>Pemicu Stres:</strong> Kelebihan estrogen dapat memicu pelepasan kortisol (hormon stres).</li>
        </ul>

        <h2>Progesteron: Sang Pelindung (The Protective Hormone)</h2>
        <p>
          Sebaliknya, progesteron adalah hormon pro-kehamilan, pro-kelangsungan hidup, dan anti-stres. Ray Peat meneliti ekstensif bagaimana progesteron melindungi tubuh secara sistemik.
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Anti-Estrogen Alami:</strong> Progesteron menyeimbangkan dan memblokir efek racun dari kelebihan estrogen.</li>
          <li><span className="dot dot-yellow"></span><strong>Mendukung Tiroid:</strong> Progesteron memfasilitasi pelepasan hormon tiroid dan meningkatkan suhu tubuh (metabolic rate).</li>
          <li><span className="dot dot-yellow"></span><strong>Pelindung Saraf (Neuroprotective):</strong> Melindungi otak dari stres eksitotoksik dan penuaan.</li>
          <li><span className="dot dot-yellow"></span><strong>Penenang Alami:</strong> Memberikan efek menenangkan pada sistem saraf, sangat kontras dengan efek estrogen yang memicu kecemasan.</li>
        </ul>

        <h2>Hormon Tiroid: Konduktor Metabolisme</h2>
        <p>
          Hormon tiroid (khususnya T3 aktif) adalah pusat dari segalanya. Tanpa fungsi tiroid yang memadai, sel tidak dapat memproduksi energi (ATP) secara optimal.
        </p>
        <p>
          <strong>Kaitan dengan Diet:</strong> Diet yang terlalu membatasi kalori atau karbohidrat akan menyebabkan hati gagal mengubah T4 (hormon tidak aktif) menjadi T3 (aktif), sehingga menurunkan metabolisme sebagai mekanisme pertahanan tubuh terhadap kelaparan.
        </p>

        <h2>Kortisol: Hormon Pemecah Tubuh</h2>
        <p>
          Kortisol diproduksi saat kadar gula darah terlalu rendah atau saat tubuh dalam bahaya. Jika kortisol kronis tinggi, ia akan memecah otot, kulit, dan jaringan timus (imun) untuk diubah menjadi gula. Itulah mengapa Ray Peat sangat merekomendasikan makan gula alami dan menyeimbangkan kalsium/fosfor untuk menekan pelepasan kortisol.
        </p>

        <h2>Kesimpulan Praktis</h2>
        <ol>
          <li>Dukung tiroid Anda dengan nutrisi yang cukup (karbohidrat berkualitas dan protein).</li>
          <li>Hindari lemak jenuh ganda (PUFA) karena mereka memblokir fungsi tiroid dan meningkatkan dominasi estrogen.</li>
          <li>Kendalikan stres untuk menjaga kortisol tetap rendah.</li>
          <li>Konsumsi cukup vitamin E (antioksidan) yang memiliki efek anti-estrogenik.</li>
        </ol>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Hormones;

import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Sugar = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Debat Gula: <span className="summer-italic">Sukrosa, Pati, dan Konteks</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 30 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> Level: Intermediate
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Membedah Mitos Anti-Gula</h2>
        <p>
          Dalam budaya kesehatan saat ini, gula disalahkan atas hampir semua penyakit (obesitas, diabetes, penuaan). Namun, penelitian mendalam Dr. Ray Peat pada fisiologi sel membedakan antara gula "beracun" dan metabolisme gula yang efisien. Masalah utamanya seringkali bukan pada gula itu sendiri, melainkan pada <strong>ketidakmampuan sel untuk membakar gula</strong> akibat diracuni oleh asam lemak PUFA atau kekurangan hormon tiroid.
        </p>

        <h2>Gula (Sukrosa/Fruktosa) vs Pati (Starch)</h2>
        <p>
          Pati (karbohidrat kompleks dari biji-bijian, roti, pasta) pada dasarnya adalah rantai panjang glukosa murni. Saat dicerna, ia dengan cepat menjadi glukosa yang memicu lonjakan insulin yang sangat tinggi. Selain itu, pati sering memberi makan bakteri endotoksin di usus yang menyebabkan inflamasi.
        </p>
        <p>
          Sebaliknya, gula alami dari buah matang (fruktosa) atau sukrosa (gabungan glukosa dan fruktosa) memiliki mekanisme yang berbeda:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span>Fruktosa tidak membutuhkan insulin yang berlebihan untuk masuk ke dalam sel.</li>
          <li><span className="dot dot-orange"></span>Fruktosa secara khusus mengisi glikogen hati (cadangan bahan bakar organ), yang sangat penting untuk mengubah hormon tiroid T4 menjadi T3.</li>
          <li><span className="dot dot-orange"></span>Madu, buah-buahan, dan jus jeruk murni adalah sumber karbohidrat favorit Ray Peat karena mudah dicerna dan kaya akan mineral penyangga seperti kalium.</li>
        </ul>

        <h2>Gula sebagai Anti-Stres</h2>
        <p>
          Saat gula darah Anda turun, tubuh mendeteksi ini sebagai keadaan darurat (kelaparan). Kelenjar adrenal melepaskan hormon stres <strong>adrenalin dan kortisol</strong>.
        </p>
        <p>
          Kortisol bertugas memecah jaringan tubuh Anda sendiri (seperti otot dan timus) menjadi asam amino, yang kemudian diubah hati menjadi glukosa baru untuk menjaga Anda tetap hidup. Proses stres perusakan diri ini dapat dicegah cukup dengan menyediakan karbohidrat (gula alami) yang cukup. 
        </p>

        <h2>Konteks Sangat Penting (The Matrix)</h2>
        <p>
          Ray Peat tidak menganjurkan mengonsumsi permen atau soda tak terbatas. Konsumsi gula berlebih <em>tanpa</em> mengonsumsi zat gizi makro dan mikro lainnya (seperti kalsium, tembaga, protein berkualitas, dan vitamin B) tentu bermasalah karena akan menghabiskan cadangan mineral tubuh.
        </p>
        <p>
          Idealnya, gula selalu dikonsumsi <strong>bersama</strong> mineral (misalnya jus jeruk yang kaya mineral) atau sebagai penyeimbang protein (misalnya kopi atau susu yang dimaniskan) agar tubuh dapat menghasilkan energi dengan sempurna.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: "Glycemia, starch, and sugar in context" | Dr. Ray Peat research | <a href="https://raypeat.com/articles/articles/glycemia.shtml" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Sugar;

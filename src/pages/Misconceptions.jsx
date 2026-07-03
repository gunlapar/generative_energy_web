import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Misconceptions = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Miskonsepsi Umum: <span className="summer-italic">Meluruskan "Diet Ray Peat"</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 24 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Level: Beginner
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Mengapa Terjadi Miskonsepsi?</h2>
        <p>
          Dr. Ray Peat tidak pernah menulis buku diet atau memberikan rencana makan yang kaku. Beliau membagikan prinsip biokimia. Karena internet cenderung menyederhanakan informasi, banyak muncul dogma "Diet Ray Peat" yang sebenarnya bertentangan dengan filosofinya sendiri yang menekankan adaptasi personal.
        </p>

        <h3>1. "Ray Peat melarang makan daging" - SALAH</h3>
        <p>
          <strong>Kenyataannya:</strong> Ray Peat menyarankan untuk <em>menyeimbangkan</em> daging (otot) dengan organ dan jaringan ikat (seperti kaldu tulang atau gelatin). Daging otot murni kaya akan asam amino triptofan dan metionin yang jika berlebih bisa menekan tiroid dan memicu penuaan. Jadi, boleh makan daging, tapi imbangi dengan gelatin atau kaldu tulang.
        </p>

        <h3>2. "Harus minum 1-2 liter jus jeruk setiap hari" - SALAH</h3>
        <p>
          <strong>Kenyataannya:</strong> Jus jeruk memang dipuji sebagai sumber nutrisi yang sangat baik (kaya kalium, magnesium, gula tanpa serat kasar penghambat pencernaan). Namun, tidak ada dosis mutlak. Jika sistem pencernaan atau metabolisme gula darah Anda belum siap, minum sebanyak itu bisa menyebabkan masalah. Kuncinya: dengarkan tubuh Anda.
        </p>

        <h3>3. "Diet Ray Peat adalah tentang makan gula tanpa batas" - SALAH</h3>
        <p>
          <strong>Kenyataannya:</strong> Gula (terutama fruktosa dari buah) penting untuk mencegah tubuh memecah otot menjadi glukosa melalui stres kortisol. Namun, gula harus diiringi dengan nutrisi lain (protein, vitamin, mineral). Makan gula pasir murni seharian tanpa nutrisi makro lainnya tidak pro-metabolik.
        </p>

        <h3>4. "Hindari semua sayuran" - SALAH</h3>
        <p>
          <strong>Kenyataannya:</strong> Ray Peat menyarankan berhati-hati terhadap sayuran mentah (terutama sawi, brokoli, kubis) karena mengandung <em>goitrogen</em> yang menekan tiroid, serta serat tak larut yang keras bagi usus. Sayuran matang yang direbus perlahan, akar-akaran, atau "salad wortel mentah" yang diparut membujur justru sangat disarankan untuk mengikat racun di usus.
        </p>

        <h3>5. "Hanya tiroid yang penting" - TERLALU MENYEDERHANAKAN</h3>
        <p>
          <strong>Kenyataannya:</strong> Tiroid memang sangat sentral, tetapi kelenjar ini bekerja dalam suatu orkestra bersama nutrisi, cahaya lingkungan, fungsi pencernaan, dan kadar stres. Minum suplemen tiroid tanpa memperbaiki nutrisi dan menurunkan beban stres (seperti menghindari PUFA) tidak akan memberikan hasil yang baik.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Misconceptions;

import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Foods = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Pro-Metabolic Foods: <span className="summer-italic">Nutrisi Pendukung Metabolisme</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 18 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> Level: Beginner
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Prinsip Nutrisi Ray Peat</h2>
        <p>
          Berbeda dengan banyak diet modern yang berfokus pada "pembatasan" (seperti membatasi karbohidrat atau lemak), pendekatan nutrisi Dr. Ray Peat berfokus pada <strong>memberi bahan bakar</strong> yang tepat agar kelenjar tiroid dan metabolisme sel dapat bekerja dengan maksimal. Makanan bukan hanya kalori; makanan adalah sinyal kimiawi bagi sel Anda.
        </p>

        <h2>Makanan Pro-Metabolik Utama</h2>
        
        <h3>1. Karbohidrat Sederhana (Gula Alami)</h3>
        <p>
          Ray Peat tidak takut pada gula, asalkan berasal dari sumber yang tepat. Fruktosa sangat mendukung metabolisme hati karena ia dapat disimpan sebagai glikogen bahkan saat sel sedang berada di bawah pengaruh stres (berbeda dengan glukosa yang butuh insulin).
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Buah-buahan manis:</strong> Jeruk, semangka, anggur, pepaya. Buah tropis umumnya lebih disarankan.</li>
          <li><span className="dot dot-yellow"></span><strong>Jus jeruk segar:</strong> Mengandung rasio kalium dan magnesium yang sempurna, ditambah gula alami tanpa serat berlebih. (Pati/serat berlebih sering memberi makan bakteri jahat di usus).</li>
          <li><span className="dot dot-yellow"></span><strong>Madu murni:</strong> Punya efek anti-inflamasi alami dan tidak meningkatkan gula darah secara brutal.</li>
        </ul>

        <h3>2. Mengapa Gula Lebih Baik dari Pati (Starch)?</h3>
        <p>
          Kebanyakan orang modern disuruh makan gandum atau biji-bijian (complex carbs). Namun Ray Peat menjelaskan bahwa molekul pati sering tidak tercerna sempurna dan akan berfermentasi di usus besar, menghasilkan gas dan endotoksin. Endotoksin (LPS) masuk ke aliran darah, meracuni liver, dan menurunkan tiroid. Gula sederhana langsung diserap tanpa memberi makan bakteri.
        </p>

        <h3>3. Protein Berkualitas dan Gelatin</h3>
        <p>
          Protein dibutuhkan untuk memperbaiki jaringan, namun Ray Peat sangat menekankan pentingnya menyeimbangkan asam amino. Daging otot merah mengandung metionin dan triptofan tinggi yang bisa menekan tiroid dan memicu penuaan jika berlebih.
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Kaldu tulang / Gelatin / Kolagen:</strong> Kaya akan Glisin dan Prolin, yang bersifat anti-inflamasi, anti-stres, memperbaiki pelapis usus, dan menyeimbangkan asam amino dari daging.</li>
          <li><span className="dot dot-orange"></span><strong>Susu sapi & Keju:</strong> Sumber kalsium yang luar biasa. Kalsium menekan hormon stres (Parathyroid Hormone / PTH). Ketika kalsium kurang, PTH naik, yang menarik kalsium keluar dari tulang dan memicu peradangan seluler.</li>
          <li><span className="dot dot-orange"></span><strong>Telur & Makanan laut (Seafood):</strong> Terutama kerang dan udang, yang kaya akan tembaga (copper) dan zinc untuk mendukung pernapasan mitokondria. Ikan putih sangat baik (hindari salmon berlemak tinggi PUFA setiap hari).</li>
        </ul>

        <h3>4. Lemak Jenuh (Saturated Fats)</h3>
        <p>
          Lemak jenuh sangat stabil dan tidak memiliki rantai ganda yang mudah bereaksi, sehingga melestarikan vitamin E dan melindungi tubuh dari stres oksidatif.
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span><strong>Minyak kelapa (Coconut oil):</strong> Mengandung Medium Chain Triglycerides (MCT) yang membantu merangsang metabolisme hati dan menekan enzim pro-inflamasi.</li>
          <li><span className="dot dot-olive"></span><strong>Mentega (Butter) & Ghee:</strong> Sumber vitamin A, D, dan K2 yang krusial untuk mencegah kalsifikasi jaringan lunak.</li>
        </ul>

        <h2>Anti-Metabolic Foods (Yang Harus Dihindari)</h2>
        <p>
          Ray Peat menyarankan sebisa mungkin menghindari makanan yang secara aktif membunuh mitokondria dan mematikan tiroid:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Minyak Biji-bijian (Seed Oils / PUFA):</strong> Minyak kedelai, jagung, kanola, biji bunga matahari. Ini adalah racun utama bagi metabolisme (lipid peroxidation).</li>
          <li><span className="dot dot-orange"></span><strong>Kacang-kacangan & Biji-bijian utuh:</strong> Sering mengandung asam fitat yang memblokir penyerapan mineral (zinc, zat besi) serta kaya akan PUFA.</li>
          <li><span className="dot dot-orange"></span><strong>Sayuran silangan mentah (Cruciferous):</strong> Brokoli, kubis, atau kale mentah memiliki goitrogen alami yang langsung mengganggu penyerapan yodium pada kelenjar tiroid.</li>
          <li><span className="dot dot-orange"></span><strong>Daging babi & unggas komersial:</strong> Hewan ini diberi pakan jagung dan kedelai sehingga dagingnya mengandung level PUFA yang sangat tinggi, mirip minyak goreng cair.</li>
        </ul>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Foods;

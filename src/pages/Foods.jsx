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
          Berbeda dengan banyak diet modern yang berfokus pada "pembatasan" (seperti membatasi karbohidrat atau lemak), pendekatan nutrisi Dr. Ray Peat berfokus pada <strong>memberi bahan bakar</strong> yang tepat agar kelenjar tiroid dan metabolisme sel dapat bekerja dengan maksimal.
        </p>

        <h2>Makanan Pro-Metabolik Utama</h2>
        
        <h3>1. Karbohidrat Sederhana (Gula Alami)</h3>
        <p>
          Ray Peat tidak takut pada gula, asalkan berasal dari sumber yang tepat. Fruktosa dalam buah-buahan sangat mendukung metabolisme hati dan produksi hormon tiroid aktif (T3).
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Buah-buahan manis:</strong> Jeruk, semangka, anggur, pepaya.</li>
          <li><span className="dot dot-yellow"></span><strong>Jus jeruk segar:</strong> Sumber kalium, magnesium, dan gula alami tanpa serat berlebih yang bisa mengiritasi usus.</li>
          <li><span className="dot dot-yellow"></span><strong>Madu murni:</strong> Anti-inflamasi alami.</li>
        </ul>

        <h3>2. Protein Berkualitas Tinggi</h3>
        <p>
          Protein dibutuhkan untuk memperbaiki jaringan, namun Ray Peat menyarankan menyeimbangkan asam amino (terutama menghindari kelebihan triptofan dan metionin yang terdapat pada otot/daging murni).
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Susu sapi & Keju:</strong> Sumber kalsium yang sangat baik (kalsium menekan hormon stres PTH).</li>
          <li><span className="dot dot-orange"></span><strong>Kaldu tulang / Gelatin:</strong> Mengandung glisin yang bersifat anti-inflamasi, anti-stres, dan menyeimbangkan asam amino dari daging.</li>
          <li><span className="dot dot-orange"></span><strong>Telur & Makanan laut (Seafood):</strong> Seperti udang, kerang, dan ikan putih (bukan ikan berlemak tinggi PUFA).</li>
        </ul>

        <h3>3. Lemak Jenuh (Saturated Fats)</h3>
        <p>
          Lemak jenuh sangat stabil dan tidak mudah teroksidasi di dalam tubuh, sehingga melindungi sel dari stres oksidatif.
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span><strong>Minyak kelapa (Coconut oil):</strong> Membantu merangsang metabolisme dan menekan enzim yang merusak tiroid.</li>
          <li><span className="dot dot-olive"></span><strong>Mentega (Butter) & Ghee:</strong> Kaya akan vitamin larut lemak.</li>
        </ul>

        <h2>Debat Gula: Mengapa Tidak Perlu Takut?</h2>
        <p>
          Banyak yang salah paham bahwa "Ray Peat menyuruh makan gula putih sebanyak-banyaknya." Sebenarnya, beliau menyoroti bahwa tubuh dalam keadaan stres akan memecah protein otot (melalui kortisol) untuk membuat gula jika asupan karbohidrat kurang. Mengonsumsi gula alami mencegah pemecahan otot ini.
        </p>

        <h2>Anti-Metabolic Foods (Yang Harus Dihindari)</h2>
        <p>
          Sebaliknya, Ray Peat menyarankan meminimalkan konsumsi makanan yang menekan fungsi tiroid:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Minyak Biji-bijian (Seed Oils / PUFA):</strong> Minyak kedelai, jagung, kanola. Ini adalah racun utama bagi mitokondria.</li>
          <li><span className="dot dot-orange"></span><strong>Kacang-kacangan & Biji-bijian utuh:</strong> Sering mengandung penghambat enzim, asam fitat, dan PUFA tinggi.</li>
          <li><span className="dot dot-orange"></span><strong>Sayuran silangan mentah (Cruciferous):</strong> Brokoli atau kol mentah dapat mengganggu fungsi tiroid.</li>
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

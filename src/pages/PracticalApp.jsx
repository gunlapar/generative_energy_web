import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const PracticalApp = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Aplikasi Praktis: <span className="summer-italic">Memulai Prinsip Ray Peat</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 26 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Level: Intermediate
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Bagaimana Mengetahui Metabolisme Anda Rendah?</h2>
        <p>
          Sebelum mengubah kebiasaan, penting untuk mengetahui titik awal Anda. Dr. Ray Peat menyarankan pengukuran objektif yang sederhana di rumah:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Suhu Tubuh Pagi Hari:</strong> Ukur suhu di ketiak sebelum beranjak dari tempat tidur. Idealnya mendekati 37°C. Suhu di bawah 36.5°C bisa mengindikasikan fungsi tiroid yang lambat.</li>
          <li><span className="dot dot-orange"></span><strong>Denyut Jantung Istirahat (Pulse):</strong> Denyut jantung yang sehat saat istirahat berada di kisaran 75-85 bpm (detak per menit). Detak di bawah 65 bpm mungkin menandakan metabolisme yang tertahan.</li>
          <li><span className="dot dot-orange"></span><strong>Kualitas Tidur & Energi:</strong> Sering terbangun di malam hari (tanda adrenalin/kortisol naik) atau merasa lelah setelah makan adalah sinyal metabolisme yang stres.</li>
        </ul>

        <h2>Langkah Pertama yang Bisa Dicoba</h2>
        <p>Jangan mengubah segalanya dalam semalam. Coba lakukan perubahan bertahap:</p>
        <ol>
          <li><strong>Singkirkan Minyak Biji (PUFA):</strong> Berhentilah menggunakan minyak kedelai, kanola, jagung, dan margarin. Gantilah dengan minyak kelapa (coconut oil), mentega (butter), atau lemak sapi (tallow) untuk memasak.</li>
          <li><strong>Makan Secara Teratur:</strong> Jangan biarkan diri Anda kelaparan. Jika Anda mulai merasa kedinginan atau cemas di antara waktu makan, minumlah sedikit jus buah atau susu manis untuk menekan kortisol.</li>
          <li><strong>Tambahkan Salad Wortel Mentah:</strong> Parut wortel mentah memanjang, tambahkan sedikit minyak kelapa, cuka, dan garam. Makan ini sekali sehari (di luar jam makan berat) untuk membantu membersihkan bakteri endotoksin di usus yang menekan tiroid.</li>
          <li><strong>Seimbangkan Asam Amino:</strong> Jika Anda makan daging ayam atau sapi, minum secangkir kaldu tulang atau makan jeli/gelatin bersamaan untuk menyeimbangkan rasio fosfor dan kalsium serta asam amino.</li>
        </ol>

        <h2>Belajar Mendengarkan Tubuh (Perceiving)</h2>
        <p>
          Filosofi inti Ray Peat bukanlah mengikuti aturan secara kaku, melainkan menjadi sensitif terhadap respons tubuh. Jika sebuah makanan konon "sehat" tetapi membuat Anda kembung, tangan dingin, atau lemas, berarti makanan itu tidak cocok untuk metabolisme Anda saat ini.
        </p>
        <p>
          <strong>Selalu evaluasi:</strong> "Apakah suhu tubuh dan energi saya naik setelah makan makanan ini, atau justru turun?"
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default PracticalApp;

import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Article = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Metabolic Rate: <span className="summer-italic">Inti dari Filosofi Ray Peat</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 15 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Level: Beginner
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <img src="../ilustrasi-metabolics.jpg" alt="Ilustrasi Metabolic Rate" style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', aspectRatio: '2/1', border: '1px solid var(--border-color)' }} />
        <h2>Apa itu Metabolic Rate?</h2>
        <p>
          Metabolic rate adalah kecepatan tubuh Anda menggunakan energi untuk tetap hidup. Ini bukan hanya tentang membakar kalori saat berolahraga—ini tentang energi yang tubuh gunakan 24/7 untuk:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span>Bernafas</li>
          <li><span className="dot dot-orange"></span>Berdetak jantung</li>
          <li><span className="dot dot-orange"></span>Menjaga suhu tubuh</li>
          <li><span className="dot dot-orange"></span>Memperbaiki sel</li>
          <li><span className="dot dot-orange"></span>Berpikir</li>
        </ul>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          [Baca lebih detail: <a href="https://raypeat.com/articles/metabolic-rate" target="_blank" rel="noopener noreferrer">raypeat.com/articles/metabolic-rate</a>]
        </p>

        <h2>Respirasi Seluler: Kunci dari Segalanya</h2>
        <p>
          Menurut Ray Peat, inti dari tingkat metabolisme yang tinggi adalah <strong>respirasi seluler</strong> yang efisien di dalam mitokondria. Ketika sel Anda memiliki cukup oksigen, gula, dan hormon tiroid, mereka memproduksi energi (ATP) dan karbon dioksida (CO2) dalam jumlah besar. Sebaliknya, jika metabolisme rendah atau terhambat (karena stres atau racun), sel terpaksa menggunakan fermentasi asam laktat yang sangat tidak efisien dan memicu peradangan.
        </p>

        <h2>Mengapa Ray Peat Fokus pada Metabolic Rate?</h2>
        <p>
          Menurut penelitian Ray Peat, metabolic rate yang tinggi adalah FONDASI dari kesehatan yang baik. Metabolisme yang lambat adalah ciri utama penuaan dan penyakit degeneratif. Ketika metabolisme Anda tinggi:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Energi tinggi</strong> → sel memiliki banyak ATP untuk melakukan tugasnya.</li>
          <li><span className="dot dot-yellow"></span><strong>Imun lebih kuat</strong> → sel imun merespons patogen tanpa harus memicu peradangan berlebih.</li>
          <li><span className="dot dot-yellow"></span><strong>Hormon pelindung</strong> → produksi hormon progesteron dan pregnenolon meningkat.</li>
          <li><span className="dot dot-yellow"></span><strong>CO2 melimpah</strong> → Karbon dioksida bertindak sebagai vasodilator dan anti-inflamasi alami.</li>
        </ul>

        <h2>CO2 (Karbon Dioksida): Tanda Metabolisme Sehat</h2>
        <p>
          Banyak orang mengira CO2 hanyalah gas buang. Dr. Peat menekankan bahwa CO2 adalah salah satu zat paling protektif di tubuh. Metabolisme yang tinggi memproduksi banyak CO2, yang membantu melepaskan oksigen dari sel darah merah ke jaringan (Efek Bohr), menenangkan sistem saraf, dan mencegah pembengkakan sel (edema).
        </p>

        <h2>Cara Mengukur Metabolic Rate Anda</h2>
        <ol>
          <li><strong>Suhu tubuh</strong> - ukur pagi sebelum bangun (~10 menit di ketiak) dan setelah sarapan. Suhu yang naik setelah makan menunjukkan hati mampu membakar energi dengan baik. Normal: sekitar 37°C di siang hari.</li>
          <li><strong>Heart rate (Denyut Jantung)</strong> - ukur saat istirahat. Normal: 75-85 bpm (berbeda dengan saran medis modern yang sering merekomendasikan di bawah 60 bpm, Peat melihat denyut rendah sebagai tanda kompensasi adrenalin).</li>
          <li><strong>Energy levels</strong> - apakah Anda merasa hangat, fokus, dan bebas stres?</li>
        </ol>

        <h2>Apa yang Menurunkan Metabolic Rate?</h2>
        <p>Menurut Ray Peat, beberapa faktor mematikan mitokondria dan menurunkan metabolisme:</p>
        <ul>
          <li><strong>Stress kronis</strong> → peningkatan kortisol dan adrenalin secara terus-menerus.</li>
          <li><strong>PUFA (minyak biji-bijian)</strong> → memblokir enzim pencernaan, tiroid, dan meracuni mitokondria secara langsung (lipid peroxidation).</li>
          <li><strong>Estrogen Berlebih</strong> → menghalangi sel menggunakan oksigen dan menahan air (edema).</li>
          <li><strong>Kekurangan glukosa</strong> → diet rendah karbohidrat memaksa tubuh memecah otot untuk membuat gula, yang meningkatkan kortisol.</li>
        </ul>

        <h2>Apa yang Meningkatkan Metabolic Rate?</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span><strong>Makan cukup karbohidrat & gula alami</strong> (buah-buahan manis, jus jeruk, madu)</li>
          <li><span className="dot dot-olive"></span><strong>Protein berkualitas dengan rasio yang tepat</strong> (susu, keju, gelatin, bukan hanya daging otot)</li>
          <li><span className="dot dot-olive"></span><strong>Mendukung Tiroid</strong> (menghindari makanan goitrogenik dan diet kelaparan)</li>
          <li><span className="dot dot-olive"></span><strong>Lemak Jenuh</strong> (minyak kelapa dan mentega, yang melindungi dari stres oksidatif)</li>
          <li><span className="dot dot-olive"></span><strong>Terapi cahaya merah / matahari</strong> (menstimulasi enzim pernapasan di sel)</li>
        </ul>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Article;

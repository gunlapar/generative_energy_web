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

        <h2>Mengapa Ray Peat Fokus pada Metabolic Rate?</h2>
        <p>
          Menurut penelitian Ray Peat, metabolic rate yang tinggi adalah FONDASI dari kesehatan yang baik. Ketika metabolisme Anda tinggi:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Energi tinggi</strong> → fokus dan produktivitas lebih baik</li>
          <li><span className="dot dot-yellow"></span><strong>Imun lebih kuat</strong> → melawan penyakit lebih baik</li>
          <li><span className="dot dot-yellow"></span><strong>Hormon seimbang</strong> → mood & fertilitas lebih baik</li>
          <li><span className="dot dot-yellow"></span><strong>Penuaan lebih lambat</strong> → regenerasi sel lebih optimal</li>
        </ul>

        <h3>Contoh Konkret</h3>
        <p>Bayangkan dua orang:</p>
        <ul>
          <li><strong>Person A:</strong> Metabolic rate tinggi = suhu tubuh normal (37°C), energi sepanjang hari, tidur nyenyak</li>
          <li><strong>Person B:</strong> Metabolic rate rendah = suhu tubuh rendah (36°C), selalu lelah, tidur tidak nyenyak</li>
        </ul>
        <p>Person A lebih sehat, kan? Itulah yang Ray Peat tekankan.</p>

        <h2>Cara Mengukur Metabolic Rate Anda</h2>
        <ol>
          <li><strong>Suhu tubuh</strong> - ukur pagi sebelum bangun (~10 menit di ketiak). Normal: 37°C. Rendah: {'<36.5°C'} (tanda low metabolism)</li>
          <li><strong>Heart rate</strong> - ukur denyut jantung saat istirahat. Normal: 60-80 bpm. Terlalu rendah: {'<55 bpm'}</li>
          <li><strong>Energy levels</strong> - bagaimana energi Anda sepanjang hari?</li>
        </ol>

        <h2>Apa yang Menurunkan Metabolic Rate?</h2>
        <p>Menurut Ray Peat, beberapa faktor menurunkan metabolisme:</p>
        <ul>
          <li><strong>Stress kronis</strong> → tingginya kortisol</li>
          <li><strong>PUFA (seed oils)</strong> → meracuni mitokondria</li>
          <li><strong>Kurang tidur</strong> → hormonal imbalance</li>
          <li><strong>Puasa berkepanjangan</strong> → tubuh "mengira" ada kelaparan</li>
          <li><strong>Penuaan</strong> → normal, tapi bisa diperlambat</li>
        </ul>

        <h2>Apa yang Meningkatkan Metabolic Rate?</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span><strong>Makan cukup</strong> (terutama karbohidrat & gula alami)</li>
          <li><span className="dot dot-olive"></span><strong>Protein berkualitas</strong> (telur, daging, susu)</li>
          <li><span className="dot dot-olive"></span><strong>Tiroid sehat</strong> (yodium, selenium)</li>
          <li><span className="dot dot-olive"></span><strong>Menghindari PUFA</strong> (minyak kelapa lebih baik)</li>
          <li><span className="dot dot-olive"></span><strong>Tidur berkualitas</strong></li>
          <li><span className="dot dot-olive"></span><strong>Manajemen stress</strong></li>
        </ul>

        <h2>Next Steps</h2>
        <ol>
          <li>Ukur suhu tubuh Anda untuk baseline</li>
          <li>Catat energy levels Anda</li>
          <li>Jangan terlalu dogmatik—dengarkan tubuh Anda</li>
        </ol>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Article;

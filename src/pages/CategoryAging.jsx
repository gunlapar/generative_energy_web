import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const CategoryAging = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Masterclass: <span className="summer-italic">Penuaan & Tulang</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Masterclass Category
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <p><em>Halaman ini merangkum artikel Ray Peat: Osteoporosis and Aging, The Transparency of Life (Cataracts), Altitude and Mortality, Regeneration and Degeneration.</em></p>

        <h2>Penuaan adalah Kehilangan Struktur & Energi</h2>
        <p>
          Menurut pandangan ortodoks, penuaan adalah proses genetik yang tidak bisa dihindari, seperti "jam pasir" yang habis waktunya. Namun bagi Ray Peat, penuaan hanyalah akumulasi kerusakan akibat sel-sel gagal menghasilkan energi secara efisien (menurunnya tiroid seiring usia akibat akumulasi racun dan stres).
        </p>

        <h2>Osteoporosis dan Kalsium</h2>
        <p>
          Banyak dokter berfokus memberi suplemen kalsium dan estrogen kepada wanita lansia dengan anggapan itu akan memadatkan tulang. Ray Peat membongkar masalahnya:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Hormon PTH:</strong> Parathyroid Hormone (PTH) dan kortisol bertindak menarik kalsium *keluar* dari tulang jika darah Anda kekurangan kalsium, atau jika Anda stres. Estrogen tidak menghentikan hilangnya kepadatan tulang yang sehat.</li>
          <li><span className="dot dot-orange"></span><strong>Kalsifikasi Jaringan Lunak:</strong> Masalah lansia bukan kekurangan kalsium dalam tubuh, melainkan kalsium yang bocor ke tempat yang salah (pengapuran sendi, pembuluh darah, dan jantung). Kalsium harus diiringi dengan Vitamin K2 dan Progesteron agar kalsium masuk ke tulang, bukan ke organ lunak.</li>
          <li><span className="dot dot-yellow"></span><strong>Pencegahan:</strong> Minum susu dengan gula (dan keseimbangan magnesium), ditambah progesteron dan perbaikan tiroid, jauh lebih protektif untuk regenerasi tulang daripada suplemen kalsium pil murni.</li>
        </ul>

        <h2>Katarak dan Mata (Transparency of Life)</h2>
        <p>
          Lensa mata harus tetap transparan. Katarak sering dianggap murni akibat "usia tua" atau "sinar matahari". Ray Peat meneliti bagaimana struktur air di dalam sel lensa bergantung pada pengikatan ATP (energi tiroid). Ketika sel kehilangan energi atau teroksidasi oleh PUFA, struktur air hancur dan lensa menjadi keruh (katarak). Cahaya yang berlebihan tanpa hormon perlindungan dan mineral justru mempercepatnya.
        </p>

        <h2>Regenerasi vs Degenerasi (Efek Ketinggian)</h2>
        <p>
          Ray Peat sangat tertarik pada fakta bahwa orang yang hidup di dataran tinggi (altitude tinggi) dengan oksigen tipis justru sering berumur sangat panjang dan bebas penyakit degeneratif.
        </p>
        <p>
          Alasannya? Di ketinggian, paru-paru Anda menahan lebih banyak <strong>Karbon Dioksida (CO2)</strong>. CO2 ini menggeser cairan dalam sel, mempromosikan bentuk pernapasan seluler yang sangat adaptif, dan melindungi dari penuaan struktural.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: Merangkum topik Penuaan & Kepadatan Tulang | <a href="https://raypeat.com/articles/" target="_blank" rel="noopener noreferrer">raypeat.com/articles/</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default CategoryAging;

import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const CategoryToxics = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Masterclass: <span className="summer-italic">Zat Beracun & Mitos Medis</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Masterclass Category
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <p><em>Halaman ini merangkum artikel Ray Peat: Iron's Dangers, Cholesterol Longevity, The Great Fish Oil Experiment, Water Swelling.</em></p>

        <h2>Bahaya Zat Besi (Iron's Dangers)</h2>
        <p>
          Banyak orang, terutama wanita, disuruh meminum suplemen zat besi untuk mengatasi kelelahan atau "kurang darah". Ray Peat menyoroti hal ini sebagai praktik yang sangat berbahaya. 
        </p>
        <p>
          Zat besi adalah logam berat yang sangat reaktif. Ketika tubuh tidak memproduksi cukup energi (hipotiroid) untuk memanfaatkan tembaga (mineral kebalikan besi), zat besi akan menumpuk di jaringan (hati, otak). Zat besi bertindak sebagai katalis yang membuat PUFA teroksidasi jutaan kali lebih cepat (Reaksi Fenton), menciptakan bintik penuaan (lipofuscin), kerusakan saraf, dan tumor. Mengurangi asupan zat besi bebas adalah kunci anti-penuaan yang hebat (karenanya donor darah sering membuat orang merasa lebih baik).
        </p>

        <h2>Mitos Minyak Ikan (Fish Oil)</h2>
        <p>
          Minyak ikan kaya akan asam lemak Omega-3 (EPA/DHA), yang dipromosikan mampu "menyembuhkan" peradangan atau penyakit jantung. Ray Peat menyebutnya sebagai eksperimen besar yang gagal.
        </p>
        <p>
          Efek "anti-inflamasi" minyak ikan hanyalah karena minyak ini membekukan sementara dan menekan sistem kekebalan tubuh (imunosupresif). Pada akhirnya, Omega-3 adalah PUFA yang sangat tidak stabil; mereka akan cepat tengik di dalam tubuh manusia yang hangat (37°C), mempercepat kematian sel dan meningkatkan risiko pendarahan berlebih (hemorrhage).
        </p>

        <h2>Kolesterol Sang Pelindung</h2>
        <p>
          Perang melawan kolesterol telah merusak metabolisme jutaan orang. 
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span>Kolesterol adalah zat mentah yang digunakan tubuh (bersama vitamin A dan hormon tiroid) untuk membuat hormon pelindung: Progesteron, Pregnenolon, dan DHEA.</li>
          <li><span className="dot dot-yellow"></span>Jika tiroid Anda rendah, hati tidak bisa mengubah kolesterol menjadi hormon. Akibatnya kolesterol menumpuk di darah (kolesterol tinggi adalah indikasi *fungsi tiroid rendah*, bukan indikasi Anda makan terlalu banyak lemak).</li>
          <li><span className="dot dot-yellow"></span>Studi independen menunjukkan bahwa lansia dengan kolesterol yang agak tinggi hidup lebih lama, memiliki perlindungan lebih baik terhadap infeksi usus, dan jarang terkena Alzheimer.</li>
        </ul>

        <h2>Edema (Bahaya Terlalu Banyak Air)</h2>
        <p>
          Saran meminum "8 gelas air sehari" tanpa melihat rasa haus bisa berbahaya. Saat energi tiroid rendah, pompa ion di sel melemah, memungkinkan natrium dan air masuk ke dalam sel (membuat sel membengkak/edema). Minum air berlebih tanpa mineral pencetusnya akan mengencerkan natrium dalam darah (hiponatremia), memicu stres adrenal ekstrem dan memperburuk penuaan.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: Merangkum topik Mitos Zat Medis | <a href="https://raypeat.com/articles/" target="_blank" rel="noopener noreferrer">raypeat.com/articles/</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default CategoryToxics;

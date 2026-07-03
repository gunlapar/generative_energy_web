import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Pufas = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          PUFAs: <span className="summer-italic">Mengapa Ray Peat Menentangnya?</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> 28 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Level: Intermediate
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Apa itu PUFA?</h2>
        <p>
          PUFA singkatan dari <em>Polyunsaturated Fatty Acids</em> (Asam Lemak Tak Jenuh Ganda). Ini termasuk minyak nabati cair seperti minyak kedelai, jagung, kanola, bunga matahari, dan biji kapas, serta minyak ikan (Omega-3 dan Omega-6).
        </p>
        <p>
          Selama puluhan tahun, nutrisi arus utama mempromosikan PUFA sebagai "lemak sehat pelindung jantung". Namun, penelitian ekstensif Dr. Ray Peat menyimpulkan bahwa PUFA justru merupakan salah satu racun metabolik terbesar dalam makanan modern.
        </p>

        <h2>Mengapa PUFA Sangat Berbahaya?</h2>
        
        <h3>1. Ketidakstabilan Kimia & Oksidasi</h3>
        <p>
          Struktur kimia PUFA memiliki banyak ikatan rangkap yang sangat reaktif. Ketika dipanaskan atau terkena oksigen (termasuk suhu hangat di dalam tubuh manusia yang mencapai 37°C), PUFA dengan cepat teroksidasi dan menjadi tengik, menghasilkan radikal bebas mematikan (lipid peroksidasi). Ini mengarah pada kerusakan sel, penuaan dini, dan pembentukan plak di pembuluh darah (lipofuscin / bintik penuaan).
        </p>

        <h3>2. Menghambat Fungsi Tiroid</h3>
        <p>
          PUFA secara langsung menekan kelenjar tiroid dengan memblokir sekresi hormon dari kelenjar, menghalangi pengangkutan hormon dalam darah, dan mencegah sel menggunakan hormon tiroid aktif (T3). Tanpa tiroid yang aktif, laju metabolisme (metabolic rate) tubuh akan anjlok.
        </p>

        <h3>3. Mengganggu Pencernaan & Imunitas</h3>
        <p>
          Minyak biji-bijian ini menghambat enzim pencernaan (protease) di lambung dan usus, sehingga mencegah pemecahan protein yang benar. Hal ini dapat menyebabkan alergi makanan, radang usus, dan melemahkan sistem imun.
        </p>

        <h2>Bagaimana Menghindari PUFA?</h2>
        <p>Menghilangkan PUFA dari diet Anda adalah langkah paling krusial dalam memulihkan kesehatan menurut filosofi Ray Peat.</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Hentikan penggunaan:</strong> Minyak kedelai, kanola, jagung, bunga matahari, safflower, margarin, dan mayones komersial.</li>
          <li><span className="dot dot-orange"></span><strong>Hati-hati saat makan di luar:</strong> Hampir semua restoran menggunakan minyak biji-bijian karena harganya murah.</li>
          <li><span className="dot dot-orange"></span><strong>Batasi kacang & biji-bijian:</strong> Sebagian besar kacang, almond, dan biji-bijian utuh kaya akan PUFA.</li>
          <li><span className="dot dot-orange"></span><strong>Batasi konsumsi unggas & babi komersial:</strong> Hewan ternak monogastrik (babi, ayam) menyerap PUFA dari pakan kedelai/jagung mereka dan menyimpannya di lemak mereka. (Sapi dan domba lebih aman karena perut ruminansia mereka mengubah PUFA menjadi lemak jenuh yang aman).</li>
        </ul>

        <h2>Gunakan Lemak yang Stabil</h2>
        <p>Gantilah PUFA dengan lemak yang sangat stabil dan melindungi sel (tahan oksidasi):</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span>Minyak Kelapa (Sangat tinggi lemak jenuh stabil)</li>
          <li><span className="dot dot-olive"></span>Mentega (Butter) dan Ghee</li>
          <li><span className="dot dot-olive"></span>Lemak Sapi (Tallow)</li>
          <li><span className="dot dot-olive"></span>Minyak Zaitun atau Macadamia (sebagai bumbu sesekali, karena sebagian besar MUFA, bukan PUFA)</li>
        </ul>

      </section>

      <footer className="article-footer">
        <p>Sumber: "Unsaturated Vegetable Oils: Toxic" | Dr. Ray Peat research | <a href="https://raypeat.com/articles/articles/unsaturated-oils.shtml" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Pufas;

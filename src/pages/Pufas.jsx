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
          PUFA singkatan dari <em>Polyunsaturated Fatty Acids</em> (Asam Lemak Tak Jenuh Ganda). Ini mencakup sebagian besar minyak nabati cair (seperti minyak kedelai, jagung, kanola, biji bunga matahari, safflower) serta minyak ikan (Omega-3 dan Omega-6).
        </p>
        <p>
          Selama puluhan tahun, industri medis mempromosikan PUFA sebagai "lemak pelindung jantung" untuk menurunkan kolesterol. Namun, penelitian ekstensif Dr. Ray Peat membuktikan bahwa PUFA justru merupakan racun metabolik utama dalam makanan modern, yang menekan tiroid dan mengundang berbagai penyakit degeneratif.
        </p>

        <h2>Mengapa PUFA Sangat Berbahaya?</h2>
        
        <h3>1. Ketidakstabilan Kimia & Peroksidasi Lipid (Lipid Peroxidation)</h3>
        <p>
          Struktur kimia PUFA memiliki banyak "ikatan rangkap" yang terbuka dan tidak stabil. Ketika ikatan ini bersentuhan dengan oksigen dan panas (terutama suhu tubuh manusia sekitar 37°C), PUFA dengan cepat teroksidasi dan menjadi tengik.
        </p>
        <p>
          Proses peroksidasi lipid ini memecah rantai PUFA menjadi fragmen beracun (seperti aldehida, acrolein, dan prostaglandin pemicu nyeri). Sisa-sisa yang membusuk ini bereaksi dengan protein dan menumpuk di jaringan sebagai <strong>Lipofuscin</strong> (pigmen penuaan/bintik coklat), yang secara bertahap mencekik sel dari kemampuan bernapas (menggunakan oksigen).
        </p>

        <h3>2. Menghambat Fungsi Tiroid (Anti-Tiroid Langsung)</h3>
        <p>
          PUFA secara sistematis menekan kelenjar tiroid di berbagai level:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span>Memblokir pelepasan hormon dari kelenjar tiroid.</li>
          <li><span className="dot dot-orange"></span>Menghalangi pengangkutan hormon tiroid di dalam darah.</li>
          <li><span className="dot dot-orange"></span>Mencegah sel merespons hormon tiroid, membuat enzim seluler mengabaikan sinyal untuk meningkatkan pembakaran energi. Akibatnya, suhu tubuh dan tingkat energi anjlok.</li>
        </ul>

        <h3>3. Menekan Sistem Imun (Immunosuppressive)</h3>
        <p>
          Tahukah Anda bahwa ahli bedah organ menggunakan minyak yang kaya PUFA (atau turunannya) untuk secara sengaja menekan sistem imun pasien transplan agar tubuh mereka tidak menolak organ baru? Konsumsi PUFA sehari-hari melakukan hal yang sama: mematikan kelenjar timus dan melemahkan sistem imun bawaan, membuat tubuh rentan terhadap infeksi dan kanker.
        </p>

        <h2>Bagaimana dengan Omega-3 dan Minyak Ikan?</h2>
        <p>
          Menurut Ray Peat, minyak ikan sama buruknya, bahkan lebih tidak stabil dari minyak nabati karena ikatan rangkapnya lebih banyak. Mereka sangat reaktif dan menekan sistem imun dengan sangat cepat, yang sering disalahartikan sebagai "efek anti-inflamasi" jangka pendek, tetapi sebenarnya mematikan respons imun yang sehat dan meningkatkan stres oksidatif jangka panjang.
        </p>

        <h2>Bagaimana Menghindari PUFA dan Masa Paruh-nya (Half-Life)</h2>
        <p>
          PUFA yang Anda makan hari ini akan disimpan di jaringan lemak Anda. Butuh waktu berbulan-bulan, bahkan hingga <strong>4 tahun</strong>, untuk sepenuhnya mengosongkan cadangan PUFA dari tubuh Anda (Masa paruh atau half-life di jaringan adiposa). Namun Anda dapat memulainya hari ini:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Hentikan penggunaan mutlak:</strong> Minyak kedelai, kanola, jagung, bunga matahari, biji kapas, margarin, dan mayones komersial.</li>
          <li><span className="dot dot-orange"></span><strong>Batasi konsumsi unggas & babi komersial:</strong> Ayam dan babi diberi pakan jagung/kedelai tinggi PUFA. Lemak mereka mengandung PUFA tinggi (hingga 30%). Daging sapi ruminansia jauh lebih aman karena perut mereka memfermentasi PUFA menjadi lemak jenuh pelindung.</li>
          <li><span className="dot dot-orange"></span><strong>Gunakan Vitamin E:</strong> Vitamin E berfungsi menghentikan reaksi berantai peroksidasi lipid di dalam jaringan lemak. Mengonsumsi Vitamin E membantu melindungi tubuh selama Anda mendetoks PUFA lama.</li>
        </ul>

        <h2>Gunakan Lemak Jenuh (Saturated Fats) yang Stabil</h2>
        <p>Gantilah PUFA dengan lemak tahan oksidasi yang diakui sangat mendukung tiroid:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span><strong>Minyak Kelapa:</strong> Sangat stabil, bahkan dapat memblokir efek racun sisa PUFA di tubuh.</li>
          <li><span className="dot dot-olive"></span><strong>Mentega (Butter) dan Ghee:</strong> Sumber vitamin A dan K2.</li>
          <li><span className="dot dot-olive"></span><strong>Lemak Sapi / Kambing (Tallow/Suet)</strong></li>
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

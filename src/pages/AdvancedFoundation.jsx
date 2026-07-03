import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const AdvancedFoundation = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Trio Pelindung: <span className="summer-italic">Gelatin, CO2, & Cahaya</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 5 Februari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Level: Advanced
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Pelengkap Fondasi Bioenergetika</h2>
        <p>
          Selain nutrisi makro (gula dan lemak jenuh) serta hormon tiroid, ada tiga elemen kunci yang secara langsung mengatur ketahanan seluler terhadap stres, hipoksia (kekurangan oksigen), dan inflamasi. Memahami ketiganya akan menyempurnakan pemahaman Anda tentang filosofi Ray Peat.
        </p>

        <h2>1. Gelatin (Glisin): Anti-Inflamasi Alami</h2>
        <p>
          Daging otot utuh (seperti dada ayam atau steak murni) kaya akan asam amino triptofan dan metionin. Triptofan adalah prekursor serotonin (yang memicu stres energi), sementara metionin dapat menekan fungsi tiroid.
        </p>
        <p>
          Secara tradisional, manusia memakan seluruh bagian hewan, termasuk kulit, tulang rawan, dan kaldu yang kaya akan kolagen/gelatin. Gelatin mengandung sepertiga <strong>glisin</strong>. Glisin memiliki efek menenangkan sistem saraf yang luar biasa, melindungi perut dari bisul, melawan peradangan, dan melindungi sel dari kematian dini akibat stres. 
        </p>
        <p><em>Saran praktis:</em> Tambahkan bubuk gelatin murni atau minumlah kaldu tulang rumahan kapan pun Anda memakan daging tanpa tulang.</p>

        <h2>2. Karbon Dioksida (CO2): Gas Kehidupan</h2>
        <p>
          Ilmu kedokteran sering mengajarkan bahwa CO2 adalah "gas limbah beracun" hasil respirasi. Ray Peat meluruskan kekeliruan fatal ini. Berdasarkan efek Bohr, hemoglobin hanya akan melepaskan oksigen ke jaringan tubuh <strong>jika ada cukup CO2</strong>.
        </p>
        <p>
          CO2 adalah pelindung sel yang luar biasa. Ia melebarkan pembuluh darah, menenangkan saraf, dan menghentikan produksi asam laktat. Hiperventilasi (bernapas terlalu cepat dan dalam) akan membuang CO2, memicu serangan panik, dan membuat sel Anda tercekik meskipun darah Anda penuh oksigen.
        </p>
        <p><em>Saran praktis:</em> Berlatihlah bernapas dangkal menggunakan hidung, atau gunakan teknik <em>Bag Breathing</em> (bernapas di dalam kantong kertas) untuk memulihkan CO2 saat cemas atau stres metabolik.</p>

        <h2>3. Cahaya Merah & Cahaya Matahari</h2>
        <p>
          Dalam biologi kuantum sel, enzim pernapasan di dalam mitokondria (sitokrom c oksidase) sangat sensitif terhadap cahaya. 
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Cahaya Biru (Blue Light):</strong> Merusak mata, merusak enzim sitokrom, menurunkan metabolisme, dan meningkatkan stres selular. Ini banyak ditemukan pada layar LED, HP, dan lampu neon.</li>
          <li><span className="dot dot-yellow"></span><strong>Cahaya Merah & Inframerah Dekat (Red Light):</strong> Menembus dalam ke dalam jaringan, mengaktifkan kembali mitokondria, mengurangi pembengkakan sel, dan mempercepat regenerasi. Cahaya matahari pagi dan sore kaya akan spektrum penyembuh ini.</li>
        </ul>
        <p><em>Saran praktis:</em> Batasi paparan cahaya biru terang di malam hari, dan dapatkan sinar matahari yang cukup atau gunakan lampu pijar panas (incandescent) di rumah.</p>

      </section>

      <footer className="article-footer">
        <p>Sumber: "Protective CO2 and aging", "Gelatin, stress, longevity" | Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default AdvancedFoundation;

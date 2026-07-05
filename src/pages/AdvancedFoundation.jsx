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
          Selain nutrisi makro (gula dan lemak jenuh) serta hormon tiroid, ada tiga elemen kunci yang secara langsung mengatur ketahanan seluler terhadap stres, hipoksia (kekurangan oksigen), dan inflamasi. Memahami ketiganya akan menyempurnakan pemahaman Anda tentang filosofi penyembuhan Ray Peat.
        </p>

        <h2>1. Gelatin (Glisin): Keseimbangan Asam Amino</h2>
        <p>
          Makan daging tanpa tulang (seperti dada ayam atau steak murni) membanjiri darah dengan asam amino triptofan dan metionin. Triptofan diubah menjadi serotonin (hormon hibernasi/stres yang menurunkan energi), sementara kelebihan metionin dapat menekan fungsi kelenjar tiroid dan mempercepat penuaan.
        </p>
        <p>
          Secara tradisional, manusia memakan seluruh bagian hewan "from nose to tail", termasuk tulang rawan, kulit, dan kaldu yang kaya akan kolagen (gelatin). Gelatin mengandung sepertiga <strong>glisin</strong> dan tidak mengandung triptofan. Glisin adalah penghambat neuro-transmisi yang kuat: ia memiliki efek menenangkan pada saraf (seperti obat penenang alami), melindungi lambung dari bisul, menghentikan produksi peradangan dari endotoksin, dan mencegah kematian sel.
        </p>

        <h2>2. Karbon Dioksida (CO2): Sang Pelindung Paripurna</h2>
        <p>
          Ilmu biologi modern sering menyesatkan dengan menyebut CO2 sekadar "gas limbah racun" hasil pernapasan. Sebaliknya, Dr. Peat menunjukkan bahwa CO2 adalah salah satu zat paling esensial untuk kelangsungan hidup sel. 
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span><strong>Efek Bohr (The Bohr Effect):</strong> Sel darah merah (hemoglobin) hanya akan melepaskan muatan oksigennya ke dalam jaringan <strong>jika ada cukup CO2</strong> di area tersebut. Tanpa CO2, Anda bisa memiliki kadar oksigen 100% di darah, tetapi organ Anda tetap mati lemas (hipoksia).</li>
          <li><span className="dot dot-olive"></span><strong>Mencegah Laktat:</strong> CO2 menekan produksi asam laktat yang merusak.</li>
          <li><span className="dot dot-olive"></span><strong>Bahaya Hiperventilasi:</strong> Bernapas terlalu cepat/dalam akibat stres membuang cadangan CO2 darah Anda. Ini memicu kejang pembuluh darah, sakit kepala, dan serangan panik. Latihan bernapas lambat dengan hidung (atau <em>bag breathing</em>) membantu mengembalikan cadangan CO2.</li>
        </ul>

        <h2>3. Cahaya Merah & Cahaya Matahari (Cytochrome c oxidase)</h2>
        <p>
          Dalam biologi kuantum, enzim pernapasan paling penting di dalam mitokondria (Cytochrome c oxidase) sangat sensitif terhadap frekuensi cahaya. 
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Cahaya Biru (Blue Light):</strong> Ditemukan pada lampu neon, LED putih, dan layar gadget. Cahaya biru memecah ikatan enzim di mitokondria, mengurangi produksi ATP, dan memicu penuaan dini pada sel retina (mata) dan kulit. Gelap total tanpa cahaya juga dapat memicu stres pada tubuh.</li>
          <li><span className="dot dot-yellow"></span><strong>Cahaya Merah & Inframerah Dekat:</strong> Cahaya bergelombang panjang ini (dari matahari pagi/sore, atau lampu pijar pijar/incandescent) dapat menembus menembus tengkorak dan kulit Anda. Cahaya merah mengikat kembali dan mengaktifkan enzim sitokrom, mendorong mitokondria untuk langsung memproduksi lebih banyak energi, memperbaiki kerusakan jaringan, dan menurunkan pembengkakan sel (edema).</li>
        </ul>

        <h2>Sinergi Tiga Elemen</h2>
        <p>
          Ketika Anda menggabungkan asupan gelatin (untuk menekan inflamasi pencernaan), cahaya merah (untuk merangsang mitokondria), dan karbohidrat yang tepat (untuk memproduksi CO2), Anda menciptakan lingkungan di mana sel dapat pulih dengan cepat dari cedera atau penyakit kronis tanpa bergantung pada hormon stres adrenalin/kortisol.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: "Protective CO2 and aging", "Gelatin, stress, longevity" | Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default AdvancedFoundation;

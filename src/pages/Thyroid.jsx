import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Thyroid = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Fungsi Tiroid: <span className="summer-italic">Terapi & Kebingungan Medis</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> 29 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> Level: Advanced
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Mengapa Tes Darah Tiroid TSH Sering Menipu?</h2>
        <p>
          Dalam praktiknya, jutaan orang menderita gejala hipotiroidisme akut—seperti kedinginan konstan, rontok rambut, depresi, penambahan berat badan yang tidak bisa dijelaskan, dan kelelahan parah—tetapi dokter mereka menyatakan bahwa "hasil tes darah TSH Anda normal, Anda baik-baik saja". Dr. Ray Peat menjelaskan bahwa tes TSH (Thyroid Stimulating Hormone) sebagai ukuran tunggal sangat cacat dan tidak mencerminkan tingkat energi di dalam sel Anda.
        </p>
        <p>
          TSH sebenarnya adalah hormon pituitari, bukan hormon tiroid. Banyak faktor seperti stres tinggi, kelebihan estrogen, diet rendah karbohidrat, atau peradangan (endotoksin) dapat menekan TSH meskipun sel Anda kelaparan akan hormon tiroid yang sebenarnya. Sel Anda mati lemas, sementara darah Anda tampak baik-baik saja di kertas lab.
        </p>

        <h2>T4 vs T3: Konversi di Hati (Liver)</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>T4 (Tiroksin):</strong> Hormon tiroid "mentah" (memiliki 4 atom yodium) yang diproduksi oleh kelenjar. T4 bersifat <strong>tidak aktif</strong>. Ia tidak menghasilkan energi.</li>
          <li><span className="dot dot-yellow"></span><strong>T3 (Triiodotironina):</strong> Hormon tiroid yang benar-benar aktif (memiliki 3 atom yodium). T3 memasuki sel dan menyalakan mitokondria untuk memproduksi energi (ATP).</li>
        </ul>
        <p>
          Masalah utamanya: Kelenjar tiroid mayoritas hanya membuat T4. Untuk mendapatkan energi, tubuh Anda HARUS mengubah T4 menjadi T3. Sekitar 70-80% dari konversi ini terjadi di hati (liver).
        </p>
        <p>
          Banyak terapi tiroid medis saat ini hanya memberikan obat berupa Levotiroksin murni (T4 sintetis). Jika pasien memiliki hati yang stres, kekurangan cadangan gula (glikogen) akibat diet keto/puasa, atau dominasi estrogen, tubuh mereka <strong>TIDAK akan mengubah</strong> T4 menjadi T3. Alih-alih, tubuh yang stres akan mengubah T4 menjadi "Reverse T3" (rT3)—sebuah hormon yang secara aktif memblokir reseptor tiroid seluler dan melumpuhkan metabolisme. Inilah alasan banyak pasien tidak merasa lebih baik, atau malah merasa lebih buruk, meskipun minum obat tiroid T4.
        </p>

        <h2>Faktor Lingkungan yang Memblokir Tiroid</h2>
        <p>
          Kelenjar tiroid sangat sensitif terhadap lingkungan modern kita. Faktor-faktor penghambat utamanya meliputi:
        </p>
        <ul>
          <li><strong>Radiasi dan Logam Berat:</strong> Radiasi latar belakang (termasuk medis) dan paparan logam berat dapat merusak kelenjar tiroid secara struktural.</li>
          <li><strong>Bahan Kimia Goitrogenik:</strong> Sayuran silangan mentah (seperti brokoli mentah, kubis) dan kedelai mengandung enzim penghambat yang menghalangi kelenjar tiroid menyerap yodium.</li>
          <li><strong>PUFA dan Estrogen:</strong> Seperti dibahas di bab lain, keduanya mencekik sel dari oksigen dan menghambat pelepasan enzim tiroid (protease) dari kelenjar.</li>
        </ul>

        <h2>Bagaimana Mengetahui Tiroid Bekerja?</h2>
        <p>
          Menurut Dr. Peat, pengamatan metabolisme fisiologis sehari-hari jauh lebih akurat daripada sekadar tes TSH. Tiga pilar utama untuk mengukur fungsi tiroid adalah:
        </p>
        <ol>
          <li><strong>Suhu Tubuh (Basal Body Temperature):</strong> Ukur suhu Anda sebelum turun dari tempat tidur. Jika berada di bawah 36.6°C, itu adalah tanda pasti hipotiroid. Suhu tubuh idealnya meningkat setelah sarapan (mencapai sekitar 37°C di siang hari), menunjukkan liver berhasil membakar makanan menjadi panas (energi).</li>
          <li><strong>Denyut Nadi (Pulse Rate):</strong> Denyut jantung orang sehat dan bertenaga tiroid umumnya tenang namun berdebar kuat di kisaran 75-85 bpm (detak per menit). Nadi di bawah 65 bpm sering kali adalah hipotiroid.</li>
          <li><strong>Relaksasi Otot (Reflex):</strong> Secara historis, waktu relaksasi otot setelah diketuk (seperti refleks Achilles) adalah tes klinis emas untuk hipotiroidisme. Otot butuh BANYAK energi (ATP dari tiroid) untuk berelaksasi. Jika ATP rendah, otot tidak bisa melepas kontraksi, menyebabkan Anda rentan mengalami kram, leher kaku, atau kekakuan seluruh tubuh.</li>
        </ol>

        <h2>Nutrisi untuk Mendukung Hati & Konversi Tiroid</h2>
        <p>Anda dapat mendukung perubahan alami T4 ke T3 dengan:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span>Memastikan asupan kalori dan gula alami (fruktosa/glukosa dari buah) mencukupi agar liver memiliki banyak glikogen.</li>
          <li><span className="dot dot-olive"></span>Mendapatkan cukup protein, yodium (dari kerang/seafood, bukan suplemen dosis tinggi yang bisa meracuni), dan selenium.</li>
          <li><span className="dot dot-olive"></span>Sangat penting: Menghilangkan PUFA (minyak biji-bijian) dari makanan Anda.</li>
        </ul>

      </section>

      <footer className="article-footer">
        <p>Sumber: "Thyroid: Therapies, Confusion, and Fraud" | Dr. Ray Peat research | <a href="https://raypeat.com/articles/articles/thyroid.shtml" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Thyroid;

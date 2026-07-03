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
        <h2>Mengapa Tes Darah Tiroid Sering Menipu?</h2>
        <p>
          Dalam praktiknya, banyak orang mengalami gejala hipotiroid (kedinginan, rontok rambut, depresi, kelelahan parah), tetapi dokter mereka menyatakan bahwa "hasil tes darah TSH normal". Dr. Ray Peat menjelaskan bahwa tes TSH (Thyroid Stimulating Hormone) sebagai ukuran tunggal sangat cacat dan menyesatkan.
        </p>
        <p>
          Banyak faktor seperti stres tinggi, kelebihan estrogen, atau penuaan dapat membuat hormon tiroid tidak aktif di tingkat sel, meskipun kadarnya tampak "cukup" di dalam aliran darah. Sel Anda kelaparan akan energi, sementara darah Anda tampak baik-baik saja.
        </p>

        <h2>T4 vs T3: Aktif dan Tidak Aktif</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>T4 (Tiroksin):</strong> Hormon tiroid "mentah" atau pro-hormon yang diproduksi oleh kelenjar. Ini tidak aktif sampai hati mengubahnya menjadi T3.</li>
          <li><span className="dot dot-yellow"></span><strong>T3 (Triiodotironina):</strong> Hormon tiroid yang benar-benar aktif yang masuk ke sel dan menyalakan mitokondria untuk memproduksi energi.</li>
        </ul>
        <p>
          Banyak terapi tiroid medis saat ini hanya memberikan Levotiroksin murni (T4 sintetis). Jika pasien memiliki hati yang stres, kurang gizi karbohidrat, atau dominasi estrogen, tubuh mereka TIDAK akan mengubah T4 menjadi T3, melainkan mengubahnya menjadi "Reverse T3" yang justru memblokir metabolisme. Itulah mengapa banyak pasien tidak merasa lebih baik meskipun minum obat tiroid T4.
        </p>

        <h2>Bagaimana Mengetahui Tiroid Bekerja?</h2>
        <p>
          Menurut Dr. Peat, pengamatan metabolisme fisiologis lebih akurat dari sekadar tes TSH. Pengukuran tiroid tradisional yang paling diandalkan adalah:
        </p>
        <ol>
          <li><strong>Suhu Tubuh (Basal Body Temperature):</strong> Suhu tubuh saat istirahat dan sesudah sarapan pagi harus meningkat mencapai atau mendekati 37°C.</li>
          <li><strong>Denyut Nadi (Pulse Rate):</strong> Denyut jantung orang sehat umumnya tenang namun bertenaga di kisaran 75-85 bpm (detak per menit).</li>
          <li><strong>Relaksasi Otot (Reflex):</strong> Uji refleks Achilles yang lambat (waktu bagi otot untuk rileks setelah diketuk) secara historis adalah tes utama hipotiroidisme. Otot butuh banyak energi ATP (tiroid) untuk berelaksasi. Jika energi rendah, otot tegang atau kram.</li>
        </ol>

        <h2>Nutrisi untuk Mendukung Tiroid</h2>
        <p>Anda bisa mendukung perubahan alami T4 ke T3 dengan:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-olive"></span>Memastikan asupan kalori (khususnya karbohidrat fruktosa/glukosa alami dari buah) mencukupi kebutuhan hati.</li>
          <li><span className="dot dot-olive"></span>Mendapatkan cukup protein, yodium (dari seafood), dan selenium.</li>
          <li><span className="dot dot-olive"></span>Sangat penting: Menghilangkan PUFA (minyak biji-bijian) yang memblokir fungsi tiroid secara kuat.</li>
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

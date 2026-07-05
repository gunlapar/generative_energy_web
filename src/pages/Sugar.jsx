import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Sugar = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Debat Gula: <span className="summer-italic">Sukrosa, Pati, dan Konteks</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 30 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> Level: Intermediate
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <h2>Membedah Mitos Anti-Gula dan Diabetes</h2>
        <p>
          Dalam budaya kesehatan saat ini, gula disalahkan atas hampir semua penyakit modern (obesitas, diabetes, penuaan). Namun, penelitian mendalam Dr. Ray Peat pada fisiologi sel membedakan antara konsumsi gula kosong (junk food) dan peran glukosa/fruktosa alami sebagai bahan bakar sejati sel tubuh.
        </p>
        <p>
          Peat menjelaskan bahwa diabetes tipe 2 sering kali bukanlah penyakit akibat "terlalu banyak gula", melainkan ketidakmampuan sel untuk membakar gula karena mitokondria diracuni oleh asam lemak (PUFA).
        </p>

        <h2>Siklus Randle (The Randle Cycle): Gula vs Lemak</h2>
        <p>
          Tahun 1960-an, Philip Randle menemukan bahwa gula dan lemak bersaing untuk dibakar di dalam sel. Jika ada terlalu banyak asam lemak bebas (Free Fatty Acids) dalam darah, sel akan dipaksa membakar lemak dan <strong>menutup pintu</strong> bagi gula. Akibatnya gula menumpuk di darah.
        </p>
        <p>
          Ketika Anda makan makanan pro-metabolik (cukup gula alami) dan menghindari PUFA, tubuh menghentikan pelepasan asam lemak bebas (lipolisis) dan kembali membakar gula dengan efisien, menghasilkan karbon dioksida pelindung.
        </p>

        <h2>Gula (Sukrosa/Fruktosa) vs Pati (Starch)</h2>
        <p>
          Pati (karbohidrat kompleks dari biji-bijian, gandum, pasta) pada dasarnya adalah rantai panjang glukosa murni. Saat dicerna, ia dengan cepat menjadi glukosa yang memicu lonjakan insulin secara masif. Selain itu, molekul pati sering tidak tercerna sempurna dan memberi makan bakteri endotoksin di usus, menyebabkan peradangan kronis yang merusak hati (liver).
        </p>
        <p>
          Sebaliknya, gula alami dari buah matang (fruktosa) atau sukrosa (gabungan 50% glukosa dan 50% fruktosa) memiliki mekanisme yang jauh lebih aman secara metabolik:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Bebas Insulin:</strong> Fruktosa tidak membutuhkan insulin yang berlebihan untuk masuk ke dalam sel. Hal ini sangat menguntungkan bagi penderita resistensi insulin.</li>
          <li><span className="dot dot-orange"></span><strong>Penyelamat Hati:</strong> Fruktosa sangat cepat disimpan menjadi glikogen hati (cadangan bahan bakar). Glikogen hati penuh sangat penting untuk mengubah hormon tiroid mentah (T4) menjadi aktif (T3).</li>
          <li><span className="dot dot-orange"></span><strong>Kaya Mineral:</strong> Madu murni, buah-buahan matang tropis, dan jus jeruk murni adalah sumber karbohidrat favorit Ray Peat karena mudah dicerna dan disertai kalium/magnesium yang membantu relaksasi sel.</li>
        </ul>

        <h2>Gula sebagai Anti-Stres dan Anti-Kortisol</h2>
        <p>
          Saat gula darah Anda turun (misalnya karena puasa, diet keto, atau stres), tubuh mendeteksi ini sebagai keadaan darurat kelaparan. Kelenjar adrenal langsung melepaskan hormon stres <strong>adrenalin dan kortisol</strong>.
        </p>
        <p>
          Kortisol bertugas memecah jaringan otot dan organ tubuh Anda sendiri menjadi asam amino, yang kemudian diubah oleh liver menjadi glukosa baru untuk menyelamatkan otak Anda. Proses "kanibalisasi" diri sendiri inilah yang menyebabkan penuaan kulit, penyusutan otot, dan melemahnya sistem imun. Mengonsumsi gula alami meredam lonjakan adrenalin dan kortisol seketika.
        </p>

        <h2>Konteks Sangat Penting (The Matrix)</h2>
        <p>
          Dr. Peat <strong>TIDAK</strong> menganjurkan meminum soda jagung (HFCS) buatan atau permen olahan pabrik. Konsumsi gula berlebih <em>tanpa</em> nutrisi penyerta (kalsium, protein, vitamin B) akan menguras cadangan mineral tubuh untuk memproses gula tersebut.
        </p>
        <p>
          Idealnya, karbohidrat/gula dikonsumsi <strong>bersama</strong> protein berkualitas dan lemak jenuh. Misalnya: minum jus jeruk segar bersama telur, atau mencampur susu dengan madu dan sedikit garam. Kombinasi ini menstabilkan gula darah dan menekan pelepasan hormon stres.
        </p>

      </section>

      <footer className="article-footer">
        <p>Sumber: "Glycemia, starch, and sugar in context" | Dr. Ray Peat research | <a href="https://raypeat.com/articles/articles/glycemia.shtml" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Sugar;

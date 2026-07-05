import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Hormones = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Hormones: <span className="summer-italic">Progesterone & Estrogen</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-yellow"></span> 20 Januari 2024
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-orange"></span> Level: Intermediate
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <img src="../ilustrasi-hormones.jpg" alt="Ilustrasi Hormon" style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', aspectRatio: '2/1', border: '1px solid var(--border-color)' }} />
        <h2>Pergeseran Paradigma Hormonal</h2>
        <p>
          Salah satu kontribusi paling revolusioner dari Dr. Ray Peat adalah pandangannya terhadap hormon seks, khususnya estrogen dan progesteron. Berbeda dengan pandangan medis konvensional yang sering menganggap estrogen semata-mata sebagai "hormon wanita yang baik", Ray Peat melihatnya dari sudut pandang bioenergetik dan evolusi.
        </p>

        <h2>Estrogen: Hormon Syok, Hipoksia, dan Stres</h2>
        <p>
          Ray Peat mengklasifikasikan estrogen bukan sebagai hormon feminitas sejati, melainkan hormon yang berhubungan dengan pembelahan sel yang tidak terkendali, pertumbuhan berlebih, dan respons terhadap syok atau cedera (hipoksia/kurang oksigen).
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Menghambat Oksigenasi:</strong> Estrogen menghalangi pelepasan oksigen ke jaringan, memaksa sel bergeser dari pernapasan mitokondria yang efisien ke fermentasi laktat (karakteristik sel tumor).</li>
          <li><span className="dot dot-orange"></span><strong>Estrogen Dominance:</strong> Kondisi di mana rasio estrogen terlalu tinggi dibandingkan progesteron. Ini menyebabkan penuaan dini, edema (retensi air), pembekuan darah, penyakit autoimun, dan dominasi lemak.</li>
          <li><span className="dot dot-orange"></span><strong>Pemicu Stres Sistemik:</strong> Estrogen merangsang kelenjar adrenal untuk memproduksi kortisol, menciptakan siklus stres yang merusak tiroid.</li>
        </ul>

        <h2>Progesteron & Pregnenolon: Sang Pelindung (The Protective Hormones)</h2>
        <p>
          Sebaliknya, progesteron adalah hormon pro-kehamilan, pro-kelangsungan hidup, dan anti-stres utama. Pregnenolon adalah "ibu" dari hormon ini, yang diproduksi oleh mitokondria saat ada cukup kolesterol, vitamin A, dan hormon tiroid (T3).
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Anti-Estrogen Alami:</strong> Progesteron memblokir efek racun dari kelebihan estrogen dan mempercepat pembuangannya dari liver.</li>
          <li><span className="dot dot-yellow"></span><strong>Mendukung Tiroid:</strong> Progesteron memfasilitasi kelenjar tiroid untuk melepaskan hormon aktif ke dalam darah, sehingga meningkatkan <em>metabolic rate</em>.</li>
          <li><span className="dot dot-yellow"></span><strong>Pelindung Saraf (Neuroprotective):</strong> Melindungi otak dari kerusakan eksitotoksik akibat kelebihan kalsium dan glutamat.</li>
          <li><span className="dot dot-yellow"></span><strong>Penenang Alami:</strong> Mengaktifkan reseptor GABA di otak, memberikan efek menenangkan secara instan tanpa membuat kecanduan (berbeda dengan obat penenang).</li>
        </ul>

        <h2>Adrenalin & Kortisol: Hormon Pemecah Tubuh (Catabolic)</h2>
        <p>
          Adrenalin dan Kortisol diproduksi saat kadar gula darah terlalu rendah atau saat tubuh dalam bahaya. Jika dibiarkan tinggi secara kronis:
        </p>
        <p>
          <strong>Kortisol</strong> akan memecah jaringan yang sehat (otot, kulit, dan kelenjar timus/imun) untuk diubah menjadi gula oleh hati. Ini adalah proses penuaan yang dipercepat. Itulah mengapa Ray Peat sangat merekomendasikan makan gula alami dan cukup natrium (garam) untuk secara cepat menekan pelepasan adrenalin dan kortisol.
        </p>

        <h2>Lingkungan Estrogenik</h2>
        <p>
          Kita hidup di dunia yang sangat estrogenik. Dr. Peat memperingatkan bahwa paparan dari plastik (BPA), pestisida, polusi industri, dan bahkan fitoestrogen dari kedelai dapat meniru efek estrogen dalam tubuh, memperparah masalah metabolik baik pada pria maupun wanita.
        </p>

        <h2>Kesimpulan Praktis</h2>
        <ol>
          <li>Dukung tiroid Anda dengan nutrisi yang cukup (karbohidrat berkualitas dan protein) agar tubuh dapat membuat pregnenolon dan progesteron.</li>
          <li>Pastikan fungsi liver optimal (dengan cukup glukosa/fruktosa) agar dapat membuang kelebihan estrogen.</li>
          <li>Makan wortel mentah parut: Serat unik dalam wortel mengikat estrogen dan endotoksin di usus untuk dibuang.</li>
          <li>Kendalikan stres dan makan cukup karbohidrat untuk mencegah lonjakan kortisol.</li>
        </ol>

      </section>

      <footer className="article-footer">
        <p>Sumber: Dr. Ray Peat research | <a href="https://raypeat.com" target="_blank" rel="noopener noreferrer">raypeat.com</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default Hormones;

import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const Home = () => {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '48px 0', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Ray Peat <span className="summer-italic">Research Summary</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
          Ringkasan edukatif penelitian Dr. Ray Peat tentang metabolisme, energi, dan kesehatan, dirancang khusus untuk pembaca pemula.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          {/* Orange SVG */}
          <svg className="icon-svg" style={{width: '48px', height: '48px', color: 'var(--accent-orange)'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 3v2"></path>
            <path d="M12 19v2"></path>
            <path d="M3 12h2"></path>
            <path d="M19 12h2"></path>
            <path d="M12 3a4 4 0 0 1 4 4"></path>
          </svg>
          {/* Sun SVG */}
          <svg className="icon-svg" style={{width: '48px', height: '48px', color: 'var(--accent-yellow)'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </div>

        <Link to="/topics/metabolic-rate" className="btn">
          Mulai Belajar Ray Peat
        </Link>
      </section>

      <AttributionBox />

      <section style={{ marginTop: '48px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Featured <span className="summer-italic">Topics</span></h2>
        
        <div className="card">
          <h3><Link to="/topics/metabolic-rate">Metabolic Rate: Inti dari Filosofi Ray Peat</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Memahami mengapa tingkat metabolisme yang tinggi adalah fondasi dari kesehatan yang baik.</p>
          <Link to="/topics/metabolic-rate" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>

        <div className="card">
          <h3><Link to="/topics/foods">Pro-Metabolic Foods & Nutrition</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Makanan apa saja yang mendukung metabolisme dan mengapa Ray Peat menyukainya.</p>
          <Link to="/topics/foods" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>

        <div className="card">
          <h3><Link to="/topics/hormones">Hormones: Progesterone & Estrogen</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Keseimbangan hormon sebagai pelindung tubuh dari stres dan penuaan.</p>
          <Link to="/topics/hormones" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>

        <div className="card">
          <h3><Link to="/topics/pufas">PUFAs: Mengapa Ray Peat Menentangnya?</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Bahaya minyak biji-bijian, stabilitas lemak, dan mengapa PUFA meracuni tiroid.</p>
          <Link to="/topics/pufas" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>

        <div className="card">
          <h3><Link to="/topics/thyroid">Fungsi Tiroid: Terapi & Kebingungan Medis</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Mendeteksi hipotiroidisme dan mengapa tes darah sering menipu (T4 vs T3).</p>
          <Link to="/topics/thyroid" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>

        <div className="card">
          <h3><Link to="/topics/sugar">Debat Gula: Sukrosa, Pati, dan Konteks</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Gula sebagai terapi anti-stres, perbedaan fruktosa dan pati, serta cara kerja insulin.</p>
          <Link to="/topics/sugar" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>

        <div className="card">
          <h3><Link to="/topics/advanced-foundation">Trio Pelindung: Gelatin, CO2, & Cahaya</Link></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Elemen penekan inflamasi dan pelindung sel dari stres hipoksia.</p>
          <Link to="/topics/advanced-foundation" style={{ fontWeight: 500 }}>Baca selengkapnya →</Link>
        </div>
      </section>

      <section style={{ marginTop: '64px', borderTop: '2px dashed var(--border-color)', paddingTop: '48px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Deep Dives: <span className="summer-italic">Masterclass</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
          Meringkas dan memadatkan 80+ artikel lanjutan Dr. Ray Peat ke dalam 4 kategori raksasa.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div className="card" style={{ borderLeft: '4px solid var(--accent-orange)' }}>
            <h3><Link to="/categories/brain">Masterclass: Otak, Saraf, & Depresi</Link></h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Merangkum artikel tentang Alzheimer's, Serotonin, Multiple Sclerosis, dan Epilepsi.</p>
            <Link to="/categories/brain" style={{ fontWeight: 500 }}>Masuk ke Kelas →</Link>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--accent-orange)' }}>
            <h3><Link to="/categories/cancer">Masterclass: Kanker, Tumor, & Imunitas</Link></h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Merangkum pandangan bioenergetik terhadap Kanker, Laktat, dan efek pelindung Aspirin.</p>
            <Link to="/categories/cancer" style={{ fontWeight: 500 }}>Masuk ke Kelas →</Link>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--accent-yellow)' }}>
            <h3><Link to="/categories/aging">Masterclass: Penuaan & Tulang</Link></h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Merangkum artikel Osteoporosis, Kalsium, Katarak (Lensa Mata), dan efek Ketinggian (Altitude).</p>
            <Link to="/categories/aging" style={{ fontWeight: 500 }}>Masuk ke Kelas →</Link>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--accent-yellow)' }}>
            <h3><Link to="/categories/toxics">Masterclass: Zat Beracun & Mitos Medis</Link></h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Membedah mitos Minyak Ikan, bahaya penumpukan Zat Besi, dan peran Kolesterol sebagai pelindung.</p>
            <Link to="/categories/toxics" style={{ fontWeight: 500 }}>Masuk ke Kelas →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

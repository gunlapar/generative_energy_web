import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const CategoryCancer = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Masterclass: <span className="summer-italic">Kanker, Tumor, & Imunitas</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Masterclass Category
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <p><em>Halaman ini merangkum artikel Ray Peat: The Cancer Matrix, Cancer: Disorder and Energy, Breast Cancer, Prostate Cancer, Immunodeficiency, Aspirin & Cancer.</em></p>

        <h2>Kanker sebagai Gangguan Energi (Bioenergetika)</h2>
        <p>
          Ray Peat mendasarkan banyak pandangannya pada karya peraih Nobel Otto Warburg, yang membuktikan bahwa sel kanker muncul akibat <strong>kegagalan pernapasan selular (respirasi oksidatif)</strong>. 
        </p>
        <p>
          Ketika mitokondria rusak (biasanya oleh PUFA, radiasi, atau kekurangan oksigen/karbon dioksida), sel beralih memproduksi energi secara primitif melalui fermentasi glukosa menjadi <strong>asam laktat</strong>, bahkan ketika oksigen tersedia (Efek Warburg).
        </p>

        <h2>Laktat dan Dominasi Estrogen</h2>
        <p>
          Laktat yang diproduksi sel yang rusak bukanlah bahan bakar yang baik, melainkan penekan fungsi sel secara sistemik. Parahnya lagi, metabolisme sel yang rusak dan membengkak ini akan memicu <strong>produksi estrogen lokal</strong> dan pembentukan pembuluh darah baru (angiogenesis) di dalam jaringan.
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Estrogen sebagai Pemacu Kanker:</strong> Baik pada kanker payudara, rahim, maupun prostat pada pria (ya, dominasi estrogen sangat erat kaitannya dengan kanker prostat tua), estrogen memicu pembelahan sel tak terkendali.</li>
          <li><span className="dot dot-orange"></span><strong>Kerusakan Genetik hanyalah Akibat:</strong> Genetika/mutasi DNA (seperti mutasi BRCA) dalam filosofi Peat sering kali dilihat sebagai *hasil* dari lingkungan metabolik yang rusak dan stres, bukan penyebab utama tak terelakkan dari kanker.</li>
        </ul>

        <h2>Strategi Perlindungan Seluler</h2>
        <p>
          Perawatan berbasis energi berusaha memulihkan respirasi oksigen normal di sel dan menekan estrogen:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Hormon Pelindung:</strong> Hormon Tiroid, Progesteron, dan DHEA adalah pelindung anti-kanker. Progesteron secara langsung melawan proliferasi sel akibat estrogen.</li>
          <li><span className="dot dot-yellow"></span><strong>Aspirin (Asam Salisilat):</strong> Ray Peat banyak menulis tentang peran aspirin (digunakan bersama Vitamin K2) sebagai anti-inflamasi kuat yang menghalangi enzim pemicu kanker, menekan kelebihan zat besi/PUFA, dan melindungi sel layaknya hormon tiroid.</li>
          <li><span className="dot dot-yellow"></span><strong>Karbon Dioksida (CO2):</strong> Mencegah produksi laktat, dan bisa ditingkatkan melalui terapi pernapasan ringan atau asupan kalsium/karbohidrat murni berkualitas.</li>
        </ul>

      </section>

      <footer className="article-footer">
        <p>Sumber: Merangkum topik Kanker & Imunitas | <a href="https://raypeat.com/articles/" target="_blank" rel="noopener noreferrer">raypeat.com/articles/</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default CategoryCancer;

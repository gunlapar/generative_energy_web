import React from 'react';
import { Link } from 'react-router-dom';
import AttributionBox from '../components/AttributionBox';

const CategoryBrain = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <div style={{ marginBottom: '16px' }}>
          <Link to="/" style={{ fontSize: '0.9rem' }}>← Kembali ke Home</Link>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
          Masterclass: <span className="summer-italic">Otak, Saraf, & Depresi</span>
        </h1>
        <div className="article-meta">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span className="dot dot-olive"></span> Masterclass Category
          </span>
        </div>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <p><em>Halaman ini merangkum artikel Ray Peat: Alzheimer's Disease as a Clue to Immortality, Serotonin: Depression and Aggression, Multiple Sclerosis, Epilepsy and Progesterone.</em></p>

        <h2>Kecerdasan & Metabolisme</h2>
        <p>
          Ray Peat mendefinisikan kecerdasan bukan sebagai genetika yang kaku, melainkan sebagai ekspresi metabolisme yang berenergi tinggi. Otak adalah organ yang paling lapar energi di seluruh tubuh. Ketika laju pernapasan sel (tiroid/mitokondria) tinggi, struktur otak terus diregenerasi, memori menguat, dan proses berpikir menjadi jernih.
        </p>

        <h2>Serotonin: Mitos "Hormon Bahagia"</h2>
        <p>
          Dogma psikiatri arus utama meyakini bahwa kekurangan serotonin menyebabkan depresi, dan obat SSRI bekerja dengan meningkatkannya. Ray Peat membongkar miskonsepsi ini dari akarnya:
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-orange"></span><strong>Hormon Stres & Hibernasi:</strong> Serotonin secara biologis adalah hormon stres yang diproduksi secara masif di usus sebagai respons terhadap iritasi (serat tidak larut, endotoksin bakteri).</li>
          <li><span className="dot dot-orange"></span><strong>Menekan Energi:</strong> Serotonin memperlambat denyut jantung, menurunkan metabolisme energi, menurunkan oksigenasi otak, dan menginduksi kelelahan parah (sifat hibernasi). Kelebihan serotonin terkait erat dengan depresi, agresivitas, dan autisme.</li>
          <li><span className="dot dot-orange"></span><strong>Pencegahan:</strong> Ray Peat menyarankan mengatasi masalah serotonin dari usus (Salad Wortel Mentah, antibiotik spesifik jika perlu, menghindari pati pemicu bakteri) dan mempercepat tiroid.</li>
        </ul>

        <h2>Penyakit Alzheimer & Multiple Sclerosis</h2>
        <p>
          Penyakit neurodegeneratif umumnya disebabkan oleh kombinasi energi otak yang menipis (hipotiroidisme), peroksidasi lemak tak jenuh ganda (PUFA), dan beban estrogen/besi yang tinggi yang menginduksi eksitotoksisitas (kematian sel saraf akibat rangsangan berlebih).
        </p>
        <ul style={{ listStyleType: 'none', paddingLeft: '8px' }}>
          <li><span className="dot dot-yellow"></span><strong>Energi Gula untuk Otak:</strong> Otak tidak butuh "diet keto" untuk sehat. Sebaliknya, otak penderita Alzheimer tidak mampu membakar glukosa akibat hancurnya mitokondria oleh PUFA. Tiroid, glukosa murni (gula), dan niacinamide (Vitamin B3) adalah pelindung otak yang kuat.</li>
          <li><span className="dot dot-yellow"></span><strong>Progesteron (Neuroprotektif):</strong> Progesteron memiliki kemampuan luar biasa dalam memulihkan selubung mielin yang rusak pada penyakit saraf seperti Multiple Sclerosis (MS), memberikan efek menenangkan pada otak (sebagai lawan estrogen yang memicu kejang).</li>
        </ul>

      </section>

      <footer className="article-footer">
        <p>Sumber: Merangkum topik Saraf & Otak | <a href="https://raypeat.com/articles/" target="_blank" rel="noopener noreferrer">raypeat.com/articles/</a></p>
        <p>Educational resource for learning | Non-commercial</p>
      </footer>
    </article>
  );
};

export default CategoryBrain;

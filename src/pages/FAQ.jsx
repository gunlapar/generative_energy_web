import React from 'react';
import AttributionBox from '../components/AttributionBox';

const FAQ = () => {
  return (
    <article className="article-content">
      <header className="article-header">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          Frequently Asked <span className="summer-italic">Questions</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>Tanya jawab umum seputar filosofi Ray Peat.</p>
      </header>

      <AttributionBox />

      <section style={{ marginTop: '32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--accent-orange)' }}>Q: "Apakah Ray Peat merekomendasikan diet ketat?"</h3>
          <p>
            <strong>A:</strong> Tidak. Filosofi Ray Peat berfokus pada meningkatkan metabolic rate (kecepatan sel memproduksi energi), bukan mengikuti diet dogmatik yang menyiksa. Setiap orang memiliki titik awal metabolisme yang berbeda—yang terpenting adalah mengonsumsi makanan yang mudah dicerna dan merangsang tiroid, sambil mendengarkan sinyal tubuh Anda sendiri (seperti perubahan suhu tubuh).
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--accent-orange)' }}>Q: "Berapa banyak gula yang aman menurut Ray Peat?"</h3>
          <p>
            <strong>A:</strong> Ray Peat lebih berfokus pada <em>jenis</em> gula dan konteksnya daripada sekadar menghitung gram. Ia sangat menyukai fruktosa dari buah matang, madu, dan jus buah daripada pati (starch) karena fruktosa sangat efisien mengisi glikogen hati tanpa membutuhkan insulin yang tinggi. Gula digunakan sebagai bahan bakar pelindung agar tubuh tidak memecah otot akibat stres (kortisol). Namun, gula harus dikonsumsi bersama protein dan kalsium agar seimbang.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--accent-orange)' }}>Q: "Mengapa beliau sangat membenci PUFA (Minyak Biji-bijian)?"</h3>
          <p>
            <strong>A:</strong> Polyunsaturated Fatty Acids (PUFA) seperti minyak kedelai, jagung, dan kanola sangat tidak stabil di suhu tubuh manusia. Mereka mudah teroksidasi, merusak struktur sel, menyumbat kelenjar tiroid, dan menghambat enzim pencernaan protein. Menghilangkan PUFA dari diet dianggap sebagai langkah nomor satu untuk memulihkan metabolisme.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--accent-orange)' }}>Q: "Apakah Ray Peat sendiri sehat dengan diet ini?"</h3>
          <p>
            <strong>A:</strong> Ya, Dr. Ray Peat hidup sampai usia 86 tahun (wafat November 2022) dengan pikiran yang sangat tajam dan produktif hingga akhir hayatnya. Beliau mempraktikkan prinsip-prinsipnya sendiri selama puluhan tahun, termasuk diet tinggi susu, jus jeruk, kopi, dan keju.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--accent-orange)' }}>Q: "Apakah saya harus menghindari semua sayuran?"</h3>
          <p>
            <strong>A:</strong> Tidak. Sayuran akar yang dimasak perlahan hingga lembut (seperti kentang matang) sangat baik. Yang harus dibatasi adalah sayuran berserat tinggi yang sulit dicerna secara mentah atau sayuran dari keluarga kubis-kubisan (cruciferous) yang bisa menekan fungsi tiroid jika dimakan berlebihan. "Salad Wortel Mentah" (wortel diparut kasar tanpa dicerna sepenuhnya) justru disarankan setiap hari untuk mengikat racun di usus.
          </p>
        </div>

      </section>
    </article>
  );
};

export default FAQ;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Article from './pages/Article';
import Foods from './pages/Foods';
import Hormones from './pages/Hormones';
import WhoIsRayPeat from './pages/WhoIsRayPeat';
import Misconceptions from './pages/Misconceptions';
import PracticalApp from './pages/PracticalApp';
import Guide from './pages/Guide';
import FAQ from './pages/FAQ';
import Pufas from './pages/Pufas';
import Thyroid from './pages/Thyroid';
import Sugar from './pages/Sugar';
import AdvancedFoundation from './pages/AdvancedFoundation';
import CategoryBrain from './pages/CategoryBrain';
import CategoryCancer from './pages/CategoryCancer';
import CategoryAging from './pages/CategoryAging';
import CategoryToxics from './pages/CategoryToxics';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/metabolic-rate" element={<Article />} />
          <Route path="/topics/foods" element={<Foods />} />
          <Route path="/topics/hormones" element={<Hormones />} />
          <Route path="/topics/pufas" element={<Pufas />} />
          <Route path="/topics/thyroid" element={<Thyroid />} />
          <Route path="/topics/sugar" element={<Sugar />} />
          <Route path="/topics/who-is-ray-peat" element={<WhoIsRayPeat />} />
          <Route path="/topics/misconceptions" element={<Misconceptions />} />
          <Route path="/topics/practical-app" element={<PracticalApp />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/topics/advanced-foundation" element={<AdvancedFoundation />} />
          <Route path="/categories/brain" element={<CategoryBrain />} />
          <Route path="/categories/cancer" element={<CategoryCancer />} />
          <Route path="/categories/aging" element={<CategoryAging />} />
          <Route path="/categories/toxics" element={<CategoryToxics />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

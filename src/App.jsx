import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MauNhaPage } from './pages/MauNhaPage';
import { VatLieuPage } from './pages/VatLieuPage';
import { DuAnPage } from './pages/DuAnPage';
import { BaoGiaPage } from './pages/BaoGiaPage';
import { HoSoNangLucPage } from './pages/HoSoNangLucPage';
import { BlogPage } from './pages/BlogPage';
import { LienHePage } from './pages/LienHePage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mau-nha" element={<MauNhaPage />} />
        <Route path="/vat-lieu" element={<VatLieuPage />} />
        <Route path="/du-an" element={<DuAnPage />} />
        <Route path="/bao-gia" element={<BaoGiaPage />} />
        <Route path="/ho-so-nang-luc" element={<HoSoNangLucPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/lien-he" element={<LienHePage />} />
      </Route>
    </Routes>
  );
}

export default App;

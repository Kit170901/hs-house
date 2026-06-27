import { useState, useMemo } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { HouseModelCard } from '../components/HouseModelCard';
import { CTA } from '../components/CTA';
import { houseModels } from '../data/houseModels';
import './MauNhaPage.css';

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'nha-o', label: 'Nhà ở' },
  { id: 'homestay', label: 'Homestay' },
  { id: 'van-phong', label: 'Văn phòng' },
  { id: 'quan-cafe', label: 'Quán cafe' },
  { id: 'nha-xuong', label: 'Nhà xưởng' }
];

export function MauNhaPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredModels = useMemo(() => {
    if (activeCategory === 'all') return houseModels;
    return houseModels.filter(model => model.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="page-maunha">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="heading-1 page-hero-title">Mẫu nhà lắp ghép</h1>
            <p className="body-lg page-hero-desc">
              Khám phá bộ sưu tập mẫu nhà lắp ghép đa dạng, phù hợp cho mọi nhu cầu sử dụng từ dân dụng đến thương mại.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-3 models-grid">
            {filteredModels.map((model, i) => (
              <ScrollReveal key={model.id} delay={(i % 3) + 1}>
                <HouseModelCard model={model} />
              </ScrollReveal>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="empty-state">
              <p className="body-lg">Không tìm thấy mẫu nhà nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Bạn muốn tùy chỉnh mẫu nhà theo ý mình?"
        description="Đội ngũ kiến trúc sư của HS HOUSE sẵn sàng hỗ trợ thiết kế lại bản vẽ dựa trên ý tưởng của bạn."
        primaryBtn="Liên hệ thiết kế"
        variant="alt"
      />
    </div>
  );
}

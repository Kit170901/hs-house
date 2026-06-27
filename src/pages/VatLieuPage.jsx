import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { MaterialCard } from '../components/MaterialCard';
import { CTA } from '../components/CTA';
import { materials, materialComparison, materialFAQ } from '../data/materials';
import './VatLieuPage.css';

export function VatLieuPage() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="page-vatlieu">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="heading-1 page-hero-title">Vật liệu xây dựng</h1>
            <p className="body-lg page-hero-desc">
              Hệ thống vật liệu đạt tiêu chuẩn, tối ưu về độ bền, cách âm, cách nhiệt và thân thiện với môi trường.
            </p>
          </div>
        </div>
      </section>

      {/* Materials List */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Các loại vật liệu chính"
            subtitle="Mỗi loại vật liệu đều được chọn lọc kỹ càng để đảm bảo tuổi thọ và chất lượng công trình."
          />
          <div className="grid grid-4 materials-grid">
            {materials.map((mat, i) => (
              <ScrollReveal key={mat.id} delay={(i % 4) + 1}>
                <MaterialCard material={mat} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Bảng so sánh vật liệu"
            subtitle="Đối chiếu các đặc tính cơ bản giúp bạn dễ dàng đưa ra quyết định."
          />
          <ScrollReveal>
            <div className="table-responsive">
              <table className="vatlieu-table">
                <thead>
                  <tr>
                    <th>Tiêu chí</th>
                    <th>Panel EPS / PU</th>
                    <th>Tấm Cemboard</th>
                    <th>Khung thép mạ kẽm</th>
                  </tr>
                </thead>
                <tbody>
                  {materialComparison.map((row, index) => (
                    <tr key={index}>
                      <td className="table-row-title">{row.property}</td>
                      <td>{row.panel}</td>
                      <td>{row.cemboard}</td>
                      <td>{row.steelFrame}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ / Knowledge Base */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Kiến thức vật liệu"
            subtitle="Cẩm nang giải đáp những thắc mắc thường gặp về vật liệu nhà lắp ghép."
            centered={false}
          />
          <div className="faq-layout">
            <div className="faq-tabs">
              {materialFAQ.map((item, i) => (
                <button
                  key={i}
                  className={`faq-tab ${activeFAQ === i ? 'faq-tab-active' : ''}`}
                  onClick={() => setActiveFAQ(i)}
                >
                  {item.question}
                </button>
              ))}
            </div>
            <ScrollReveal className="faq-content" key={activeFAQ}>
              <h3 className="heading-3">{materialFAQ[activeFAQ]?.question}</h3>
              <p className="body-base" style={{ marginTop: 'var(--space-4)', whiteSpace: 'pre-line' }}>
                {materialFAQ[activeFAQ]?.answer}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA
        title="Cần chuyên gia tư vấn vật liệu?"
        description="Hãy cho chúng tôi biết nhu cầu của bạn, HS HOUSE sẽ tư vấn giải pháp tối ưu và tiết kiệm nhất."
        primaryBtn="Nhận tư vấn ngay"
        variant="navy"
      />
    </div>
  );
}

import * as PhosphorIcons from '@phosphor-icons/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { PriceCard } from '../components/PriceCard';
import { ContactForm } from '../components/ContactForm';
import { CTA } from '../components/CTA';
import { pricingPackages, costFactors } from '../data/pricing';
import './BaoGiaPage.css';

export function BaoGiaPage() {
  return (
    <div className="page-baogia">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="heading-1 page-hero-title">Báo giá nhà lắp ghép</h1>
            <p className="body-lg page-hero-desc">
              Minh bạch trong báo giá, cam kết không phát sinh chi phí ẩn trong suốt quá trình thi công.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Các gói thi công cơ bản"
            subtitle="Lựa chọn gói dịch vụ phù hợp nhất với nhu cầu và ngân sách của bạn."
          />
          <div className="grid grid-3 pricing-page-grid">
            {pricingPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={(i % 3) + 1}>
                <PriceCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>
          <p className="pricing-disclaimer body-sm">
            * Giá chỉ mang tính tham khảo. Chi phí thực tế phụ thuộc vào diện tích, vật liệu, vị trí và yêu cầu hoàn thiện.
          </p>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Yếu tố ảnh hưởng đến chi phí"
            subtitle="Hiểu rõ các yếu tố cấu thành giá để tối ưu hóa ngân sách xây dựng."
          />
          <div className="factors-grid">
            {costFactors.map((factor, i) => {
              const Icon = PhosphorIcons[factor.icon] || PhosphorIcons.Info;
              return (
                <ScrollReveal key={i} delay={(i % 3) + 1}>
                  <div className="factor-card">
                    <div className="icon-box icon-box-lime factor-icon">
                      <Icon size={24} weight="duotone" />
                    </div>
                    <h3 className="heading-4 factor-title">{factor.title}</h3>
                    <p className="body-sm">{factor.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section">
        <div className="container form-section-container">
          <div className="form-section-text">
            <SectionTitle
              title="Nhận báo giá chi tiết"
              subtitle="Điền thông tin dự án của bạn, chuyên viên của HS HOUSE sẽ liên hệ tư vấn và lập dự toán hoàn toàn miễn phí."
              centered={false}
            />
            <div className="form-contact-info">
              <div className="contact-info-item">
                <PhosphorIcons.Phone size={24} weight="duotone" className="text-navy" />
                <div>
                  <div className="label">Hotline tư vấn nhanh</div>
                  <div className="value">0909 123 456</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-section-box">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTA
        title="Bạn cần tìm hiểu thêm về vật liệu thi công?"
        description="Xem chi tiết các loại vật liệu chúng tôi sử dụng để đánh giá chất lượng công trình."
        primaryBtn="Xem vật liệu"
        secondaryBtn="Xem dự án mẫu"
        variant="navy"
      />
    </div>
  );
}

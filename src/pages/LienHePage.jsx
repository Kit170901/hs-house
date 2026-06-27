import * as PhosphorIcons from '@phosphor-icons/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ContactForm } from '../components/ContactForm';
import { CTA } from '../components/CTA';
import { companyInfo } from '../data/companyProfile';
import './LienHePage.css';

export function LienHePage() {
  return (
    <div className="page-lienhe">
      <section className="contact-hero">
        <div className="contact-hero-blur"></div>
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-hero-badge">LIÊN HỆ TƯ VẤN</span>
            <h1 className="heading-1 contact-hero-title" style={{ color: '#FFFFFF' }}>Liên hệ với HS HOUSE</h1>
            <p className="body-lg contact-hero-desc" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Để lại thông tin, đội ngũ HS HOUSE sẽ tư vấn giải pháp nhà lắp ghép phù hợp với nhu cầu, diện tích và ngân sách của bạn.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section-main">
        <div className="container contact-container">
          
          {/* Form Side */}
          <ScrollReveal delay={1}>
            <div className="contact-form-wrapper">
              <h2 className="heading-3" style={{ marginBottom: 'var(--space-2)' }}>Gửi yêu cầu tư vấn</h2>
              <p className="body-base" style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-secondary)' }}>
                Vui lòng điền thông tin vào mẫu bên dưới, chuyên viên của HS HOUSE sẽ liên hệ với bạn trong thời gian sớm nhất.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Info Side */}
          <ScrollReveal delay={2}>
            <div className="contact-info-wrapper">
              <h2 className="heading-3" style={{ marginBottom: 'var(--space-6)' }}>Thông tin liên hệ</h2>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="icon-box icon-box-lime">
                    <PhosphorIcons.Phone size={24} weight="duotone" />
                  </div>
                  <div>
                    <div className="contact-info-label">Hotline / Zalo</div>
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="contact-info-value heading-4">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="icon-box icon-box-lime">
                    <PhosphorIcons.Envelope size={24} weight="duotone" />
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="contact-info-value body-lg">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="icon-box icon-box-lime">
                    <PhosphorIcons.MapPin size={24} weight="duotone" />
                  </div>
                  <div>
                    <div className="contact-info-label">Địa chỉ văn phòng</div>
                    <div className="contact-info-value body-lg">
                      {companyInfo.address}
                    </div>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="btn btn-primary btn-lg action-btn">
                  <PhosphorIcons.PhoneCall size={20} weight="bold" />
                  Gọi ngay
                </a>
                <button className="btn btn-lime btn-lg action-btn" onClick={() => alert('Mở Zalo OA')}>
                  <PhosphorIcons.ChatCircleDots size={20} weight="bold" />
                  Chat Zalo
                </button>
              </div>

              <div className="map-placeholder">
                <PhosphorIcons.MapPin size={32} weight="duotone" className="text-navy" style={{ marginBottom: 'var(--space-2)' }} />
                <span className="body-sm">Bản đồ sẽ hiển thị tại đây</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <CTA
        title="Bạn cần tham khảo thêm về giá?"
        description="Xem bảng báo giá chi tiết cho các gói thi công nhà lắp ghép của chúng tôi."
        primaryBtn="Xem bảng giá"
        variant="alt"
      />
    </div>
  );
}

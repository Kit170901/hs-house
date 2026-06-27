import { Link } from 'react-router-dom';
import {
  House,
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  YoutubeLogo,
  InstagramLogo,
} from '@phosphor-icons/react';
import './Footer.css';

const quickLinks = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Mẫu nhà lắp ghép', path: '/mau-nha' },
  { label: 'Vật liệu', path: '/vat-lieu' },
  { label: 'Dự án', path: '/du-an' },
  { label: 'Báo giá', path: '/bao-gia' },
  { label: 'Blog', path: '/blog' },
];

const services = [
  'Nhà ở lắp ghép',
  'Homestay nghỉ dưỡng',
  'Văn phòng lắp ghép',
  'Nhà xưởng, nhà kho',
  'Quán cafe, nhà hàng',
  'Thiết kế theo yêu cầu',
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo & Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo-hs-house.png" alt="HS HOUSE" style={{ height: '48px', objectFit: 'contain' }} />
            </Link>
            <p className="footer-desc">
              Giải pháp nhà lắp ghép hiện đại, thi công nhanh, tối ưu chi phí.
              Phù hợp mọi nhu cầu từ nhà ở đến công trình thương mại.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Facebook">
                <FacebookLogo size={20} weight="fill" />
              </a>
              <a href="#" className="footer-social" aria-label="YouTube">
                <YoutubeLogo size={20} weight="fill" />
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <InstagramLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Liên kết</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Dịch vụ</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Liên hệ</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={18} weight="bold" />
                <div>
                  <span className="footer-contact-label">Hotline</span>
                  <a href="tel:0909123456" className="footer-contact-value">0909 123 456</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Envelope size={18} weight="bold" />
                <div>
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:info@hshouse.vn" className="footer-contact-value">info@hshouse.vn</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} weight="bold" />
                <div>
                  <span className="footer-contact-label">Địa chỉ</span>
                  <span className="footer-contact-value">123 Nguyễn Văn Linh, Q.7, TP.HCM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 HS HOUSE. Bảo lưu mọi quyền.</p>
          <p>Thiết kế bởi HS HOUSE Team</p>
        </div>
      </div>
    </footer>
  );
}

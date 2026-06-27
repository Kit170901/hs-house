import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  X,
  Phone,
  House,
} from '@phosphor-icons/react';
import './Header.css';

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Mẫu nhà', path: '/mau-nha' },
  { label: 'Vật liệu', path: '/vat-lieu' },
  { label: 'Dự án', path: '/du-an' },
  { label: 'Báo giá', path: '/bao-gia' },
  { label: 'Năng lực', path: '/ho-so-nang-luc' },
  { label: 'Blog', path: '/blog' },
  { label: 'Liên hệ', path: '/lien-he' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src="/assets/logo-hs-house.png" alt="HS HOUSE" style={{ height: '40px', objectFit: 'contain' }} />
        </Link>

        <nav className="header-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`header-nav-link${location.pathname === item.path ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:0909123456" className="header-phone">
            <Phone size={18} weight="bold" />
            <span>0909 123 456</span>
          </a>
          <Link to="/bao-gia" className="btn btn-primary btn-sm">
            Nhận báo giá
          </Link>
        </div>

        <button
          className="header-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' mobile-menu-open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link${location.pathname === item.path ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="tel:0909123456" className="mobile-phone">
            <Phone size={20} weight="bold" />
            <span>0909 123 456</span>
          </a>
          <Link to="/bao-gia" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            Nhận báo giá
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

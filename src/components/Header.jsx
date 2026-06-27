import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  X,
  Phone,
  House,
  CaretDown,
  CaretRight,
} from '@phosphor-icons/react';
import './Header.css';

const navItems = [
  { label: 'Trang chủ', path: '/' },
  { 
    label: 'Mẫu nhà', 
    path: '/mau-nha',
    subItems: [
      { 
        label: 'Nhà ở', 
        path: '/mau-nha?type=nha-o',
        nestedItems: [
          { label: 'Nhà ở 1', path: '/mau-nha?type=nha-o&id=1' },
          { label: 'Nhà ở 2', path: '/mau-nha?type=nha-o&id=2' },
          { label: 'Nhà ở 3', path: '/mau-nha?type=nha-o&id=3' },
          { label: 'Nhà ở 4', path: '/mau-nha?type=nha-o&id=4' },
          { label: 'Nhà ở 5', path: '/mau-nha?type=nha-o&id=5' },
        ]
      },
      { 
        label: 'Homestay', 
        path: '/mau-nha?type=homestay',
        nestedItems: [
          { label: 'Homestay 1', path: '/mau-nha?type=homestay&id=1' },
          { label: 'Homestay 2', path: '/mau-nha?type=homestay&id=2' },
          { label: 'Homestay 3', path: '/mau-nha?type=homestay&id=3' },
          { label: 'Homestay 4', path: '/mau-nha?type=homestay&id=4' },
          { label: 'Homestay 5', path: '/mau-nha?type=homestay&id=5' },
        ]
      },
      { 
        label: 'Văn phòng', 
        path: '/mau-nha?type=van-phong',
        nestedItems: [
          { label: 'Văn phòng 1', path: '/mau-nha?type=van-phong&id=1' },
          { label: 'Văn phòng 2', path: '/mau-nha?type=van-phong&id=2' },
          { label: 'Văn phòng 3', path: '/mau-nha?type=van-phong&id=3' },
          { label: 'Văn phòng 4', path: '/mau-nha?type=van-phong&id=4' },
          { label: 'Văn phòng 5', path: '/mau-nha?type=van-phong&id=5' },
        ]
      },
      { 
        label: 'Quán cafe', 
        path: '/mau-nha?type=quan-cafe',
        nestedItems: [
          { label: 'Cafe 1', path: '/mau-nha?type=quan-cafe&id=1' },
          { label: 'Cafe 2', path: '/mau-nha?type=quan-cafe&id=2' },
          { label: 'Cafe 3', path: '/mau-nha?type=quan-cafe&id=3' },
          { label: 'Cafe 4', path: '/mau-nha?type=quan-cafe&id=4' },
          { label: 'Cafe 5', path: '/mau-nha?type=quan-cafe&id=5' },
        ]
      },
      { 
        label: 'Nhà xưởng', 
        path: '/mau-nha?type=nha-xuong',
        nestedItems: [
          { label: 'Nhà xưởng 1', path: '/mau-nha?type=nha-xuong&id=1' },
          { label: 'Nhà xưởng 2', path: '/mau-nha?type=nha-xuong&id=2' },
          { label: 'Nhà xưởng 3', path: '/mau-nha?type=nha-xuong&id=3' },
          { label: 'Nhà xưởng 4', path: '/mau-nha?type=nha-xuong&id=4' },
          { label: 'Nhà xưởng 5', path: '/mau-nha?type=nha-xuong&id=5' },
        ]
      },
    ]
  },
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
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded({});
  }, [location.pathname]);

  const toggleMobileExpanded = (path, e) => {
    e.preventDefault();
    setMobileExpanded(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}${isHome && !scrolled ? ' header-transparent' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src="/assets/logo-hs-house.png" alt="HS HOUSE" className="header-logo-img" />
        </Link>

        <nav className="header-nav">
          {navItems.map((item) => (
            <div key={item.path} className="nav-item-wrapper">
              <Link
                to={item.path}
                className={`header-nav-link${location.pathname === item.path ? ' active' : ''}`}
              >
                {item.label}
              </Link>
              {item.subItems && (
                <div className="nav-dropdown vertical">
                  <div className="nav-dropdown-inner">
                    {item.subItems.map((sub) => (
                      <div key={sub.path} className="nav-dropdown-item-wrapper">
                        <Link to={sub.path} className="nav-dropdown-link">
                          {sub.label}
                          {sub.nestedItems && <CaretRight size={14} weight="bold" className="dropdown-caret" />}
                        </Link>
                        {sub.nestedItems && (
                          <div className="nav-submenu">
                            <div className="nav-dropdown-inner">
                              {sub.nestedItems.map((nested) => (
                                <Link key={nested.path} to={nested.path} className="nav-dropdown-link">
                                  {nested.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <div key={item.path} className="mobile-nav-item-wrapper">
              <Link
                to={item.path}
                className={`mobile-nav-link${location.pathname === item.path ? ' active' : ''}`}
              >
                {item.label}
              </Link>
              {item.subItems && (
                <div className="mobile-sub-nav">
                  {item.subItems.map((sub) => (
                    <div key={sub.path} className="mobile-sub-nav-group">
                      <div className="mobile-sub-nav-header">
                        <Link to={sub.path} className="mobile-sub-nav-link">
                          {sub.label}
                        </Link>
                        {sub.nestedItems && (
                          <button 
                            className={`mobile-sub-nav-toggle ${mobileExpanded[sub.path] ? 'expanded' : ''}`}
                            onClick={(e) => toggleMobileExpanded(sub.path, e)}
                          >
                            <CaretDown size={16} weight="bold" />
                          </button>
                        )}
                      </div>
                      {sub.nestedItems && mobileExpanded[sub.path] && (
                        <div className="mobile-nested-nav">
                          {sub.nestedItems.map((nested) => (
                            <Link key={nested.path} to={nested.path} className="mobile-nested-nav-link">
                              {nested.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
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

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Nhà lắp ghép hiện đại',
    subtitle: 'Giải pháp xây dựng nhanh, bền vững và tối ưu chi phí cho nhà ở, homestay, văn phòng và công trình dân dụng.',
    image: '/images/hero-house.png',
    primaryCta: { label: 'Xem mẫu nhà', link: '/mau-nha' },
    secondaryCta: { label: 'Nhận tư vấn', link: '/lien-he' },
  },
  {
    id: 2,
    title: 'Thi công nhanh, tối ưu ngân sách',
    subtitle: 'HS HOUSE đồng hành từ tư vấn, thiết kế, sản xuất cấu kiện đến lắp dựng và bàn giao công trình.',
    image: '/images/office-project.png',
    primaryCta: { label: 'Xem báo giá', link: '/bao-gia' },
    secondaryCta: { label: 'Xem dự án', link: '/du-an' },
  },
  {
    id: 3,
    title: 'Vật liệu bền đẹp, thiết kế linh hoạt',
    subtitle: 'Ứng dụng khung thép, tấm panel, cemboard và hệ vật liệu phù hợp từng nhu cầu sử dụng.',
    image: '/images/residential-project.png',
    primaryCta: { label: 'Tìm hiểu vật liệu', link: '/vat-lieu' },
    secondaryCta: { label: 'Liên hệ ngay', link: '/lien-he' },
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section 
      className="hero-slider-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hero-slider-container">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div 
              key={slide.id} 
              className={`hero-slide ${isActive ? 'active' : ''}`}
            >
              <div 
                className="hero-slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-slide-overlay"></div>
              </div>
              
              <div className="container hero-slide-content-wrapper">
                <div className="hero-slide-content">
                  <span className="hero-slide-badge">HS HOUSE — Nhà lắp ghép chuyên nghiệp</span>
                  <h1 className="heading-1 hero-slide-title">{slide.title}</h1>
                  <p className="body-lg hero-slide-desc">{slide.subtitle}</p>
                  
                  <div className="hero-slide-actions">
                    <Link to={slide.primaryCta.link} className="btn btn-lime btn-lg hero-btn-primary">
                      {slide.primaryCta.label}
                      <ArrowRight size={18} weight="bold" />
                    </Link>
                    <Link to={slide.secondaryCta.link} className="btn btn-lg hero-btn-glass">
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous slide">
          <CaretLeft size={24} weight="bold" />
        </button>
        <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next slide">
          <CaretRight size={24} weight="bold" />
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

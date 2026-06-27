import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Lightning,
  CurrencyDollar,
  PaintBrush,
  ShieldCheck,
  ClipboardText,
  ChatCircleDots,
  PencilRuler,
  Receipt,
  Factory,
  Handshake,
  ArrowRight,
  Check,
  Timer,
  Buildings,
  Percent,
  CalendarCheck,
  DownloadSimple,
  Users,
  Certificate,
  Wrench,
} from '@phosphor-icons/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { HouseModelCard } from '../components/HouseModelCard';
import { MaterialCard } from '../components/MaterialCard';
import { ProjectCard } from '../components/ProjectCard';
import { PriceCard } from '../components/PriceCard';
import { BlogCard } from '../components/BlogCard';
import { CTA } from '../components/CTA';
import { houseModels } from '../data/houseModels';
import { materials, materialFAQ } from '../data/materials';
import { projects } from '../data/projects';
import { pricingPackages } from '../data/pricing';
import { blogPosts } from '../data/blogPosts';
import './HomePage.css';

const stats = [
  { icon: Timer, value: '5+', label: 'Năm kinh nghiệm' },
  { icon: Buildings, value: '100+', label: 'Công trình' },
  { icon: Percent, value: '30%', label: 'Tiết kiệm chi phí' },
  { icon: CalendarCheck, value: '15-45', label: 'Ngày thi công' },
];

const whyUs = [
  {
    icon: Lightning,
    title: 'Thi công nhanh',
    desc: 'Quy trình sản xuất công nghiệp, lắp dựng tại công trường chỉ từ 15 ngày.',
  },
  {
    icon: CurrencyDollar,
    title: 'Chi phí tối ưu',
    desc: 'Tiết kiệm 30% so với xây dựng truyền thống nhờ chuẩn hóa vật liệu và quy trình.',
  },
  {
    icon: PaintBrush,
    title: 'Thiết kế linh hoạt',
    desc: 'Tùy biến mẫu nhà theo nhu cầu sử dụng, diện tích và phong cách riêng.',
  },
  {
    icon: ShieldCheck,
    title: 'Vật liệu bền đẹp',
    desc: 'Sử dụng khung thép mạ kẽm, panel cách nhiệt, cemboard chống ẩm đạt chuẩn.',
  },
];

const processSteps = [
  { icon: ClipboardText, title: 'Khảo sát nhu cầu', desc: 'Tìm hiểu yêu cầu, ngân sách và vị trí công trình.' },
  { icon: ChatCircleDots, title: 'Tư vấn mẫu nhà', desc: 'Đề xuất mẫu nhà phù hợp với nhu cầu sử dụng.' },
  { icon: PencilRuler, title: 'Thiết kế bản vẽ', desc: 'Hoàn thiện bản vẽ kỹ thuật và 3D phối cảnh.' },
  { icon: Receipt, title: 'Báo giá chi tiết', desc: 'Báo giá minh bạch theo từng hạng mục.' },
  { icon: Factory, title: 'Sản xuất cấu kiện', desc: 'Gia công cấu kiện tại nhà máy theo bản vẽ.' },
  { icon: Handshake, title: 'Lắp dựng & bàn giao', desc: 'Vận chuyển, lắp dựng và bàn giao công trình.' },
];

export function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState(0);

  return (
    <div className="home-page">
      {/* === HERO === */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <h1 className="heading-1 hero-title">
              Nhà lắp ghép hiện đại
              <span className="hero-title-accent"> Thi công nhanh, tối ưu chi phí</span>
            </h1>
            <p className="body-lg hero-desc">
              HS HOUSE cung cấp giải pháp nhà lắp ghép, homestay, văn phòng
              và công trình dân dụng với thiết kế linh hoạt, vật liệu bền vững.
            </p>
            <div className="hero-actions">
              <Link to="/mau-nha" className="btn btn-primary btn-lg">
                Xem mẫu nhà
                <ArrowRight size={18} weight="bold" />
              </Link>
              <Link to="/lien-he" className="btn btn-secondary btn-lg">
                Nhận tư vấn
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-house.png" alt="Nhà lắp ghép hiện đại HS HOUSE" />
          </div>
        </div>
        <div className="hero-stats">
          <div className="container hero-stats-inner">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <stat.icon size={24} weight="duotone" className="hero-stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY US === */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Vì sao chọn HS HOUSE?"
            subtitle="Hơn 100 công trình hoàn thành, khách hàng tin tưởng chọn chúng tôi vì chất lượng và cam kết."
          />
          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div className="why-us-card">
                  <div className={`icon-box${i % 2 === 1 ? ' icon-box-lime' : ''}`}>
                    <item.icon size={28} weight="duotone" />
                  </div>
                  <h3 className="heading-4">{item.title}</h3>
                  <p className="body-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === HOUSE MODELS === */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Mẫu nhà"
            title="Mẫu nhà lắp ghép nổi bật"
            subtitle="Đa dạng mẫu thiết kế cho mọi nhu cầu, từ nhà ở đến công trình thương mại."
          />
          <div className="grid grid-3 home-models-grid">
            {houseModels.slice(0, 6).map((model, i) => (
              <ScrollReveal key={model.id} delay={i + 1}>
                <HouseModelCard model={model} />
              </ScrollReveal>
            ))}
          </div>
          <div className="section-action">
            <Link to="/mau-nha" className="btn btn-secondary">
              Xem tất cả mẫu nhà
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* === MATERIALS === */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Vật liệu sử dụng"
            subtitle="Chúng tôi sử dụng vật liệu đạt chuẩn, đảm bảo chất lượng và tuổi thọ công trình."
          />
          <div className="grid grid-4 home-materials-grid">
            {materials.slice(0, 8).map((mat, i) => (
              <ScrollReveal key={mat.id} delay={i + 1}>
                <MaterialCard material={mat} />
              </ScrollReveal>
            ))}
          </div>
          <div className="section-action">
            <Link to="/vat-lieu" className="btn btn-ghost">
              Tìm hiểu thêm về vật liệu
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* === MATERIAL FAQ === */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Giới thiệu cấu tạo vật liệu"
            subtitle="Hiểu rõ đặc tính từng loại vật liệu để lựa chọn phù hợp với công trình."
          />
          <div className="faq-layout">
            <div className="faq-tabs">
              {materialFAQ.map((item, i) => (
                <button
                  key={i}
                  className={`faq-tab${activeFAQ === i ? ' faq-tab-active' : ''}`}
                  onClick={() => setActiveFAQ(i)}
                >
                  {item.question}
                </button>
              ))}
            </div>
            <ScrollReveal className="faq-content" key={activeFAQ}>
              <h3 className="heading-3">{materialFAQ[activeFAQ]?.question}</h3>
              <p className="body-base" style={{ marginTop: 'var(--space-4)', lineHeight: 1.8 }}>
                {materialFAQ[activeFAQ]?.answer}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className="section section-navy">
        <div className="container">
          <SectionTitle
            title="Quy trình thi công"
            subtitle="6 bước chuyên nghiệp, minh bạch từ khảo sát đến bàn giao."
            light
          />
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i + 1}>
                <div className="process-step">
                  <div className="process-step-number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="process-step-icon">
                    <step.icon size={28} weight="duotone" />
                  </div>
                  <h4 className="heading-4">{step.title}</h4>
                  <p className="body-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === PROJECTS === */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Dự án"
            title="Dự án đã thi công"
            subtitle="Những công trình tiêu biểu HS HOUSE đã thực hiện trên toàn quốc."
          />
          <div className="grid grid-3">
            {projects.slice(0, 6).map((project, i) => (
              <ScrollReveal key={project.id} delay={i + 1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
          <div className="section-action">
            <Link to="/du-an" className="btn btn-secondary">
              Xem tất cả dự án
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* === PRICING === */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Báo giá tham khảo"
            subtitle="Chi phí tham khảo theo từng gói, giúp bạn dễ dàng lên kế hoạch ngân sách."
          />
          <div className="grid grid-3 pricing-grid">
            {pricingPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i + 1}>
                <PriceCard pkg={pkg} />
              </ScrollReveal>
            ))}
          </div>
          <p className="pricing-note body-sm">
            Giá chỉ mang tính tham khảo, chi phí thực tế phụ thuộc diện tích,
            vật liệu, vị trí và yêu cầu hoàn thiện.
          </p>
        </div>
      </section>

      {/* === COMPANY PROFILE === */}
      <section className="section">
        <div className="container">
          <div className="profile-block">
            <div className="profile-content">
              <h2 className="heading-2">Hồ sơ năng lực HS HOUSE</h2>
              <p className="body-lg" style={{ marginTop: 'var(--space-4)' }}>
                Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm cùng hệ thống
                nhà máy sản xuất hiện đại, HS HOUSE tự tin mang đến những công trình
                chất lượng, đúng tiến độ và tối ưu chi phí.
              </p>
              <div className="profile-stats">
                <div className="profile-stat">
                  <Users size={24} weight="duotone" />
                  <div>
                    <div className="stat-value" style={{ fontSize: 'var(--font-size-2xl)' }}>70+</div>
                    <div className="stat-label">Nhân sự</div>
                  </div>
                </div>
                <div className="profile-stat">
                  <Certificate size={24} weight="duotone" />
                  <div>
                    <div className="stat-value" style={{ fontSize: 'var(--font-size-2xl)' }}>5+</div>
                    <div className="stat-label">Chứng nhận</div>
                  </div>
                </div>
                <div className="profile-stat">
                  <Wrench size={24} weight="duotone" />
                  <div>
                    <div className="stat-value" style={{ fontSize: 'var(--font-size-2xl)' }}>100+</div>
                    <div className="stat-label">Công trình</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
                <Link to="/ho-so-nang-luc" className="btn btn-primary">
                  Xem chi tiết
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <button className="btn btn-secondary" onClick={() => alert('Tính năng tải hồ sơ sẽ được cập nhật.')}>
                  <DownloadSimple size={16} weight="bold" />
                  Tải hồ sơ năng lực
                </button>
              </div>
            </div>
            <div className="profile-image">
              <img src="/images/warehouse-project.png" alt="Năng lực thi công HS HOUSE" />
            </div>
          </div>
        </div>
      </section>

      {/* === BLOG === */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Blog & Tư vấn"
            subtitle="Kiến thức hữu ích về nhà lắp ghép, vật liệu và chi phí xây dựng."
          />
          <div className="grid grid-3">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i + 1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
          <div className="section-action">
            <Link to="/blog" className="btn btn-ghost">
              Đọc thêm bài viết
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <CTA
        title="Bạn đang cần một giải pháp nhà lắp ghép tối ưu?"
        description="Để lại thông tin, HS HOUSE sẽ tư vấn phương án phù hợp với nhu cầu, ngân sách và diện tích thực tế."
        primaryBtn="Liên hệ tư vấn"
        secondaryBtn="Xem dự án"
        variant="navy"
      />
    </div>
  );
}

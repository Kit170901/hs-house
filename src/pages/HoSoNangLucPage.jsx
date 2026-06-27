import * as PhosphorIcons from '@phosphor-icons/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { CTA } from '../components/CTA';
import { companyInfo, capabilities, milestones, teamStats } from '../data/companyProfile';
import './HoSoNangLucPage.css';

export function HoSoNangLucPage() {
  const statItems = [
    { label: 'Kỹ sư & Kiến trúc sư', value: teamStats.engineers + teamStats.architects + '+', icon: 'Users' },
    { label: 'Công nhân viên', value: teamStats.workers + '+', icon: 'HardHat' },
    { label: 'Dự án hoàn thành', value: teamStats.projects + '+', icon: 'Buildings' },
    { label: 'Năm hoạt động', value: new Date().getFullYear() - companyInfo.founding + '+', icon: 'Timer' }
  ];

  return (
    <div className="page-hosonangluc">
      {/* Hero */}
      <section className="page-hero profile-hero">
        <div className="container">
          <div className="profile-hero-content">
            <h1 className="heading-1 profile-title">{companyInfo.name}</h1>
            <div className="profile-slogan">{companyInfo.slogan}</div>
            <p className="body-lg profile-desc">
              Thành lập từ năm {companyInfo.founding}, chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực thiết kế và thi công nhà lắp ghép chất lượng cao.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {statItems.map((stat, i) => {
              const Icon = PhosphorIcons[stat.icon] || PhosphorIcons.Star;
              return (
                <ScrollReveal key={i} delay={i + 1}>
                  <div className="stat-card">
                    <Icon size={32} weight="duotone" className="stat-icon text-lime" />
                    <div className="stat-value text-navy">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container about-container">
          <div className="about-image-wrapper">
            <img src="/images/warehouse-project.png" alt="Về chúng tôi" className="about-image" />
          </div>
          <div className="about-content">
            <SectionTitle
              title="Về chúng tôi"
              subtitle="Khát vọng mang đến không gian sống và làm việc hoàn hảo."
              centered={false}
            />
            {companyInfo.description.split('\n\n').map((para, i) => (
              <p key={i} className="body-base" style={{ marginBottom: 'var(--space-4)' }}>
                {para}
              </p>
            ))}
            <button className="btn btn-secondary" style={{ marginTop: 'var(--space-4)' }} onClick={() => alert('Đang tải hồ sơ năng lực (PDF)...')}>
              <PhosphorIcons.DownloadSimple size={18} weight="bold" />
              Tải hồ sơ năng lực
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            title="Năng lực cốt lõi"
            subtitle="Đội ngũ chuyên nghiệp và hệ thống nhà máy hiện đại đáp ứng mọi yêu cầu khắt khe."
          />
          <div className="grid grid-2 capabilities-grid">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} delay={(i % 2) + 1}>
                <div className="capability-card">
                  <h3 className="heading-3 capability-title">{cap.title}</h3>
                  <p className="body-base capability-desc">{cap.description}</p>
                  <ul className="capability-stats">
                    {cap.stats.map((stat, idx) => (
                      <li key={idx}>
                        <PhosphorIcons.CheckCircle size={20} weight="fill" className="text-lime" />
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Chặng đường phát triển"
            subtitle="Những cột mốc quan trọng đánh dấu sự trưởng thành và vươn xa của HS HOUSE."
          />
          <div className="timeline">
            {milestones.map((ms, i) => (
              <ScrollReveal key={i} delay={i % 2 === 0 ? 1 : 2}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <div className="timeline-year">{ms.year}</div>
                    <h4 className="heading-4">{ms.title}</h4>
                    <p className="body-sm">{ms.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Hợp tác cùng HS HOUSE"
        description="Chúng tôi luôn tìm kiếm những đối tác chiến lược để cùng kiến tạo những giá trị bền vững."
        primaryBtn="Liên hệ hợp tác"
        variant="navy"
      />
    </div>
  );
}

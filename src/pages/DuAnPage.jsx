import { useState, useMemo } from 'react';
import { X, MapPin, ArrowsOut, Clock, CalendarCheck } from '@phosphor-icons/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { CTA } from '../components/CTA';
import { projects } from '../data/projects';
import './DuAnPage.css';

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'nha-o', label: 'Nhà ở' },
  { id: 'homestay', label: 'Homestay' },
  { id: 'van-phong', label: 'Văn phòng' },
  { id: 'quan-cafe', label: 'Quán cafe' },
  { id: 'nha-xuong', label: 'Nhà xưởng' }
];

export function DuAnPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="page-duan">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="heading-1 page-hero-title">Dự án đã thi công</h1>
            <p className="body-lg page-hero-desc">
              Hàng trăm công trình chất lượng được chúng tôi kiến tạo trên toàn quốc.
            </p>
          </div>
        </div>
      </section>

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

          <div className="grid grid-3 projects-grid">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={(i % 3) + 1}>
                <div onClick={() => handleOpenModal(project)} className="project-card-wrapper">
                  <ProjectCard project={project} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p className="body-lg">Không có dự án nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Bạn đã sẵn sàng xây dựng công trình của mình?"
        description="Hãy liên hệ để nhận tư vấn và báo giá chi tiết nhất."
        primaryBtn="Gửi yêu cầu"
        variant="alt"
      />

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <X size={24} />
            </button>
            <div className="modal-image-container">
              <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
            </div>
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="heading-3">{selectedProject.name}</h2>
                <div className="modal-badge">{categories.find(c => c.id === selectedProject.category)?.label}</div>
              </div>
              
              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <MapPin size={20} weight="duotone" className="text-navy" />
                  <div>
                    <span className="modal-meta-label">Địa điểm</span>
                    <span className="modal-meta-value">{selectedProject.location}</span>
                  </div>
                </div>
                <div className="modal-meta-item">
                  <ArrowsOut size={20} weight="duotone" className="text-navy" />
                  <div>
                    <span className="modal-meta-label">Diện tích</span>
                    <span className="modal-meta-value">{selectedProject.area}</span>
                  </div>
                </div>
                <div className="modal-meta-item">
                  <Clock size={20} weight="duotone" className="text-navy" />
                  <div>
                    <span className="modal-meta-label">Thời gian thi công</span>
                    <span className="modal-meta-value">{selectedProject.duration}</span>
                  </div>
                </div>
                <div className="modal-meta-item">
                  <CalendarCheck size={20} weight="duotone" className="text-navy" />
                  <div>
                    <span className="modal-meta-label">Năm hoàn thành</span>
                    <span className="modal-meta-value">{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              <div className="divider" style={{ margin: 'var(--space-6) 0' }}></div>
              <h4 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Mô tả dự án</h4>
              <p className="body-base">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

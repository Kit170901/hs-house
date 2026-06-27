import { MapPin, Ruler, Clock } from '@phosphor-icons/react';
import './ProjectCard.css';

export function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="project-card__image-wrap">
        <img
          className="card-image"
          src={project.image}
          alt={project.name}
          loading="lazy"
        />
        <span className="project-card__location badge badge-navy">
          <MapPin size={12} weight="fill" />
          {project.location}
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p className="card-desc">{project.description}</p>
        <div className="card-meta">
          <span className="card-meta-item">
            <Ruler size={14} />
            {project.area}
          </span>
          <span className="card-meta-item">
            <Clock size={14} />
            {project.duration}
          </span>
        </div>
      </div>
    </div>
  );
}

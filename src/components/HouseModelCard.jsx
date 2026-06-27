import { ArrowRight } from '@phosphor-icons/react';

export function HouseModelCard({ model }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={model.image}
        alt={model.name}
        loading="lazy"
      />
      <div className="card-body">
        <span className="card-tag">{model.categoryLabel}</span>
        <h3 className="card-title">{model.name}</h3>
        <p className="card-desc">{model.description}</p>
        <div className="card-meta">
          <span className="card-meta-item">{model.area}</span>
          <span className="card-meta-item">{model.price}</span>
        </div>
        <button className="btn btn-ghost" style={{ marginTop: 'var(--space-4)' }}>
          Xem chi tiết
          <ArrowRight size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}

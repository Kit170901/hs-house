import { Check, Star } from '@phosphor-icons/react';
import './PriceCard.css';

export function PriceCard({ pkg }) {
  return (
    <div className={`card price-card${pkg.popular ? ' price-card--popular' : ''}`}>
      {pkg.popular && (
        <div className="price-card__badge">
          <Star size={14} weight="fill" />
          Phổ biến nhất
        </div>
      )}
      <div className="card-body">
        <h3 className="heading-4">{pkg.name}</h3>
        <p className="card-desc">{pkg.description}</p>
        <div className="price-card__price">
          <span className="price-card__amount">{pkg.price}</span>
          <span className="price-card__unit">{pkg.unit}</span>
        </div>
        <ul className="price-card__features">
          {pkg.features.map((feature) => (
            <li key={feature} className="price-card__feature">
              <Check size={16} weight="bold" className="price-card__check" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          className={`btn btn-lg ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
          style={{ width: '100%' }}
        >
          Liên hệ tư vấn
        </button>
      </div>
    </div>
  );
}

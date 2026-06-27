import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import './CTA.css';

export function CTA({ title, description, primaryBtn, secondaryBtn, variant = 'navy' }) {
  const isNavy = variant === 'navy';

  return (
    <section className={`cta-section ${isNavy ? 'section-navy' : 'section-alt'}`}>
      <div className="container cta-inner">
        <h2 className={`heading-2 ${isNavy ? '' : 'text-navy'}`}>{title}</h2>
        <p className={`body-lg cta-desc ${isNavy ? '' : ''}`}>{description}</p>
        <div className="cta-actions">
          <Link
            to="/lien-he"
            className={`btn btn-lg ${isNavy ? 'btn-lime' : 'btn-primary'}`}
          >
            {primaryBtn}
            <ArrowRight size={18} weight="bold" />
          </Link>
          {secondaryBtn && (
            <Link
              to="/du-an"
              className={`btn btn-lg ${isNavy ? 'btn-secondary cta-btn-outline' : 'btn-secondary'}`}
            >
              {secondaryBtn}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

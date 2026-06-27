import {
  Cube,
  Stack,
  BoundingBox,
  Wall,
  Square,
  SplitVertical,
  House,
  Door,
} from '@phosphor-icons/react';

const iconMap = {
  Cube,
  Stack,
  BoundingBox,
  Wall,
  Square,
  SplitVertical,
  House,
  Door,
};

export function MaterialCard({ material }) {
  const IconComponent = iconMap[material.icon];

  return (
    <div className="card">
      <div className="card-body">
        <div className="icon-box">
          {IconComponent && (
            <IconComponent size={28} weight="duotone" />
          )}
        </div>
        <h3 className="card-title" style={{ marginTop: 'var(--space-4)' }}>
          {material.name}
        </h3>
        <p className="card-desc">{material.shortDesc}</p>
      </div>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  const wrapperClass = centered ? 'section-header' : 'section-header-left';

  return (
    <div className={wrapperClass}>
      {eyebrow && (
        <p className="section-eyebrow">{eyebrow}</p>
      )}
      <h2 className={`heading-2${light ? ' text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle${light ? ' text-white' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  emergency?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = 'center', emergency = false }: SectionHeaderProps) {
  return (
    <div className="section-header" style={align === 'left' ? { textAlign: 'left', margin: '0 0 3rem' } : undefined}>
      {eyebrow && (
        <span className="eyebrow" style={emergency ? { color: 'var(--color-emergency)' } : undefined}>
          {eyebrow}
        </span>
      )}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p>{description}</p>}
    </div>
  );
}

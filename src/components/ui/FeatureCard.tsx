interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  emergency?: boolean;
}

export function FeatureCard({ icon, title, description, emergency = false }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className={`feature-card__icon ${emergency ? 'feature-card__icon--emergency' : 'feature-card__icon--blue'}`}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

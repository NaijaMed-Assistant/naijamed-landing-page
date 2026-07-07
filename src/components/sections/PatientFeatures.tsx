import { SectionHeader } from '../ui/SectionHeader';
import { FeatureCard } from '../ui/FeatureCard';

const PATIENT_FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Chat with an AI Health Assistant',
    description: 'Ask any health-related question at any time. Receive clear, evidence-based guidance in plain language — no medical jargon required.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'AI-Guided Symptom Checker',
    description: 'Describe your symptoms through a structured, conversational flow. The system helps assess severity and suggests appropriate next steps.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Understand Your Next Steps',
    description: 'Receive clear triage outcomes — whether to rest at home, consult a doctor, or seek emergency care — explained in language anyone can understand.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Emergency-Aware Prompts',
    description: 'If your symptoms may indicate an urgent condition, the app will alert you promptly and guide you toward seeking immediate care without delay.',
    emergency: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.91-1.04a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Connect with a Doctor',
    description: "When a doctor's attention is needed, the app connects you directly. Communicate your concerns through structured, organized chat.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Organized Health Records',
    description: 'Keep all your symptom check results, health conversations, and medical guidance organized in one place — accessible whenever you need it.',
  },
];

export function PatientFeatures() {
  return (
    <section id="patients" className="section section--blue" aria-labelledby="patient-features-heading">
      <div className="container">
        <SectionHeader
          eyebrow="For Patients"
          title="Health Guidance That Meets You Where You Are"
          description="Whether you're unsure about a symptom, need to speak with a doctor, or want general health advice — Naijamed supports you at every step."
        />

        <div className="features-grid" role="list">
          {PATIENT_FEATURES.map((feat, i) => (
            <div key={i} role="listitem">
              <FeatureCard
                icon={feat.icon}
                title={feat.title}
                description={feat.description}
                emergency={feat.emergency}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

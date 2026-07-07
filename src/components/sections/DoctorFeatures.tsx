import { SectionHeader } from '../ui/SectionHeader';
import { FeatureCard } from '../ui/FeatureCard';

const DOCTOR_FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: 'AI Clinical Decision Support',
    description: 'Query the AI assistant for drug information, treatment protocols, differential diagnoses, and clinical references — instantly, at the point of care.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'AI-Generated Patient Summaries',
    description: 'Receive structured, AI-generated summaries of patient symptoms and triage results — so you understand the case clearly before the conversation begins.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Structured Case Management',
    description: 'Manage assigned patient cases by severity. Review cases prioritized by urgency — emergency and severe cases surface at the top.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Direct Patient Communication',
    description: 'Chat directly with patients through a structured interface. Patient history and AI summaries are visible within the conversation for full context.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Prescription Creation',
    description: 'Create and send prescriptions directly to patients within the app. All prescriptions are saved to the patient record automatically.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Consultation History & Case Log',
    description: 'Access a complete chronological history of patient interactions, diagnoses, notes, and prescriptions — supporting continuity of care across consultations.',
  },
];

export function DoctorFeatures() {
  return (
    <section id="doctors" className="section" aria-labelledby="doctor-features-heading">
      <div className="container">
        <SectionHeader
          eyebrow="For Doctors"
          title="AI-Assisted Tools That Support — Not Replace — Clinical Judgment"
          description="Naijamed gives health workers faster access to patient context, clinical references, and communication tools — so they can focus on what matters most."
        />

        <div className="features-grid" role="list">
          {DOCTOR_FEATURES.map((feat, i) => (
            <div key={i} role="listitem">
              <FeatureCard
                icon={feat.icon}
                title={feat.title}
                description={feat.description}
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-10)', padding: 'var(--space-6) var(--space-8)', background: 'var(--blue-50)', border: '1px solid var(--blue-200)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--color-text)' }}>Clinical Disclaimer:</strong> Naijamed AI provides decision support only. It does not make final clinical decisions. All diagnosis, prescription, and treatment decisions remain the responsibility of the licensed health professional.
          </p>
        </div>
      </div>
    </section>
  );
}

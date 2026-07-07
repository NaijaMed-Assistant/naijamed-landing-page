import { SectionHeader } from '../ui/SectionHeader';

const SECURITY_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Encrypted Data Transmission',
    description: 'All health data shared between users and the platform is transmitted using industry-standard encryption protocols — designed to prevent unauthorized interception.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Role-Based Access Control',
    description: 'Patient data is only accessible to the treating doctor within the care relationship. Unauthorized users — including other patients — cannot access your health information.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Responsible AI Design',
    description: 'The AI is designed to assist, not decide. It surfaces guidance and information to support human judgment — with conservative logic that defaults to caution when uncertain.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Privacy-Conscious Architecture',
    description: 'The platform is built with user privacy in mind. Health records are stored securely with access restricted to the user and their authorized care providers.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Clear Medical Disclaimers',
    description: 'Every AI response includes appropriate context reminding users that guidance is informational — not a substitute for professional medical assessment, diagnosis, or treatment.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Data Protection Readiness',
    description: 'Naijamed is designed with data protection principles in mind, aligning with responsible data handling practices appropriate for health technology platforms.',
  },
];

export function Security() {
  return (
    <section id="security" className="section section--subtle" aria-labelledby="security-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Privacy & Security"
          title="Your Health Data Deserves the Highest Standard of Care"
          description="Naijamed is built with privacy, security, and responsible AI design at its core — because trust is the foundation of every health interaction."
        />

        <div className="security-grid" role="list">
          {SECURITY_ITEMS.map((item, i) => (
            <div key={i} className="security-item" role="listitem">
              <div className="security-item__icon" aria-hidden="true">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="security-disclaimer" role="note">
          <p>
            <strong>Security Note:</strong> Naijamed is designed with security and privacy in mind.
            We implement encryption, role-based access, and responsible data handling practices.
            The platform is not yet certified under specific regulatory frameworks such as HIPAA, NDPR, or ISO 27001.
            Users should consult with us directly regarding institutional compliance requirements.
          </p>
        </div> */}
      </div>
    </section>
  );
}

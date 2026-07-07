import { SectionHeader } from '../ui/SectionHeader';

const SOLUTION_CARDS = [
  {
    bg: 'var(--blue-100)',
    color: 'var(--color-primary)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'AI Health Assistant',
    desc: 'Conversational AI that answers patient health questions and supports doctor workflows',
  },
  {
    bg: '#dcfce7',
    color: 'var(--color-success)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'Symptom Triage Engine',
    desc: 'Structured assessment classifying symptoms as Mild, Moderate, Severe, or Emergency',
  },
  {
    bg: '#fef3c7',
    color: 'var(--color-warning)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Doctor-Patient Communication',
    desc: 'Structured chat and case management connecting patients with their care providers',
  },
  {
    bg: 'var(--red-50)',
    color: 'var(--color-emergency)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Emergency Detection',
    desc: 'Automatic recognition of urgent warning signs with immediate escalation guidance',
  },
];

const FEATURES = [
  'AI-powered symptom assessment and health Q&A',
  'Triage classification from mild to emergency severity',
  'Direct patient-to-doctor messaging and case review',
  'AI decision support for health workers during consultations',
  'Emergency-aware alerts that guide users toward appropriate care',
  'Organized health history accessible to both patients and doctors',
];

export function Solution() {
  return (
    <section id="features" className="section" aria-labelledby="solution-heading">
      <div className="container">
        <div className="solution-layout">
          <div className="solution-visual" aria-hidden="true">
            {SOLUTION_CARDS.map((card, i) => (
              <div key={i} className="solution-card">
                <div className="solution-card__icon" style={{ background: card.bg, color: card.color }}>
                  {card.icon}
                </div>
                <div>
                  <h5>{card.title}</h5>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="solution-content">
            <SectionHeader
              eyebrow="The Solution"
              title="One Connected Platform for the Entire Care Journey"
              align="left"
            />
            <p>
              Naijamed Assistant brings together AI health guidance, structured symptom assessment,
              direct doctor communication, and emergency-aware support — all designed around
              Nigeria's specific healthcare context and patient needs.
            </p>

            <ul className="solution-features" aria-label="Platform capabilities">
              {FEATURES.map((feat, i) => (
                <li key={i} className="solution-feature-item">
                  <div className="solution-feature-item__check" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>{feat}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

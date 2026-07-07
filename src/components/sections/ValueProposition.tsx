import { SectionHeader } from '../ui/SectionHeader';

const VALUES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Wider Access to Health Guidance',
    description: 'Naijamed brings reliable health support to patients in urban centres, rural communities, and underserved areas — reducing the gap created by geographic and economic barriers.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Clearer Patient Communication',
    description: 'Structured symptom input and AI-generated summaries help patients articulate their concerns clearly — giving doctors better context before the conversation starts.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'More Efficient Doctor Workflows',
    description: 'AI-assisted case summaries, structured triage results, and clinical decision support reduce the time doctors spend on information gathering — freeing them for higher-value care.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Faster Emergency Escalation',
    description: 'Early detection of emergency indicators helps users seek care before conditions become life-threatening. Every second of early action matters in critical situations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Connected Digital Health Experience',
    description: 'A unified platform that links patient symptom data, AI assessment, doctor communication, and health history — creating continuity across the care journey.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Deployable for Facilities and Teams',
    description: 'Suitable for individual practitioners, private clinics, primary healthcare centres, hospitals, and health startups looking to build a connected digital care layer.',
  },
];

export function ValueProposition() {
  return (
    <section id="value" className="section" aria-labelledby="value-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Why Naijamed"
          title="Real Value for Patients, Doctors, and the Healthcare System"
          description="Naijamed is not just an app — it is an infrastructure for more accessible, more connected, and more responsive healthcare in Nigeria."
        />

        <div className="value-grid" role="list">
          {VALUES.map((item, i) => (
            <div key={i} className="value-card" role="listitem">
              <div className="value-card__icon" aria-hidden="true">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

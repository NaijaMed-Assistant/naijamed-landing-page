const TRIAGE_LEVELS = [
  { label: 'Mild — Rest at home, monitor symptoms', color: '#16a34a', dot: '#22c55e', className: 'triage--mild' },
  { label: 'Moderate — Consult a doctor soon', color: '#92400e', dot: '#f59e0b', className: 'triage--moderate' },
  { label: 'Severe — Seek urgent medical attention', color: '#9a3412', dot: '#f97316', className: 'triage--severe' },
  { label: 'Emergency — Seek immediate emergency care', color: '#b91c1c', dot: '#ef4444', className: 'triage--emergency' },
];

const STEPS = [
  {
    bg: 'var(--red-50)',
    color: 'var(--color-emergency)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Continuous Symptom Monitoring',
    desc: 'As the patient describes their symptoms, the AI evaluates each response for signs that may indicate urgency.',
  },
  {
    bg: '#fff7ed',
    color: '#c2410c',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Immediate Emergency Alert',
    desc: 'When potential emergency indicators are detected, the app surfaces a clear, prominent alert — prompting the user to act without delay.',
  },
  {
    bg: 'var(--red-50)',
    color: 'var(--color-emergency)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.91-1.04a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Guided Emergency Response',
    desc: 'The user is shown relevant emergency contact information, including state emergency lines or hospital ambulance numbers where applicable.',
  },
  {
    bg: 'var(--blue-100)',
    color: 'var(--color-primary)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Safer Next Steps While Waiting',
    desc: 'After escalation, users receive clear, simple instructions on what to do while awaiting emergency assistance — reducing panic and improving outcomes.',
  },
];

export function EmergencySection() {
  return (
    <section id="emergency" className="emergency-section" aria-labelledby="emergency-heading">
      <div className="container">
        <div className="emergency-layout">
          <div className="emergency-content">
            <div className="emergency-content eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-emergency)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-4)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Emergency Awareness
            </div>

            <h2 id="emergency-heading">
              When It Matters Most,<br />
              <em style={{ color: 'var(--color-emergency)', fontStyle: 'normal' }}>Every Second Counts</em>
            </h2>

            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)', lineHeight: 1.7, marginTop: 'var(--space-6)' }}>
              Naijamed continuously evaluates symptom input for possible emergency indicators.
              When serious signs are detected, the app acts immediately — alerting users and
              guiding them toward the right emergency response.
            </p>

            <div className="emergency-steps" role="list">
              {STEPS.map((step, i) => (
                <div key={i} className="emergency-step" role="listitem">
                  <div className="emergency-step__icon" style={{ background: step.bg, color: step.color }}>
                    {step.icon}
                  </div>
                  <div>
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="emergency-disclaimer" role="note">
              <svg className="emergency-disclaimer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <p>
                <strong>Important:</strong> Naijamed's emergency detection is an awareness and guidance tool.
                It is not a substitute for emergency medical services. In a life-threatening situation,
                call your local emergency number immediately.
              </p>
            </div>
          </div>

          <div className="emergency-visual" aria-hidden="true">
            <div className="emergency-alert-card">
              <div className="emergency-alert-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <div>
                  <h4>Triage Classification System</h4>
                  <p>AI-powered severity assessment</p>
                </div>
              </div>
              <div className="emergency-alert-body">
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)' }}>
                  Every symptom check produces a clear severity classification:
                </p>
                {TRIAGE_LEVELS.map((level, i) => (
                  <div key={i} className={`emergency-triage-item ${level.className}`}>
                    <div className="triage-dot" style={{ background: level.dot }} />
                    {level.label}
                  </div>
                ))}
                <div style={{ marginTop: 'var(--space-5)', padding: 'var(--space-4)', background: 'var(--red-50)', borderRadius: 'var(--radius)', border: '1px solid var(--red-100)' }}>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--red-700)', lineHeight: 1.6 }}>
                    When symptoms indicate possible emergency, the app immediately surfaces escalation guidance and relevant emergency contact information.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-bg-blue)', border: '1px solid var(--color-primary-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5) var(--space-6)' }}>
              <h5 style={{ marginBottom: 'var(--space-3)', color: 'var(--color-text)' }}>Conservative by Design</h5>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                Naijamed's AI is built to classify conservatively — when symptoms are ambiguous, the system defaults to recommending professional evaluation rather than assuming a mild outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

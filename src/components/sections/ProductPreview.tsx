import { SectionHeader } from '../ui/SectionHeader';

/*
  Polished placeholder screens — replace screen content with actual screenshots
  by swapping the .preview-card__screen content with <img> elements.
*/

function PatientAIScreen() {
  return (
    <div className="preview-card__screen" style={{ background: 'var(--slate-50)' }}>
      <div className="preview-ui">
        <div className="preview-ui-header c-blue-header" />
        <div className="preview-ui-bubble-left c-blue-msg" />
        <div className="preview-ui-bubble-right c-user-msg" />
        <div className="preview-ui-bubble-left c-blue-msg" style={{ width: '80%' }} />
        <div className="preview-ui-bubble-right c-user-msg" style={{ width: '60%' }} />
        <div className="preview-ui-bubble-left c-blue-msg" style={{ width: '65%' }} />
        <div style={{ marginTop: 'auto', height: '24px', borderRadius: '8px', background: 'var(--slate-200)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '6px' }}>
          <div style={{ flex: 1, height: '4px', background: 'var(--slate-300)', borderRadius: '2px' }} />
          <div style={{ width: '16px', height: '16px', background: 'var(--color-primary)', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  );
}

function SymptomCheckerScreen() {
  return (
    <div className="preview-card__screen" style={{ background: 'var(--slate-50)' }}>
      <div className="preview-ui">
        <div className="preview-ui-header" style={{ background: 'var(--blue-800)', borderRadius: '6px', height: '28px' }} />
        <div style={{ background: 'var(--blue-50)', border: '1px solid var(--blue-100)', borderRadius: '8px', padding: '8px' }}>
          <div className="preview-ui-bar c-slate-200" style={{ width: '90%', marginBottom: '4px' }} />
          <div className="preview-ui-bar c-slate-200" style={{ width: '70%', marginBottom: '4px' }} />
          <div className="preview-ui-bar c-slate-200" style={{ width: '50%' }} />
        </div>
        <div className="preview-ui-triage c-green" style={{ fontSize: '9px', color: 'var(--green-700)', fontWeight: 600 }}>
          Mild — Home Care Recommended
        </div>
        <div className="preview-ui-triage c-amber" style={{ fontSize: '9px', color: '#92400e', fontWeight: 600 }}>
          Moderate — Consult Doctor
        </div>
        <div className="preview-ui-triage" style={{ background: 'var(--red-50)', border: '1px solid var(--red-100)', fontSize: '9px', color: 'var(--red-700)', fontWeight: 600 }}>
          Emergency — Seek Immediate Care
        </div>
      </div>
    </div>
  );
}

function DoctorAIScreen() {
  return (
    <div className="preview-card__screen" style={{ background: 'var(--slate-50)' }}>
      <div className="preview-ui">
        <div className="preview-ui-header c-doctor-header" />
        <div style={{ background: 'var(--blue-50)', border: '1px solid var(--blue-200)', borderRadius: '8px', padding: '8px' }}>
          <div className="preview-ui-bar c-blue-200" style={{ width: '80%', marginBottom: '4px' }} />
          <div className="preview-ui-bar c-blue-200" style={{ width: '60%', marginBottom: '4px' }} />
          <div className="preview-ui-bar c-blue-200" style={{ width: '90%' }} />
        </div>
        <div className="preview-ui-bubble-right c-user-msg" style={{ background: 'var(--blue-800)' }} />
        <div className="preview-ui-bubble-left c-blue-msg" style={{ width: '85%' }} />
        <div className="preview-ui-bubble-left c-blue-msg" style={{ width: '70%' }} />
      </div>
    </div>
  );
}

function DoctorPatientChatScreen() {
  return (
    <div className="preview-card__screen" style={{ background: 'var(--slate-50)' }}>
      <div className="preview-ui">
        <div className="preview-ui-header c-blue-header" />
        <div style={{ background: 'var(--amber-50)', border: '1px solid #fde68a', borderRadius: '6px', padding: '6px', marginBottom: '4px' }}>
          <div className="preview-ui-bar" style={{ width: '60%', height: '4px', background: '#fbbf24', borderRadius: '2px', marginBottom: '3px' }} />
          <div className="preview-ui-bar" style={{ width: '80%', height: '4px', background: '#fde68a', borderRadius: '2px' }} />
        </div>
        <div className="preview-ui-bubble-left c-blue-msg" />
        <div className="preview-ui-bubble-right c-user-msg" style={{ background: 'var(--blue-800)' }} />
        <div className="preview-ui-bubble-left c-blue-msg" style={{ width: '75%' }} />
        <div style={{ marginTop: 'auto', height: '24px', borderRadius: '8px', background: 'var(--slate-200)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: '6px' }}>
          <div style={{ flex: 1, height: '4px', background: 'var(--slate-300)', borderRadius: '2px' }} />
          <div style={{ width: '16px', height: '16px', background: 'var(--blue-800)', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  );
}

function EmergencyAlertScreen() {
  return (
    <div className="preview-card__screen" style={{ background: 'var(--slate-50)' }}>
      <div className="preview-ui">
        <div className="preview-ui-header c-red-header" style={{ height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '8px', height: '8px', background: '#fca5a5', borderRadius: '50', marginRight: '6px' }} />
          <div style={{ height: '6px', width: '50%', background: 'rgba(255,255,255,0.4)', borderRadius: '3px' }} />
        </div>
        <div className="preview-ui-triage c-red-bg" style={{ height: '40px', flexDirection: 'column', alignItems: 'flex-start', padding: '6px 8px', gap: '4px' }}>
          <div style={{ width: '60%', height: '5px', background: 'var(--red-100)', borderRadius: '2px' }} />
          <div style={{ width: '80%', height: '4px', background: 'var(--red-100)', borderRadius: '2px' }} />
        </div>
        <div style={{ height: '28px', borderRadius: '6px', background: 'var(--color-emergency)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '60%', height: '5px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
        </div>
        <div className="preview-ui-bar c-slate-200" style={{ width: '90%' }} />
        <div className="preview-ui-bar c-slate-200" style={{ width: '70%' }} />
      </div>
    </div>
  );
}

const SCREENS = [
  {
    component: <PatientAIScreen />,
    title: 'Patient AI Chat',
    desc: 'Conversational health assistant for patients',
  },
  {
    component: <SymptomCheckerScreen />,
    title: 'Symptom Checker',
    desc: 'Guided triage with severity classification',
  },
  {
    component: <DoctorAIScreen />,
    title: 'Doctor AI Assistant',
    desc: 'Clinical decision support for health workers',
  },
  {
    component: <DoctorPatientChatScreen />,
    title: 'Doctor-Patient Chat',
    desc: 'Structured communication with patient context',
  },
  {
    component: <EmergencyAlertScreen />,
    title: 'Emergency Alert',
    desc: 'Immediate escalation and guidance interface',
  },
];

export function ProductPreview() {
  return (
    <section id="screens" className="section section--blue" aria-labelledby="preview-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Product Screens"
          title="A Look Inside the Platform"
          description="Carefully designed interfaces that put clarity and usability first — for patients and doctors alike."
        />

        {/*
          Replace screen content below with actual app screenshots:
          Add <img src="/screenshots/screen-name.png" alt="..." /> inside each .preview-card__screen
        */}
        <div className="preview-grid" role="list">
          {SCREENS.map((screen, i) => (
            <div key={i} className="preview-card" role="listitem">
              {screen.component}
              <div className="preview-card__label">
                <h5>{screen.title}</h5>
                <p>{screen.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 'var(--space-8)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
          These are design placeholder previews. Replace with actual app screenshots before launch.
        </p>
      </div>
    </section>
  );
}

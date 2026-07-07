import { SectionHeader } from '../ui/SectionHeader';

const USE_CASES = [
  {
    role: 'Patient',
    roleColor: 'var(--color-primary)',
    roleBg: 'var(--color-primary-bg)',
    title: 'A Mother Managing a Child\'s Fever',
    description: 'A parent in Lagos notices their child has had a high fever for two days. She opens Naijamed, enters the symptoms through the checker, and receives a triage result. The AI advises she see a doctor urgently. She connects directly through the app and gets a response within minutes — without leaving home.',
  },
  {
    role: 'Doctor',
    roleColor: 'var(--blue-800)',
    roleBg: 'var(--blue-100)',
    title: 'A Junior Doctor in a PHC Setting',
    description: 'A Community Health Extension Worker at a primary healthcare centre in Kano uses the AI assistant during a consultation. Unsure about drug interactions for a patient on hypertensive medication, he queries the AI and receives evidence-based guidance immediately — supporting his clinical decision without delay.',
  },
  {
    role: 'Patient',
    roleColor: 'var(--color-primary)',
    roleBg: 'var(--color-primary-bg)',
    title: 'An Elderly Patient in a Rural Area',
    description: 'A 67-year-old man in Ogun State experiences chest tightness and shortness of breath. His son uses Naijamed on his behalf. The symptom checker classifies the case as a possible emergency, immediately displays escalation guidance, and shows the nearest emergency line. The family acts quickly.',
  },
  {
    role: 'Doctor',
    roleColor: 'var(--blue-800)',
    roleBg: 'var(--blue-100)',
    title: 'An Independent Physician Reviewing Cases',
    description: 'A private doctor in Abuja manages multiple patient conversations simultaneously through Naijamed. Cases arrive pre-organized by severity. AI-generated summaries mean she already understands each patient\'s situation before the chat begins — reducing her consultation preparation time significantly.',
  },
  {
    role: 'Clinic',
    roleColor: 'var(--green-700)',
    roleBg: 'var(--green-50)',
    title: 'A Clinic Streamlining Patient Intake',
    description: 'A small private clinic in Port Harcourt integrates Naijamed into their pre-consultation workflow. Patients self-report symptoms before arrival. Doctors receive structured AI summaries. The result is shorter consultation times, better-prepared doctors, and improved patient throughput.',
  },
  {
    role: 'Patient',
    roleColor: 'var(--color-primary)',
    roleBg: 'var(--color-primary-bg)',
    title: 'A Young Professional Seeking Wellness Advice',
    description: 'A 28-year-old software engineer in Enugu uses the AI health assistant to ask about sleep habits, nutrition for high blood pressure, and safe over-the-counter medication use. The AI responds in plain, friendly language — helping her make more informed day-to-day health decisions.',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="section" aria-labelledby="use-cases-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Use Cases"
          title="Real Scenarios, Real Impact"
          description="These illustrate the kinds of situations Naijamed is designed to support — from everyday health questions to urgent care navigation."
        />

        <div className="usecase-grid" role="list">
          {USE_CASES.map((uc, i) => (
            <div key={i} className="usecase-card" role="listitem">
              <div
                className="usecase-card__role"
                style={{ color: uc.roleColor, background: uc.roleBg }}
              >
                {uc.role}
              </div>
              <h4>{uc.title}</h4>
              <p>{uc.description}</p>
            </div>
          ))}
        </div>

        {/* <p style={{ textAlign: 'center', marginTop: 'var(--space-10)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
          These are illustrative use-case scenarios, not real testimonials. All names and details are fictional.
        </p> */}
      </div>
    </section>
  );
}

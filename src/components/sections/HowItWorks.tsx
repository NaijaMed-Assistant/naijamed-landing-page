import { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';

const PATIENT_STEPS = [
  {
    title: 'Join the Waitlist',
    desc: 'Sign up for early access to Naijamed and be among the first to know when we launch publicly.',
  },
  {
    title: 'Create an Account',
    desc: 'Register as a patient, verify your email, and complete your health profile including basic medical history.',
  },
  {
    title: 'Check Symptoms or Chat',
    desc: 'Use the symptom checker for guided assessment, or ask the AI health assistant any health question freely.',
  },
  {
    title: 'Connect with a Doctor',
    desc: 'For moderate or severe cases, the app connects you with a doctor who reviews your AI-generated case summary.',
  },
  {
    title: 'Receive Guidance or Emergency Alerts',
    desc: 'Get clear next steps — whether home care guidance, a doctor\'s response, or an emergency escalation prompt.',
  },
];

const DOCTOR_STEPS = [
  {
    title: 'Sign Up as a Doctor',
    desc: 'Register your account with your professional credentials. Complete your clinical profile including specialty and license number.',
  },
  {
    title: 'Access AI Clinical Support',
    desc: 'Use the AI assistant for instant clinical references — treatment protocols, drug information, and differential guidance.',
  },
  {
    title: 'Review Assigned Cases',
    desc: 'Receive AI-generated patient summaries organized by severity. Emergency and severe cases are flagged at the top.',
  },
  {
    title: 'Communicate with Patients',
    desc: 'Respond to patients via structured chat, create prescriptions, add notes, and manage case outcomes efficiently.',
  },
  {
    title: 'Maintain Case Records',
    desc: 'Track your complete consultation history. Every interaction, summary, and prescription is logged and accessible.',
  },
];

export function HowItWorks() {
  const [active, setActive] = useState<'patient' | 'doctor'>('patient');
  const steps = active === 'patient' ? PATIENT_STEPS : DOCTOR_STEPS;

  return (
    <section id="how-it-works" className="section section--subtle" aria-labelledby="how-it-works-heading">
      <div className="container">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple Steps to Better Health Support"
          description="Naijamed is built to be accessible and intuitive — no matter your level of tech experience."
        />

        <div className="how-tabs" role="tablist" aria-label="Select user type">
          <button
            className={`how-tab${active === 'patient' ? ' active' : ''}`}
            onClick={() => setActive('patient')}
            role="tab"
            aria-selected={active === 'patient'}
            aria-controls="steps-panel"
          >
            For Patients
          </button>
          <button
            className={`how-tab${active === 'doctor' ? ' active' : ''}`}
            onClick={() => setActive('doctor')}
            role="tab"
            aria-selected={active === 'doctor'}
            aria-controls="steps-panel"
          >
            For Doctors
          </button>
        </div>

        <div id="steps-panel" role="tabpanel" aria-label={`Steps for ${active}s`}>
          <div className="how-steps">
            {steps.map((step, i) => (
              <div key={i} className="how-step">
                <div className="how-step__number" aria-label={`Step ${i + 1}`}>{i + 1}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

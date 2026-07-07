import { SectionHeader } from '../ui/SectionHeader';
import { FAQItem } from '../ui/FAQItem';

const FAQS = [
  {
    question: 'Does the AI replace a doctor?',
    answer: 'No. Naijamed AI is an assistive tool, not a replacement for professional medical care. It provides health guidance, symptom assessment support, and information to help users understand their situation and next steps. All clinical decisions — diagnosis, treatment, and prescription — remain the responsibility of licensed healthcare professionals.',
  },
  {
    question: 'What can patients use the app for?',
    answer: 'Patients can use Naijamed to check their symptoms through a guided AI assessment, chat with an AI health assistant for general health questions, connect and communicate with a doctor, receive triage results with recommended next steps, and get emergency escalation guidance when needed. The app is designed for everyday health decisions and for helping users know when to seek professional care.',
  },
  {
    question: 'Can doctors use the AI assistant?',
    answer: 'Yes. Doctors have access to a dedicated AI clinical assistant that responds in clinical language appropriate for health professionals. They can query it for drug information, treatment protocols, differential diagnoses, and other clinical references — giving them a smart reference tool available at the point of care.',
  },
  {
    question: 'What happens when emergency symptoms are detected?',
    answer: 'When the symptom checker or AI conversation identifies possible emergency indicators, the app immediately surfaces a prominent emergency alert. Users are shown relevant emergency contact information — including state emergency lines or hospital ambulance numbers where applicable — and given clear guidance on what to do while waiting for help. Emergency detection is designed to prompt fast action, not to replace emergency services.',
  },
  {
    question: 'Is the app available on Android and iOS?',
    answer: 'Yes. Naijamed Assistant is available as a mobile app on both Android and iOS devices. It is built using Flutter for cross-platform compatibility and is optimised to run well even on lower-specification Android devices with 2GB RAM or less.',
  },
  {
    question: 'Can users access the platform on the web?',
    answer: 'The primary and most complete experience is through the mobile app, available on Android and iOS. A web version is also available for users who prefer to access the platform from a browser. You can log in or sign up using the web access links on this page.',
  },
  {
    question: 'How is user data protected?',
    answer: 'Naijamed is built with data security in mind. Patient data is encrypted in transit and at rest. Role-based access control ensures that health information is only accessible to authorized users within the care relationship. The platform is not yet certified under specific regulatory frameworks, but is designed to align with responsible data handling principles for health technology.',
  },
  {
    question: 'Who can sign up as a doctor on Naijamed?',
    answer: 'Any licensed health professional can register as a doctor on Naijamed — including physicians in government hospitals, private clinics, primary healthcare centres (PHCs), independent practitioners, junior doctors, and Community Health Extension Workers (CHEWs). A valid medical license number is required during profile setup.',
  },
  {
    question: 'What is the difference between the symptom checker and the AI health assistant?',
    answer: 'The symptom checker is a structured assessment tool — you enter specific symptoms, and the AI evaluates severity to produce a triage classification (Mild, Moderate, Severe, or Emergency). The AI health assistant is a free-form conversational chatbot where you can ask general health and wellness questions at any time, without triggering a formal assessment.',
  },
  {
    question: 'Is Naijamed suitable for children and elderly users?',
    answer: 'Yes. Naijamed is designed to be accessible across literacy levels and age groups. The language is plain and conversational, and family members or caregivers can use the app on behalf of patients who may not use smartphones independently.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section section--subtle" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about how Naijamed Assistant works."
        />

        <div className="faq-list" role="list">
          {FAQS.map((faq, i) => (
            <div key={i} role="listitem">
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

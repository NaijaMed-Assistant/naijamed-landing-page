import { useEffect } from 'react';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import './PrivacyPolicy.css';

const POLICY_SECTIONS = [
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-information', label: 'How We Use Your Information' },
  { id: 'ai-clinical-support', label: 'AI Clinical Support' },
  { id: 'sharing-information', label: 'Sharing of Information' },
  { id: 'legal-basis', label: 'Legal Basis for Processing' },
  { id: 'storage-security-transfers', label: 'Data Storage, Security, and Transfers' },
  { id: 'retention', label: 'Retention' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'deleting-account', label: 'Deleting Your Account' },
  { id: 'minors', label: 'Minors' },
  { id: 'emergency-disclaimer', label: 'Emergency and Medical Disclaimer' },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="privacy-policy__list">
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | NaijaMed Assistant';
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      'content',
      'Read the NaijaMed Assistant Privacy Policy to learn how we collect, use, share, and protect your personal and health information.',
    );
  }, []);

  return (
    <>
      <a className="privacy-policy__skip-link" href="#main-content">Skip to main content</a>
      <Header isPrivacyPage />

      <main id="main-content" className="privacy-policy">
        <div className="privacy-policy__hero">
          <div className="container">
            <div className="privacy-policy__hero-content">
              <span className="privacy-policy__eyebrow">
                <span aria-hidden="true" className="privacy-policy__eyebrow-icon">✓</span>
                Privacy &amp; trust
              </span>
              <h1>Privacy Policy</h1>
              <p>
                Your health information is personal. Here’s how NaijaMed Assistant handles your
                information when you use our app.
              </p>
              <div className="privacy-policy__effective-date">
                <span aria-hidden="true" className="privacy-policy__calendar-icon">◷</span>
                Effective date: <strong>24 October 2026</strong>
              </div>
            </div>
            <div aria-hidden="true" className="privacy-policy__hero-art">
              <div className="privacy-policy__hero-orbit privacy-policy__hero-orbit--outer" />
              <div className="privacy-policy__hero-orbit privacy-policy__hero-orbit--inner" />
              <div className="privacy-policy__hero-shield">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M32 7 52 15v15c0 13-8.5 22.5-20 27C20.5 52.5 12 43 12 30V15L32 7Z" fill="currentColor" opacity=".12" />
                  <path d="M32 7 52 15v15c0 13-8.5 22.5-20 27C20.5 52.5 12 43 12 30V15L32 7Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <path d="m23 31 6 6 13-14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="privacy-policy__hero-spark privacy-policy__hero-spark--one" />
              <span className="privacy-policy__hero-spark privacy-policy__hero-spark--two" />
            </div>
          </div>
        </div>

        <div className="container privacy-policy__layout">
          <aside className="privacy-policy__contents" aria-label="Privacy policy contents">
            <h2>On this page</h2>
            <nav>
              {POLICY_SECTIONS.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="privacy-policy__help-card">
              <span aria-hidden="true">?</span>
              <p>Questions about your privacy?</p>
              <a href="mailto:naijamedassistant@gmail.com">Contact our team</a>
            </div>
          </aside>

          <article className="privacy-policy__document">
            <div className="privacy-policy__introduction">
              <p>
                NaijaMed Assistant Limited (“NaijaMed”, “we”, “us”, or “our”) operates the NaijaMed
                Assistant mobile application (“App”), an AI-enabled clinical support and patient
                triage platform for patients and healthcare professionals in Nigeria. This Privacy
                Policy explains what personal data we collect, how we use it, who we share it with,
                and your rights.
              </p>
              <p>
                By using the App, you agree to this Privacy Policy. If you do not agree, do not use
                the App.
              </p>
            </div>

            <section id="information-we-collect" className="privacy-policy__section">
              <h2><span>01</span>Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <h3>a. Information you provide directly</h3>
              <BulletList items={[
                'Full name',
                'Phone number',
                'Email address',
                'Password or account login details',
                'Profile details such as date of birth, gender, height, weight, blood group, allergies, home address, and medical history',
                'Symptoms, consultation information, chat messages, appointment requests, and notes submitted through the App',
                'For doctors: professional information, medical licence details, specialty and consultation activity.',
              ]} />
              <h3>b. Payment Card Information</h3>
              <p>
                Some features require a paid subscription. When you subscribe, we or our payment
                provider may collect payment card details, billing information, and transaction
                records to process payments and manage your subscription. We may receive limited
                card details, such as the card type and last four digits, along with payment
                confirmation and subscription status. Full card details may be processed by our
                payment provider and are not stored on our servers where the provider handles them
                directly.
              </p>
              <h3>c. Information collected automatically</h3>
              <BulletList items={[
                'Device model, operating system, app version, and device identifiers',
                'App usage data, crash reports, diagnostics, performance logs, and error information',
                'IP address and internet connection data',
                'Notification preferences and engagement data',
              ]} />
              <h3>d. Health data</h3>
              <p>
                The App may process health-related information, including symptoms, medical history,
                treatment details, and consultation records. This is sensitive personal data and is
                handled with care.
              </p>
            </section>

            <section id="how-we-use-information" className="privacy-policy__section">
              <h2><span>02</span>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <BulletList items={[
                'Create and manage your account',
                'Provide symptom checking, triage support, consultation booking, and AI-assisted clinical workflows',
                'Allow patients and doctors to communicate within the App',
                'Prepare patient information for consultations and follow-up care',
                'Improve the App, fix bugs, and monitor performance',
                'Send important notifications, reminders, and account updates',
                'Maintain security, prevent fraud, and protect the platform',
                'Meet legal, regulatory, and safety requirements',
                'Support analytics, research, and product improvement',
              ]} />
            </section>

            <section id="ai-clinical-support" className="privacy-policy__section">
              <h2><span>03</span>AI Clinical Support</h2>
              <p>
                The App may use artificial intelligence to ask symptom-related questions and
                provide general guidance to patients and doctors. This support is intended to
                assist users and clinicians, but it does not replace a doctor’s medical judgment or
                provide a diagnosis.
              </p>
              <p>
                The AI-generated output may be incomplete, inaccurate, or not appropriate for every
                situation. You should not rely on it for emergency or life-threatening conditions.
                Always seek professional medical advice from a qualified healthcare provider when
                needed.
              </p>
            </section>

            <section id="sharing-information" className="privacy-policy__section">
              <h2><span>04</span>Sharing of Information</h2>
              <p><strong>We do not sell personal data.</strong></p>
              <p>We may share your information only when necessary:</p>
              <BulletList items={[
                'With doctors or healthcare providers you consult through the App',
                'With trusted service providers that help us run the App, such as cloud hosting, analytics, push notification, crash reporting, email/SMS, security, and payment services',
                'With regulators, government authorities, or law enforcement when required by law',
                'When needed to protect life, health, safety, or legal rights',
                'In connection with a business sale, merger, or restructuring',
              ]} />
              <p>
                Where third parties process your information, we require them to protect it and use
                it only for the services they provide to us.
              </p>
            </section>

            <section id="legal-basis" className="privacy-policy__section">
              <h2><span>05</span>Legal Basis for Processing</h2>
              <p>We process personal data based on:</p>
              <BulletList items={[
                'Your consent',
                'The performance of services you request',
                'Compliance with legal obligations',
                'Our legitimate interests in running, securing, and improving the App',
                'Protection of health, safety, and legal rights',
              ]} />
              <p>
                Because health information is sensitive, we obtain consent before collecting or
                using it where required by law and applicable standards.
              </p>
            </section>

            <section id="storage-security-transfers" className="privacy-policy__section">
              <h2><span>06</span>Data Storage, Security, and Transfers</h2>
              <p>
                We use reasonable technical and organisational safeguards, including access
                controls, secure hosting, and encrypted transmission, to protect personal data.
                However, no digital system is completely secure, and we cannot guarantee absolute
                security.
              </p>
              <p>
                Your data may be stored on servers located outside Nigeria. Where this occurs, we
                take reasonable steps to ensure that your information is protected in line with
                applicable privacy standards and contractual safeguards.
              </p>
            </section>

            <section id="retention" className="privacy-policy__section">
              <h2><span>07</span>Retention</h2>
              <p>We keep your data for as long as needed to:</p>
              <BulletList items={[
                'Provide the App and related services',
                'Maintain legal and regulatory records',
                'Resolve disputes and enforce agreements',
                'Protect user safety and service integrity',
              ]} />
              <p>
                If you delete your account, we will delete or anonymise your personal data within
                30 days, unless we are required by law to retain certain information for longer,
                such as records needed for legal, medical, or regulatory reasons.
              </p>
            </section>

            <section id="your-rights" className="privacy-policy__section">
              <h2><span>08</span>Your Rights</h2>
              <p>You may have the right to:</p>
              <BulletList items={[
                'Access personal data we hold about you',
                'Correct inaccurate or incomplete information',
                'Request deletion of your account and personal data',
                'Withdraw consent where processing is based on consent',
                'Restrict or object to certain processing activities',
                'Request a copy of your data in a portable format',
              ]} />
              <p>
                To exercise these rights, contact us using the details below. We will respond in
                line with applicable law.
              </p>
            </section>

            <section id="deleting-account" className="privacy-policy__section">
              <h2><span>09</span>Deleting Your Account</h2>
              <p>
                You may delete your account by contacting us via email or call. If you request
                deletion, we will process it in accordance with this policy and applicable law.
              </p>
            </section>

            <section id="minors" className="privacy-policy__section">
              <h2><span>10</span>Minors</h2>
              <p>
                The App is not intended for children under the age of 13, or the legal age of
                adulthood in your jurisdiction, without parental consent. We do not knowingly
                collect personal information from children without such consent. If you believe a
                child has provided us with personal data, please contact us and we will delete it
                promptly.
              </p>
            </section>

            <section id="emergency-disclaimer" className="privacy-policy__section">
              <h2><span>11</span>Emergency and Medical Disclaimer</h2>
              <p>
                NaijaMed Assistant does not provide emergency services yet. If you or someone else
                is in a medical emergency, call <a href="tel:112">112</a> or go to the nearest
                hospital immediately. Do not wait for a response from the App.
              </p>
            </section>

            <section id="changes" className="privacy-policy__section">
              <h2><span>12</span>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will revise the “Effective
                Date” at the top of this policy and post the updated version in the App or on our
                website. Continued use of the App after changes means you accept the updated policy.
              </p>
            </section>

            <section id="contact" className="privacy-policy__section privacy-policy__contact">
              <h2><span>13</span>Contact Us</h2>
              <p>If you have questions or requests relating to this policy, contact us:</p>
              <address>
                <strong>NaijaMed Assistant Limited</strong>
                <a href="mailto:naijamedassistant@gmail.com">naijamedassistant@gmail.com</a>
                <a href="https://naijamedassistant.com">naijamedassistant.com</a>
                <span>Lagos, Nigeria</span>
              </address>
            </section>
          </article>
        </div>
      </main>

      <Footer isPrivacyPage />
    </>
  );
}

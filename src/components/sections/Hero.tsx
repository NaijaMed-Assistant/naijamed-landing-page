import { AppStoreButton } from '../ui/AppStoreButton';
import { GOOGLE_PLAY_URL, APP_STORE_URL, WEB_LOGIN_URL } from '../../constants';

function PhoneMockupMain() {
  return (
    <div className="phone-mockup phone-mockup--main">
      <div className="phone-screen">
        <div className="phone-screen__notch" aria-hidden="true" />
        <div className="phone-screen__content">
          <div className="mock-header">
            <div className="mock-header-dot" />
            <div className="mock-header-bar" />
          </div>
          <div className="mock-bubble mock-bubble--ai">
            Hello! I'm your Naijamed AI assistant. How are you feeling today?
          </div>
          <div className="mock-bubble mock-bubble--user">
            I've had a headache for 2 days
          </div>
          <div className="mock-bubble mock-bubble--ai">
            I understand. Let me help assess your symptoms. How severe is the pain on a scale of 1 to 10?
          </div>
          <div className="mock-symptom-card">
            <div className="mock-symptom-title">Symptom Assessment</div>
            <div className="mock-symptom-bar" style={{ width: '60%' }} />
            <div className="mock-symptom-bar" style={{ width: '40%', background: '#93c5fd' }} />
          </div>
          <div className="mock-action-bar">
            <div className="mock-action-input" />
            <div className="mock-action-send" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockupSecondary() {
  return (
    <div className="phone-mockup phone-mockup--secondary">
      <div className="phone-screen">
        <div className="phone-screen__notch" aria-hidden="true" />
        <div className="phone-screen__content">
          <div className="mock-header" style={{ background: '#1e40af' }}>
            <div className="mock-header-dot" />
            <div className="mock-header-bar" />
          </div>
          <div className="mock-bubble mock-bubble--ai" style={{ fontSize: '8px' }}>
            Triage Result: Moderate — We recommend consulting a doctor.
          </div>
          <div className="mock-emergency-card">
            <div className="mock-emergency-title">Emergency Alert</div>
            <div className="mock-emergency-bar" style={{ width: '80%' }} />
            <div style={{ fontSize: '7px', color: 'var(--red-700)', marginTop: '2px' }}>
              Please seek immediate care
            </div>
          </div>
          <div className="mock-action-bar">
            <div className="mock-action-input" />
            <div className="mock-action-send" style={{ background: 'var(--color-emergency)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              <div className="hero__badge-dot" />
              AI-Powered Health Platform — Built for Nigeria
            </div>

            <h1 id="hero-heading">
              Smarter Health Guidance,<br />
              <em>Built for Every Nigerian</em>
            </h1>

            <p className="hero__subtitle">
              Naijamed Assistant connects patients with AI-powered symptom guidance,
              emergency-aware support, and direct doctor communication — all in one trusted mobile app.
            </p>

            <div className="hero__cta-group">
              <a href={GOOGLE_PLAY_URL} className="btn btn--primary btn--lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                Download the App
              </a>
              <a href={WEB_LOGIN_URL} className="btn btn--outline btn--lg">
                Explore Web Version
              </a>
            </div>

            <div className="hero__store-group">
              <span className="hero__store-label">Available on</span>
              <AppStoreButton store="google" href={GOOGLE_PLAY_URL} />
              <AppStoreButton store="apple" href={APP_STORE_URL} />
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <PhoneMockupSecondary />
            <PhoneMockupMain />
          </div>
        </div>
      </div>
    </section>
  );
}

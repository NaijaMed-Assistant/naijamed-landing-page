import { AppStoreButton } from '../ui/AppStoreButton';
import { GOOGLE_PLAY_URL, APP_STORE_URL, WEB_SIGNUP_URL, QR_CODE_IMAGE } from '../../constants';

function InlineQR() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
      <div style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.12)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', border: '1px solid rgba(255,255,255,0.2)', padding: 'var(--space-3)' }}>
        {QR_CODE_IMAGE ? (
          <img src={QR_CODE_IMAGE} alt="Scan to download" width={100} height={100} />
        ) : (
          <>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="5" y="5" width="3" height="3" fill="rgba(255,255,255,0.5)" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="16" y="5" width="3" height="3" fill="rgba(255,255,255,0.5)" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="5" y="16" width="3" height="3" fill="rgba(255,255,255,0.5)" />
              <path d="M14 14h7v7" stroke="rgba(255,255,255,0.5)" />
            </svg>
          </>
        )}
      </div>
      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--blue-300)', textAlign: 'center', maxWidth: '100px' }}>
        Scan to download
      </span>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section id="get-started" className="final-cta" aria-labelledby="cta-heading">
      <div className="container">
        <h2 id="cta-heading">
          Better Health Support Starts Here —<br />Download Naijamed Today
        </h2>
        <p>
          Join thousands of Nigerians accessing smarter health guidance, AI symptom checking,
          and connected care — all from their mobile phone.
        </p>

        <div className="final-cta__actions">
          <a href={GOOGLE_PLAY_URL} className="btn btn--white btn--lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            Download the App
          </a>
          <a href={WEB_SIGNUP_URL} className="btn btn--white-outline btn--lg">
            Create a Web Account
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
          <div className="final-cta__store-row">
            <AppStoreButton store="google" href={GOOGLE_PLAY_URL} variant="light" />
            <AppStoreButton store="apple" href={APP_STORE_URL} variant="light" />
          </div>

          <div style={{ width: '1px', height: '80px', background: 'rgba(255,255,255,0.15)' }} aria-hidden="true" />

          <InlineQR />
        </div>

        <div style={{ marginTop: 'var(--space-16)', padding: 'var(--space-6)', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '640px', margin: 'var(--space-16) auto 0' }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--blue-200)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--blue-100)' }}>Medical Disclaimer:</strong> Naijamed Assistant is an AI-assisted health information tool.
            It does not replace professional medical advice, diagnosis, treatment, or emergency services.
            Always consult a qualified healthcare professional for any medical concern.
            In an emergency, contact your local emergency services immediately.
          </p>
        </div>
      </div>
    </section>
  );
}

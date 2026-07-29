import { AppStoreButton } from '../ui/AppStoreButton';
import { WAITLIST_URL, QR_CODE_IMAGE } from '../../constants';

function QRCodeBlock() {
  return (
    <div className="qr-block">
      <div className="qr-code-placeholder" aria-label="QR code for downloading the app">
        {QR_CODE_IMAGE ? (
          <img src={QR_CODE_IMAGE} alt="Scan to download Naijamed" width={140} height={140} />
        ) : (
          <>
            {/* QR code placeholder — replace QR_CODE_IMAGE in constants/index.ts */}
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="5" y="5" width="3" height="3" fill="currentColor" />
              <rect x="16" y="5" width="3" height="3" fill="currentColor" /><rect x="5" y="16" width="3" height="3" fill="currentColor" />
              <path d="M14 14h.01M14 17h.01M14 20h.01M17 14h3v3h-3zM17 17h.01M20 17h.01M17 20h3" />
            </svg>
            <span style={{ color: 'var(--slate-500)', fontSize: '0.65rem' }}>
              QR Code<br />(replace in production)
            </span>
          </>
        )}
      </div>
      <p>Join the waitlist for early access</p>
    </div>
  );
}

export function AppDownload() {
  return (
    <section id="download" className="download-section" aria-labelledby="download-heading">
      <div className="container">
        <h2 id="download-heading">Take Naijamed Everywhere You Go</h2>
        <p>
          Join the waitlist to get early access, create your account,
          and start accessing smarter health support as soon as we launch.
        </p>

        <div className="download-layout">
          <div className="download-store-group">
            <span className="download-store-label">Early access</span>
            <div className="download-store-buttons">
              <AppStoreButton store="waitlist" href={WAITLIST_URL} variant="light" />
            </div>
          </div>

          <div className="download-divider" aria-hidden="true" />

          <QRCodeBlock />
        </div>

        <p style={{ marginTop: 'var(--space-10)', fontSize: 'var(--text-sm)', color: 'var(--blue-300)' }}>
          Compatible with Android 8.0 and above, and iOS 13 and above.
          Optimised for performance on low-RAM devices.
        </p>
      </div>
    </section>
  );
}

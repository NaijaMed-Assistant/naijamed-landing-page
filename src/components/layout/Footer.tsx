import { AppStoreButton } from '../ui/AppStoreButton';
import {
  WAITLIST_URL, WEB_LOGIN_URL, WEB_SIGNUP_URL,
  PRIVACY_POLICY_URL, TERMS_URL, DISCLAIMER_URL, CONTACT_EMAIL
} from '../../constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className="footer__logo-text">
                Naija<span>med</span>
              </span>
            </div>
            <p>
              An AI-powered medical assistant platform built for every Nigerian. Connecting patients,
              doctors, and intelligent health support in one trusted app.
            </p>
            <div className="footer__store-row">
              {/* <AppStoreButton store="google" href={GOOGLE_PLAY_URL} variant="light" />
              <AppStoreButton store="apple" href={APP_STORE_URL} variant="light" /> */}
              <AppStoreButton store="waitlist" href={WAITLIST_URL} variant="light" />
            </div>
          </div>

          <div>
            <h3 className="footer__col-title">Platform</h3>
            <ul className="footer__links">
              <li><a href="#features">Features</a></li>
              <li><a href="#patients">For Patients</a></li>
              <li><a href="#doctors">For Doctors</a></li>
              <li><a href="#emergency">Emergency Support</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Access</h3>
            <ul className="footer__links">
              <li><a href={WAITLIST_URL}>Join Waitlist</a></li>
              {/* <li><a href={GOOGLE_PLAY_URL}>Google Play</a></li>
              <li><a href={APP_STORE_URL}>App Store (iOS)</a></li> */}
              <li><a href={WEB_LOGIN_URL}>Web Login</a></li>
              <li><a href={WEB_SIGNUP_URL}>Web Signup</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              <li><a href="#value">About</a></li>
              <li><a href="#security">Privacy & Security</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>Contact</a></li>
              <li><a href={PRIVACY_POLICY_URL}>Privacy Policy</a></li>
              <li><a href={TERMS_URL}>Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Naijamed. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href={PRIVACY_POLICY_URL}>Privacy Policy</a>
            <a href={TERMS_URL}>Terms of Use</a>
            <a href={DISCLAIMER_URL}>Medical Disclaimer</a>
          </div>
        </div>

        <div className="footer__disclaimer">
          <strong>Medical Disclaimer:</strong> Naijamed Assistant is an AI-assisted health information tool and is not a substitute for professional medical advice, diagnosis, treatment, or emergency services. Always consult a qualified healthcare professional for medical concerns. In an emergency, contact your local emergency services immediately.
        </div>
      </div>
    </footer>
  );
}

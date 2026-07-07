import { WEB_LOGIN_URL, WEB_SIGNUP_URL } from '../../constants';

export function WebAccess() {
  return (
    <section id="web-access" className="web-access" aria-label="Web platform access">
      <div className="container">
        <div className="web-access__inner">
          <div className="web-access__text">
            <h3>Also available on the web</h3>
            <p>
              Prefer to explore from a browser? You can log in or create an account
              to access a web version of the platform. The mobile app remains the
              primary and most complete experience.
            </p>
          </div>
          <div className="web-access__actions">
            <a href={WEB_LOGIN_URL} className="btn btn--outline">
              Log In
            </a>
            <a href={WEB_SIGNUP_URL} className="btn btn--primary">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

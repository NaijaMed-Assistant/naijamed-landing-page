import { useEffect, useState } from 'react';
import { GOOGLE_PLAY_URL, LOGO_SRC, PRODUCT_NAME, WEB_LOGIN_URL, WEB_SIGNUP_URL } from '../../constants';

// import logo from '../../assets/logo.png';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Patients', href: '#patients' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="header__inner">
            <a href="#" className="header__logo" aria-label={`${PRODUCT_NAME} home`}>
              <div className="header__logo-mark" aria-hidden="true">
                <img src={LOGO_SRC} alt="Naija_med_logo" />
              </div>
              <span className="header__logo-text">
                Naija<span>Med</span> Assistant
              </span>
            </a>

            <nav className="header__nav" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>

            <div className="header__actions">
              <a href={WEB_LOGIN_URL} className="btn btn--ghost" style={{ background: 'transparent', color: 'var(--color-text-body)', fontWeight: 500, fontSize: 'var(--text-sm)', padding: '0.5rem 0.75rem', border: 'none' }}>
                Log In
              </a>
              <a href={GOOGLE_PLAY_URL} className="btn btn--primary btn--sm">
                Download App
              </a>
            </div>

            <button
              className={`header__hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav__links">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </div>
        <div className="mobile-nav__actions">
          <a href={WEB_LOGIN_URL} className="btn btn--outline" style={{ textAlign: 'center' }} onClick={closeMenu}>
            Log In
          </a>
          <a href={WEB_SIGNUP_URL} className="btn btn--outline" style={{ textAlign: 'center' }} onClick={closeMenu}>
            Sign Up
          </a>
          <a href={GOOGLE_PLAY_URL} className="btn btn--primary" style={{ textAlign: 'center' }} onClick={closeMenu}>
            Download App
          </a>
        </div>
      </nav>
    </>
  );
}

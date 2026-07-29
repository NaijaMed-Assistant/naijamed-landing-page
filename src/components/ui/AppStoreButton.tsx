interface AppStoreButtonProps {
  store: 'google' | 'apple' | 'waitlist';
  href: string;
  variant?: 'dark' | 'light' | 'outline';
}

export function AppStoreButton({ store, href, variant = 'dark' }: AppStoreButtonProps) {
  const isApple = store === 'apple';
  const isWaitlist = store === 'waitlist';
  const className = `store-btn${variant === 'outline' ? ' store-btn--outline' : variant === 'light' ? ' store-btn--dark' : ''}`;

  const label = isWaitlist
    ? 'Join the waitlist'
    : isApple
      ? 'Download on the App Store'
      : 'Get it on Google Play';

  const smallText = isWaitlist ? 'Join the' : isApple ? 'Download on the' : 'Get it on';
  const strongText = isWaitlist ? 'Waitlist' : isApple ? 'App Store' : 'Google Play';

  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="store-btn__icon" aria-hidden="true">
        {isWaitlist ? <WaitlistIcon /> : isApple ? <AppleIcon /> : <GooglePlayIcon />}
      </span>
      <span className="store-btn__text">
        <small>{smallText}</small>
        <strong>{strongText}</strong>
      </span>
    </a>
  );
}

function WaitlistIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M7 12h10" />
      <path d="M9 17h6" />
      <path d="M4 4h16v16H4z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
      <path d="M16.08 12.76c-.02-2.7 2.2-4 2.3-4.07-1.26-1.84-3.21-2.09-3.9-2.12-1.65-.17-3.24.98-4.08.98-.85 0-2.13-.96-3.51-.93-1.79.03-3.46 1.05-4.38 2.64C.82 12.52 2.24 18.15 4 21.06c.88 1.28 1.92 2.71 3.27 2.66 1.32-.05 1.82-.85 3.41-.85 1.6 0 2.05.85 3.46.82 1.42-.02 2.31-1.29 3.18-2.57.99-1.47 1.4-2.9 1.42-2.97-.03-.01-2.74-1.05-2.76-4.19zM13.57 4.5C14.27 3.65 14.75 2.5 14.62 1.33c-.98.04-2.17.65-2.87 1.48-.63.73-1.19 1.9-1.04 3.02 1.09.08 2.2-.55 2.86-1.33z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
      <path d="M1.22.65l10.6 10.6L1.22 21.35A1.5 1.5 0 01.5 20V2A1.5 1.5 0 011.22.65z" fill="#EA4335" />
      <path d="M18.36 9.27L15.5 7.62l-3.34 3.34 3.34 3.34 2.89-1.67a1.5 1.5 0 000-2.6 1.5 1.5 0 00-0.03-.03z" fill="#FBBC04" />
      <path d="M1.22 21.35l10.6-10.6L15.5 14.38 3.3 21.52A1.5 1.5 0 011.22 21.35z" fill="#34A853" />
      <path d="M3.3.48L15.5 7.62 11.82 11.3 1.22.65A1.5 1.5 0 013.3.48z" fill="#4285F4" />
    </svg>
  );
}

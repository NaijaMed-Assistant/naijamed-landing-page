import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { PatientFeatures } from './components/sections/PatientFeatures';
import { DoctorFeatures } from './components/sections/DoctorFeatures';
import { EmergencySection } from './components/sections/EmergencySection';
import { HowItWorks } from './components/sections/HowItWorks';
import { AppDownload } from './components/sections/AppDownload';
import { WebAccess } from './components/sections/WebAccess';
import { ValueProposition } from './components/sections/ValueProposition';
import { Security } from './components/sections/Security';
import { ProductPreview } from './components/sections/ProductPreview';
import { UseCases } from './components/sections/UseCases';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';

function App() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '16px';
          e.currentTarget.style.top = '16px';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
          e.currentTarget.style.zIndex = '9999';
          e.currentTarget.style.padding = '8px 16px';
          e.currentTarget.style.background = 'var(--color-primary)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.borderRadius = '4px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <PatientFeatures />
        <DoctorFeatures />
        <EmergencySection />
        <HowItWorks />
        <ProductPreview />
        <UseCases />
        <ValueProposition />
        <AppDownload />
        <WebAccess />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;

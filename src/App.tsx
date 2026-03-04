import { ReactLenis } from 'lenis/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DifferentiatorSection } from './components/DifferentiatorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
          <DifferentiatorSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

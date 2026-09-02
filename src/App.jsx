import React from 'react';
import BackgroundCanvas3D from './components/BackgroundCanvas3D';
import HeroSection from './components/HeroSection';
import SkillsGrid from './components/SkillsGrid';
import ProjectCards from './components/ProjectCards';
import ExperienceBar from './components/ExperienceBar';
import ContactStrip from './components/ContactStrip';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <BackgroundCanvas3D />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <SkillsGrid />
        <ProjectCards />
        <ExperienceBar />
        <ContactStrip />
      </main>
      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '24px 0', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <span>© 2026 Himanshu Mishra • B.Tech CSE, LPU</span>
          <a href="#top" style={{ color: 'var(--accent)', textDecoration: 'none' }}>↑ Back to top</a>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import BackgroundCanvas3D from './components/BackgroundCanvas3D';
import HeroSection from './components/HeroSection';
import SkillsGrid from './components/SkillsGrid';
import ProjectCards from './components/ProjectCards';
import ExperienceBar from './components/ExperienceBar';
import ContactStrip from './components/ContactStrip';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: 'var(--bg-obsidian)' }}>
      <BackgroundCanvas3D />
      
      {/* Sleek Floating Glass Header (No Himanshu button) */}
      <header style={{ 
        position: 'fixed', 
        top: '16px', 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        pointerEvents: 'none' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Quick Nav Pill */}
          <nav style={{ 
            pointerEvents: 'auto', 
            background: 'rgba(14, 19, 31, 0.85)', 
            backdropFilter: 'blur(20px)', 
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-glass)', 
            borderRadius: '9999px', 
            padding: '8px 20px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(12px, 3vw, 24px)', 
            fontSize: 'clamp(0.75rem, 2.2vw, 0.85rem)', 
            fontFamily: 'var(--font-mono)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>Experience</a>
            <a href="#contact" style={{ color: 'var(--accent-lime)', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}>Contact</a>
          </nav>
        </div>
      </header>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <SkillsGrid />
        <ProjectCards />
        <ExperienceBar />
        <ContactStrip />
      </main>

      {/* Awwwards Glass Footer */}
      <footer style={{ 
        borderTop: '1px solid var(--border-glass)', 
        background: 'rgba(6, 8, 13, 0.85)', 
        backdropFilter: 'blur(16px)', 
        padding: '28px 0', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-lime)', boxShadow: '0 0 10px var(--accent-lime)' }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              © 2026 HIMANSHU MISHRA — CREATIVE DEV & CSE @ LPU
            </span>
          </div>
          <a href="#top" className="btn-awwwards-glass" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
            ↑ BACK TO TOP
          </a>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ExperienceBar() {
  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">LEADERSHIP & EXECUTION</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
            ORGANIZATIONAL <span className="glow-text-lime">ROLE</span>
          </h2>
        </div>

        <motion.div className="bento-card" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '900px', margin: '0 auto', padding: '36px' }}>

          {/* Top Info Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>COORDINATOR HEAD</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-lime)', fontWeight: 600, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                Student Organization{' '}
                <a href="https://vibranta.in" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent-lime)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Vibranta <ExternalLink size={14} />
                </a>
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span className="badge-glow"><Calendar size={13} /> 2025 – Present</span>
              <span className="badge-cyan"><MapPin size={13} /> LPU, Punjab</span>
            </div>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {[
              'Directed team operations and multi-departmental coordination for university-scale student initiatives.',
              'Executed GRAVEYARD 2026, overseeing marketing, ticket sales, and social media strategy.',
              'Managed artist relations and external collaborations to ensure seamless event execution.',
            ].map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <CheckCircle2 size={16} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Skill Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Team Leadership', 'Operations', 'Marketing Strategy', 'Public Relations', 'Event Management'].map((s, i) => (
              <span key={i} className="chip-tag">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

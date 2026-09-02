import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ExperienceBar() {
  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Briefcase size={14} /> Experience</div>
          <h2 className="section-heading">Leadership & <span className="gradient-text">Impact</span></h2>
        </div>

        <motion.div className="card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ padding: 'clamp(20px, 4vw, 32px)', maxWidth: '800px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Coordinator Head</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-light)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                Student Organization{' '}
                <a href="https://vibranta.in" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent-light)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                  Vibranta <ExternalLink size={13} />
                </a>
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <span className="pill"><Calendar size={12} /> 2025 – Present</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={12} /> LPU, Punjab
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {[
              'Directed team operations and multi-departmental coordination for university-scale student initiatives.',
              'Executed GRAVEYARD 2026, overseeing marketing, ticket sales, and social media strategy.',
              'Managed artist relations and external collaborations to ensure seamless event execution.',
            ].map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <CheckCircle2 size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['Team Leadership', 'Operations', 'Marketing Strategy', 'Public Relations', 'Event Management'].map((s, i) => (
              <span key={i} className="tag">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

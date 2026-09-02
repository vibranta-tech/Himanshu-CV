import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Brain, Code2, Bot, Layers, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function AcademicFocusSection() {
  return (
    <section id="academic" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>
            <Target size={16} /> Roadmap & Growth
          </div>
          <h2 className="section-title">
            Current Academic <span className="text-gradient">Focus</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '1rem' }}>
            Goals and learning objectives Himanshu is actively pursuing as a 2nd year CS student.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {/* Left Column: Academic Focus Objectives */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(0, 252, 254, 0.1)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Target size={22} color="var(--accent-cyan)" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
                  2nd Year Learning Objectives
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Hands-On Engineering</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {PORTFOLIO_DATA.academicFocus.map((focus, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.94rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.6,
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(0, 242, 254, 0.15)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {idx + 1}
                  </div>
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Learning & Interest Areas */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(0, 255, 185, 0.1)',
                  border: '1px solid rgba(0, 255, 185, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Brain size={22} color="var(--accent-neon)" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
                  Learning & Interest Areas
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-neon)' }}>Exploration & Domains</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              {PORTFOLIO_DATA.interests.map((interest, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{
                    background: 'rgba(12, 16, 23, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '16px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
                  onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                >
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-neon)', marginBottom: '4px' }}>
                    {interest.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {interest.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

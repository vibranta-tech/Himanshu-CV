import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Users, Ticket, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding cyber-grid-bg" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>
            <Briefcase size={16} /> Campus Leadership
          </div>
          <h2 className="section-title">
            Experience & <span className="text-gradient-purple">Leadership</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '1rem' }}>
            Real-world operations, team management, and event execution at Lovely Professional University.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                padding: '36px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(112, 0, 255, 0.3)',
              }}
            >
              {/* Background Accent Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(112, 0, 255, 0.25) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Role Header */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="glass-pill" style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem' }}>
                      ⚡ Active Leadership Role
                    </span>
                    <span className="glass-pill" style={{ color: 'var(--accent-gold)', fontSize: '0.78rem' }}>
                      🔥 GRAVEYARD 2026
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 900 }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1.05rem', color: 'var(--accent-purple)', fontWeight: 700, marginTop: '2px' }}>
                    {exp.organization}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="glass-pill" style={{ color: 'var(--accent-neon)', fontWeight: 700 }}>
                    <Calendar size={14} /> {exp.period}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    <MapPin size={14} color="var(--accent-cyan)" /> {exp.location}
                  </div>
                </div>
              </div>

              {/* Responsibilities & Key Contributions */}
              <div style={{ marginTop: '20px', marginBottom: '28px' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 600 }}>
                  Key Contributions & Execution Highlights:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '0.94rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.6,
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained Tags */}
              <div>
                <h4 style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
                  Core Management Competencies:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      onMouseEnter={() => soundFX.playHover()}
                      style={{
                        background: 'rgba(112, 0, 255, 0.12)',
                        border: '1px solid rgba(112, 0, 255, 0.3)',
                        color: 'var(--text-main)',
                        fontSize: '0.82rem',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontWeight: 500,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

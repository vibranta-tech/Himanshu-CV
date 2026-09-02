import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, BookOpen, Award, CheckCircle2, Flame, Lightbulb, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>
            <User size={16} /> Student Overview
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Himanshu Mishra</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '1rem' }}>
            A passionate 2nd year CS student bridging classroom computer science theory with real-world project development.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Core Bio Profile */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <User size={22} color="var(--accent-cyan)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                    Profile & Philosophy
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>Computer Science & Engineering</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '24px' }}>
                Second-year Computer Science & Engineering student building a practical foundation in{' '}
                <strong style={{ color: '#fff' }}>C++, Python, Java, HTML/CSS, data structures, and problem solving</strong>.
                Interested in learning by building useful applications, connecting classroom concepts with real-world problems, and gradually exploring Artificial Intelligence and software development.
              </p>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderLeft: '3px solid var(--accent-neon)',
                  padding: '14px 16px',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '0.88rem',
                  color: 'var(--text-main)',
                  fontStyle: 'italic',
                }}
              >
                "Comfortable working through programming problems, learning new tools, and improving projects iteratively."
              </div>
            </div>

            {/* Quick Badges */}
            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span className="glass-pill" style={{ fontSize: '0.8rem' }}>🧩 Logical Thinking</span>
              <span className="glass-pill" style={{ fontSize: '0.8rem' }}>🔄 Iterative Dev</span>
              <span className="glass-pill" style={{ fontSize: '0.8rem' }}>🛠️ Debugging & Docs</span>
            </div>
          </motion.div>

          {/* Card 2: Education & Coursework */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ padding: 'clamp(20px, 4vw, 32px)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(112, 0, 255, 0.1)',
                  border: '1px solid rgba(112, 0, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={22} color="var(--accent-purple)" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Education & Coursework
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-purple)' }}>Academic Foundation</span>
              </div>
            </div>

            {/* Education Block */}
            <div
              style={{
                background: 'rgba(12, 16, 23, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px',
              }}
            >
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>
                {PORTFOLIO_DATA.personalInfo.degree}
              </div>
              <div style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', margin: '4px 0 8px' }}>
                {PORTFOLIO_DATA.personalInfo.branch} • {PORTFOLIO_DATA.personalInfo.year}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Current CGPA:</span>
                <span className="glass-pill" style={{ color: 'var(--accent-neon)', fontWeight: 700 }}>
                  {PORTFOLIO_DATA.personalInfo.cgpa}
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: 600 }}>
              Relevant Coursework / Concepts:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {PORTFOLIO_DATA.coursework.map((course, idx) => (
                <span
                  key={idx}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{
                    background: 'rgba(0, 242, 254, 0.06)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    color: 'var(--text-main)',
                    fontSize: '0.82rem',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-cyan)" /> {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Academic Strengths Grid */}
        <div style={{ marginTop: '50px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 800,
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Academic <span className="text-gradient-gold">Strengths</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {PORTFOLIO_DATA.academicStrengths.map((item, idx) => {
              const icons = [Lightbulb, Target, Flame, CheckCircle2];
              const IconComponent = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  className="glass-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{ padding: '24px' }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 183, 3, 0.1)',
                      border: '1px solid rgba(255, 183, 3, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    <IconComponent size={20} color="var(--accent-gold)" />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Study Planner',
    desc: 'A student-focused planning tool that organizes subjects, priorities, and schedules using Python and AI-oriented reasoning.',
    tech: ['Python', 'AI Concepts', 'Problem Solving'],
    highlights: ['Structured workflow for academic planning', 'AI-based practical study suggestions', 'Simple, extensible productivity app concept'],
    accent: 'var(--accent-lime)'
  },
  {
    title: 'Weather Forecasting Dashboard',
    desc: 'Web-based dashboard presenting real-time weather conditions and forecasts in a clean, responsive layout.',
    tech: ['HTML5', 'CSS3', 'Python', 'Web Dev'],
    highlights: ['Clean UI for current conditions & forecasts', 'Responsive mobile-first layout', 'Emphasis on clarity and usability'],
    accent: 'var(--accent-cyan)'
  },
  {
    title: 'DSA Algorithm Visualizer',
    desc: 'Interactive visualizer demonstrating sorting algorithms with step-by-step execution and C++ code tracking.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    highlights: ['Visual execution of sorting algorithms', 'Real-time step control & array customization', 'Makes abstract DSA concepts tangible'],
    accent: '#a855f7'
  },
];

export default function ProjectCards() {
  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">SELECTED ENGINEERING WORK</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
            FEATURED <span className="glow-text-cyan">PROJECTS</span>
          </h2>
        </div>

        {/* Bento Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
          {projects.map((proj, i) => (
            <motion.div key={i} className="bento-card" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

              {/* Card Header with Glowing Link Icon */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>{proj.title}</h3>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  background: 'rgba(255, 255, 255, 0.04)', 
                  border: '1px solid var(--border-glass)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0 
                }}>
                  <ArrowUpRight size={18} color={proj.accent} />
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>{proj.desc}</p>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {proj.tech.map((t, j) => (
                  <span key={j} className="badge-glow" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>{t}</span>
                ))}
              </div>

              {/* Highlights */}
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', background: 'rgba(0, 0, 0, 0.3)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
                {proj.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={14} color={proj.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

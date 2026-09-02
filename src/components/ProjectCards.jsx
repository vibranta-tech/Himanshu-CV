import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Study Planner',
    desc: 'A student-focused planning tool that organizes subjects, priorities, and schedules using Python and AI-oriented reasoning.',
    tech: ['Python', 'AI Concepts', 'Problem Solving'],
    highlights: ['Structured workflow for academic planning', 'AI-based practical study suggestions', 'Simple, extensible productivity app concept'],
  },
  {
    title: 'Weather Forecasting Dashboard',
    desc: 'Web-based dashboard presenting real-time weather conditions and forecasts in a clean, responsive layout.',
    tech: ['HTML5', 'CSS3', 'Python', 'Web Dev'],
    highlights: ['Clean UI for current conditions & forecasts', 'Responsive mobile-first layout', 'Emphasis on clarity and usability'],
  },
  {
    title: 'DSA Algorithm Visualizer',
    desc: 'Interactive visualizer demonstrating sorting algorithms with step-by-step execution and C++ code tracking.',
    tech: ['C++', 'Data Structures', 'Algorithms'],
    highlights: ['Visual execution of sorting algorithms', 'Real-time step control & array customization', 'Makes abstract DSA concepts tangible'],
  },
];

export default function ProjectCards() {
  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Sparkles size={14} /> Projects</div>
          <h2 className="section-heading">What I've <span className="gradient-text">Built</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
          {projects.map((proj, i) => (
            <motion.div key={i} className="card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ padding: 'clamp(18px, 4vw, 24px)', display: 'flex', flexDirection: 'column' }}>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.01em' }}>{proj.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>{proj.desc}</p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                {proj.tech.map((t, j) => <span key={j} className="pill" style={{ fontSize: '0.72rem', padding: '3px 9px' }}>{t}</span>)}
              </div>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {proj.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={14} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, ExternalLink, Play, CheckCircle2, ChevronRight, Layers, Cpu, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { AIStudyPlannerDemo, WeatherDashboardDemo, DSAVisualizerDemo } from './ProjectDemos';
import { soundFX } from '../utils/audio';

export default function ProjectsSection() {
  const [activeDemo, setActiveDemo] = useState('ai-study-planner');

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>
            <Sparkles size={16} /> Practical Work & Demos
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '1rem' }}>
            Student-driven software concepts converting classroom logic into interactive tools. Click any project demo to test it live!
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {PORTFOLIO_DATA.projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                soundFX.playClick();
                setActiveDemo(proj.id);
              }}
              onMouseEnter={() => soundFX.playHover()}
              style={{
                background: activeDemo === proj.id ? 'linear-gradient(135deg, #00f2fe 0%, #7000ff 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: activeDemo === proj.id ? '#ffffff' : 'var(--text-muted)',
                border: activeDemo === proj.id ? '1px solid var(--border-glow)' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: activeDemo === proj.id ? '0 0 20px rgba(0, 242, 254, 0.3)' : 'none',
              }}
            >
              <Eye size={16} color={activeDemo === proj.id ? '#00f2fe' : 'var(--text-muted)'} />
              {proj.title}
            </button>
          ))}
        </div>

        {/* Projects Display Area */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'start',
          }}
        >
          {PORTFOLIO_DATA.projects.map((proj) => {
            const isSelected = activeDemo === proj.id;
            return (
              <motion.div
                key={proj.id}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: '30px',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 0 30px rgba(0, 242, 254, 0.15)' : 'none',
                }}
              >
                {/* Header Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="glass-pill" style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem' }}>
                    {proj.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {proj.featured ? '⭐ Featured' : '💡 Core CS'}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {proj.tagline}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-main)',
                        fontSize: '0.78rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {proj.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Demo Trigger */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setActiveDemo(proj.id);
                  }}
                  className={isSelected ? 'btn-glow' : 'btn-outline'}
                  style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem' }}
                >
                  <Play size={16} /> {isSelected ? 'Currently Viewing Live Demo' : 'Launch Interactive Demo'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Live Interactive Demo View Container */}
        <div style={{ marginTop: '50px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeDemo === 'ai-study-planner' && <AIStudyPlannerDemo />}
              {activeDemo === 'weather-forecast-dashboard' && <WeatherDashboardDemo />}
              {activeDemo === 'dsa-visualizer' && <DSAVisualizerDemo />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

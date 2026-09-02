import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Cpu, Brain, Workflow, UserCheck, Code, Check, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Cpu: Cpu,
  Brain: Brain,
  Workflow: Workflow,
  UserCheck: UserCheck,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkillCode, setSelectedSkillCode] = useState(null);

  const categories = ['All', ...PORTFOLIO_DATA.technicalSkills.map((s) => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? PORTFOLIO_DATA.technicalSkills
    : PORTFOLIO_DATA.technicalSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding cyber-grid-bg" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
          <div className="section-subtitle" style={{ justifyContent: 'center' }}>
            <Code size={16} /> Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Competencies</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px', fontSize: '1rem' }}>
            Practical CS skills acquired through coursework, coding practice, and active project building.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '30px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundFX.playHover()}
              style={{
                background: activeCategory === cat ? 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)' : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#050b14' : 'var(--text-muted)',
                fontWeight: activeCategory === cat ? 700 : 500,
                border: activeCategory === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-heading)',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((group, groupIdx) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
                style={{ padding: 'clamp(18px, 4vw, 28px)', position: 'relative' }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent size={22} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800 }}>
                      {group.category}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{group.description}</p>
                  </div>
                </div>

                {/* Skill Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                            {skill.name}
                          </span>
                          {skill.badge && (
                            <span
                              style={{
                                fontSize: '0.7rem',
                                background: 'rgba(0, 255, 185, 0.1)',
                                border: '1px solid rgba(0, 255, 185, 0.3)',
                                color: 'var(--accent-neon)',
                                padding: '2px 8px',
                                borderRadius: '6px',
                                fontWeight: 500,
                              }}
                            >
                              {skill.badge}
                            </span>
                          )}
                        </div>

                        {/* Code snippet trigger button if available */}
                        {skill.code ? (
                          <button
                            onClick={() => {
                              soundFX.playClick();
                              setSelectedSkillCode({ name: skill.name, code: skill.code });
                            }}
                            onMouseEnter={() => soundFX.playHover()}
                            style={{
                              background: 'rgba(112, 0, 255, 0.15)',
                              border: '1px solid rgba(112, 0, 255, 0.4)',
                              color: 'var(--accent-cyan)',
                              fontSize: '0.72rem',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            <Terminal size={12} /> View Code
                          </button>
                        ) : (
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                            {skill.level}%
                          </span>
                        )}
                      </div>

                      {/* Animated Skill Progress Bar */}
                      <div
                        style={{
                          width: '100%',
                          height: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '3px',
                          overflow: 'hidden',
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          style={{
                            height: '100%',
                            background:
                              group.category === 'Programming Languages'
                                ? 'linear-gradient(90deg, #00f2fe 0%, #7000ff 100%)'
                                : group.category === 'Core CS Fundamentals'
                                ? 'linear-gradient(90deg, #ffb703 0%, #00ffb9 100%)'
                                : 'linear-gradient(90deg, #00f2fe 0%, #00ffb9 100%)',
                            borderRadius: '3px',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Code Snippet Modal Popup */}
        <AnimatePresence>
          {selectedSkillCode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkillCode(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="terminal-window"
                style={{ width: '100%', maxWidth: '550px', padding: '20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginLeft: '10px' }}>
                      {selectedSkillCode.name} Practical Code Sample
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedSkillCode(null)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>

                <div className="code-block" style={{ fontSize: '0.9rem' }}>
                  {selectedSkillCode.code}
                </div>

                <div style={{ marginTop: '16px', textAlign: 'right' }}>
                  <button
                    onClick={() => setSelectedSkillCode(null)}
                    className="btn-glow"
                    style={{ padding: '6px 16px', fontSize: '0.85rem' }}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

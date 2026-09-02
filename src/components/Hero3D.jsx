import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, FileText, ArrowRight, Code2, Brain, Cpu, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function Hero3D({ onOpenTerminal }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'C++ | Python | Java | DSA & Algorithms | Web Dev | AI Concepts';
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / rect.height) * 15, y: -(x / rect.width) * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
      className="cyber-grid-bg"
    >
      <div className="glow-orb-cyan" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-orb-purple" style={{ top: '30%', right: '5%' }}></div>

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '30px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <span className="glass-pill" style={{ color: 'var(--accent-cyan)' }}>
                <Sparkles size={14} /> 2nd Year Computer Science & Engineering
              </span>
              <span className="glass-pill" style={{ color: 'var(--accent-neon)' }}>
                ⚡ Coordinator Head @ Vibranta
              </span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 7vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              Hi, I'm <span className="text-gradient">Himanshu Mishra</span>
            </h1>

            {/* Terminal Typewriter Bar */}
            <div
              style={{
                background: 'rgba(12, 16, 23, 0.8)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: '10px',
                padding: '10px 14px',
                marginBottom: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.65rem, 2.5vw, 0.92rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                overflow: 'hidden',
              }}
            >
              <span style={{ color: 'var(--accent-cyan)', whiteSpace: 'nowrap' }}>himanshu@lpu:~$</span>
              <span style={{ color: 'var(--text-main)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{typedText}</span>
              <span style={{ animation: 'pulse 1s infinite', color: 'var(--accent-cyan)', flexShrink: 0 }}>|</span>
            </div>

            {/* Summary Bio */}
            <p
              style={{
                fontSize: 'clamp(0.88rem, 3vw, 1.05rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '540px',
              }}
            >
              {PORTFOLIO_DATA.personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '30px' }}>
              <a
                href="#projects"
                className="btn-glow hero-btn"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
              >
                <Sparkles size={16} /> Explore Projects <ArrowRight size={16} />
              </a>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenTerminal();
                }}
                className="btn-outline hero-btn"
                onMouseEnter={() => soundFX.playHover()}
              >
                <Terminal size={16} color="var(--accent-cyan)" /> Launch Terminal
              </button>
            </div>

            {/* Quick Contact & Info Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: 'clamp(0.75rem, 2.5vw, 0.88rem)', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} color="var(--accent-cyan)" style={{ flexShrink: 0 }} /> Lovely Professional University
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                <Mail size={14} color="var(--accent-neon)" style={{ flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{PORTFOLIO_DATA.personalInfo.email}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Student Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ perspective: 1000 }}
          >
            <div
              className="glass-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
                padding: 'clamp(16px, 4vw, 30px)',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, rgba(18, 24, 38, 0.9) 0%, rgba(10, 14, 22, 0.95) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
              }}
            >
              {/* Glowing Corner Accents */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(0,242,254,0.3) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  LPU // B.TECH CSE 2024-2028
                </span>
              </div>

              {/* Card Content Grid */}
              <div style={{ transform: 'translateZ(30px)', transition: 'transform 0.1s ease-out' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #00f2fe 0%, #7000ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 25px rgba(0, 242, 254, 0.5)',
                    }}
                  >
                    <Code2 size={32} color="#050b14" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
                      Himanshu Mishra
                    </h3>
                    <p style={{ color: 'var(--accent-cyan)', fontSize: '0.88rem', fontWeight: 600 }}>
                      Student Developer & Coordinator
                    </p>
                  </div>
                </div>

                {/* Quick Academic & Skill Badges Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Current CGPA</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-neon)' }}>6.9 / 10</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Leadership Role</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>Coordinator Head</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Core Language</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f6fc' }}>C++ & Python</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Focus Areas</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-gold)' }}>DSA & Web AI</div>
                  </div>
                </div>

                {/* Practical Work Sneak Peek */}
                <div
                  style={{
                    background: 'rgba(0, 242, 254, 0.05)',
                    border: '1px dashed rgba(0, 242, 254, 0.3)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>🚀 Built AI Planner & Weather Dashboard</span>
                  <ChevronRight size={16} color="var(--accent-cyan)" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

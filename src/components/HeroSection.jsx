import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowUpRight, Briefcase, GraduationCap, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import himanshuPhoto from '../assets/himanshu.png';

export default function HeroSection() {
  const [typed, setTyped] = useState('');
  const fullText = 'CSE Student · Developer · Coordinator Head @ ';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= fullText.length) { setTyped(fullText.slice(0, i)); i++; } else clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="section" style={{ minHeight: '94vh', display: 'flex', alignItems: 'center', paddingTop: '40px' }}>
      <div className="container">
        
        {/* Asymmetrical Bento Hero Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '28px', alignItems: 'center' }}>

          {/* Left Column: Kinetic Text & Bio (7 cols on desktop) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ gridColumn: 'span 7' }} className="hero-left-col">
            
            {/* Top Glowing Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              <span className="badge-glow">
                <GraduationCap size={14} /> 2nd Year B.Tech CSE
              </span>
              <span className="badge-cyan">
                <Briefcase size={14} /> Open for Internships
              </span>
            </div>

            {/* Oversized Kinetic Heading */}
            <h1 className="display-title" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', marginBottom: '18px', color: '#ffffff' }}>
              HI, I'M <br />
              <span className="glow-text-lime">HIMANSHU</span> <span className="text-gradient">MISHRA</span>
            </h1>

            {/* Terminal Typing Bar */}
            <div style={{ 
              background: 'rgba(10, 14, 23, 0.8)', 
              border: '1px solid var(--border-glass)', 
              borderRadius: '12px',
              padding: '12px 18px', 
              fontFamily: 'var(--font-mono)', 
              fontSize: 'clamp(0.76rem, 2vw, 0.88rem)', 
              marginBottom: '28px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              flexWrap: 'wrap',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
            }}>
              <Terminal size={15} color="var(--accent-lime)" />
              <span style={{ color: 'var(--accent-lime)', fontWeight: 600 }}>dev:~#</span>
              <span style={{ color: '#e5e7eb' }}>{typed}</span>
              {typed.length >= fullText.length && (
                <a href="https://vibranta.in" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent-cyan)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Vibranta <ExternalLink size={13} />
                </a>
              )}
              <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent-lime)' }}>_</span>
            </div>

            {/* Bio */}
            <p style={{ 
              fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', 
              color: 'var(--text-muted)', 
              lineHeight: 1.7, 
              marginBottom: '32px', 
              maxWidth: '580px' 
            }}>
              Second-year Computer Science student at <strong style={{ color: '#ffffff', fontWeight: 600 }}>Lovely Professional University</strong> building practical skills in C++, Python, Web Development, and AI. Passionate about turning classroom concepts into real projects.
            </p>

            {/* Quick Contacts */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px', fontSize: '0.84rem' }}>
              <span className="chip-tag"><MapPin size={13} style={{ verticalAlign: 'text-bottom', color: 'var(--accent-lime)', marginRight: '4px' }} /> LPU, Punjab</span>
              <span className="chip-tag"><Mail size={13} style={{ verticalAlign: 'text-bottom', color: 'var(--accent-lime)', marginRight: '4px' }} /> himanshumishra73071@gmail.com</span>
              <span className="chip-tag"><Phone size={13} style={{ verticalAlign: 'text-bottom', color: 'var(--accent-lime)', marginRight: '4px' }} /> +91 7307141622</span>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#projects" className="btn-awwwards">Explore Work <ArrowUpRight size={18} /></a>
              <a href="#contact" className="btn-awwwards-glass">Get in Touch</a>
            </div>
          </motion.div>

          {/* Right Column: Bento Profile Card with Hover Reveal Photo (5 cols on desktop) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ gridColumn: 'span 5' }} className="hero-right-col">
            
            <div className="bento-card" style={{ textAlign: 'center', padding: '32px' }}>
              
              {/* Monochromatic Profile Image with Hover Color Reveal */}
              <div className="mono-image-container" style={{ 
                width: 'clamp(150px, 30vw, 190px)', 
                height: 'clamp(150px, 30vw, 190px)', 
                borderRadius: '50%', 
                margin: '0 auto 24px', 
                border: '2px solid rgba(204, 255, 0, 0.4)', 
                boxShadow: '0 0 35px rgba(204, 255, 0, 0.15)' 
              }}>
                <img src={himanshuPhoto} alt="Himanshu Mishra" className="mono-image" style={{ objectPosition: 'center 15%', transform: 'scale(1.25)' }} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                HIMANSHU MISHRA
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--accent-lime)', fontWeight: 600, marginBottom: '24px' }}>
                Student Developer & Leader @{' '}
                <a href="https://vibranta.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-lime)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  vibranta.in ↗
                </a>
              </p>

              {/* Bento Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { label: 'CGPA', value: '6.9 / 10', color: 'var(--accent-lime)' },
                  { label: 'Role', value: 'Coordinator Head', color: 'var(--accent-cyan)' },
                  { label: 'Languages', value: 'C++ · Python · Java', color: '#ffffff' },
                  { label: 'Focus', value: 'DSA & Web Dev', color: 'var(--accent-violet)' },
                ].map((s, i) => (
                  <div key={i} style={{ 
                    background: 'rgba(255, 255, 255, 0.02)', 
                    border: '1px solid var(--border-glass)', 
                    padding: '12px', 
                    borderRadius: '10px', 
                    textAlign: 'left' 
                  }}>
                    <div style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: s.color, marginTop: '3px' }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @media (max-width: 1024px) {
          .hero-left-col, .hero-right-col { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}

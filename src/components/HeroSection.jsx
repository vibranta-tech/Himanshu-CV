import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowDown, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
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
    <section id="top" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '60px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', alignItems: 'center' }}>

          {/* Left: Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <span className="pill"><GraduationCap size={13} /> 2nd Year B.Tech CSE</span>
              <span className="pill" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.25)', color: '#34d399' }}>
                <Briefcase size={13} /> Open for Internships
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '12px' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Himanshu Mishra</span>
            </h1>

            {/* Typing Bar with clickable Vibranta link */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.72rem, 2.2vw, 0.88rem)', color: 'var(--text-secondary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--accent)' }}>→</span>
              <span>{typed}</span>
              {typed.length >= fullText.length && (
                <a href="https://vibranta.in" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--accent-light)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                  Vibranta <ExternalLink size={12} />
                </a>
              )}
              <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent)' }}>|</span>
            </div>

            <p style={{ fontSize: 'clamp(0.88rem, 2.5vw, 1rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '520px' }}>
              Second-year Computer Science student at <strong style={{ color: 'var(--text-primary)' }}>Lovely Professional University</strong> building practical skills in C++, Python, Web Development, and AI. Passionate about turning classroom concepts into real projects.
            </p>

            {/* Quick Info */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={14} color="var(--accent)" /> LPU, Punjab</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Mail size={14} color="var(--accent)" /> himanshumishra73071@gmail.com</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Phone size={14} color="var(--accent)" /> +91 7307141622</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#projects" className="btn-primary"><ArrowDown size={16} /> View Projects</a>
              <a href="#contact" className="btn-ghost"><Mail size={16} /> Get in Touch</a>
            </div>
          </motion.div>

          {/* Right: Photo + Stats Card */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="card" style={{ padding: 'clamp(24px, 5vw, 32px)', textAlign: 'center' }}>
              {/* Profile Image - Zoomed */}
              <div style={{ width: 'clamp(150px, 32vw, 200px)', height: 'clamp(150px, 32vw, 200px)', borderRadius: '50%', margin: '0 auto 20px', overflow: 'hidden', border: '4px solid var(--accent)', boxShadow: '0 0 35px rgba(59, 130, 246, 0.25)' }}>
                <img src={himanshuPhoto} alt="Himanshu Mishra" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', transform: 'scale(1.25)', transition: 'transform 0.3s ease' }} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '4px' }}>Himanshu Mishra</h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--accent-light)', fontWeight: 600, marginBottom: '18px' }}>
                Student Developer & Leader @{' '}
                <a href="https://vibranta.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                  vibranta.in ↗
                </a>
              </p>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { label: 'CGPA', value: '6.9 / 10', color: 'var(--emerald)' },
                  { label: 'Role', value: 'Coordinator Head', color: 'var(--accent-light)' },
                  { label: 'Languages', value: 'C++ · Python · Java', color: 'var(--text-primary)' },
                  { label: 'Focus', value: 'DSA & Web Dev', color: 'var(--amber)' },
                ].map((s, i) => (
                  <div key={i} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: s.color, marginTop: '2px' }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}

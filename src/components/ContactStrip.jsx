import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';

export default function ContactStrip() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState('');

  const copy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => { setForm({ name: '', email: '', message: '' }); setSent(false); }, 4000);
  };

  const contacts = [
    { icon: Mail, label: 'EMAIL', value: 'himanshumishra73071@gmail.com', href: 'mailto:himanshumishra73071@gmail.com', field: 'email' },
    { icon: Phone, label: 'PHONE', value: '+91 7307141622', href: 'tel:+917307141622', field: 'phone' },
    { icon: MapPin, label: 'LOCATION', value: 'Lovely Professional University, Punjab', field: '' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">INITIATE CONTACT</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
            LET'S <span className="glow-text-lime">CONNECT</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '0.95rem' }}>Open for internships, collaborations, and engineering conversations.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '28px', maxWidth: '1000px', margin: '0 auto' }}>

          {/* Left: Contact Info Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bento-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '10px', 
                      background: 'rgba(204, 255, 0, 0.08)', 
                      border: '1px solid rgba(204, 255, 0, 0.25)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0 
                    }}>
                      <Icon size={20} color="var(--accent-lime)" />
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.value}</a>
                        : <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#ffffff' }}>{c.value}</span>
                      }
                    </div>
                  </div>
                  {c.field && (
                    <button onClick={() => copy(c.value, c.field)} 
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.04)', 
                        border: '1px solid var(--border-glass)', 
                        borderRadius: '8px', 
                        padding: '8px', 
                        cursor: 'pointer', 
                        color: copied === c.field ? 'var(--accent-lime)' : 'var(--text-muted)', 
                        flexShrink: 0 
                      }}>
                      {copied === c.field ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Glassmorphism Form */}
          <motion.div className="bento-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ padding: '28px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px' }}>
                <CheckCircle2 size={42} color="var(--accent-lime)" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700 }}>MESSAGE TRANSMITTED</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '6px' }}>Thank you. I will respond to your message shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>YOUR NAME</label>
                  <input type="text" required placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="glass-input" />
                </div>
                
                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>EMAIL ADDRESS</label>
                  <input type="email" required placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="glass-input" />
                </div>
                
                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>MESSAGE</label>
                  <textarea rows={3} required placeholder="Write your message here..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="glass-input" style={{ resize: 'vertical' }} />
                </div>

                <button type="submit" className="btn-awwwards" style={{ justifyContent: 'center', width: '100%', marginTop: '6px' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

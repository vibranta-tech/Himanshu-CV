import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Linkedin } from 'lucide-react';

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
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => { setForm({ name: '', email: '', message: '' }); setSent(false); }, 4000);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: 'himanshumishra73071@gmail.com', href: 'mailto:himanshumishra73071@gmail.com', field: 'email' },
    { icon: Phone, label: 'Phone', value: '+91 7307141622', href: 'tel:+917307141622', field: 'phone' },
    { icon: MapPin, label: 'Location', value: 'Lovely Professional University, Punjab', field: '' },
  ];

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Mail size={14} /> Contact</div>
          <h2 className="section-heading">Let's <span className="gradient-text">Connect</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.9rem' }}>Open for internships, collaborations, and conversations.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>

          {/* Left: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={18} color="var(--accent)" />
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.value}</a>
                        : <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{c.value}</span>
                      }
                    </div>
                  </div>
                  {c.field && (
                    <button onClick={() => copy(c.value, c.field)} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '6px', cursor: 'pointer', color: copied === c.field ? 'var(--emerald)' : 'var(--text-muted)', flexShrink: 0 }}>
                      {copied === c.field ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Simple Form */}
          <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ padding: '20px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <CheckCircle2 size={36} color="var(--emerald)" style={{ margin: '0 auto 10px' }} />
                <h4 style={{ fontWeight: 700 }}>Message Sent!</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Thanks for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', background: 'rgba(15,23,42,0.5)', border: '1px solid var(--border)', color: '#fff', padding: '10px 12px', borderRadius: 'var(--radius-sm)', outline: 'none', fontSize: '0.88rem' }} />
                <input type="email" required placeholder="Email address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  style={{ width: '100%', background: 'rgba(15,23,42,0.5)', border: '1px solid var(--border)', color: '#fff', padding: '10px 12px', borderRadius: 'var(--radius-sm)', outline: 'none', fontSize: '0.88rem' }} />
                <textarea rows={3} required placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', background: 'rgba(15,23,42,0.5)', border: '1px solid var(--border)', color: '#fff', padding: '10px 12px', borderRadius: 'var(--radius-sm)', outline: 'none', fontSize: '0.88rem', resize: 'vertical' }} />
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Brain, Users, Wrench } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Programming', items: ['C++ (DSA)', 'Python', 'Java'], color: '#3b82f6' },
  { icon: Globe, title: 'Web Dev', items: ['HTML/CSS', 'JavaScript', 'React', 'Responsive UI'], color: '#10b981' },
  { icon: Cpu, title: 'Core CS', items: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving'], color: '#f59e0b' },
  { icon: Brain, title: 'AI & Data', items: ['AI Concepts', 'Automation', 'Data-Driven Apps'], color: '#8b5cf6' },
  { icon: Wrench, title: 'Dev Practices', items: ['Debugging', 'Documentation', 'Modular Design'], color: '#ec4899' },
  { icon: Users, title: 'Soft Skills', items: ['Team Leadership', 'Communication', 'Time Management'], color: '#06b6d4' },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Code2 size={14} /> Technical Skills</div>
          <h2 className="section-heading">What I <span className="gradient-text">Work With</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
          {skills.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div key={i} className="card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
                style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: 'var(--radius-sm)', background: `${group.color}15`, border: `1px solid ${group.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} color={group.color} />
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{group.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.items.map((skill, j) => (
                    <span key={j} className="tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

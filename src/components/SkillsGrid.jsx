import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Brain, Users, Wrench } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Programming', items: ['C++ (DSA)', 'Python', 'Java'], color: 'var(--accent-lime)', colSpan: 'span 4' },
  { icon: Globe, title: 'Web Dev', items: ['HTML/CSS', 'JavaScript', 'React', 'Responsive UI'], color: 'var(--accent-cyan)', colSpan: 'span 8' },
  { icon: Cpu, title: 'Core CS', items: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving'], color: '#a855f7', colSpan: 'span 6' },
  { icon: Brain, title: 'AI & Data', items: ['AI Concepts', 'Automation', 'Data-Driven Apps'], color: '#ec4899', colSpan: 'span 6' },
  { icon: Wrench, title: 'Dev Practices', items: ['Debugging', 'Documentation', 'Modular Design'], color: '#f59e0b', colSpan: 'span 5' },
  { icon: Users, title: 'Soft Skills', items: ['Team Leadership', 'Communication', 'Time Management'], color: 'var(--accent-lime)', colSpan: 'span 7' },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">TECHNICAL COMPETENCIES</div>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
            SKILLS & <span className="glow-text-lime">CAPABILITIES</span>
          </h2>
        </div>

        {/* Sleek Bento Box Grid */}
        <div className="bento-grid">
          {skills.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div key={i} className="bento-card bento-skill-card" 
                initial={{ opacity: 0, y: 25 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ gridColumn: group.colSpan }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div style={{ 
                    width: '38px', 
                    height: '38px', 
                    borderRadius: '10px', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: `1px solid ${group.color}40`, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: `0 0 15px ${group.color}20` 
                  }}>
                    <Icon size={20} color={group.color} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>{group.title}</h3>
                </div>

                {/* Skill Chip Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map((skill, j) => (
                    <span key={j} className="chip-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bento-skill-card { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}

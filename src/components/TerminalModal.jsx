import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Maximize2, Sparkles, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Himanshu Mishra CS Interactive Shell v2.4' },
    { type: 'system', text: 'Type "help" to list available commands (e.g., bio, skills, projects, vibranta, contact, matrix, clear).' },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    soundFX.playClick();

    const newHistory = [...history, { type: 'input', text: `himanshu@lpu:~$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  - help      : Show this help menu
  - bio       : Display student profile & summary
  - skills    : List technical skills (C++, Python, Web, DSA)
  - projects  : View AI Planner & Weather Dashboard details
  - vibranta  : View Vibranta Coordinator Head leadership details
  - education : View B.Tech CSE & CGPA information
  - contact   : Display email, phone & social links
  - matrix    : Secret Matrix mode
  - clear     : Clear terminal history`,
        });
        break;

      case 'bio':
      case 'profile':
        newHistory.push({
          type: 'output',
          text: `Himanshu Mishra - B.Tech CSE 2nd Year Student @ Lovely Professional University
Profile: ${PORTFOLIO_DATA.personalInfo.shortBio}`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL SKILLS:
- Programming: C++ (85%), Python (82%), Java (75%)
- Web Dev: HTML5, CSS3, Responsive UI Fundamentals, JavaScript/React
- Core CS: DSA, OOPs, Problem Solving, Modular Thinking
- AI & Data: AI Concepts, Automation Ideas, Data Applications`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `PRACTICAL WORK & PROJECTS:
1. AI-Powered Study Planner (Python, AI Concepts)
2. Real-Time Weather Forecasting Dashboard (HTML/CSS, Python)
3. C++ & DSA Algorithm Visualizer (C++, DSA)`,
        });
        break;

      case 'vibranta':
      case 'experience':
        newHistory.push({
          type: 'output',
          text: `COORDINATOR HEAD @ STUDENT ORGANIZATION VIBRANTA (2025 - Present)
- Directed team operations & multi-departmental coordination
- Executed GRAVEYARD 2026 (marketing, ticket sales, social media strategy)
- Managed artist relations & external collaborations`,
        });
        break;

      case 'education':
      case 'cgpa':
        newHistory.push({
          type: 'output',
          text: `Degree: Bachelor of Technology (B.Tech) - Computer Science & Engineering (2nd Year)
Institution: Lovely Professional University (LPU)
Current CGPA: 6.9 / 10`,
        });
        break;

      case 'contact':
      case 'email':
        newHistory.push({
          type: 'output',
          text: `CONTACT INFO:
- Email: ${PORTFOLIO_DATA.personalInfo.email}
- Phone: ${PORTFOLIO_DATA.personalInfo.phone}
- LinkedIn: ${PORTFOLIO_DATA.personalInfo.linkedin}
- Institution: ${PORTFOLIO_DATA.personalInfo.institution}`,
        });
        break;

      case 'matrix':
        newHistory.push({
          type: 'output',
          text: `01001000 01101001 01101101 01100001 01101110 01110011 01101000 01110101
[MATRIX ACCESS GRANTED] -> Welcome to the 2nd Year Computer Science Matrix!`,
        });
        break;

      case 'sudo':
        newHistory.push({
          type: 'output',
          text: `himanshu is not in the sudoers file. This incident will be reported to the LPU Department of CSE 😜`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmdStr}". Type "help" for a list of available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.82)',
          backdropFilter: 'blur(10px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="terminal-window scanline"
          style={{
            width: '100%',
            maxWidth: '720px',
            height: '480px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              background: '#0d1117',
              padding: '12px 18px',
              borderBottom: '1px solid rgba(0, 242, 254, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', cursor: 'pointer' }} onClick={onClose} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginLeft: '12px', fontFamily: 'var(--font-mono)' }}>
                himanshu@lpu-cs: ~ (zsh)
              </span>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Terminal Content Body */}
          <div
            style={{
              flex: 1,
              padding: '18px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.88rem',
              color: '#f0f6fc',
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ whiteSpace: 'pre-wrap' }}>
                {item.type === 'system' && <span style={{ color: 'var(--accent-cyan)' }}>{item.text}</span>}
                {item.type === 'input' && <span style={{ color: 'var(--accent-neon)', fontWeight: 600 }}>{item.text}</span>}
                {item.type === 'output' && <span style={{ color: '#c9d1d9' }}>{item.text}</span>}
                {item.type === 'error' && <span style={{ color: '#ff5f56' }}>{item.text}</span>}
              </div>
            ))}

            {/* Active Input Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}
            >
              <span style={{ color: 'var(--accent-cyan)' }}>himanshu@lpu:~$</span>
              <input
                type="text"
                autoFocus
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                }}
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

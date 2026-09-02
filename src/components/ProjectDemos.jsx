import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Play, RotateCcw, CheckSquare, Square, Sun, CloudRain, Wind, Droplets, Calendar, Sparkles, AlertCircle, BarChart2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

/* ====================================================================
   DEMO 1: AI STUDY PLANNER INTERACTIVE MINI-APP
   ==================================================================== */
export function AIStudyPlannerDemo() {
  const [subject, setSubject] = useState('Data Structures & Algorithms');
  const [days, setDays] = useState(5);
  const [priority, setPriority] = useState('High');
  const [plan, setPlan] = useState(null);
  const [completedTasks, setCompletedTasks] = useState({});

  const generatePlan = () => {
    soundFX.playSuccess();
    const tasksPerSubject = {
      'Data Structures & Algorithms': [
        { day: 1, topic: 'Arrays, Vectors & Dynamic Sizing', hours: '2.5 hrs', desc: 'Master memory layout, contiguous allocation, and vector operations in C++.' },
        { day: 2, topic: 'Linked Lists & Pointer Manipulation', hours: '3.0 hrs', desc: 'Implement singly & doubly linked lists with insertion & deletion pointers.' },
        { day: 3, topic: 'Stacks, Queues & Recursion', hours: '2.5 hrs', desc: 'Understand LIFO/FIFO principles, call stacks, and recursive tree calls.' },
        { day: 4, topic: 'Binary Trees & Traversals', hours: '3.5 hrs', desc: 'Practice Inorder, Preorder, Postorder & Level order traversals.' },
        { day: 5, topic: 'Sorting Algorithms & Time Complexity', hours: '3.0 hrs', desc: 'Analyze O(n²) vs O(n log n) algorithms and practice LeetCode problems.' },
      ],
      'Python & AI Concepts': [
        { day: 1, topic: 'Python Syntax & Data Structures', hours: '2.0 hrs', desc: 'Lists, Dictionaries, Sets, Tuples, and List Comprehensions.' },
        { day: 2, topic: 'Object-Oriented Python', hours: '2.5 hrs', desc: 'Classes, Objects, Inheritance, Encapsulation, and Dunder methods.' },
        { day: 3, topic: 'NumPy & Basic Data Handling', hours: '3.0 hrs', desc: 'Multi-dimensional arrays, vectorization, and data matrix operations.' },
        { day: 4, topic: 'Introduction to Search Algorithms', hours: '3.0 hrs', desc: 'Breadth-First Search (BFS), Depth-First Search (DFS) & Heuristics.' },
        { day: 5, topic: 'Building a Smart Planner Logic', hours: '3.5 hrs', desc: 'Convert student goal constraints into priority queue recommendations.' },
      ],
      'Web Development (HTML/CSS/JS)': [
        { day: 1, topic: 'HTML5 Semantic Layouts & SEO', hours: '2.0 hrs', desc: 'Proper tag hierarchy, meta descriptions, accessibility standards.' },
        { day: 2, topic: 'Modern CSS Grid & Flexbox', hours: '3.0 hrs', desc: 'Building responsive glassmorphic cards and dynamic web layouts.' },
        { day: 3, topic: 'DOM Manipulation & Event Listeners', hours: '2.5 hrs', desc: 'Handling clicks, form inputs, dynamic CSS class switching.' },
        { day: 4, topic: 'Async JavaScript & Fetch API', hours: '3.0 hrs', desc: 'Working with Promises, async/await, and REST API endpoints.' },
        { day: 5, topic: 'React Components & State Management', hours: '3.5 hrs', desc: 'Building reusable UI components and handling application state.' },
      ],
    };

    const selectedTasks = (tasksPerSubject[subject] || tasksPerSubject['Data Structures & Algorithms']).slice(0, days);
    setPlan(selectedTasks);
    setCompletedTasks({});
  };

  useEffect(() => {
    generatePlan();
  }, []);

  const toggleTask = (index) => {
    soundFX.playClick();
    const updated = { ...completedTasks, [index]: !completedTasks[index] };
    setCompletedTasks(updated);

    // Trigger confetti if all tasks finished!
    if (plan && Object.keys(updated).filter((k) => updated[k]).length === plan.length) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div style={{ background: '#090d16', border: '1px solid rgba(0, 242, 254, 0.25)', borderRadius: '16px', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles color="var(--accent-cyan)" size={22} />
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>
            AI Study Planner Simulator
          </h4>
        </div>
        <span className="glass-pill" style={{ color: 'var(--accent-neon)', fontSize: '0.78rem' }}>
          Python AI Logic
        </span>
      </div>

      {/* Control Form */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '20px' }}>
        <div>
          <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
            Target Subject
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
            }}
          >
            <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
            <option value="Python & AI Concepts">Python & AI Concepts</option>
            <option value="Web Development (HTML/CSS/JS)">Web Development (HTML/CSS/JS)</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
            Study Timeframe (Days)
          </label>
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
            }}
          >
            <option value={3}>3 Days Crash Course</option>
            <option value={5}>5 Days Complete Sprint</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button
            onClick={generatePlan}
            className="btn-glow"
            style={{ width: '100%', padding: '9px 16px', fontSize: '0.85rem', justifyContent: 'center' }}
          >
            <Play size={14} /> Generate Schedule
          </button>
        </div>
      </div>

      {/* Generated Tasks List */}
      {plan && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            <span>Generated AI Routine for: <strong style={{ color: 'var(--accent-cyan)' }}>{subject}</strong></span>
            <span>Progress: {Object.keys(completedTasks).filter((k) => completedTasks[k]).length} / {plan.length} Done</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {plan.map((item, idx) => {
              const isDone = !!completedTasks[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleTask(idx)}
                  style={{
                    background: isDone ? 'rgba(0, 255, 185, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                    border: isDone ? '1px solid rgba(0, 255, 185, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ marginTop: '2px', color: isDone ? 'var(--accent-neon)' : 'var(--text-muted)' }}>
                    {isDone ? <CheckSquare size={18} /> : <Square size={18} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: isDone ? 'var(--accent-neon)' : '#fff' }}>
                        Day {item.day}: {item.topic}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                        ⏱️ {item.hours}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ====================================================================
   DEMO 2: REAL-TIME WEATHER FORECASTING DASHBOARD INTERACTIVE WIDGET
   ==================================================================== */
export function WeatherDashboardDemo() {
  const [city, setCity] = useState('Phagwara (LPU)');

  const cityWeatherData = {
    'Phagwara (LPU)': { temp: '31°C', condition: 'Sunny & Clear', humidity: '58%', wind: '12 km/h', high: '34°', low: '26°', icon: Sun },
    'New Delhi': { temp: '35°C', condition: 'Hazy Sun', humidity: '52%', wind: '15 km/h', high: '37°', low: '28°', icon: Sun },
    'Mumbai': { temp: '29°C', condition: 'Passing Showers', humidity: '82%', wind: '22 km/h', high: '31°', low: '25°', icon: CloudRain },
    'London': { temp: '18°C', condition: 'Overcast & Cool', humidity: '68%', wind: '19 km/h', high: '20°', low: '14°', icon: Wind },
    'Tokyo': { temp: '26°C', condition: 'Clear Sky', humidity: '64%', wind: '10 km/h', high: '28°', low: '21°', icon: Sun },
  };

  const current = cityWeatherData[city] || cityWeatherData['Phagwara (LPU)'];
  const WeatherIcon = current.icon;

  return (
    <div style={{ background: '#090d16', border: '1px solid rgba(0, 242, 254, 0.25)', borderRadius: '16px', padding: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sun color="var(--accent-gold)" size={22} />
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>
            Live Weather Forecasting Dashboard
          </h4>
        </div>
        <span className="glass-pill" style={{ color: 'var(--accent-cyan)', fontSize: '0.78rem' }}>
          HTML/CSS & Python
        </span>
      </div>

      {/* City Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {Object.keys(cityWeatherData).map((c) => (
          <button
            key={c}
            onClick={() => {
              soundFX.playClick();
              setCity(c);
            }}
            onMouseEnter={() => soundFX.playHover()}
            style={{
              background: city === c ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: city === c ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
              color: city === c ? 'var(--accent-cyan)' : 'var(--text-muted)',
              fontSize: '0.82rem',
              padding: '6px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: city === c ? 700 : 500,
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Weather Display Panel */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.9) 0%, rgba(12, 16, 23, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Location Forecast</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: '2px 0 8px' }}>
            {city}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <WeatherIcon size={48} color="var(--accent-gold)" />
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)' }}>
                {current.temp}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{current.condition}</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Droplets size={14} color="var(--accent-cyan)" /> Humidity
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
              {current.humidity}
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Wind size={14} color="var(--accent-neon)" /> Wind Speed
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
              {current.wind}
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Day High</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-gold)', marginTop: '2px' }}>
              {current.high}
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 14px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Day Low</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-blue)', marginTop: '2px' }}>
              {current.low}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====================================================================
   DEMO 3: DSA SORTING VISUALIZER (C++ CORE DSA DEMO)
   ==================================================================== */
export function DSAVisualizerDemo() {
  const [array, setArray] = useState([45, 12, 89, 34, 67, 23, 78, 56]);
  const [sorting, setSorting] = useState(false);
  const [activeIdxs, setActiveIdxs] = useState([]);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');

  const resetArray = () => {
    soundFX.playClick();
    const newArr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 80) + 15);
    setArray(newArr);
    setActiveIdxs([]);
  };

  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIdxs([j, j + 1]);
        soundFX.playHover();
        await new Promise((r) => setTimeout(r, 250));
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
        }
      }
    }
    setActiveIdxs([]);
    setSorting(false);
    confetti({ particleCount: 40, spread: 50 });
  };

  return (
    <div style={{ background: '#090d16', border: '1px solid rgba(0, 242, 254, 0.25)', borderRadius: '16px', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BarChart2 color="var(--accent-purple)" size={22} />
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>
            C++ DSA Bubble Sort Visualizer
          </h4>
        </div>
        <span className="glass-pill" style={{ color: 'var(--accent-gold)', fontSize: '0.78rem' }}>
          O(n²) DSA Logic
        </span>
      </div>

      {/* Visualizer Bars */}
      <div
        style={{
          height: '180px',
          background: 'rgba(12, 16, 23, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        {array.map((val, idx) => {
          const isActive = activeIdxs.includes(idx);
          return (
            <div
              key={idx}
              style={{
                width: '32px',
                height: `${val * 1.6}px`,
                background: isActive ? 'linear-gradient(to top, #ff2a85, #ffb703)' : 'linear-gradient(to top, #00f2fe, #7000ff)',
                borderRadius: '6px 6px 0 0',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#fff',
                paddingBottom: '4px',
              }}
            >
              {val}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button
          onClick={bubbleSort}
          disabled={sorting}
          className="btn-glow"
          style={{ padding: '8px 18px', fontSize: '0.85rem' }}
        >
          <Play size={14} /> {sorting ? 'Sorting in C++...' : 'Run Bubble Sort'}
        </button>

        <button
          onClick={resetArray}
          disabled={sorting}
          className="btn-outline"
          style={{ padding: '8px 18px', fontSize: '0.85rem' }}
        >
          <RotateCcw size={14} /> Shuffle Array
        </button>
      </div>
    </div>
  );
}

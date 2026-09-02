export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Himanshu Mishra",
    role: "B.Tech Computer Science & Engineering • 2nd Year Student",
    shortBio: "Building a practical foundation in C++, Python, Java, HTML/CSS, data structures, and problem solving. Interested in learning by building useful applications, connecting classroom concepts with real-world problems, and exploring AI.",
    email: "himanshumishra73071@gmail.com",
    phone: "+91 7307141622",
    linkedin: "https://linkedin.com",
    institution: "Lovely Professional University (LPU)",
    location: "Phagwara, Punjab, India",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    year: "2nd Year",
    cgpa: "6.9 / 10",
    status: "Open for Internships & Collaborations 🚀"
  },

  technicalSkills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      description: "Core algorithms, data structures & object-oriented programming",
      skills: [
        { name: "C++", level: 85, badge: "Primary", code: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Mastering DSA & OOPs!\";\n    return 0;\n}" },
        { name: "Python", level: 82, badge: "AI & Scripts", code: "def plan_study_session(subject):\n    return f\"AI Planning active for {subject}\"" },
        { name: "Java", level: 75, badge: "Core", code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Building OOP foundations\");\n    }\n}" }
      ]
    },
    {
      category: "Web Development",
      icon: "Globe",
      description: "Responsive layouts, clean interface structure & modern UI design",
      skills: [
        { name: "HTML5", level: 90, badge: "Semantic Markup" },
        { name: "CSS3 & Modern CSS", level: 88, badge: "Flex/Grid & Glassmorphism" },
        { name: "Responsive UI Fundamentals", level: 85, badge: "Mobile-First Design" },
        { name: "JavaScript / React", level: 80, badge: "Interactive Apps" }
      ]
    },
    {
      category: "Core CS Fundamentals",
      icon: "Cpu",
      description: "Classroom concepts applied to practical software design",
      skills: [
        { name: "Data Structures & Algorithms", level: 84, badge: "Problem Solving" },
        { name: "Object-Oriented Programming (OOP)", level: 85, badge: "Modular Code" },
        { name: "Programming Fundamentals", level: 90, badge: "Logic Building" },
        { name: "Problem Solving", level: 88, badge: "LeetCode / Practice" }
      ]
    },
    {
      category: "AI & Data Interest",
      icon: "Brain",
      description: "Exploring artificial intelligence and data-driven software solutions",
      skills: [
        { name: "Artificial Intelligence Concepts", level: 78, badge: "Exploration" },
        { name: "Data-Driven Applications", level: 75, badge: "Smart Workflows" },
        { name: "Automation Ideas", level: 82, badge: "Scripting & Productivity" }
      ]
    },
    {
      category: "Development Practices",
      icon: "Workflow",
      description: "Writing maintainable, well-documented & debugged code",
      skills: [
        { name: "Modular Thinking", level: 85 },
        { name: "Debugging Habits", level: 82 },
        { name: "Documentation", level: 80 },
        { name: "Iterative Improvement", level: 88 }
      ]
    },
    {
      category: "Professional Skills",
      icon: "UserCheck",
      description: "Soft skills built through campus leadership and team management",
      skills: [
        { name: "Communication", level: 88 },
        { name: "Teamwork & Coordination", level: 92 },
        { name: "Logical Thinking", level: 90 },
        { name: "Learning Agility", level: 95 },
        { name: "Time Management", level: 86 }
      ]
    }
  ],

  projects: [
    {
      id: "ai-study-planner",
      title: "AI-Powered Study Planner",
      tagline: "Student-focused planning concept for organizing learning goals and study routines.",
      category: "AI & Productivity",
      featured: true,
      tech: ["Python", "AI Concepts", "Problem Solving", "React UI"],
      highlights: [
        "Designed a structured workflow around subjects, priorities, goals, and study schedules to make academic planning more systematic.",
        "Applied Python and AI-oriented reasoning to explore how student inputs can be converted into practical planning suggestions.",
        "Focused on a simple, understandable user experience so the idea can be extended into a useful academic productivity application."
      ],
      interactiveType: "plannerDemo",
      metrics: { goalsPlanned: "150+ Routines", focusRate: "94%", algorithm: "Priority Queue Based" }
    },
    {
      id: "weather-forecast-dashboard",
      title: "Real-Time Weather Forecasting Dashboard",
      tagline: "Web-based dashboard concept for presenting weather information clearly.",
      category: "Web Applications",
      featured: true,
      tech: ["HTML5", "CSS3", "Python", "Web Development", "Live API Logic"],
      highlights: [
        "Developed a clean dashboard structure for presenting current conditions and forecast information in an easy-to-read format.",
        "Applied HTML/CSS and programming fundamentals to organize interface sections and present live-style data in a responsive layout.",
        "Emphasized clarity and usability by keeping important information visually accessible and easy to scan."
      ],
      interactiveType: "weatherDemo",
      metrics: { accuracy: "Real-time visual feed", responsiveness: "100% Mobile Ready", design: "Glassmorphic Theme" }
    },
    {
      id: "dsa-visualizer",
      title: "C++ & DSA Algorithm Visualizer",
      tagline: "Interactive visualizer demonstrating core data structures and sorting algorithms.",
      category: "Core CS",
      featured: false,
      tech: ["C++", "Data Structures", "Algorithms", "React Canvas"],
      highlights: [
        "Strengthening core DSA understanding through visual execution of sorting algorithms like Bubble Sort and Selection Sort.",
        "Allows real-time step control, array customization, and side-by-side C++ code tracking.",
        "Built to make abstract data structure concepts tangible and easy to debug."
      ],
      interactiveType: "dsaDemo",
      metrics: { complexity: "O(n log n) & O(n²)", steps: "Interactive Stepper", languages: "C++ Focus" }
    }
  ],

  experience: [
    {
      role: "Coordinator Head",
      organization: "Student Organization Vibranta",
      location: "Lovely Professional University (LPU)",
      period: "2025 - Present",
      status: "Active Leadership",
      badge: "University Scale",
      highlights: [
        "Directed team operations and multi-departmental coordination for university-scale student initiatives.",
        "Executed GRAVEYARD 2026, overseeing marketing, ticket sales, and social media strategy.",
        "Managed artist relations and external collaborations to ensure seamless event execution."
      ],
      skillsGained: ["Team Leadership", "Operations Management", "Marketing Strategy", "Public Relations", "Crisis Management"]
    }
  ],

  academicFocus: [
    "Strengthening C++ and Python fundamentals through regular coding practice and small implementation exercises.",
    "Building confidence with Data Structures & Algorithms and Object-Oriented Programming concepts.",
    "Applying classroom learning through self-driven projects rather than keeping concepts purely theoretical.",
    "Exploring Artificial Intelligence, practical web development, and software engineering fundamentals.",
    "Improving code readability, debugging habits, documentation, and the ability to explain technical work clearly."
  ],

  coursework: [
    "Programming Fundamentals",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Web Development Fundamentals",
    "Problem Solving & Logic Building"
  ],

  interests: [
    { name: "Artificial Intelligence", desc: "Exploring intelligent agents & smart planning" },
    { name: "Python Development", desc: "Scripting, automation, and backend logic" },
    { name: "C++ & DSA", desc: "Competitive coding & memory-efficient algorithms" },
    { name: "Web Development", desc: "Modern 3D web interfaces & interactive UIs" },
    { name: "Software Engineering", desc: "Clean architecture, debugging & modularity" },
    { name: "Automation & Productivity", desc: "Building tools that save student study time" }
  ],

  academicStrengths: [
    { title: "Curiosity-Driven Learning", desc: "Eager to explore new frameworks, AI concepts, and software tools beyond the syllabus." },
    { title: "Practical Project Building", desc: "Converting classroom theories into functioning tools, web apps, and scripts." },
    { title: "Logical Problem Solving", desc: "Methodical approach to breaking complex algorithmic problems into solvable steps." },
    { title: "Willingness to Iterate & Improve", desc: "Revisiting code, taking feedback, and refining projects through multiple versions." }
  ]
};

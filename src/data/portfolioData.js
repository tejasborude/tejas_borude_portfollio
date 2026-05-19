// ── Personal Info ─────────────────────────────────────────────
export const personal = {
  name: 'Tejas Borude',
  greeting: "Hi there, I'm",
  roles: [
    'Frontend Developer',
    'MERN Stack Developer',
    'React.js Developer',
    'Full Stack Developer',
  ],
  tagline: 'Building digital experiences that truly matter.',
  bio: "I'm a passionate Software Developer with 1.5+ years of hands-on experience crafting modern, scalable web applications. I specialize in Frontend Development and the MERN Stack, turning ideas into elegant, high-performance solutions that deliver exceptional user experiences.",
  bio2: "I thrive on clean code, intuitive design, and solving real-world problems. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or leveling up my skills.",
  email: 'tejasborude03@gmail.com',
  email2: 'borudetejas01@gmail.com',
  phone: '+91 9112716069',
  location: 'Mumbai, Maharashtra, India',
  github: 'https://github.com/tejasborude',
  linkedin: 'https://www.linkedin.com/in/tejas-borude-0331102ba/',
  twitter: 'https://twitter.com/tejasborude',
  instagram: 'https://instagram.com/tejasborude',
  resumeUrl: '/resume-tejas-borude.pdf',
}

// ── Stats ─────────────────────────────────────────────────────
export const stats = [
  { value: 1.5, suffix: '+', label: 'Years Experience', decimals: 1 },
  { value: 20, suffix: '+', label: 'Projects Completed', decimals: 0 },
  { value: 15, suffix: '+', label: 'Happy Clients', decimals: 0 },
  { value: 100, suffix: '%', label: 'Satisfaction Rate', decimals: 0 },
]

// ── Skills ────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95, color: '#e34f26' },
      { name: 'CSS3', level: 92, color: '#1572b6' },
      { name: 'JavaScript (ES6+)', level: 88, color: '#f7df1e' },
      { name: 'React.js', level: 85, color: '#61dafb' },
      { name: 'Angular', level: 72, color: '#dd0031' },
      { name: 'jQuery', level: 80, color: '#0769ad' },
      { name: 'Bootstrap 5', level: 90, color: '#7952b3' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 78, color: '#339933' },
      { name: 'Express.js', level: 75, color: '#68d391' },
      { name: 'MongoDB', level: 72, color: '#47a248' },
      { name: 'WordPress', level: 25, color: '#21759b' },
      { name: 'REST APIs', level: 82, color: '#6366f1' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 88, color: '#f05032' },
      { name: 'VS Code', level: 95, color: '#007acc' },
      { name: 'Postman', level: 82, color: '#ff6c37' },
      { name: 'GitHub Desktop', level: 85, color: '#8250df' },
   
    
    ],
  },
]

// ── Experience ────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Junior Frontend Developer',
    company: 'Prudent Tech IT Solution, Navi Mumbai',
    location: 'Navi Mumbai, India',
    duration: 'Jan 2025 – Present',
    description: [
      'Developed and maintained responsive web applications using React.js and Tailwind CSS',
      'Collaborated with design team to implement pixel-perfect UI from Figma prototypes',
      'Integrated REST APIs and optimized application performance',
      'Participated in Agile sprints, code reviews, and deployment pipelines',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    current: true,
  },
  {
    id: 2,
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    company: 'Savitribai Phule Pune University (SPPU)',
    location: 'Pune, India',
    duration: '2024 – Present',
    description: [
      'Pursuing MCA with focus on advanced software engineering and web technologies',
      'Deepening expertise in full-stack development, algorithms, and system design',
    ],
    tech: [],
    current: true,
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    company: 'Savitribai Phule Pune University (SPPU)',
    location: 'Pune, India',
    duration: '2021 – 2024',
    description: [
      'Completed BCA with strong foundation in programming, web development, and databases',
      'Specialized in Web Technologies and Database Management Systems',
      'Built multiple projects covering frontend and full-stack development',
    ],
    tech: [],
    current: false,
  },
]

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'ShopNow – E-Commerce Platform',
    description:
      'Full-featured e-commerce platform with user authentication, product catalog, cart, wishlist, and Razorpay payment integration. Includes a real-time admin dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay'],
    tags: ['MERN', 'React'],
    live: '#',
    github: '#',
    gradient: 'from-violet-600 to-indigo-600',
    emoji: '🛒',
  },
  {
    id: 2,
    title: 'TaskFlow – Project Manager',
    description:
      'Trello-inspired kanban board with drag-and-drop tasks, team collaboration, real-time notifications via WebSocket, and full project analytics.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    tags: ['MERN', 'React'],
    live: '#',
    github: '#',
    gradient: 'from-cyan-500 to-blue-600',
    emoji: '📋',
  },
  {
    id: 3,
    title: 'Foodies – Restaurant Website',
    description:
      'Modern restaurant website with interactive menu, online table reservations, food ordering system, and stunning parallax gallery. Fully responsive.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'jQuery'],
    tags: ['Frontend'],
    live: '#',
    github: '#',
    gradient: 'from-orange-500 to-red-500',
    emoji: '🍽️',
  },
  {
    id: 4,
    title: 'TechBlog – WordPress CMS',
    description:
      'Custom WordPress theme with advanced post types, ACF fields, WooCommerce integration, SEO optimization, and Elementor-based page builder.',
    tech: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'ACF'],
    tags: ['WordPress'],
    live: '#',
    github: '#',
    gradient: 'from-blue-500 to-teal-500',
    emoji: '📝',
  },
  {
    id: 5,
    title: 'FinTrack – Finance Dashboard',
    description:
      'Interactive financial dashboard with expense tracking, income management, budget planning, Chart.js visualizations, and PDF report export.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Chart.js', 'JWT'],
    tags: ['React', 'MERN'],
    live: '#',
    github: '#',
    gradient: 'from-emerald-500 to-green-600',
    emoji: '💰',
  },
  {
    id: 6,
    title: 'PortfolioGen – Builder',
    description:
      'Dynamic portfolio generator letting developers build portfolio sites by filling details. Features 5 themes, GitHub API integration, and live code export.',
    tech: ['React.js', 'Tailwind CSS', 'GitHub API', 'Framer Motion'],
    tags: ['React', 'Frontend'],
    live: '#',
    github: '#',
    gradient: 'from-pink-500 to-rose-500',
    emoji: '🎨',
  },
]

// ── Services ──────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description:
      'Building pixel-perfect, responsive UIs with React.js & Angular, ensuring seamless experiences across all screen sizes.',
    icon: '💻',
    gradient: 'from-indigo-500 to-purple-600',
    skills: ['React.js', 'Angular', 'HTML/CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'MERN Stack Development',
    description:
      'Full-stack web apps using MongoDB, Express.js, React.js, and Node.js — scalable, fast, and production-ready.',
    icon: '⚡',
    gradient: 'from-cyan-500 to-blue-600',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    id: 3,
    title: 'WordPress Development',
    description:
      'Custom themes, plugins, and WooCommerce stores tailored to your needs, SEO-optimized and performance-tuned.',
    icon: '🌐',
    gradient: 'from-blue-500 to-teal-500',
    skills: ['WordPress', 'PHP', 'WooCommerce', 'Elementor'],
  },
  {
    id: 4,
    title: 'Responsive UI Design',
    description:
      'Mobile-first, accessible designs with modern UI patterns — glassmorphism, neumorphism, and smooth animations.',
    icon: '📱',
    gradient: 'from-orange-500 to-pink-500',
    skills: ['Bootstrap 5', 'Tailwind CSS', 'CSS3', 'Figma'],
  },
  {
    id: 5,
    title: 'REST API Development',
    description:
      'Robust RESTful APIs with Node.js & Express — complete with JWT auth, rate limiting, and Postman documentation.',
    icon: '🔌',
    gradient: 'from-emerald-500 to-green-600',
    skills: ['Node.js', 'Express.js', 'JWT', 'Postman'],
  },
]

// ── Certifications ────────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    title: 'Web Developer',
    issuer: 'IT Education Center, Pune',
    date: '2023',
    emoji: '🌐',
    gradient: 'from-indigo-500 to-violet-600',
    link: '#',
  },
  {
    id: 2,
    title: 'React Developer',
    issuer: 'IT Education Center, Pune',
    date: '2023',
    emoji: '⚛️',
    gradient: 'from-cyan-500 to-blue-600',
    link: '#',
  },
  {
    id: 3,
    title: 'MERN Stack Developer',
    issuer: 'IT Education Center, Pune',
    date: '2024',
    emoji: '🚀',
    gradient: 'from-emerald-500 to-teal-600',
    link: '#',
  },
]

// ── Testimonials ──────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Project Manager, Prudent Tech IT Solution , Navi Mumbai',
    text: "Tejas is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to understand complex requirements make him invaluable. The e-commerce platform he built exceeded all our expectations — clean code, fast performance, stunning UI.",
    rating: 5,
    initials: 'RS',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'CEO, Digital Minds Agency',
    text: "Working with Tejas was an absolute pleasure. He transformed our client's outdated website into a modern, responsive platform that significantly improved user engagement by 60%. His professionalism, communication, and technical skills are top-notch.",
    rating: 5,
    initials: 'PP',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    name: 'Amit Joshi',
    role: 'Restaurant Owner (Freelance Client)',
    text: "I hired Tejas to build my restaurant website and I couldn't be happier. The design is gorgeous, fully responsive on every device, and loads incredibly fast. He delivered before the deadline, communicated clearly throughout, and was very professional.",
    rating: 5,
    initials: 'AJ',
    gradient: 'from-emerald-500 to-green-600',
  },
]

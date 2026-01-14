export const PERSONAL_INFO = {
  name: 'Jayawardhana Komangodage Damindu Gimhan',
  displayName: 'Damindu Gimhan',
  role: 'Software Developer',
  specialization: 'Full Stack Engineer',
  location: '92/2/4, Thelawala Road, Rathmalana, Colombo, Sri Lanka',
  phone: '+94 702 520 196',
  email: 'damidugimhan20@gmail.com',
  github: 'https://github.com/DamiduGimhan20',
  portfolio: '',
  tagline: 'Building exceptional digital experiences with modern web technologies',
  bio: "Self-motivated and responsible IT professional with hands-on experience in software development and computer hardware support. Strong background in MERN stack development, GIS systems, and 3D web technologies, combined with practical expertise in computer hardware installation, troubleshooting, and preventive maintenance. Adept at providing technical support, system configuration, and on-site maintenance while maintaining high service quality.",
  languages: ['English', 'Sinhala (Native)', 'German (B1)'],
};

export const SKILLS = {
  'Languages': [
    'JavaScript',
    'Java',
    'C++',
    'PHP',
    'HTML5',
    'CSS',
    'Python',
  ],
  'Frontend': [
    'React',
    'React Native',
    'Three.js',
    'Bootstrap',
    'Tailwind CSS',
  ],
  'Backend': [
    'Node.js',
    'Express.js',
  ],
  'Databases': [
    'MongoDB',
    'PostgreSQL',
    'Firebase',
    'SQL',
  ],
  'Tools & Systems': [
    'Git',
    'Windows',
    'Linux',
  ],
  'Hardware & IoT': [
    'Computer Installation & Repair',
    'IT Support & Troubleshooting',
    'IoT Devices Installation',
    'OS Installation',
    'Preventive Maintenance',
    'Basic Networking',
  ],
};

export const EXPERIENCE = [
  {
    id: 1,
    title: 'Freelance IT Specialist',
    company: 'Self-Employed',
    location: 'Remote / Colombo, Sri Lanka',
    duration: '4 Months',
    period: 'Sep 2025 – Present',
    responsibilities: [
      'Providing freelance services in software development, computer hardware support, and IoT system implementation',
      'Developing web and mobile applications using JavaScript, React, and MERN stack technologies',
      'Installing, maintaining, and troubleshooting desktop and laptop hardware systems',
      'Designing and supporting IoT-based systems, including device setup, sensor integration, and basic network connectivity',
      'Managing multiple projects independently while meeting client requirements and deadlines',
    ],
    technologies: ['React', 'React Native', 'MERN Stack', 'IoT Systems', 'Hardware Support'],
  },
  {
    id: 2,
    title: 'Computer Hardware Technician',
    company: 'APKHUB Software Solution',
    location: 'Sri Lanka',
    duration: '7 Months',
    period: 'Feb 2025 - Aug 2025',
    responsibilities: [
      'Installed, maintained, and repaired desktop and laptop computers',
      'Performed hardware troubleshooting and accurate fault diagnosis',
      'Installed and configured operating systems (Windows, Linux)',
      'Conducted hardware upgrades including RAM, HDD/SSD, power supply units, and peripherals',
      'Provided virus removal services and basic data backup support',
      'Delivered preventive maintenance and on-site technical support to clients',
    ],
    technologies: ['Windows', 'Linux', 'Hardware Diagnostics', 'System Configuration'],
  },
  {
    id: 3,
    title: 'Junior Software Developer',
    company: 'DraveSpace Pvt Ltd',
    location: 'Sri Lanka',
    duration: '1 Year',
    period: 'Jan 2024 – Jan 2025',
    responsibilities: [
      'Developed web applications using MERN Stack (MongoDB, Express, React, Node.js)',
      'Built 3D web applications using Three.js for interactive product showcases',
      'Developed mobile applications using React Native',
      'Contributed to a GIS project using React, PostgreSQL, Tailwind CSS, and spatial data handling',
      'Assisted in backend API development and database integration',
      'Participated in debugging, performance optimization, and documentation',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Three.js', 'PostgreSQL', 'React Native', 'Tailwind CSS'],
  },
];

import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: '3D Product Showcase',
    description: 'Interactive 3D web application built with Three.js for immersive product visualization. Features realistic lighting, material rendering, and smooth camera controls.',
    technologies: ['Three.js', 'React', 'WebGL', 'GLSL'],
    github: 'https://github.com/DamiduGimhan20',
    demo: 'https://damidugimhan20.github.io',
    featured: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'GIS Mapping System',
    description: 'Full-stack geospatial information system using React and PostgreSQL with PostGIS extension. Enables spatial data visualization, analysis, and real-time updates.',
    technologies: ['React', 'PostgreSQL', 'PostGIS', 'Leaflet', 'Node.js'],
    github: 'https://github.com/DamiduGimhan20',
    demo: 'https://damidugimhan20.github.io',
    featured: false,
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Complete MERN stack e-commerce solution with payment integration, inventory management, and admin dashboard. Optimized for performance and scalability.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/DamiduGimhan20',
    demo: 'https://damidugimhan20.github.io',
    featured: false,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'React Native Mobile App',
    description: 'Cross-platform mobile application for task management with offline support, push notifications, and cloud synchronization using Firebase.',
    technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
    github: 'https://github.com/DamiduGimhan20',
    demo: 'https://damidugimhan20.github.io',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop&q=80',
  },
];

export const STATS = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Technologies Mastered', value: '15+' },
  { label: 'Satisfied Clients', value: '32+' },
];

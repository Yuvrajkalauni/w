export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Systems & Networking' | 'Desktop & Data';
  timeframe: string;
  stack: string[];
  summary: string;
  highlights: string[];
  architecture: {
    layers: { label: string; detail: string }[];
    outcomeMetric: string;
  };
  schematicType: 'campusconnect' | 'netmonitor' | 'expense' | 'inventory';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  timeframe: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
  description: string;
}

export const PROFILE = {
  name: 'Yuvraj Kalauni',
  headline: 'Computer Engineering student building reliable software, web systems, and networked tools.',
  location: 'Kathmandu, Nepal',
  phone: '+977 980-000-0000',
  email: 'yuvraj.kalauni.sample@example.com',
  linkedin: 'https://linkedin.com/in/yuvraj-kalauni-sample',
  linkedinLabel: 'linkedin.com/in/yuvraj-kalauni-sample',
  github: 'https://github.com/yuvraj-kalauni-sample',
  githubLabel: 'github.com/yuvraj-kalauni-sample',
  cvUrl: '/assets/aistudio/Yuvraj_Kalauni_Sample_CV_2ea44e16.pdf',
  summary:
    'Computer Engineering student with hands-on experience in Python, Java, C++, web development, databases, Linux, networking, and software development fundamentals. Seeking an internship to contribute to software, systems, networking, or IT projects.',
};

export const KEY_METRICS = [
  {
    value: '3.6 / 4.0',
    label: 'B.E. GPA · Expected June 2027',
  },
  {
    value: '+25%',
    label: 'Data-Processing Speed at TechNova',
  },
  {
    value: '4 Systems',
    label: 'Production & Academic Builds',
  },
  {
    value: '30 Students',
    label: 'Mentored in Coding Workshop',
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Computer Engineering',
  institution: 'Himalayan Institute of Technology',
  location: 'Kathmandu, Nepal',
  expected: 'Expected June 2027',
  gpa: '3.6 / 4.0',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'technova',
    role: 'Software Development Intern',
    organization: 'TechNova Solutions',
    location: 'Kathmandu, Nepal',
    timeframe: 'June 2026 – August 2026',
    bullets: [
      'Developed a Python inventory dashboard to support inventory tracking and reporting.',
      'Improved data-processing speed by 25% through workflow and code optimizations.',
      'Wrote REST API tests to validate application functionality and support software testing.',
      'Resolved software defects through debugging, root-cause analysis, and targeted fixes.',
      'Used Git in an Agile team to manage source code and collaborate on software development tasks.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'campus-connect',
    title: 'CampusConnect Web Application',
    category: 'Full-Stack',
    timeframe: 'January 2026 – May 2026',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    summary:
      'Built a React and Node.js student collaboration platform with user authentication and PostgreSQL storage.',
    highlights: [
      'Designed normalized PostgreSQL schemas for student profiles, course groups, and discussion threads.',
      'Implemented session-backed user authentication and role-scoped API endpoints in Node.js.',
      'Structured modular React views for fast navigation across study groups and shared resources.',
    ],
    architecture: {
      layers: [
        { label: 'Client Interface', detail: 'React SPA with state-driven routing and form validation' },
        { label: 'Application Server', detail: 'Node.js REST endpoints with authentication middleware' },
        { label: 'Relational Store', detail: 'PostgreSQL persistence for users, rooms, and threads' },
      ],
      outcomeMetric: 'End-to-end authenticated student collaboration workflow',
    },
    schematicType: 'campusconnect',
  },
  {
    id: 'network-monitor',
    title: 'Network Monitoring Tool',
    category: 'Systems & Networking',
    timeframe: 'September 2025 – December 2025',
    stack: ['Python', 'ICMP Ping', 'TCP Sockets', 'DNS'],
    summary:
      'Created a Python tool using ping and socket checks to report host availability and response time.',
    highlights: [
      'Automated ICMP ping sweeps and TCP socket handshake probes across target host lists.',
      'Measured round-trip latency and flagged unreachable nodes with structured diagnostic summaries.',
      'Applied core TCP/IP, DNS resolution, and subnet troubleshooting principles for repeatable checks.',
    ],
    architecture: {
      layers: [
        { label: 'Probe Scheduler', detail: 'Python target queue executing periodic host checks' },
        { label: 'Transport Layer', detail: 'ICMP echo and raw socket connection timing' },
        { label: 'Diagnostics Report', detail: 'Availability status and millisecond latency logs' },
      ],
      outcomeMetric: 'Automated multi-host availability and RTT reporting',
    },
    schematicType: 'netmonitor',
  },
  {
    id: 'inventory-dashboard',
    title: 'Inventory Analytics Dashboard',
    category: 'Desktop & Data',
    timeframe: 'June 2026 – August 2026',
    stack: ['Python', 'REST API Testing', 'Git', 'SQL'],
    summary:
      'Developed a Python inventory dashboard during the TechNova Solutions internship to support stock tracking and reporting.',
    highlights: [
      'Streamlined inventory tracking and reporting workflows into a unified Python interface.',
      'Improved data-processing speed by 25% by refactoring bottlenecks and optimizing query pipelines.',
      'Paired feature delivery with automated REST API tests and root-cause defect resolution.',
    ],
    architecture: {
      layers: [
        { label: 'Reporting UI', detail: 'Python inventory views for stock levels and summaries' },
        { label: 'Processing Engine', detail: 'Optimized batch pipeline delivering +25% speed gain' },
        { label: 'QA & Verification', detail: 'REST API test suite validating payload contracts' },
      ],
      outcomeMetric: '+25% faster data processing in production workflows',
    },
    schematicType: 'inventory',
  },
  {
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    category: 'Desktop & Data',
    timeframe: 'March 2025 – June 2025',
    stack: ['Java', 'SQL', 'OOP', 'Input Validation'],
    summary:
      'Developed a Java application with SQL storage, input validation, and monthly expense summaries.',
    highlights: [
      'Applied object-oriented design patterns in Java to separate ledger entities, validators, and reporting.',
      'Enforced strict input validation before persisting transactions to SQL storage.',
      'Generated categorized monthly expense summaries for clear personal budgeting insights.',
    ],
    architecture: {
      layers: [
        { label: 'Java Core', detail: 'OOP domain models for transactions and categories' },
        { label: 'Validation Guard', detail: 'Type, range, and format checks prior to commit' },
        { label: 'SQL Persistence', detail: 'Structured tables powering monthly aggregate queries' },
      ],
      outcomeMetric: 'Reliable monthly financial aggregation with validated SQL writes',
    },
    schematicType: 'expense',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
    description: 'Core languages for systems scripting, OOP applications, and full-stack logic.',
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Node.js'],
    description: 'Component-driven interfaces paired with structured server APIs.',
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    description: 'Relational schema design, SQL querying, and document-oriented storage.',
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'GitHub', 'Linux', 'Docker', 'VS Code'],
    description: 'Version control, containerized workflows, and Unix command-line environments.',
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'DNS', 'HTTP', 'Subnetting', 'Troubleshooting'],
    description: 'Protocol-level diagnostics, socket probing, and IP network configuration.',
  },
  {
    category: 'Engineering Concepts',
    items: [
      'Data Structures',
      'Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Computer Networks',
      'Database Management',
      'Software Testing',
    ],
    description: 'Computer engineering foundations applied to debugging and architecture.',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Python for Everybody',
    issuer: 'Coursera',
    year: '2025',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2025',
  },
];

export const LEADERSHIP = [
  {
    role: 'Computer Engineering Society Volunteer',
    detail: 'Organized a beginner coding workshop for 30 students.',
  },
];

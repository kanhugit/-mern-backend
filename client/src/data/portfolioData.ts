// Portfolio data

// Personal information
export const personalInfo = {
  firstName: "John",
  lastName: "Doe",
  title: "Full Stack Developer",
  bio: "I'm a passionate full-stack developer with expertise in building modern web applications. I specialize in React, Node.js, and cloud technologies.",
  email: "john.doe@example.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  socialLinks: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  interests: ["Web Development", "Open Source", "UI/UX Design", "Cloud Computing", "Mobile Development"],
};

// Education background
export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    startDate: "2018",
    endDate: "2020",
    description: "Focused on advanced algorithms, distributed systems, and machine learning. Participated in research projects related to scalable web applications.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    startDate: "2014",
    endDate: "2018",
    description: "Studied computer architecture, programming fundamentals, and software engineering. Graduated with honors.",
  },
];

// Work experience
export const experience = [
  {
    id: 1,
    position: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    startDate: "2021",
    endDate: "Present",
    description: "Lead developer for the company's flagship SaaS platform. Architected scalable solutions using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Reduced page load time by 40% through performance optimizations",
      "Implemented a microservices architecture that improved system reliability",
      "Led a team of 5 developers to deliver features on time and under budget",
    ],
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Seattle, WA",
    startDate: "2020",
    endDate: "2021",
    description: "Developed and maintained multiple client websites and applications. Worked with React, Express, MongoDB, and various APIs.",
    achievements: [
      "Created responsive web applications for 10+ high-profile clients",
      "Integrated payment processing systems that handled over $2M in transactions",
      "Implemented automated testing that reduced bugs in production by 30%",
    ],
  },
  {
    id: 3,
    position: "Frontend Developer Intern",
    company: "WebTech Startup",
    location: "San Jose, CA",
    startDate: "2019",
    endDate: "2020",
    description: "Assisted in the development of user interfaces for a venture-backed startup. Focused on responsive design and accessibility.",
    achievements: [
      "Redesigned the company website, improving conversion rates by 25%",
      "Contributed to open-source projects maintained by the company",
      "Learned modern frontend development practices in a fast-paced environment",
    ],
  },
];

// Technical skills
export const technicalSkills = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "Redux", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", skills: ["Node.js", "Express", "Django", "Flask", "GraphQL", "REST API Design"] },
  { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
  { category: "DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform"] },
  { category: "Mobile", skills: ["React Native", "Flutter", "Progressive Web Apps"] },
  { category: "Testing", skills: ["Jest", "React Testing Library", "Cypress", "Mocha", "Chai"] },
];

// Other skills
export const otherSkills = [
  "Agile Development",
  "Project Management",
  "Team Leadership",
  "UI/UX Design",
  "Technical Writing",
  "Public Speaking",
  "Problem Solving",
  "Mentoring",
];

// Statistics for achievements
export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "30+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" },
];

// Project categories
export const projectCategories = ["Web App", "Mobile", "E-commerce", "APIs", "Dashboard"];

// Projects
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with product management, user authentication, shopping cart, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    category: "E-commerce",
    image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
    demoLink: "https://example.com/ecommerce-demo",
    codeLink: "https://github.com/johndoe/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description: "A messaging platform with real-time capabilities, user presence indicators, and file sharing.",
    technologies: ["React", "Socket.io", "Express", "Redis", "AWS S3"],
    category: "Web App",
    image: "https://via.placeholder.com/600x400?text=Chat+App+Project",
    demoLink: "https://example.com/chat-demo",
    codeLink: "https://github.com/johndoe/chat-app",
    featured: true,
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: "A comprehensive solution for tracking inventory, managing suppliers, and generating reports.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Chart.js"],
    category: "Dashboard",
    image: "https://via.placeholder.com/600x400?text=Inventory+System",
    demoLink: "https://example.com/inventory-demo",
    codeLink: "https://github.com/johndoe/inventory-system",
    featured: false,
  },
  {
    id: 4,
    title: "Fitness Tracker Mobile App",
    description: "A mobile application to track workouts, nutrition, and progress with personalized recommendations.",
    technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
    category: "Mobile",
    image: "https://via.placeholder.com/600x400?text=Fitness+App",
    demoLink: "https://example.com/fitness-demo",
    codeLink: "https://github.com/johndoe/fitness-tracker",
    featured: true,
  },
  {
    id: 5,
    title: "Weather API Service",
    description: "A RESTful API that aggregates data from multiple weather services and provides a unified interface.",
    technologies: ["Node.js", "Express", "Redis", "Jest", "Docker"],
    category: "APIs",
    image: "https://via.placeholder.com/600x400?text=Weather+API",
    demoLink: "https://example.com/weather-api-docs",
    codeLink: "https://github.com/johndoe/weather-api",
    featured: false,
  },
  {
    id: 6,
    title: "Restaurant Reservation System",
    description: "A web application for managing restaurant reservations, table assignments, and customer information.",
    technologies: ["React", "Express", "PostgreSQL", "Twilio API"],
    category: "Web App",
    image: "https://via.placeholder.com/600x400?text=Restaurant+App",
    demoLink: "https://example.com/restaurant-demo",
    codeLink: "https://github.com/johndoe/restaurant-reservations",
    featured: false,
  },
];
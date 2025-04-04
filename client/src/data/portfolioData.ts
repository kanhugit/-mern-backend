// Personal Information
export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  age: "28",
  resumeUrl: "#",
  profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
  aboutImage: "https://images.unsplash.com/photo-1529673736833-9302990bbde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  summary: "I create elegant and powerful web applications using modern technologies. Passionate about crafting seamless user experiences through clean code.",
  aboutLong: "With over 5 years of experience in web development, I specialize in building full-stack applications using modern technologies like React, Express, and Bootstrap. My journey in tech started when I built my first website at 15, and I've been passionate about creating meaningful digital experiences ever since.",
  aboutSecondary: "I believe in clean code, user-centered design, and continuous learning. When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks and tools to stay at the cutting edge.",
  interests: ["Coding", "UX Design", "Hiking", "Photography", "Reading"],
  stats: {
    projects: "20+",
    years: "5+",
  },
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com"
  }
};

// Education
export const education = [
  {
    degree: "Master of Computer Science",
    institution: "Stanford University",
    year: "2018-2020",
    description: "Specialized in Web Technologies and Cloud Computing with a focus on distributed systems. Graduated with honors."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    year: "2014-2018",
    description: "Completed coursework in algorithms, data structures, software engineering, and database systems. Member of the ACM student chapter."
  }
];

// Experience
export const experience = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    year: "2021-Present",
    description: "Lead development of enterprise applications using React, Express, and AWS. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    position: "Full Stack Developer",
    company: "WebSolutions Co.",
    year: "2018-2021",
    description: "Developed responsive web applications using React and Node.js. Worked directly with clients to gather requirements and deliver solutions."
  }
];

// Technical Skills
export const technicalSkills = [
  { name: "React", level: 95 },
  { name: "Node.js & Express", level: 90 },
  { name: "Bootstrap & CSS", level: 85 },
  { name: "JavaScript/TypeScript", level: 92 },
  { name: "SQL & NoSQL", level: 88 }
];

// Other Skills
export const otherSkills = [
  {
    name: "Project Management",
    icon: "bi-kanban",
    description: "Experience with Agile, Scrum, and project planning tools like Jira and Trello."
  },
  {
    name: "Team Leadership",
    icon: "bi-people",
    description: "Led development teams of 3-7 people to successfully deliver complex projects."
  },
  {
    name: "DevOps",
    icon: "bi-cloud",
    description: "Experience with CI/CD, Docker, AWS, and infrastructure as code."
  },
  {
    name: "UI/UX Design",
    icon: "bi-bezier2",
    description: "Understanding of design principles, wireframing, and prototyping tools."
  }
];

// Statistics
export const stats = [
  { title: "Happy Clients", value: "20+" },
  { title: "Projects Completed", value: "50+" },
  { title: "Hours of Coding", value: "2500+" },
  { title: "Certifications", value: "15+" }
];

// Project Categories
export const projectCategories = ["Web App", "Mobile", "E-commerce", "APIs", "Dashboard"];

// Projects
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "E-commerce",
    year: "2023",
    description: "A full-featured e-commerce platform with React frontend and Express backend. Includes user authentication, product management, and payment processing.",
    technologies: ["React", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web App",
    year: "2022",
    description: "A collaborative task management application with real-time updates. Features include task assignment, progress tracking, and team communication.",
    technologies: ["React", "Node.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    category: "Dashboard",
    year: "2022",
    description: "An interactive financial dashboard for personal expense tracking and budgeting. Includes data visualization and budget forecasting.",
    technologies: ["React", "Chart.js", "Express"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    category: "Web App",
    year: "2021",
    description: "A complete restaurant reservation system with table management, online booking, and staff scheduling features.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Health & Fitness App",
    category: "Mobile",
    year: "2021",
    description: "A mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    technologies: ["React Native", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    id: 6,
    title: "Content Management API",
    category: "APIs",
    year: "2020",
    description: "A headless CMS API that provides content management and delivery for websites and applications.",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1934&q=80",
    link: "#"
  }
];

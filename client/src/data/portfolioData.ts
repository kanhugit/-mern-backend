// Portfolio data
import profileImage from "../assets/profile.png";
import profileColorImage from "../assets/profile-color.jpg";

// Personal information
export const personalInfo = {
  firstName: "Kanhu",
  lastName: "Charan Behera",
  title: "Java Full Stack Developer",
  bio: "To associate with an organization that provides me an opportunity to enhance my knowledge, showcase my skills, and be part of a dynamic team contributing to its growth. Seeking a challenging position to apply my skills, enthusiasm, and experience in designing, developing, and implementing software solutions while continuously learning.",
  email: "beherakanha029@gamil.com",
  phone: "+91-7377262818",
  location: "Hyderabad, India",
  profileImage: profileImage,
  profileColorImage: profileColorImage,
  socialLinks: {
    github: "https://github.com/kanhugit",
    linkedin: "https://linkedin.com/in/kanhucharan",
  },
  interests: ["Web Development", "Java Technology", "UI/UX Design", "Full Stack Development", "Database Management"],
  personalDetails: {
    dateOfBirth: "5 Dec 1999",
    fatherName: "Ghanashyam Behera",
    address: "Hyderabad, Ameerpet, 509325",
    nationality: "Indian",
    languages: ["English", "Hindi", "Odia"],
    maritalStatus: "Unmarried",
    religion: "Hindu"
  }
};

// Education background
export const education = [
  {
    id: 1,
    degree: "Java Full Stack Development",
    institution: "JSPIDER Training Center",
    location: "Hyderabad",
    startDate: "2024",
    endDate: "2025",
    description: "Training in comprehensive Java Full Stack Development with focus on industry-standard technologies and practices.",
    achievements: [
      "Developed multiple full-stack applications using Spring Boot and React",
      "Built RESTful APIs and microservices architecture projects",
      "Led team projects and gained experience with CI/CD pipelines",
      "Received certification in Advanced Java Development"
    ]
  },
  {
    id: 2,
    degree: "Master's in Computer Application (MCA)",
    institution: "Institute Of Management And Information Technology",
    location: "Cuttack",
    startDate: "2022",
    endDate: "2025",
    description: "Advanced studies in computer applications, software development, and information technology management.",
    achievements: [
      "Maintained CGPA of 8.5+ throughout the program",
      "Completed thesis on 'Modern Web Application Architecture'",
      "Participated in multiple hackathons and coding competitions",
      "Served as student representative for department events"
    ]
  },
  {
    id: 3,
    degree: "Bachelor of Science (B.Sc)",
    institution: "Fakir Mohan University",
    location: "Baleshore",
    startDate: "2018",
    endDate: "2021",
    description: "Fundamental scientific studies with focus on computer-related subjects.",
    achievements: [
      "Graduated with First Class distinction",
      "Developed several academic projects in Python and Java",
      "Conducted workshops on programming fundamentals",
      "Active member of the university's computer science club"
    ]
  },
  {
    id: 4,
    degree: "Intermediate (12th)",
    institution: "Gayatri Science College",
    location: "Bhubaneswar",
    startDate: "2016",
    endDate: "2018",
    description: "Higher secondary education with science stream.",
    achievements: [
      "Secured 85% marks in final examinations",
      "Participated in various inter-college science competitions",
      "Selected for regional science talent program"
    ]
  },
  {
    id: 5,
    degree: "Matriculation (10th)",
    institution: "Trust High School",
    location: "Jashipur",
    startDate: "2015",
    endDate: "2016",
    description: "Secondary education with strong academic foundation.",
    achievements: [
      "Achieved top rank in school with 92% marks",
      "Received merit scholarship for academic excellence",
      "Active participant in school's cultural and sports activities"
    ]
  },
];

// Projects as experience
export const experience = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "TO-DO LIST Project",
    location: "Hyderabad",
    startDate: "2024",
    endDate: "Present",
    description: "Developed a comprehensive To-Do List application with complete CRUD functionality for efficient task management.",
    achievements: [
      "Built responsive and intuitive UI using HTML, CSS, JavaScript, and React.js",
      "Created RESTful APIs with Node.js and Express for task operations",
      "Integrated MongoDB database for persistent storage and efficient data handling",
      "Implemented comprehensive testing and debugging for reliable user experience"
    ],
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "VIDEO LIBRARY Project",
    location: "Hyderabad",
    startDate: "2023",
    endDate: "2024",
    description: "Built a feature-rich video library platform with separate admin and user modules for video management and viewing.",
    achievements: [
      "Developed functionality for both admin (video and category management) and users (registration, browsing, interaction)",
      "Implemented YouTube video embedding for seamless integration",
      "Designed MongoDB collections for users, admins, videos, and categories",
      "Created user interaction features including watch, like, and comment functionality with state management via Redux",
      "Utilized React.js for frontend, Node.js and Express.js for backend, and MongoDB for database"
    ],
  }
];

// Technical skills
export const technicalSkills = [
  { category: "Java Technology", skills: ["Java", "JDBC", "Servlet", "JSP"] },
  { category: "Web Development", skills: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { category: "Frameworks", skills: ["Spring", "Spring Boot", "Hibernate and JPA", "Bootstrap", "React.js"] },
  { category: "Databases", skills: ["Oracle", "MySQL", "MongoDB"] },
  { category: "IDE", skills: ["Eclipse", "VS Code", "STS"] },
  { category: "Operating System", skills: ["Windows"] },
  { category: "Real Time Tools", skills: ["JIRA", "Maven", "Gradle", "GitHub", "BitBucket", "Log4J", "LogBack", "LogStash", "JUNIT", "Jacocco", "SonarQube", "JMETER", "JENKINS", "Docker", "Kubernetes", "Apache Kafka", "Redis Cache", "POSTMAN", "Swagger"] },
];

// Other skills
export const otherSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Technical Documentation",
  "Agile Methodology",
  "Version Control",
  "Continuous Integration",
  "API Design",
  "Database Management",
];

// Statistics for achievements
export const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "2+", label: "Projects Completed" },
  { value: "5+", label: "Technologies Mastered" },
  { value: "100%", label: "Dedication" },
];

// Project categories
export const projectCategories = ["Web App", "Java", "MERN Stack", "Full Stack"];

// Import project images
import todoImage from "../assets/projects/project-todo.svg";
import videoLibraryImage from "../assets/projects/project-video.svg";
import portfolioImage from "../assets/projects/project-portfolio.svg";
import ecommerceImage from "../assets/projects/project-ecommerce.svg";
import bankingImage from "../assets/projects/project-banking.svg";
import studentImage from "../assets/projects/project-student.svg";

// Projects
export const projects = [
  {
    id: 1,
    title: "TO-DO LIST Application",
    description: "A comprehensive To-Do List application with complete CRUD functionality for efficient task management.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express", "MongoDB"],
    category: "MERN Stack",
    image: todoImage,
    demoLink: "https://github.com/kanhugit",
    codeLink: "https://github.com/kanhugit",
    featured: true,
  },
  {
    id: 2,
    title: "VIDEO LIBRARY Platform",
    description: "A feature-rich video library platform with separate admin and user modules for video management and viewing.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Redux"],
    category: "MERN Stack",
    image: videoLibraryImage,
    demoLink: "https://github.com/kanhugit",
    codeLink: "https://github.com/kanhugit",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing skills, projects, and professional experience.",
    technologies: ["React.js", "Bootstrap", "CSS", "Node.js", "Express"],
    category: "Web App",
    image: portfolioImage,
    demoLink: "https://github.com/kanhugit",
    codeLink: "https://github.com/kanhugit",
    featured: true,
  },
  {
    id: 4,
    title: "E-Commerce Application",
    description: "A full-stack e-commerce application with product catalog, user authentication, shopping cart, and order management.",
    technologies: ["Java", "Spring Boot", "Hibernate", "JSP", "MySQL"],
    category: "Java",
    image: ecommerceImage,
    demoLink: "https://github.com/kanhugit",
    codeLink: "https://github.com/kanhugit",
    featured: false,
  },
  {
    id: 5,
    title: "Banking Management System",
    description: "A secure banking application for account management, fund transfers, and transaction history tracking.",
    technologies: ["Java", "JDBC", "Servlet", "JSP", "MySQL"],
    category: "Java",
    image: bankingImage,
    demoLink: "https://github.com/kanhugit",
    codeLink: "https://github.com/kanhugit",
    featured: false,
  },
  {
    id: 6,
    title: "Student Management System",
    description: "A comprehensive system for managing student records, course enrollments, and academic performance.",
    technologies: ["Java", "Spring MVC", "Hibernate", "JSP", "MySQL"],
    category: "Full Stack",
    image: studentImage,
    demoLink: "https://github.com/kanhugit",
    codeLink: "https://github.com/kanhugit",
    featured: false,
  },
];
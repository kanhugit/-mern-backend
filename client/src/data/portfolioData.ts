// Portfolio data
import profileImage from "@assets/myphoto.png";
import profileColorImage from "@assets/myphoto1.jpg";

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
    codeSnippets: [
      {
        title: "Task Model (MongoDB Schema)",
        language: "javascript",
        code: `const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: {
    type: Date
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);`
      },
      {
        title: "Task Controller - Create Task",
        language: "javascript",
        code: `// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    
    // Create new task
    const task = new Task({
      title,
      description,
      status,
      priority,
      dueDate,
      createdBy: req.user._id
    });
    
    // Save task to database
    await task.save();
    
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task creation failed",
      error: error.message
    });
  }
};`
      },
      {
        title: "React Task Component",
        language: "jsx",
        code: `import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const Task = ({ task, onDelete, onStatusChange, onEdit }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div 
      className={\`border rounded-lg p-4 mb-3 \${task.status === 'completed' ? 'bg-gray-50 opacity-75' : 'bg-white'}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className={\`font-semibold \${task.status === 'completed' ? 'line-through text-gray-500' : ''}\`}>
            {task.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
          
          <div className="flex mt-2 space-x-2">
            <span className={getPriorityColor(task.priority) + " text-xs px-2 py-1 rounded"}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
            
            {task.dueDate && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          {task.status !== 'completed' && (
            <button 
              onClick={() => onStatusChange(task._id, 'completed')}
              className="text-green-600 hover:text-green-800"
              title="Mark as completed"
            >
              <FaCheck />
            </button>
          )}
          
          <button 
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:text-blue-800"
            title="Edit task"
          >
            <FaEdit />
          </button>
          
          <button 
            onClick={() => onDelete(task._id)}
            className="text-red-600 hover:text-red-800"
            title="Delete task"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;`
      }
    ],
    demoDetails: {
      description: "The To-Do List application allows users to create, organize, edit, and delete tasks with varying priorities and deadlines. Features include task filtering, sorting, priority levels, and status tracking.",
      features: [
        "User authentication and personalized task lists",
        "Task categorization with drag-and-drop functionality",
        "Priority levels (high, medium, low) with visual indicators",
        "Due date tracking with reminder notifications",
        "Filtering and sorting options (by date, priority, status)",
        "Responsive design for all device types"
      ],
      screenshots: [
        {
          title: "Dashboard View",
          description: "Main task dashboard showing categorized tasks with priority indicators"
        },
        {
          title: "Task Creation",
          description: "Form interface for creating new tasks with various attributes"
        },
        {
          title: "Mobile View",
          description: "Responsive mobile interface for on-the-go task management"
        }
      ]
    }
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
    codeSnippets: [
      {
        title: "Video Schema",
        language: "javascript",
        code: `const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isPublished: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Video', videoSchema);`
      },
      {
        title: "Redux Slice for Videos",
        language: "javascript",
        code: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import videoService from '../services/videoService';

// Fetch featured videos
export const fetchFeaturedVideos = createAsyncThunk(
  'videos/fetchFeatured',
  async (_, thunkAPI) => {
    try {
      return await videoService.getFeaturedVideos();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Fetch videos by category
export const fetchVideosByCategory = createAsyncThunk(
  'videos/fetchByCategory',
  async (categoryId, thunkAPI) => {
    try {
      return await videoService.getVideosByCategory(categoryId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    featuredVideos: [],
    categoryVideos: [],
    currentVideo: null,
    relatedVideos: [],
    isLoading: false,
    error: null
  },
  reducers: {
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    clearVideoState: (state) => {
      state.categoryVideos = [];
      state.currentVideo = null;
      state.relatedVideos = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeaturedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featuredVideos = action.payload;
      })
      .addCase(fetchFeaturedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchVideosByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideosByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryVideos = action.payload;
      })
      .addCase(fetchVideosByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { setCurrentVideo, clearVideoState } = videoSlice.actions;
export default videoSlice.reducer;`
      },
      {
        title: "Video Player Component",
        language: "jsx",
        code: `import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoById, incrementVideoViews } from '../redux/slices/videoSlice';
import { ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';
import CommentSection from './CommentSection';
import RelatedVideos from './RelatedVideos';
import VideoPlayerSkeleton from './skeletons/VideoPlayerSkeleton';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { currentVideo, isLoading, error } = useSelector(state => state.videos);
  const { user } = useSelector(state => state.auth);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  
  useEffect(() => {
    dispatch(fetchVideoById(videoId));
    dispatch(incrementVideoViews(videoId));
  }, [dispatch, videoId]);
  
  useEffect(() => {
    if (currentVideo && user) {
      setLiked(currentVideo.likes.includes(user._id));
      setSaved(user.savedVideos.includes(currentVideo._id));
    }
  }, [currentVideo, user]);
  
  if (isLoading) return <VideoPlayerSkeleton />;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!currentVideo) return null;
  
  const handleLikeVideo = () => {
    if (!user) return;
    dispatch(likeVideo(videoId));
    setLiked(!liked);
  };
  
  const handleSaveVideo = () => {
    if (!user) return;
    dispatch(saveVideo(videoId));
    setSaved(!saved);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
            <iframe
              src={currentVideo.videoUrl.replace('watch?v=', 'embed/')}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{currentVideo.title}</h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{currentVideo.views} views</span>
                <span>•</span>
                <span>{new Date(currentVideo.createdAt).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleLikeVideo}
                  className={liked ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}
                >
                  <ThumbsUp size={20} />
                  <span className="ml-1">{currentVideo.likes.length}</span>
                </button>
                
                <button className="text-gray-700 hover:text-blue-500">
                  <MessageCircle size={20} />
                  <span className="ml-1">{currentVideo.comments.length}</span>
                </button>
                
                <button className="text-gray-700 hover:text-blue-500">
                  <Share2 size={20} />
                </button>
                
                <button 
                  onClick={handleSaveVideo}
                  className={saved ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}
                >
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{currentVideo.description}</p>
            </div>
            
            <CommentSection videoId={videoId} comments={currentVideo.comments} />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <RelatedVideos currentVideoId={videoId} categoryId={currentVideo.category} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;`
      }
    ],
    demoDetails: {
      description: "The Video Library platform provides a YouTube-inspired interface for video content management and viewing, with separate admin and user portals. The platform supports video categorization, user engagement features, and admin controls.",
      features: [
        "Admin portal for video, category, and user management",
        "User registration and personalized dashboards",
        "YouTube video embedding with responsive player",
        "Like, comment, and save functionality for videos",
        "Video categorization and search functionality",
        "View count tracking and trending videos section"
      ],
      screenshots: [
        {
          title: "Homepage",
          description: "Main page displaying featured and categorized videos"
        },
        {
          title: "Video Player",
          description: "Custom video player with engagement options"
        },
        {
          title: "Admin Dashboard",
          description: "Control panel for content management and analytics"
        }
      ]
    }
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
    codeSnippets: [
      {
        title: "Animated Background Component",
        language: "jsx",
        code: `import React, { useEffect, useRef } from 'react';
import { useTheme } from '../lib/ThemeContext';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.1;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(75, 0, 130, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particlesArray = [];
    const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));
    
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connections between particles
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = isDark 
              ? \`rgba(255, 255, 255, \${0.1 - distance/1000})\` 
              : \`rgba(75, 0, 130, \${0.1 - distance/1000})\`;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [isDark]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundAnimation;`
      },
      {
        title: "Theme Context for Light/Dark Mode",
        language: "tsx",
        code: `import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get initial theme from user's system preference or localStorage
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPreference = window.localStorage.getItem('theme');
      if (typeof storedPreference === 'string') {
        return storedPreference as Theme;
      }
      
      const userPreference = window.matchMedia('(prefers-color-scheme: dark)');
      if (userPreference.matches) {
        return 'dark';
      }
    }
    
    return 'light';
  };
  
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes and add the appropriate one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'light' ? '#ffffff' : '#121212'
      );
    }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};`
      },
      {
        title: "Projects Filter Component",
        language: "jsx",
        code: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/portfolioData';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(
        project => project.category === activeCategory
      ));
    }
  }, [activeCategory]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My <span className="text-purple-600">Projects</span></h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Explore my recent projects that showcase my technical skills and creativity
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={\`px-4 py-2 rounded-full \${
              activeCategory === 'All'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            } hover:shadow-lg transition-all duration-300\`}
          >
            All
          </button>
          
          {projectCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={\`px-4 py-2 rounded-full \${
                activeCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              } hover:shadow-lg transition-all duration-300\`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 text-white text-center py-2 rounded hover:bg-purple-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 border border-purple-600 text-purple-600 text-center py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;`
      }
    ],
    demoDetails: {
      description: "A responsive, modern portfolio website showcasing professional skills, projects, and experience with a clean and intuitive design. The site features both light and dark modes, interactive animations, and responsive layouts for all devices.",
      features: [
        "Interactive particle background animation",
        "Light/dark mode toggle with system preference detection",
        "Animated section transitions using Framer Motion",
        "Filterable projects section by technology/category",
        "Responsive design optimized for all device sizes",
        "Contact form with validation and submission to database"
      ],
      screenshots: [
        {
          title: "Hero Section",
          description: "Main introduction with animated background and CTA"
        },
        {
          title: "Projects Gallery",
          description: "Filterable projects with detailed information cards"
        },
        {
          title: "Skills Section",
          description: "Visual representation of technical and professional skills"
        }
      ]
    }
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
    codeSnippets: [
      {
        title: "Product Entity",
        language: "java",
        code: `package com.ecommerce.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    private int stockQuantity;
    
    private String imageUrl;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;
    
    @ManyToMany
    @JoinTable(
        name = "product_tags",
        joinColumns = @JoinColumn(name = "product_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();
    
    private boolean featured;
    
    private LocalDateTime createdAt;
    
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
    
    // Getters and setters
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public BigDecimal getPrice() {
        return price;
    }
    
    public void setPrice(BigDecimal price) {
        this.price = price;
    }
    
    public int getStockQuantity() {
        return stockQuantity;
    }
    
    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }
    
    public String getImageUrl() {
        return imageUrl;
    }
    
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    
    public Category getCategory() {
        return category;
    }
    
    public void setCategory(Category category) {
        this.category = category;
    }
    
    public Set<Tag> getTags() {
        return tags;
    }
    
    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
    
    public boolean isFeatured() {
        return featured;
    }
    
    public void setFeatured(boolean featured) {
        this.featured = featured;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}`
      },
      {
        title: "Shopping Cart Service",
        language: "java",
        code: `package com.ecommerce.service;

import com.ecommerce.dto.CartItemDTO;
import com.ecommerce.dto.ShoppingCartDTO;
import com.ecommerce.exception.ProductNotFoundException;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.model.ShoppingCart;
import com.ecommerce.model.User;
import com.ecommerce.repository.CartItemRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ShoppingCartService {
    
    @Autowired
    private ShoppingCartRepository cartRepository;
    
    @Autowired
    private CartItemRepository cartItemRepository;
    
    @Autowired
    private ProductRepository productRepository;
    
    @Transactional
    public ShoppingCartDTO getOrCreateCart(User user) {
        ShoppingCart cart = cartRepository.findByUser(user)
            .orElseGet(() -> {
                ShoppingCart newCart = new ShoppingCart();
                newCart.setUser(user);
                return cartRepository.save(newCart);
            });
        
        return convertToDTO(cart);
    }
    
    @Transactional
    public ShoppingCartDTO addItemToCart(User user, Long productId, int quantity) {
        ShoppingCart cart = cartRepository.findByUser(user)
            .orElseGet(() -> {
                ShoppingCart newCart = new ShoppingCart();
                newCart.setUser(user);
                return cartRepository.save(newCart);
            });
        
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new ProductNotFoundException("Product not found with ID: " + productId));
        
        Optional<CartItem> existingItemOpt = cart.getItems().stream()
            .filter(item -> item.getProduct().getId().equals(productId))
            .findFirst();
        
        if (existingItemOpt.isPresent()) {
            CartItem existingItem = existingItemOpt.get();
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
            cartItemRepository.save(existingItem);
        } else {
            CartItem newItem = new CartItem();
            newItem.setCart(cart);
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            newItem.setUnitPrice(product.getPrice());
            cartItemRepository.save(newItem);
            cart.getItems().add(newItem);
        }
        
        updateCartTotals(cart);
        cartRepository.save(cart);
        
        return convertToDTO(cart);
    }
    
    @Transactional
    public ShoppingCartDTO updateCartItemQuantity(User user, Long itemId, int quantity) {
        ShoppingCart cart = cartRepository.findByUser(user)
            .orElseThrow(() -> new RuntimeException("Cart not found"));
        
        CartItem item = cartItemRepository.findById(itemId)
            .orElseThrow(() -> new RuntimeException("Cart item not found"));
        
        if (!item.getCart().getId().equals(cart.getId())) {
            throw new RuntimeException("Item does not belong to user's cart");
        }
        
        if (quantity <= 0) {
            cart.getItems().remove(item);
            cartItemRepository.delete(item);
        } else {
            item.setQuantity(quantity);
            cartItemRepository.save(item);
        }
        
        updateCartTotals(cart);
        cartRepository.save(cart);
        
        return convertToDTO(cart);
    }
    
    @Transactional
    public ShoppingCartDTO removeItemFromCart(User user, Long itemId) {
        ShoppingCart cart = cartRepository.findByUser(user)
            .orElseThrow(() -> new RuntimeException("Cart not found"));
        
        CartItem item = cartItemRepository.findById(itemId)
            .orElseThrow(() -> new RuntimeException("Cart item not found"));
        
        if (!item.getCart().getId().equals(cart.getId())) {
            throw new RuntimeException("Item does not belong to user's cart");
        }
        
        cart.getItems().remove(item);
        cartItemRepository.delete(item);
        
        updateCartTotals(cart);
        cartRepository.save(cart);
        
        return convertToDTO(cart);
    }
    
    @Transactional
    public void clearCart(User user) {
        ShoppingCart cart = cartRepository.findByUser(user)
            .orElseThrow(() -> new RuntimeException("Cart not found"));
        
        cartItemRepository.deleteAll(cart.getItems());
        cart.getItems().clear();
        
        cart.setSubtotal(BigDecimal.ZERO);
        cart.setTax(BigDecimal.ZERO);
        cart.setTotal(BigDecimal.ZERO);
        
        cartRepository.save(cart);
    }
    
    private void updateCartTotals(ShoppingCart cart) {
        BigDecimal subtotal = cart.getItems().stream()
            .map(item -> item.getUnitPrice().multiply(new BigDecimal(item.getQuantity())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        // Calculate tax (e.g., 10%)
        BigDecimal taxRate = new BigDecimal("0.10");
        BigDecimal tax = subtotal.multiply(taxRate);
        
        BigDecimal total = subtotal.add(tax);
        
        cart.setSubtotal(subtotal);
        cart.setTax(tax);
        cart.setTotal(total);
    }
    
    private ShoppingCartDTO convertToDTO(ShoppingCart cart) {
        ShoppingCartDTO dto = new ShoppingCartDTO();
        dto.setId(cart.getId());
        dto.setSubtotal(cart.getSubtotal());
        dto.setTax(cart.getTax());
        dto.setTotal(cart.getTotal());
        
        List<CartItemDTO> itemDTOs = cart.getItems().stream()
            .map(this::convertToItemDTO)
            .collect(Collectors.toList());
        
        dto.setItems(itemDTOs);
        dto.setItemCount(cart.getItems().size());
        
        return dto;
    }
    
    private CartItemDTO convertToItemDTO(CartItem item) {
        CartItemDTO dto = new CartItemDTO();
        dto.setId(item.getId());
        dto.setProductId(item.getProduct().getId());
        dto.setProductName(item.getProduct().getName());
        dto.setProductImage(item.getProduct().getImageUrl());
        dto.setUnitPrice(item.getUnitPrice());
        dto.setQuantity(item.getQuantity());
        dto.setSubtotal(item.getUnitPrice().multiply(new BigDecimal(item.getQuantity())));
        return dto;
    }
}`
      },
      {
        title: "Product Controller",
        language: "java",
        code: `package com.ecommerce.controller;

import com.ecommerce.dto.ProductDTO;
import com.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    @GetMapping
    public ResponseEntity<Page<ProductDTO>> getAllProducts(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Long categoryId,
            @PageableDefault(size = 12, sort = "createdAt") Pageable pageable) {
        
        Page<ProductDTO> products;
        
        if (keyword != null && !keyword.isEmpty()) {
            products = productService.searchProducts(keyword, pageable);
        } else if (categoryId != null) {
            products = productService.getProductsByCategory(categoryId, pageable);
        } else {
            products = productService.getAllProducts(pageable);
        }
        
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
        ProductDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<ProductDTO>> getFeaturedProducts() {
        List<ProductDTO> featuredProducts = productService.getFeaturedProducts();
        return ResponseEntity.ok(featuredProducts);
    }
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductDTO> createProduct(@Valid @RequestBody ProductDTO productDTO) {
        ProductDTO createdProduct = productService.createProduct(productDTO);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }
    
    @PostMapping("/{id}/image")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductDTO> uploadProductImage(
            @PathVariable Long id,
            @RequestParam("image") MultipartFile image) {
        
        ProductDTO updatedProduct = productService.updateProductImage(id, image);
        return ResponseEntity.ok(updatedProduct);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductDTO> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductDTO productDTO) {
        
        ProductDTO updatedProduct = productService.updateProduct(id, productDTO);
        return ResponseEntity.ok(updatedProduct);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/{id}/featured")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductDTO> toggleFeaturedStatus(
            @PathVariable Long id,
            @RequestParam boolean featured) {
        
        ProductDTO updatedProduct = productService.toggleFeaturedStatus(id, featured);
        return ResponseEntity.ok(updatedProduct);
    }
    
    @GetMapping("/low-stock")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ProductDTO>> getLowStockProducts() {
        List<ProductDTO> lowStockProducts = productService.getLowStockProducts();
        return ResponseEntity.ok(lowStockProducts);
    }
}`
      }
    ],
    demoDetails: {
      description: "A complete e-commerce platform with user and admin interfaces, secure payment processing, and inventory management. The application provides a seamless shopping experience with product filtering, cart management, and order tracking.",
      features: [
        "User authentication and authorization with role-based access",
        "Product catalog with category filtering and search functionality",
        "Shopping cart with real-time price calculations",
        "Order processing and tracking system",
        "Admin dashboard for product, inventory, and order management",
        "Secure payment processing integration"
      ],
      screenshots: [
        {
          title: "Product Catalog",
          description: "Browse products with filtering and sorting options"
        },
        {
          title: "Product Detail",
          description: "Detailed product information with add to cart option"
        },
        {
          title: "Shopping Cart",
          description: "Cart management with quantity adjustments and price calculations"
        }
      ]
    }
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
    codeSnippets: [
      {
        title: "Account DAO Implementation",
        language: "java",
        code: `package com.banking.dao.impl;

import com.banking.dao.AccountDAO;
import com.banking.model.Account;
import com.banking.util.DBConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AccountDAOImpl implements AccountDAO {
    
    @Override
    public Account getAccountById(long accountId) throws SQLException {
        Account account = null;
        String query = "SELECT * FROM accounts WHERE account_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setLong(1, accountId);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    account = mapAccount(rs);
                }
            }
        }
        
        return account;
    }
    
    @Override
    public List<Account> getAccountsByUserId(long userId) throws SQLException {
        List<Account> accounts = new ArrayList<>();
        String query = "SELECT * FROM accounts WHERE user_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setLong(1, userId);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    accounts.add(mapAccount(rs));
                }
            }
        }
        
        return accounts;
    }
    
    @Override
    public long createAccount(Account account) throws SQLException {
        String query = "INSERT INTO accounts (user_id, account_type, account_number, balance, " +
                      "interest_rate, opening_date, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS)) {
            
            pstmt.setLong(1, account.getUserId());
            pstmt.setString(2, account.getAccountType());
            pstmt.setString(3, account.getAccountNumber());
            pstmt.setBigDecimal(4, account.getBalance());
            pstmt.setDouble(5, account.getInterestRate());
            pstmt.setDate(6, new java.sql.Date(account.getOpeningDate().getTime()));
            pstmt.setString(7, account.getStatus());
            
            int affectedRows = pstmt.executeUpdate();
            
            if (affectedRows == 0) {
                throw new SQLException("Creating account failed, no rows affected.");
            }
            
            try (ResultSet generatedKeys = pstmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    return generatedKeys.getLong(1);
                } else {
                    throw new SQLException("Creating account failed, no ID obtained.");
                }
            }
        }
    }
    
    @Override
    public void updateAccount(Account account) throws SQLException {
        String query = "UPDATE accounts SET balance = ?, status = ?, last_updated = NOW() " +
                      "WHERE account_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setBigDecimal(1, account.getBalance());
            pstmt.setString(2, account.getStatus());
            pstmt.setLong(3, account.getAccountId());
            
            int affectedRows = pstmt.executeUpdate();
            
            if (affectedRows == 0) {
                throw new SQLException("Updating account failed, no rows affected.");
            }
        }
    }
    
    @Override
    public boolean updateBalance(long accountId, java.math.BigDecimal newBalance) throws SQLException {
        String query = "UPDATE accounts SET balance = ?, last_updated = NOW() WHERE account_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setBigDecimal(1, newBalance);
            pstmt.setLong(2, accountId);
            
            int affectedRows = pstmt.executeUpdate();
            return affectedRows > 0;
        }
    }
    
    @Override
    public boolean deleteAccount(long accountId) throws SQLException {
        String query = "DELETE FROM accounts WHERE account_id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setLong(1, accountId);
            
            int affectedRows = pstmt.executeUpdate();
            return affectedRows > 0;
        }
    }
    
    private Account mapAccount(ResultSet rs) throws SQLException {
        Account account = new Account();
        account.setAccountId(rs.getLong("account_id"));
        account.setUserId(rs.getLong("user_id"));
        account.setAccountType(rs.getString("account_type"));
        account.setAccountNumber(rs.getString("account_number"));
        account.setBalance(rs.getBigDecimal("balance"));
        account.setInterestRate(rs.getDouble("interest_rate"));
        account.setOpeningDate(rs.getDate("opening_date"));
        account.setLastUpdated(rs.getTimestamp("last_updated"));
        account.setStatus(rs.getString("status"));
        return account;
    }
}`
      },
      {
        title: "Transaction Service Implementation",
        language: "java",
        code: `package com.banking.service.impl;

import com.banking.dao.AccountDAO;
import com.banking.dao.TransactionDAO;
import com.banking.exception.InsufficientFundsException;
import com.banking.exception.InvalidAccountException;
import com.banking.exception.TransactionFailedException;
import com.banking.model.Account;
import com.banking.model.Transaction;
import com.banking.service.TransactionService;
import com.banking.util.TransactionType;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

public class TransactionServiceImpl implements TransactionService {
    
    private final AccountDAO accountDAO;
    private final TransactionDAO transactionDAO;
    
    public TransactionServiceImpl(AccountDAO accountDAO, TransactionDAO transactionDAO) {
        this.accountDAO = accountDAO;
        this.transactionDAO = transactionDAO;
    }
    
    @Override
    public Transaction deposit(long accountId, BigDecimal amount, String description) 
            throws InvalidAccountException, TransactionFailedException {
        
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        
        try {
            Account account = accountDAO.getAccountById(accountId);
            
            if (account == null) {
                throw new InvalidAccountException("Account not found: " + accountId);
            }
            
            if (!"active".equalsIgnoreCase(account.getStatus())) {
                throw new InvalidAccountException("Account is not active: " + accountId);
            }
            
            // Update balance
            BigDecimal newBalance = account.getBalance().add(amount);
            boolean updated = accountDAO.updateBalance(accountId, newBalance);
            
            if (!updated) {
                throw new TransactionFailedException("Failed to update account balance");
            }
            
            // Create transaction record
            Transaction transaction = new Transaction();
            transaction.setAccountId(accountId);
            transaction.setType(TransactionType.DEPOSIT.toString());
            transaction.setAmount(amount);
            transaction.setBalance(newBalance);
            transaction.setDescription(description);
            transaction.setTransactionDate(new Date());
            
            long transactionId = transactionDAO.createTransaction(transaction);
            transaction.setTransactionId(transactionId);
            
            return transaction;
            
        } catch (SQLException e) {
            throw new TransactionFailedException("Database error: " + e.getMessage(), e);
        }
    }
    
    @Override
    public Transaction withdraw(long accountId, BigDecimal amount, String description) 
            throws InvalidAccountException, InsufficientFundsException, TransactionFailedException {
        
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive");
        }
        
        try {
            Account account = accountDAO.getAccountById(accountId);
            
            if (account == null) {
                throw new InvalidAccountException("Account not found: " + accountId);
            }
            
            if (!"active".equalsIgnoreCase(account.getStatus())) {
                throw new InvalidAccountException("Account is not active: " + accountId);
            }
            
            if (account.getBalance().compareTo(amount) < 0) {
                throw new InsufficientFundsException("Insufficient funds for withdrawal");
            }
            
            // Update balance
            BigDecimal newBalance = account.getBalance().subtract(amount);
            boolean updated = accountDAO.updateBalance(accountId, newBalance);
            
            if (!updated) {
                throw new TransactionFailedException("Failed to update account balance");
            }
            
            // Create transaction record
            Transaction transaction = new Transaction();
            transaction.setAccountId(accountId);
            transaction.setType(TransactionType.WITHDRAWAL.toString());
            transaction.setAmount(amount);
            transaction.setBalance(newBalance);
            transaction.setDescription(description);
            transaction.setTransactionDate(new Date());
            
            long transactionId = transactionDAO.createTransaction(transaction);
            transaction.setTransactionId(transactionId);
            
            return transaction;
            
        } catch (SQLException e) {
            throw new TransactionFailedException("Database error: " + e.getMessage(), e);
        }
    }
    
    @Override
    public Transaction transfer(long fromAccountId, long toAccountId, BigDecimal amount, String description) 
            throws InvalidAccountException, InsufficientFundsException, TransactionFailedException {
        
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Transfer amount must be positive");
        }
        
        if (fromAccountId == toAccountId) {
            throw new InvalidAccountException("Cannot transfer to the same account");
        }
        
        try {
            Account fromAccount = accountDAO.getAccountById(fromAccountId);
            Account toAccount = accountDAO.getAccountById(toAccountId);
            
            if (fromAccount == null) {
                throw new InvalidAccountException("Source account not found: " + fromAccountId);
            }
            
            if (toAccount == null) {
                throw new InvalidAccountException("Destination account not found: " + toAccountId);
            }
            
            if (!"active".equalsIgnoreCase(fromAccount.getStatus())) {
                throw new InvalidAccountException("Source account is not active: " + fromAccountId);
            }
            
            if (!"active".equalsIgnoreCase(toAccount.getStatus())) {
                throw new InvalidAccountException("Destination account is not active: " + toAccountId);
            }
            
            if (fromAccount.getBalance().compareTo(amount) < 0) {
                throw new InsufficientFundsException("Insufficient funds for transfer");
            }
            
            // Create the withdrawal transaction
            Transaction withdrawalTransaction = withdraw(fromAccountId, amount, 
                    "Transfer to account: " + toAccount.getAccountNumber() + " - " + description);
            
            // Create the deposit transaction
            try {
                deposit(toAccountId, amount, 
                        "Transfer from account: " + fromAccount.getAccountNumber() + " - " + description);
            } catch (Exception e) {
                // If deposit fails, try to rollback the withdrawal
                try {
                    deposit(fromAccountId, amount, "Reversal of failed transfer - " + description);
                } catch (Exception rollbackEx) {
                    throw new TransactionFailedException("Transfer failed and rollback also failed: " 
                            + rollbackEx.getMessage(), rollbackEx);
                }
                throw new TransactionFailedException("Transfer failed: " + e.getMessage(), e);
            }
            
            return withdrawalTransaction;
            
        } catch (SQLException e) {
            throw new TransactionFailedException("Database error: " + e.getMessage(), e);
        }
    }
    
    @Override
    public List<Transaction> getTransactionHistory(long accountId, Date startDate, Date endDate) 
            throws InvalidAccountException, TransactionFailedException {
        
        try {
            Account account = accountDAO.getAccountById(accountId);
            
            if (account == null) {
                throw new InvalidAccountException("Account not found: " + accountId);
            }
            
            return transactionDAO.getTransactionsByAccountAndDateRange(accountId, startDate, endDate);
            
        } catch (SQLException e) {
            throw new TransactionFailedException("Database error: " + e.getMessage(), e);
        }
    }
}`
      },
      {
        title: "Transfer Funds Servlet",
        language: "java",
        code: `package com.banking.servlet;

import com.banking.exception.InsufficientFundsException;
import com.banking.exception.InvalidAccountException;
import com.banking.exception.TransactionFailedException;
import com.banking.model.Account;
import com.banking.model.Transaction;
import com.banking.model.User;
import com.banking.service.AccountService;
import com.banking.service.TransactionService;
import com.banking.service.impl.AccountServiceImpl;
import com.banking.service.impl.TransactionServiceImpl;
import com.banking.util.DAOFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@WebServlet("/transfer")
public class TransferFundsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    private TransactionService transactionService;
    private AccountService accountService;
    
    @Override
    public void init() throws ServletException {
        this.transactionService = new TransactionServiceImpl(
                DAOFactory.getAccountDAO(), 
                DAOFactory.getTransactionDAO());
        this.accountService = new AccountServiceImpl(DAOFactory.getAccountDAO());
    }
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect(request.getContextPath() + "/login");
            return;
        }
        
        User user = (User) session.getAttribute("user");
        
        try {
            List<Account> userAccounts = accountService.getAccountsByUserId(user.getUserId());
            request.setAttribute("accounts", userAccounts);
            request.getRequestDispatcher("/WEB-INF/views/transfer.jsp").forward(request, response);
        } catch (Exception e) {
            request.setAttribute("errorMessage", "Unable to retrieve accounts: " + e.getMessage());
            request.getRequestDispatcher("/WEB-INF/views/error.jsp").forward(request, response);
        }
    }
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            response.sendRedirect(request.getContextPath() + "/login");
            return;
        }
        
        String fromAccountIdStr = request.getParameter("fromAccount");
        String toAccountIdStr = request.getParameter("toAccount");
        String amountStr = request.getParameter("amount");
        String description = request.getParameter("description");
        
        String errorMessage = null;
        
        if (fromAccountIdStr == null || fromAccountIdStr.trim().isEmpty()) {
            errorMessage = "Source account is required.";
        } else if (toAccountIdStr == null || toAccountIdStr.trim().isEmpty()) {
            errorMessage = "Destination account is required.";
        } else if (amountStr == null || amountStr.trim().isEmpty()) {
            errorMessage = "Transfer amount is required.";
        } else if (fromAccountIdStr.equals(toAccountIdStr)) {
            errorMessage = "Source and destination accounts cannot be the same.";
        }
        
        if (errorMessage != null) {
            request.setAttribute("errorMessage", errorMessage);
            doGet(request, response);
            return;
        }
        
        try {
            long fromAccountId = Long.parseLong(fromAccountIdStr);
            long toAccountId = Long.parseLong(toAccountIdStr);
            BigDecimal amount = new BigDecimal(amountStr);
            
            if (amount.compareTo(BigDecimal.ZERO) <= 0) {
                request.setAttribute("errorMessage", "Transfer amount must be positive.");
                doGet(request, response);
                return;
            }
            
            Transaction transaction = transactionService.transfer(
                    fromAccountId, toAccountId, amount, 
                    description != null ? description : "Fund transfer");
            
            // Update the account information in the session
            User user = (User) session.getAttribute("user");
            List<Account> userAccounts = accountService.getAccountsByUserId(user.getUserId());
            
            request.setAttribute("successMessage", 
                    "Transfer successful. Transaction ID: " + transaction.getTransactionId());
            request.setAttribute("accounts", userAccounts);
            
            request.getRequestDispatcher("/WEB-INF/views/transfer.jsp").forward(request, response);
            
        } catch (InsufficientFundsException e) {
            request.setAttribute("errorMessage", "Insufficient funds: " + e.getMessage());
            doGet(request, response);
        } catch (InvalidAccountException e) {
            request.setAttribute("errorMessage", "Invalid account: " + e.getMessage());
            doGet(request, response);
        } catch (TransactionFailedException e) {
            request.setAttribute("errorMessage", "Transaction failed: " + e.getMessage());
            doGet(request, response);
        } catch (NumberFormatException e) {
            request.setAttribute("errorMessage", "Invalid input format.");
            doGet(request, response);
        } catch (Exception e) {
            request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
            request.getRequestDispatcher("/WEB-INF/views/error.jsp").forward(request, response);
        }
    }
}`
      }
    ],
    demoDetails: {
      description: "A secure banking management system with user authentication, account management, fund transfers, and transaction tracking. The application provides a comprehensive banking experience with real-time balance updates and secure transactions.",
      features: [
        "User authentication with robust security measures",
        "Multiple account types (Savings, Checking, Fixed Deposit) management",
        "Fund transfer between accounts with transaction validation",
        "Transaction history with filtering and search capabilities",
        "Account statement generation and download",
        "Admin portal for customer and account management"
      ],
      screenshots: [
        {
          title: "Dashboard",
          description: "User dashboard showing account summaries and quick actions"
        },
        {
          title: "Fund Transfer",
          description: "Secure interface for transferring funds between accounts"
        },
        {
          title: "Transaction History",
          description: "Detailed view of account transactions with filtering options"
        }
      ]
    }
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
    codeSnippets: [
      {
        title: "Student Entity",
        language: "java",
        code: `package com.sms.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "student_id", nullable = false, unique = true)
    private String studentId;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(name = "phone_number")
    private String phoneNumber;
    
    @Column(name = "date_of_birth")
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
    
    @Column(name = "enrollment_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date enrollmentDate;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "department_id")
    private Department department;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StudentStatus status;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Enrollment> enrollments = new HashSet<>();
    
    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Address address;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Document> documents = new HashSet<>();
    
    @Column(name = "created_at", nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
    
    @Column(name = "updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }
    
    // Utility methods for bidirectional relationships
    public void addEnrollment(Enrollment enrollment) {
        enrollments.add(enrollment);
        enrollment.setStudent(this);
    }
    
    public void removeEnrollment(Enrollment enrollment) {
        enrollments.remove(enrollment);
        enrollment.setStudent(null);
    }
    
    public void addDocument(Document document) {
        documents.add(document);
        document.setStudent(this);
    }
    
    public void removeDocument(Document document) {
        documents.remove(document);
        document.setStudent(null);
    }
    
    public void setAddress(Address address) {
        this.address = address;
        if (address != null) {
            address.setStudent(this);
        }
    }
    
    // Getters and setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getStudentId() {
        return studentId;
    }
    
    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPhoneNumber() {
        return phoneNumber;
    }
    
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    
    public Date getDateOfBirth() {
        return dateOfBirth;
    }
    
    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    
    public Date getEnrollmentDate() {
        return enrollmentDate;
    }
    
    public void setEnrollmentDate(Date enrollmentDate) {
        this.enrollmentDate = enrollmentDate;
    }
    
    public Department getDepartment() {
        return department;
    }
    
    public void setDepartment(Department department) {
        this.department = department;
    }
    
    public StudentStatus getStatus() {
        return status;
    }
    
    public void setStatus(StudentStatus status) {
        this.status = status;
    }
    
    public Set<Enrollment> getEnrollments() {
        return enrollments;
    }
    
    public Address getAddress() {
        return address;
    }
    
    public Set<Document> getDocuments() {
        return documents;
    }
    
    public Date getCreatedAt() {
        return createdAt;
    }
    
    public Date getUpdatedAt() {
        return updatedAt;
    }
    
    // Enum for student status
    public enum StudentStatus {
        ACTIVE, INACTIVE, GRADUATED, SUSPENDED, TRANSFERRED
    }
}`
      },
      {
        title: "Course Service Implementation",
        language: "java",
        code: `package com.sms.service.impl;

import com.sms.dto.CourseDTO;
import com.sms.entity.Course;
import com.sms.entity.Department;
import com.sms.entity.Instructor;
import com.sms.exception.ResourceNotFoundException;
import com.sms.repository.CourseRepository;
import com.sms.repository.DepartmentRepository;
import com.sms.repository.InstructorRepository;
import com.sms.service.CourseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CourseServiceImpl implements CourseService {
    
    @Autowired
    private CourseRepository courseRepository;
    
    @Autowired
    private DepartmentRepository departmentRepository;
    
    @Autowired
    private InstructorRepository instructorRepository;
    
    @Autowired
    private ModelMapper modelMapper;
    
    @Override
    public List<CourseDTO> getAllCourses() {
        return courseRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    @Override
    public Page<CourseDTO> getAllCourses(Pageable pageable) {
        return courseRepository.findAll(pageable)
                .map(this::convertToDTO);
    }
    
    @Override
    public CourseDTO getCourseById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));
        return convertToDTO(course);
    }
    
    @Override
    public List<CourseDTO> getCoursesByDepartment(Long departmentId) {
        return courseRepository.findByDepartmentId(departmentId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    @Override
    public List<CourseDTO> getCoursesByInstructor(Long instructorId) {
        return courseRepository.findByInstructorId(instructorId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    @Override
    public CourseDTO createCourse(CourseDTO courseDTO) {
        Course course = convertToEntity(courseDTO);
        Course savedCourse = courseRepository.save(course);
        return convertToDTO(savedCourse);
    }
    
    @Override
    public CourseDTO updateCourse(Long id, CourseDTO courseDTO) {
        Course existingCourse = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));
        
        // Update fields
        existingCourse.setCode(courseDTO.getCode());
        existingCourse.setName(courseDTO.getName());
        existingCourse.setDescription(courseDTO.getDescription());
        existingCourse.setCredits(courseDTO.getCredits());
        
        // Update Department if provided
        if (courseDTO.getDepartmentId() != null) {
            Department department = departmentRepository.findById(courseDTO.getDepartmentId())
                    .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + courseDTO.getDepartmentId()));
            existingCourse.setDepartment(department);
        }
        
        // Update Instructor if provided
        if (courseDTO.getInstructorId() != null) {
            Instructor instructor = instructorRepository.findById(courseDTO.getInstructorId())
                    .orElseThrow(() -> new ResourceNotFoundException("Instructor not found with id: " + courseDTO.getInstructorId()));
            existingCourse.setInstructor(instructor);
        }
        
        Course updatedCourse = courseRepository.save(existingCourse);
        return convertToDTO(updatedCourse);
    }
    
    @Override
    public void deleteCourse(Long id) {
        if (!courseRepository.existsById(id)) {
            throw new ResourceNotFoundException("Course not found with id: " + id);
        }
        courseRepository.deleteById(id);
    }
    
    @Override
    public List<CourseDTO> searchCourses(String keyword) {
        return courseRepository.findByNameContainingIgnoreCaseOrCodeContainingIgnoreCase(keyword, keyword).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    private CourseDTO convertToDTO(Course course) {
        CourseDTO dto = modelMapper.map(course, CourseDTO.class);
        
        if (course.getDepartment() != null) {
            dto.setDepartmentId(course.getDepartment().getId());
            dto.setDepartmentName(course.getDepartment().getName());
        }
        
        if (course.getInstructor() != null) {
            dto.setInstructorId(course.getInstructor().getId());
            dto.setInstructorName(course.getInstructor().getFirstName() + " " + course.getInstructor().getLastName());
        }
        
        return dto;
    }
    
    private Course convertToEntity(CourseDTO dto) {
        Course course = modelMapper.map(dto, Course.class);
        
        if (dto.getDepartmentId() != null) {
            Department department = departmentRepository.findById(dto.getDepartmentId())
                    .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + dto.getDepartmentId()));
            course.setDepartment(department);
        }
        
        if (dto.getInstructorId() != null) {
            Instructor instructor = instructorRepository.findById(dto.getInstructorId())
                    .orElseThrow(() -> new ResourceNotFoundException("Instructor not found with id: " + dto.getInstructorId()));
            course.setInstructor(instructor);
        }
        
        return course;
    }
}`
      },
      {
        title: "Student Controller",
        language: "java",
        code: `package com.sms.controller;

import com.sms.dto.StudentDTO;
import com.sms.entity.Student.StudentStatus;
import com.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/students")
public class StudentController {
    
    @Autowired
    private StudentService studentService;
    
    @GetMapping
    public String listStudents(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) StudentStatus status,
            @PageableDefault(size = 10) Pageable pageable,
            Model model) {
        
        Page<StudentDTO> students;
        
        if (keyword != null && !keyword.isEmpty()) {
            students = studentService.searchStudents(keyword, pageable);
            model.addAttribute("keyword", keyword);
        } else if (status != null) {
            students = studentService.getStudentsByStatus(status, pageable);
            model.addAttribute("status", status);
        } else {
            students = studentService.getAllStudents(pageable);
        }
        
        model.addAttribute("students", students);
        model.addAttribute("statuses", StudentStatus.values());
        return "students/list";
    }
    
    @GetMapping("/{id}")
    public String viewStudent(@PathVariable Long id, Model model) {
        StudentDTO student = studentService.getStudentById(id);
        model.addAttribute("student", student);
        return "students/view";
    }
    
    @GetMapping("/new")
    @PreAuthorize("hasRole('ADMIN')")
    public String showCreateForm(Model model) {
        model.addAttribute("student", new StudentDTO());
        model.addAttribute("statuses", StudentStatus.values());
        return "students/form";
    }
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public String createStudent(
            @Valid @ModelAttribute("student") StudentDTO studentDTO,
            BindingResult result,
            RedirectAttributes attributes) {
        
        if (result.hasErrors()) {
            return "students/form";
        }
        
        try {
            StudentDTO createdStudent = studentService.createStudent(studentDTO);
            attributes.addFlashAttribute("success", "Student created successfully with ID: " + createdStudent.getStudentId());
            return "redirect:/students/" + createdStudent.getId();
        } catch (Exception e) {
            attributes.addFlashAttribute("error", "Error creating student: " + e.getMessage());
            return "redirect:/students/new";
        }
    }
    
    @GetMapping("/{id}/edit")
    @PreAuthorize("hasRole('ADMIN')")
    public String showEditForm(@PathVariable Long id, Model model) {
        StudentDTO student = studentService.getStudentById(id);
        model.addAttribute("student", student);
        model.addAttribute("statuses", StudentStatus.values());
        return "students/form";
    }
    
    @PostMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String updateStudent(
            @PathVariable Long id,
            @Valid @ModelAttribute("student") StudentDTO studentDTO,
            BindingResult result,
            RedirectAttributes attributes) {
        
        if (result.hasErrors()) {
            return "students/form";
        }
        
        try {
            StudentDTO updatedStudent = studentService.updateStudent(id, studentDTO);
            attributes.addFlashAttribute("success", "Student updated successfully");
            return "redirect:/students/" + updatedStudent.getId();
        } catch (Exception e) {
            attributes.addFlashAttribute("error", "Error updating student: " + e.getMessage());
            return "redirect:/students/" + id + "/edit";
        }
    }
    
    @PostMapping("/{id}/delete")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteStudent(@PathVariable Long id, RedirectAttributes attributes) {
        try {
            studentService.deleteStudent(id);
            attributes.addFlashAttribute("success", "Student deleted successfully");
        } catch (Exception e) {
            attributes.addFlashAttribute("error", "Error deleting student: " + e.getMessage());
        }
        return "redirect:/students";
    }
    
    // API endpoints for AJAX requests
    
    @GetMapping("/api/search")
    @ResponseBody
    public List<StudentDTO> searchStudents(@RequestParam String keyword) {
        return studentService.searchStudentsByName(keyword);
    }
    
    @PostMapping("/api/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    @ResponseBody
    public ResponseEntity<StudentDTO> updateStudentStatus(
            @PathVariable Long id,
            @RequestParam StudentStatus status) {
        
        StudentDTO updatedStudent = studentService.updateStudentStatus(id, status);
        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
    }
    
    @GetMapping("/api/departments/{departmentId}")
    @ResponseBody
    public Page<StudentDTO> getStudentsByDepartment(
            @PathVariable Long departmentId,
            Pageable pageable) {
        
        return studentService.getStudentsByDepartment(departmentId, pageable);
    }
}`
      }
    ],
    demoDetails: {
      description: "A comprehensive student management system for educational institutions, featuring student enrollment, course management, grade tracking, and administrative tools. The system provides role-based access for students, faculty, and administrators.",
      features: [
        "Secure authentication with role-based access control",
        "Student profile management with personal details and documents",
        "Course enrollment and management system",
        "Grade tracking and GPA calculation",
        "Attendance monitoring and reporting",
        "Department and faculty management",
        "Administrative dashboard with analytics"
      ],
      screenshots: [
        {
          title: "Student Dashboard",
          description: "Personalized dashboard showing enrolled courses and academic progress"
        },
        {
          title: "Course Enrollment",
          description: "Interface for browsing and enrolling in available courses"
        },
        {
          title: "Admin Dashboard",
          description: "Administrative control panel with reporting and management tools"
        }
      ]
    }
  },
];
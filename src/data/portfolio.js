/**
 * Centralized Portfolio Configuration for ALEENA JOBY
 * 
 * Edit this file to update any personal information, skills, 
 * education details, contact information, and social links.
 * 
 * Note: Missing or empty fields (e.g. social links or skills) are
 * handled gracefully throughout the UI without displaying broken links.
 */

export const portfolioData = {
  // 1. Personal & Hero Details
  personal: {
    name: "ALEENA JOBY",
    firstName: "Aleena",
    title: "Aspiring Software Developer",
    subtitle: "Computer Science Engineering Student",
    welcomeBadge: "HELLO, WELCOME TO MY PORTFOLIO",
    heroHeading: "Hi, I'm Aleena Joby.",
    heroDescription:
      "Exploring technology, embracing creativity, and building my journey in the world of computer science.",
    location: "Kerala, India",
    academicYear: "First Year",
    degree: "B.Tech Computer Science Engineering",
    experienceLevel: "Beginner",
    statusBadge: "Open to Learning & Collaborating",
  },

  // 2. About Section Details
  about: {
    sectionTitle: "A Little About Me",
    sectionBadge: "ABOUT ME",
    paragraphs: [
      "I'm Aleena Joby, a first-year B.Tech Computer Science Engineering student from Kerala. I believe every great developer starts with curiosity and a willingness to learn.",
      "I'm currently exploring the fundamentals of computer science, discovering new technologies, and looking forward to turning my ideas into meaningful projects.",
      "My journey is just beginning, and I'm excited about everything ahead.",
    ],
    cards: [
      {
        id: "background",
        title: "My Background",
        description: "First-year Computer Science Engineering student.",
        icon: "GraduationCap",
      },
      {
        id: "interests",
        title: "My Interests",
        description: "Technology, programming, creativity, and continuous learning.",
        icon: "Sparkles",
      },
      {
        id: "journey",
        title: "My Journey",
        description: "Building knowledge, exploring new ideas, and developing technical skills.",
        icon: "Compass",
      },
    ],
  },

  // 3. Skills Section Details
  // Note: Since Aleena is a beginner, actual skills have not been invented.
  // Add your technologies into the 'skills' array of any category when you learn them.
  // If all categories have empty skills, the designated foundation message is displayed.
  skills: {
    sectionTitle: "What I'm Learning",
    sectionBadge: "SKILLS & INTERESTS",
    emptyFallbackMessage:
      "I'm currently building my technical foundation and exploring the technologies that shape the digital world.",
    categories: [
      {
        id: "programming-languages",
        name: "Programming Languages",
        description: "Building analytical thinking, problem-solving, and core syntax foundations.",
        icon: "Code2",
        // Example when you want to add: skills: ["C", "Python", "Java"]
        skills: [],
      },
      {
        id: "web-development",
        name: "Web Development",
        description: "Understanding modern web architecture, user interfaces, and interactivity.",
        icon: "Layout",
        // Example when you want to add: skills: ["HTML5", "CSS3", "JavaScript", "React"]
        skills: [],
      },
      {
        id: "tools-technologies",
        name: "Tools & Technologies",
        description: "Leveraging modern developer tools, command line, and version control.",
        icon: "Terminal",
        // Example when you want to add: skills: ["Git", "GitHub", "VS Code"]
        skills: [],
      },
      {
        id: "cs-fundamentals",
        name: "Computer Science Fundamentals",
        description: "Studying algorithmic problem solving, logic design, and computing structures.",
        icon: "Cpu",
        // Example when you want to add: skills: ["Data Structures", "Algorithms", "Logic Design"]
        skills: [],
      },
    ],
  },

  // 4. Education Section Details
  // Keep college name, university, duration, and achievements editable.
  // No details have been invented.
  education: {
    sectionTitle: "My Education",
    sectionBadge: "ACADEMICS",
    timeline: [
      {
        course: "B.Tech Computer Science Engineering",
        academicYear: "First Year",
        location: "Kerala, India",
        // Fill these details as needed:
        college: "", // e.g., "College of Engineering..."
        university: "", // e.g., "APJ Abdul Kalam Technological University (KTU)"
        duration: "", // e.g., "2024 - 2028"
        graduationYear: "", // e.g., "Expected 2028"
        status: "Currently Enrolled",
        achievements: [
          // e.g. "Focusing on core engineering mathematics and C programming fundamentals"
        ],
      },
    ],
  },

  // 5. Contact Section Details
  // Hide social links when actual URLs are missing/empty.
  contact: {
    sectionTitle: "Let's Connect",
    sectionBadge: "GET IN TOUCH",
    description:
      "I'm always happy to connect, learn, and explore new opportunities. Feel free to reach out!",
    // Set your email here when available:
    email: "", // e.g., "aleena.joby@example.com"
    location: "Kerala, India",
    // Set your profile URLs here when created; empty strings are automatically hidden:
    socials: {
      github: "", // e.g. "https://github.com/your-username"
      linkedin: "", // e.g. "https://linkedin.com/in/your-username"
      twitter: "", // e.g. "https://twitter.com/your-username"
      instagram: "", // e.g. "https://instagram.com/your-username"
    },
  },

  // 6. Navigation Bar Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  // 7. Footer Details
  footer: {
    tagline: "Learning today, creating tomorrow.",
  },
};


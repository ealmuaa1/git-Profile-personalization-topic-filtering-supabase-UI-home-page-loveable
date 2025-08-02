// Comprehensive quest data for all learning topics

export const aiFoundamentalsQuest = {
  id: "ai-fundamentals",
  title: "AI Fundamentals: From Basics to Applications",
  summary:
    "Learn Introduction to AI, Machine Learning Basics, AI Ethics, and Real-World Applications through interactive lessons and games.",
  category: "AI Essentials",
  difficulty: "Beginner",
  duration: "4 hours",
  xp: 800,
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Introduction to AI",
      content:
        "Understand what artificial intelligence is, its history, and how it impacts our daily lives.",
      duration: "45 minutes",
      completed: false,
      concepts: [
        "AI definition",
        "History of AI",
        "Types of AI",
        "AI vs ML vs DL",
      ],
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      content:
        "Learn the fundamentals of machine learning, supervised vs unsupervised learning, and common algorithms.",
      duration: "60 minutes",
      completed: false,
      concepts: [
        "Supervised learning",
        "Unsupervised learning",
        "Algorithms",
        "Training data",
      ],
    },
    {
      id: 3,
      title: "AI Ethics and Bias",
      content:
        "Explore the ethical considerations in AI development and deployment, including bias and fairness.",
      duration: "50 minutes",
      completed: false,
      concepts: ["AI bias", "Fairness", "Transparency", "Responsible AI"],
    },
    {
      id: 4,
      title: "Real-World AI Applications",
      content:
        "Discover how AI is being used across different industries and its future potential.",
      duration: "45 minutes",
      completed: false,
      concepts: [
        "Healthcare AI",
        "Finance AI",
        "Autonomous vehicles",
        "NLP applications",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What does AI stand for?",
      back: "Artificial Intelligence",
      category: "Basics",
    },
    {
      id: 2,
      front: "What is machine learning?",
      back: "A subset of AI that enables computers to learn without being explicitly programmed",
      category: "ML",
    },
    {
      id: 3,
      front: "Name three types of machine learning",
      back: "Supervised, Unsupervised, and Reinforcement Learning",
      category: "ML",
    },
    {
      id: 4,
      front: "What is AI bias?",
      back: "Systematic errors in AI systems that result in unfair treatment of certain groups",
      category: "Ethics",
    },
  ],

  quizzes: [
    {
      id: 1,
      question: "Which of the following is NOT a type of machine learning?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Cognitive Learning",
      ],
      correctAnswer: 3,
      explanation:
        "Cognitive Learning is not a standard type of machine learning. The three main types are Supervised, Unsupervised, and Reinforcement Learning.",
    },
  ],

  badges: [
    {
      id: "ai-starter",
      name: "AI Explorer",
      description: "Started your AI journey",
      icon: "🤖",
      unlocked: false,
    },
    {
      id: "ml-basics",
      name: "ML Fundamentals",
      description: "Mastered machine learning basics",
      icon: "🧠",
      unlocked: false,
    },
  ],

  games: ["ai-flashcards", "ai-quiz", "concept-matching", "ai-scenarios"],
};

export const pythonQuest = {
  id: "python-programming",
  title: "Python Programming: From Zero to Hero",
  summary:
    "Master Python basics, data structures, functions, and object-oriented programming with hands-on coding exercises.",
  category: "Programming",
  difficulty: "Beginner",
  duration: "5 hours",
  xp: 1000,
  image:
    "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Introduction to Python",
      content:
        "Learn what Python is, its history, and why it's popular for beginners and professionals alike.",
      duration: "30 minutes",
      completed: false,
      concepts: ["Python basics", "Installation", "IDLE", "Print statements"],
    },
    {
      id: 2,
      title: "Variables and Data Types",
      content:
        "Understand how to store data in variables and work with different data types like strings, integers, and floats.",
      duration: "45 minutes",
      completed: false,
      concepts: ["Variables", "Strings", "Integers", "Floats", "Booleans"],
    },
    {
      id: 3,
      title: "Functions and Control Flow",
      content:
        "Learn to write reusable code with functions and control program flow with if statements and loops.",
      duration: "60 minutes",
      completed: false,
      concepts: ["Functions", "If statements", "Elif", "Else", "Return values"],
    },
    {
      id: 4,
      title: "Lists and Dictionaries",
      content:
        "Master Python's most important data structures for storing and organizing information.",
      duration: "50 minutes",
      completed: false,
      concepts: [
        "Lists",
        "Dictionaries",
        "Indexing",
        "Methods",
        "Key-value pairs",
      ],
    },
    {
      id: 5,
      title: "Loops and Iteration",
      content:
        "Automate repetitive tasks using for loops and while loops with practical examples.",
      duration: "40 minutes",
      completed: false,
      concepts: [
        "For loops",
        "While loops",
        "Range",
        "Iteration",
        "Break and continue",
      ],
    },
    {
      id: 6,
      title: "Object-Oriented Programming",
      content:
        "Introduction to classes, objects, and the fundamentals of object-oriented programming in Python.",
      duration: "55 minutes",
      completed: false,
      concepts: [
        "Classes",
        "Objects",
        "Methods",
        "Attributes",
        "Inheritance basics",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "How do you print 'Hello World' in Python?",
      back: "print('Hello World')",
      category: "Basics",
    },
    {
      id: 2,
      front: "How do you create a variable named 'age' with value 25?",
      back: "age = 25",
      category: "Variables",
    },
    {
      id: 3,
      front: "How do you define a function named 'greet'?",
      back: "def greet():",
      category: "Functions",
    },
    {
      id: 4,
      front: "How do you create an empty list?",
      back: "my_list = []",
      category: "Lists",
    },
  ],

  quizzes: [
    {
      id: 1,
      question: "Which symbol is used for comments in Python?",
      options: ["//", "#", "/*", "<!--"],
      correctAnswer: 1,
      explanation: "Python uses the # symbol for single-line comments.",
    },
  ],

  badges: [
    {
      id: "python-starter",
      name: "Python Starter",
      description: "Completed your first Python lesson",
      icon: "🐍",
      unlocked: false,
    },
    {
      id: "python-hero",
      name: "Python Hero",
      description: "Completed the entire Python quest",
      icon: "🦸",
      unlocked: false,
    },
  ],

  games: [
    "python-flashcards",
    "python-quiz",
    "code-completion",
    "syntax-matching",
  ],
};

export const webDevQuest = {
  id: "web-development",
  title: "Modern Web Development with React",
  summary:
    "Build interactive web apps: HTML/CSS Basics, JavaScript ES6+, React Components, State Management, and API Integration.",
  category: "Web Development",
  difficulty: "Intermediate",
  duration: "6 hours",
  xp: 1200,
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "HTML/CSS Fundamentals",
      content:
        "Master the building blocks of web development with HTML structure and CSS styling.",
      duration: "60 minutes",
      completed: false,
      concepts: ["HTML elements", "CSS selectors", "Flexbox", "Grid layout"],
    },
    {
      id: 2,
      title: "JavaScript ES6+ Essentials",
      content:
        "Learn modern JavaScript features including arrow functions, destructuring, and async/await.",
      duration: "75 minutes",
      completed: false,
      concepts: ["Arrow functions", "Destructuring", "Promises", "Async/await"],
    },
    {
      id: 3,
      title: "React Components",
      content:
        "Build reusable UI components with React functional components and JSX.",
      duration: "60 minutes",
      completed: false,
      concepts: ["JSX", "Components", "Props", "Event handling"],
    },
    {
      id: 4,
      title: "State Management",
      content:
        "Manage application state with React hooks like useState and useEffect.",
      duration: "50 minutes",
      completed: false,
      concepts: ["useState", "useEffect", "State updates", "Side effects"],
    },
    {
      id: 5,
      title: "API Integration",
      content:
        "Connect your React app to external APIs and handle data fetching.",
      duration: "45 minutes",
      completed: false,
      concepts: ["Fetch API", "REST APIs", "Error handling", "Loading states"],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What does JSX stand for?",
      back: "JavaScript XML",
      category: "React",
    },
    {
      id: 2,
      front: "What hook is used for state management?",
      back: "useState",
      category: "Hooks",
    },
    {
      id: 3,
      front: "What is a blue-green deployment?",
      back: "A deployment strategy that uses two identical production environments",
      category: "Deployment",
    },
    {
      id: 4,
      front: "What is gas in Ethereum?",
      back: "The fee required to execute transactions or smart contracts",
      category: "Ethereum",
    },
  ],

  quizzes: [
    {
      id: 1,
      question:
        "Which of the following is the correct way to create a React component?",
      options: [
        "function MyComponent() {}",
        "const MyComponent = () => {}",
        "class MyComponent extends React.Component {}",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "React components can be created using function declarations, arrow functions, or class components.",
    },
  ],

  badges: [
    {
      id: "web-starter",
      name: "Web Explorer",
      description: "Started web development journey",
      icon: "🌐",
      unlocked: false,
    },
    {
      id: "react-master",
      name: "React Master",
      description: "Mastered React fundamentals",
      icon: "⚛️",
      unlocked: false,
    },
  ],

  games: [
    "web-flashcards",
    "web-quiz",
    "component-matching",
    "code-completion",
  ],
};

export const blockchainQuest = {
  id: "blockchain-development",
  title: "Blockchain Development: Smart Contracts & DApps",
  summary:
    "Explore Blockchain Basics, Cryptocurrency Fundamentals, Smart Contract Development, DApp Building, and Web3 Integration.",
  category: "Blockchain",
  difficulty: "Advanced",
  duration: "7 hours",
  xp: 1400,
  image:
    "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      content:
        "Understand how blockchain technology works, including blocks, hashing, and consensus mechanisms.",
      duration: "60 minutes",
      completed: false,
      concepts: [
        "Blockchain basics",
        "Hashing",
        "Consensus",
        "Decentralization",
      ],
    },
    {
      id: 2,
      title: "Cryptocurrency Basics",
      content:
        "Learn about digital currencies, Bitcoin, Ethereum, and how transactions work on blockchain.",
      duration: "50 minutes",
      completed: false,
      concepts: ["Bitcoin", "Ethereum", "Transactions", "Wallets"],
    },
    {
      id: 3,
      title: "Smart Contract Development",
      content:
        "Write your first smart contract using Solidity programming language.",
      duration: "90 minutes",
      completed: false,
      concepts: ["Solidity", "Smart contracts", "Gas", "Deployment"],
    },
    {
      id: 4,
      title: "DApp Architecture",
      content:
        "Design and build decentralized applications that interact with smart contracts.",
      duration: "75 minutes",
      completed: false,
      concepts: [
        "DApp structure",
        "Frontend integration",
        "Web3.js",
        "MetaMask",
      ],
    },
    {
      id: 5,
      title: "Web3 Integration",
      content:
        "Connect your DApp to the blockchain and enable user interactions with smart contracts.",
      duration: "65 minutes",
      completed: false,
      concepts: [
        "Web3 libraries",
        "Contract interaction",
        "Transaction signing",
        "Event listening",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What is a blockchain?",
      back: "A distributed ledger of transactions maintained across multiple computers",
      category: "Basics",
    },
    {
      id: 2,
      front: "What language is used for Ethereum smart contracts?",
      back: "Solidity",
      category: "Development",
    },
    {
      id: 3,
      front: "What is a DApp?",
      back: "Decentralized Application",
      category: "Applications",
    },
    {
      id: 4,
      front: "What is gas in Ethereum?",
      back: "The fee required to execute transactions or smart contracts",
      category: "Ethereum",
    },
  ],

  quizzes: [
    {
      id: 1,
      question: "What is the main benefit of blockchain technology?",
      options: ["Speed", "Decentralization", "Low cost", "Simplicity"],
      correctAnswer: 1,
      explanation:
        "The main benefit of blockchain is decentralization, removing the need for trusted intermediaries.",
    },
  ],

  badges: [
    {
      id: "blockchain-explorer",
      name: "Blockchain Explorer",
      description: "Learned blockchain basics",
      icon: "🔗",
      unlocked: false,
    },
    {
      id: "smart-contract-dev",
      name: "Smart Contract Developer",
      description: "Created your first smart contract",
      icon: "📜",
      unlocked: false,
    },
  ],

  games: [
    "blockchain-flashcards",
    "blockchain-quiz",
    "contract-matching",
    "crypto-scenarios",
  ],
};

export const dataScienceQuest = {
  id: "data-science",
  title: "Data Science with Python: Analytics & ML",
  summary:
    "Learn Data Analysis Basics, Python Libraries (Pandas, NumPy), Data Visualization, Statistics, and Machine Learning Models.",
  category: "Data Science",
  difficulty: "Intermediate",
  duration: "8 hours",
  xp: 1600,
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Data Analysis Fundamentals",
      content:
        "Introduction to data science, types of data, and the data science workflow.",
      duration: "45 minutes",
      completed: false,
      concepts: [
        "Data types",
        "Data science process",
        "Statistical thinking",
        "Data quality",
      ],
    },
    {
      id: 2,
      title: "Python Libraries: Pandas & NumPy",
      content:
        "Master the essential Python libraries for data manipulation and numerical computing.",
      duration: "90 minutes",
      completed: false,
      concepts: [
        "Pandas DataFrames",
        "NumPy arrays",
        "Data cleaning",
        "Data transformation",
      ],
    },
    {
      id: 3,
      title: "Data Visualization",
      content:
        "Create compelling visualizations using Matplotlib and Seaborn to tell data stories.",
      duration: "60 minutes",
      completed: false,
      concepts: [
        "Matplotlib",
        "Seaborn",
        "Chart types",
        "Visualization best practices",
      ],
    },
    {
      id: 4,
      title: "Statistical Analysis",
      content:
        "Apply statistical methods to understand and interpret your data.",
      duration: "75 minutes",
      completed: false,
      concepts: [
        "Descriptive statistics",
        "Hypothesis testing",
        "Correlation",
        "Regression",
      ],
    },
    {
      id: 5,
      title: "Machine Learning Models",
      content:
        "Build and evaluate machine learning models for prediction and classification.",
      duration: "90 minutes",
      completed: false,
      concepts: [
        "Scikit-learn",
        "Model training",
        "Model evaluation",
        "Cross-validation",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What is Pandas used for?",
      back: "Data manipulation and analysis in Python",
      category: "Libraries",
    },
    {
      id: 2,
      front: "What does NumPy provide?",
      back: "Support for large, multi-dimensional arrays and mathematical functions",
      category: "Libraries",
    },
    {
      id: 3,
      front: "Name a popular Python visualization library",
      back: "Matplotlib or Seaborn",
      category: "Visualization",
    },
    {
      id: 4,
      front: "What is cross-validation?",
      back: "A technique to evaluate machine learning models by splitting data into multiple train/test sets",
      category: "ML",
    },
  ],

  quizzes: [
    {
      id: 1,
      question:
        "Which library is primarily used for data manipulation in Python?",
      options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
      correctAnswer: 1,
      explanation:
        "Pandas is the primary library for data manipulation and analysis in Python.",
    },
  ],

  badges: [
    {
      id: "data-explorer",
      name: "Data Explorer",
      description: "Started your data science journey",
      icon: "📊",
      unlocked: false,
    },
    {
      id: "ml-practitioner",
      name: "ML Practitioner",
      description: "Built your first machine learning model",
      icon: "🤖",
      unlocked: false,
    },
  ],

  games: [
    "data-flashcards",
    "data-quiz",
    "algorithm-matching",
    "visualization-game",
  ],
};

export const cybersecurityQuest = {
  id: "cybersecurity-essentials",
  title: "Cybersecurity Essentials: Threats & Defense",
  summary:
    "Master Security Fundamentals, Threat Detection, Network Security, Ethical Hacking Basics, and Incident Response.",
  category: "Security",
  difficulty: "Beginner",
  duration: "3 hours",
  xp: 600,
  image:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Security Fundamentals",
      content:
        "Learn the core principles of cybersecurity: confidentiality, integrity, and availability.",
      duration: "40 minutes",
      completed: false,
      concepts: [
        "CIA triad",
        "Risk assessment",
        "Security policies",
        "Compliance",
      ],
    },
    {
      id: 2,
      title: "Threat Detection",
      content:
        "Identify and analyze different types of cyber threats and attack vectors.",
      duration: "45 minutes",
      completed: false,
      concepts: ["Malware", "Phishing", "Social engineering", "APTs"],
    },
    {
      id: 3,
      title: "Network Security",
      content:
        "Secure network infrastructure using firewalls, VPNs, and monitoring tools.",
      duration: "50 minutes",
      completed: false,
      concepts: [
        "Firewalls",
        "VPNs",
        "Network monitoring",
        "Intrusion detection",
      ],
    },
    {
      id: 4,
      title: "Ethical Hacking Basics",
      content:
        "Introduction to penetration testing and ethical hacking methodologies.",
      duration: "35 minutes",
      completed: false,
      concepts: [
        "Penetration testing",
        "Vulnerability assessment",
        "OWASP Top 10",
        "Bug bounty",
      ],
    },
    {
      id: 5,
      title: "Incident Response",
      content:
        "Learn how to respond to security incidents and recover from breaches.",
      duration: "30 minutes",
      completed: false,
      concepts: [
        "Incident response plan",
        "Forensics",
        "Recovery procedures",
        "Lessons learned",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What does CIA stand for in cybersecurity?",
      back: "Confidentiality, Integrity, Availability",
      category: "Fundamentals",
    },
    {
      id: 2,
      front: "What is phishing?",
      back: "A social engineering attack that tricks users into revealing sensitive information",
      category: "Threats",
    },
    {
      id: 3,
      front: "What is a firewall?",
      back: "A network security device that monitors and controls network traffic",
      category: "Network Security",
    },
    {
      id: 4,
      front: "What is penetration testing?",
      back: "Authorized testing of systems to find security vulnerabilities",
      category: "Ethical Hacking",
    },
  ],

  quizzes: [
    {
      id: 1,
      question: "Which of the following is NOT part of the CIA triad?",
      options: [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Authentication",
      ],
      correctAnswer: 3,
      explanation:
        "The CIA triad consists of Confidentiality, Integrity, and Availability. Authentication is a separate security principle.",
    },
  ],

  badges: [
    {
      id: "security-aware",
      name: "Security Aware",
      description: "Learned security fundamentals",
      icon: "🛡️",
      unlocked: false,
    },
    {
      id: "threat-hunter",
      name: "Threat Hunter",
      description: "Mastered threat detection",
      icon: "🔍",
      unlocked: false,
    },
  ],

  games: [
    "security-flashcards",
    "security-quiz",
    "threat-scenarios",
    "incident-response",
  ],
};

export const cloudArchitectureQuest = {
  id: "cloud-architecture",
  title: "Cloud Architecture: AWS & Modern Infrastructure",
  summary:
    "Design scalable systems: Cloud Computing Basics, AWS Services, Infrastructure as Code, DevOps, and Deployment Strategies.",
  category: "Cloud Computing",
  difficulty: "Intermediate",
  duration: "4 hours",
  xp: 800,
  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Cloud Computing Fundamentals",
      content:
        "Understand cloud service models (IaaS, PaaS, SaaS) and deployment models.",
      duration: "40 minutes",
      completed: false,
      concepts: ["IaaS", "PaaS", "SaaS", "Public/Private/Hybrid cloud"],
    },
    {
      id: 2,
      title: "AWS Core Services",
      content:
        "Explore essential AWS services including EC2, S3, RDS, and Lambda.",
      duration: "60 minutes",
      completed: false,
      concepts: ["EC2", "S3", "RDS", "Lambda", "VPC"],
    },
    {
      id: 3,
      title: "Infrastructure as Code",
      content:
        "Automate infrastructure deployment using CloudFormation and Terraform.",
      duration: "50 minutes",
      completed: false,
      concepts: [
        "CloudFormation",
        "Terraform",
        "Infrastructure automation",
        "Version control",
      ],
    },
    {
      id: 4,
      title: "DevOps Integration",
      content: "Implement CI/CD pipelines and DevOps practices in the cloud.",
      duration: "45 minutes",
      completed: false,
      concepts: ["CI/CD", "CodePipeline", "Docker", "Kubernetes"],
    },
    {
      id: 5,
      title: "Deployment Strategies",
      content:
        "Learn different deployment patterns and best practices for cloud applications.",
      duration: "45 minutes",
      completed: false,
      concepts: [
        "Blue-green deployment",
        "Canary releases",
        "Rolling updates",
        "Auto-scaling",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What does IaaS stand for?",
      back: "Infrastructure as a Service",
      category: "Cloud Models",
    },
    {
      id: 2,
      front: "What is AWS EC2?",
      back: "Elastic Compute Cloud - virtual servers in the cloud",
      category: "AWS Services",
    },
    {
      id: 3,
      front: "What is Infrastructure as Code?",
      back: "Managing and provisioning infrastructure through code rather than manual processes",
      category: "IaC",
    },
    {
      id: 4,
      front: "What is a blue-green deployment?",
      back: "A deployment strategy that uses two identical production environments",
      category: "Deployment",
    },
  ],

  quizzes: [
    {
      id: 1,
      question: "Which AWS service provides object storage?",
      options: ["EC2", "RDS", "S3", "Lambda"],
      correctAnswer: 2,
      explanation:
        "Amazon S3 (Simple Storage Service) provides object storage in the cloud.",
    },
  ],

  badges: [
    {
      id: "cloud-explorer",
      name: "Cloud Explorer",
      description: "Started cloud computing journey",
      icon: "☁️",
      unlocked: false,
    },
    {
      id: "aws-architect",
      name: "AWS Architect",
      description: "Mastered AWS fundamentals",
      icon: "🏗️",
      unlocked: false,
    },
  ],

  games: [
    "cloud-flashcards",
    "cloud-quiz",
    "architecture-matching",
    "deployment-scenarios",
  ],
};

export const mobileDevQuest = {
  id: "mobile-development",
  title: "Mobile App Development: iOS & Android",
  summary:
    "Build cross-platform apps: Mobile Development Basics, React Native, UI/UX Design, Native Features, and App Store Deployment.",
  category: "Mobile Development",
  difficulty: "Intermediate",
  duration: "5 hours",
  xp: 1000,
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",

  lessons: [
    {
      id: 1,
      title: "Mobile Development Basics",
      content:
        "Introduction to mobile app development, native vs cross-platform approaches.",
      duration: "40 minutes",
      completed: false,
      concepts: [
        "Native development",
        "Cross-platform",
        "Mobile platforms",
        "Development tools",
      ],
    },
    {
      id: 2,
      title: "React Native Fundamentals",
      content:
        "Learn React Native framework for building cross-platform mobile apps.",
      duration: "70 minutes",
      completed: false,
      concepts: [
        "React Native",
        "Components",
        "Navigation",
        "State management",
      ],
    },
    {
      id: 3,
      title: "UI/UX Design for Mobile",
      content:
        "Design principles and best practices for mobile user interfaces.",
      duration: "50 minutes",
      completed: false,
      concepts: [
        "Mobile UI patterns",
        "Responsive design",
        "Touch interactions",
        "Accessibility",
      ],
    },
    {
      id: 4,
      title: "Native Features Integration",
      content:
        "Access device features like camera, GPS, and push notifications.",
      duration: "60 minutes",
      completed: false,
      concepts: [
        "Camera API",
        "Geolocation",
        "Push notifications",
        "Device sensors",
      ],
    },
    {
      id: 5,
      title: "App Store Deployment",
      content:
        "Prepare and deploy your app to Apple App Store and Google Play Store.",
      duration: "40 minutes",
      completed: false,
      concepts: [
        "App store guidelines",
        "App signing",
        "Release process",
        "App optimization",
      ],
    },
  ],

  flashcards: [
    {
      id: 1,
      front: "What is React Native?",
      back: "A framework for building mobile apps using React and JavaScript",
      category: "Framework",
    },
    {
      id: 2,
      front:
        "What's the difference between native and cross-platform development?",
      back: "Native uses platform-specific languages, cross-platform uses shared codebase",
      category: "Concepts",
    },
    {
      id: 3,
      front: "What are the main mobile platforms?",
      back: "iOS and Android",
      category: "Platforms",
    },
    {
      id: 4,
      front: "What is required for iOS app deployment?",
      back: "Apple Developer Account and App Store review",
      category: "Deployment",
    },
  ],

  quizzes: [
    {
      id: 1,
      question: "Which language is primarily used for native iOS development?",
      options: ["Java", "Swift", "Kotlin", "JavaScript"],
      correctAnswer: 1,
      explanation:
        "Swift is the primary language for native iOS development, replacing Objective-C.",
    },
  ],

  badges: [
    {
      id: "mobile-starter",
      name: "Mobile Developer",
      description: "Started mobile development journey",
      icon: "📱",
      unlocked: false,
    },
    {
      id: "app-publisher",
      name: "App Publisher",
      description: "Successfully deployed an app",
      icon: "🚀",
      unlocked: false,
    },
  ],

  games: [
    "mobile-flashcards",
    "mobile-quiz",
    "ui-matching",
    "feature-completion",
  ],
};

// Export all quests
export const allQuests = {
  "ai-fundamentals": aiFoundamentalsQuest,
  "python-programming": pythonQuest,
  "web-development": webDevQuest,
  "blockchain-development": blockchainQuest,
  "data-science": dataScienceQuest,
  "cybersecurity-essentials": cybersecurityQuest,
  "cloud-architecture": cloudArchitectureQuest,
  "mobile-development": mobileDevQuest,
};

export const pythonQuest = {
  id: "python-programming",
  title: "Python Programming: From Zero to Hero",
  summary:
    "Master Python basics, data structures, functions, and object-oriented programming with hands-on coding exercises.",
  category: "Programming",
  difficulty: "Beginner",
  duration: "4-5 hours",
  xp: 800,
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
      front: "What is the correct way to print 'Hello World' in Python?",
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
      front: "What data type is the value True in Python?",
      back: "Boolean (bool)",
      category: "Data Types",
    },
    {
      id: 4,
      front:
        "How do you define a function named 'greet' that takes a parameter 'name'?",
      back: "def greet(name):",
      category: "Functions",
    },
    {
      id: 5,
      front: "How do you create an empty list in Python?",
      back: "my_list = [] or my_list = list()",
      category: "Lists",
    },
    {
      id: 6,
      front: "How do you access the first item in a list called 'fruits'?",
      back: "fruits[0]",
      category: "Lists",
    },
    {
      id: 7,
      front: "How do you create an empty dictionary?",
      back: "my_dict = {} or my_dict = dict()",
      category: "Dictionaries",
    },
    {
      id: 8,
      front:
        "What is the syntax for a for loop that iterates through numbers 0 to 4?",
      back: "for i in range(5):",
      category: "Loops",
    },
  ],

  quizzes: [
    {
      id: 1,
      question:
        "Which of the following is the correct way to comment in Python?",
      options: [
        "// This is a comment",
        "# This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
      ],
      correctAnswer: 1,
      explanation: "Python uses the # symbol for single-line comments.",
    },
    {
      id: 2,
      question: "What will be the output of: print(type(42))?",
      options: [
        "<class 'str'>",
        "<class 'int'>",
        "<class 'float'>",
        "<class 'bool'>",
      ],
      correctAnswer: 1,
      explanation: "42 is an integer, so type(42) returns <class 'int'>.",
    },
    {
      id: 3,
      question: "Which method is used to add an item to the end of a list?",
      options: ["add()", "append()", "insert()", "push()"],
      correctAnswer: 1,
      explanation: "The append() method adds an item to the end of a list.",
    },
    {
      id: 4,
      question: "What is the correct way to create a class named 'Car'?",
      options: ["class Car:", "def Car:", "create Car:", "new Car:"],
      correctAnswer: 0,
      explanation:
        "Classes in Python are defined using the 'class' keyword followed by the class name and a colon.",
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
      id: "variable-master",
      name: "Variable Master",
      description: "Mastered variables and data types",
      icon: "📊",
      unlocked: false,
    },
    {
      id: "function-expert",
      name: "Function Expert",
      description: "Created your first Python function",
      icon: "⚙️",
      unlocked: false,
    },
    {
      id: "loop-legend",
      name: "Loop Legend",
      description: "Mastered Python loops and iteration",
      icon: "🔄",
      unlocked: false,
    },
    {
      id: "oop-champion",
      name: "OOP Champion",
      description: "Completed object-oriented programming basics",
      icon: "🏆",
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

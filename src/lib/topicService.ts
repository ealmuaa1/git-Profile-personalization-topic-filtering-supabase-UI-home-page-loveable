import { learningQuests, LearningQuest } from "../data/quests";
import { allQuests } from "../data/allQuests";

export interface Quest {
  id: string;
  title: string;
  summary: string;
  category: string;
  difficulty: string;
  duration: string;
  xp: number;
  lessons: any[];
  flashcards: any[];
  quizzes: any[];
  badges: any[];
  games: string[];
  image: string;
}

// Convert LearningQuest to Quest format
const convertLearningQuestToQuest = (learningQuest: LearningQuest): Quest => {
  return {
    id: learningQuest.id.toString(),
    title: learningQuest.title,
    summary: learningQuest.summary,
    category: learningQuest.category,
    difficulty: learningQuest.level,
    duration: learningQuest.estimatedTime,
    xp: learningQuest.xp,
    lessons: [], // Will be populated with actual lesson data
    flashcards: [], // Will be populated with flashcard data
    quizzes: [], // Will be populated with quiz data
    badges: [], // Will be populated with badge data
    games: ["flashcards", "quiz", "matching"], // Default games
    image: learningQuest.image,
  };
};

// Quest slug mapping
const questSlugMapping: Record<string, string> = {
  "ai-fundamentals": "2",
  "blockchain-development": "3",
  "cloud-architecture": "4",
  "cybersecurity-essentials": "1",
  "python-programming": "python", // Special case for Python quest
  "web-development": "web",
  "data-science": "data",
  "mobile-development": "mobile",
};

// Fallback quest data for unmapped quests
const createFallbackQuest = (slug: string): Quest => {
  const questData: Record<string, Partial<Quest>> = {
    "python-programming": {
      title: "Python Programming: From Zero to Hero",
      summary:
        "Master Python basics, data structures, functions, and object-oriented programming with hands-on coding exercises.",
      category: "Programming",
      difficulty: "Beginner",
      duration: "4-5 hours",
      xp: 800,
      image:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=800&auto=format&fit=crop&q=60",
      games: [
        "python-flashcards",
        "python-quiz",
        "code-completion",
        "syntax-matching",
      ],
    },
    "web-development": {
      title: "Modern Web Development with React",
      summary:
        "Build interactive web apps with HTML/CSS, JavaScript ES6+, React Components, State Management, and API Integration.",
      category: "Web Development",
      difficulty: "Intermediate",
      duration: "5-6 hours",
      xp: 900,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
      games: [
        "web-flashcards",
        "web-quiz",
        "component-matching",
        "code-completion",
      ],
    },
    "data-science": {
      title: "Data Science with Python: Analytics & ML",
      summary:
        "Learn Data Analysis, Python Libraries, Data Visualization, Statistics, and Machine Learning Models.",
      category: "Data Science",
      difficulty: "Intermediate",
      duration: "6-7 hours",
      xp: 1000,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      games: [
        "data-flashcards",
        "data-quiz",
        "algorithm-matching",
        "visualization-game",
      ],
    },
    "mobile-development": {
      title: "Mobile App Development: iOS & Android",
      summary:
        "Build cross-platform mobile apps with React Native, UI/UX Design, Native Features, and App Store Deployment.",
      category: "Mobile Development",
      difficulty: "Intermediate",
      duration: "5-6 hours",
      xp: 950,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
      games: [
        "mobile-flashcards",
        "mobile-quiz",
        "ui-matching",
        "feature-completion",
      ],
    },
  };

  const defaultQuest = questData[slug] || {};

  return {
    id: slug,
    title: defaultQuest.title || "Learning Quest",
    summary:
      defaultQuest.summary ||
      "Interactive learning experience with hands-on exercises.",
    category: defaultQuest.category || "Technology",
    difficulty: defaultQuest.difficulty || "Beginner",
    duration: defaultQuest.duration || "2-3 hours",
    xp: defaultQuest.xp || 500,
    lessons: [],
    flashcards: [],
    quizzes: [],
    badges: [],
    games: defaultQuest.games || ["flashcards", "quiz", "matching"],
    image:
      defaultQuest.image ||
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
  };
};

export const getQuestBySlug = async (slug: string): Promise<Quest | null> => {
  try {
    // First check if we have comprehensive quest data
    if (allQuests[slug as keyof typeof allQuests]) {
      return allQuests[slug as keyof typeof allQuests] as Quest;
    }

    // Check if we have a direct mapping to existing learning quests
    const questId = questSlugMapping[slug];

    if (
      questId &&
      questId !== "python" &&
      questId !== "web" &&
      questId !== "data" &&
      questId !== "mobile"
    ) {
      const learningQuest = learningQuests.find(
        (q) => q.id.toString() === questId
      );
      if (learningQuest) {
        return convertLearningQuestToQuest(learningQuest);
      }
    }

    // Return fallback quest for unmapped or special quests
    return createFallbackQuest(slug);
  } catch (error) {
    console.error("Error fetching quest:", error);
    return createFallbackQuest(slug);
  }
};

export const getAllQuests = async (): Promise<Quest[]> => {
  try {
    const quests = learningQuests.map(convertLearningQuestToQuest);

    // Add fallback quests for special cases
    const fallbackQuests = [
      "python-programming",
      "web-development",
      "data-science",
      "mobile-development",
    ].map(createFallbackQuest);

    return [...quests, ...fallbackQuests];
  } catch (error) {
    console.error("Error fetching all quests:", error);
    return [];
  }
};

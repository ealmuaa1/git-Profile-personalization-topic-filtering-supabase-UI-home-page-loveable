import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";
import {
  Clock,
  BookOpen,
  Zap,
  Lock,
  CheckCircle2,
  Play,
  Target,
} from "lucide-react";
import LearningTopicCards from "../components/learn/LearningTopicCards";

// Mock data for learning quests
const learningQuests = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    description:
      "Learn the basics of artificial intelligence and machine learning",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
    difficulty: "Beginner",
    duration: "2-3 hours",
    lessons: 8,
    xp: 500,
    progress: 75,
    locked: false,
    completed: false,
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description: "Master Python programming from basics to advanced concepts",
    image:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=200&fit=crop",
    difficulty: "Beginner",
    duration: "4-5 hours",
    lessons: 12,
    xp: 750,
    progress: 45,
    locked: false,
    completed: false,
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description: "Understanding blockchain technology and smart contracts",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=200&fit=crop",
    difficulty: "Advanced",
    duration: "5-6 hours",
    lessons: 14,
    xp: 1000,
    progress: 0,
    locked: false,
    completed: false,
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern web applications with React and Next.js",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
    difficulty: "Intermediate",
    duration: "4-5 hours",
    lessons: 10,
    xp: 800,
    progress: 25,
    locked: false,
    completed: false,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "beginner":
      return "from-green-400 to-green-600";
    case "intermediate":
      return "from-yellow-400 to-yellow-600";
    case "advanced":
      return "from-red-400 to-red-600";
    default:
      return "from-gray-400 to-gray-600";
  }
};

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Quests
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Master new technologies through interactive learning experiences
          </p>
        </div>

        {/* Enhanced Learning Topic Cards */}
        <div className="mb-16">
          <LearningTopicCards maxDisplay={6} />
        </div>

        {/* Traditional Learning Quests */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Continue Your Learning Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {learningQuests.map((quest) => (
              <div
                key={quest.id}
                className={`group transform transition-all duration-300 hover:scale-[1.02] ${
                  quest.locked ? "opacity-60" : ""
                }`}
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/20 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={quest.image}
                      alt={quest.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${getDifficultyColor(
                          quest.difficulty
                        )} text-white backdrop-blur-sm shadow-md`}
                      >
                        {quest.difficulty}
                      </Badge>
                    </div>
                    {quest.locked && (
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-white text-center">
                          <Target className="w-8 h-8 mx-auto mb-2" />
                          <div className="font-semibold">Locked</div>
                          <div className="text-sm">
                            Complete previous quests to unlock
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {quest.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {quest.description}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>{quest.progress}%</span>
                      </div>
                      <Progress value={quest.progress} className="h-2" />
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {quest.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {quest.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {quest.xp} XP
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      className="w-full"
                      onClick={() => navigate(`/quest/${quest.id}`)}
                      disabled={quest.locked}
                    >
                      {quest.locked ? (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Locked
                        </>
                      ) : quest.completed ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start Quest
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;

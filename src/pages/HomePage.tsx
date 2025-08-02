import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";
import {
  Loader2,
  Settings,
  Moon,
  Sun,
  Palette,
  PlayCircle,
  Trophy,
  Zap,
  Target,
  Award,
  Sparkles,
  Clock,
  TrendingUp,
} from "lucide-react";
import TechDigestSection from "../components/home/TechDigestSection";

// Simplified interfaces for the main app
interface UserProgress {
  totalXP: number;
  currentLevel: number;
  streakDays: number;
  weeklyGoalProgress: number;
  lastQuestTitle?: string;
  lastQuestProgress?: number;
  earnedBadges: { name: string; icon: string; rarity: string }[];
}

interface DailyTrend {
  title: string;
  summary: string;
  category: string;
  difficulty: string;
  estimatedTime: number;
  trending_score: number;
}

/**
 * HomePage component - Personalized AI learning dashboard
 * Simplified version for the main app
 */
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark" | "gradient">("light");

  // Mock data for the main app
  const [userProgress] = useState<UserProgress>({
    totalXP: 2450,
    currentLevel: 5,
    streakDays: 12,
    weeklyGoalProgress: 80,
    lastQuestTitle: "AI Fundamentals",
    lastQuestProgress: 75,
    earnedBadges: [
      { name: "First Steps", icon: "🚀", rarity: "common" },
      { name: "Week Warrior", icon: "🔥", rarity: "rare" },
      { name: "AI Explorer", icon: "🧠", rarity: "epic" },
    ],
  });

  const [dailyTrend] = useState<DailyTrend>({
    title: "GPT-4 Vision: Multimodal AI Revolution",
    summary:
      "Explore how GPT-4's vision capabilities are transforming image understanding and opening new possibilities for AI applications.",
    category: "AI",
    difficulty: "intermediate",
    estimatedTime: 15,
    trending_score: 98,
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getXPForNextLevel = (currentXP: number) => {
    const level = userProgress.currentLevel;
    const thresholds = [0, 100, 300, 600, 1000, 1500, 2200, 3000];
    const levelStart = thresholds[level - 1] || 0;
    const levelEnd = thresholds[level] || level * 500;
    const current = currentXP - levelStart;
    const needed = levelEnd - levelStart;
    const percentage = Math.round((current / needed) * 100);
    return { current, needed, percentage };
  };

  const toggleTheme = () => {
    const themes: Array<"light" | "dark" | "gradient"> = [
      "light",
      "dark",
      "gradient",
    ];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-gray-600 dark:text-gray-400">
            Loading your personalized dashboard...
          </p>
        </div>
      </div>
    );
  }

  const { current, needed, percentage } = getXPForNextLevel(
    userProgress.totalXP
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "gradient"
          ? "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
          : "bg-gray-50 dark:bg-gray-900"
      }`}
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Learning Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Your personalized AI learning experience
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {theme === "light" && <Sun className="w-4 h-4" />}
                {theme === "dark" && <Moon className="w-4 h-4" />}
                {theme === "gradient" && <Palette className="w-4 h-4" />}
              </button>
              <button
                onClick={() => navigate("/profile")}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 pb-24">
        {/* Progress Section */}
        <div className="mb-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg border border-purple-200/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {getGreeting()}, Learner! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Ready to continue your learning journey?
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Level {userProgress.currentLevel}
              </div>
              <div className="text-sm text-gray-600">
                {userProgress.totalXP.toLocaleString()} XP
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress to Level {userProgress.currentLevel + 1}
              </span>
              <span className="text-sm text-gray-600">
                {current}/{needed} XP
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600 mt-1">
              {percentage}% complete
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                <span>🔥</span>
                <span>{userProgress.streakDays}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-teal-600">
                {userProgress.weeklyGoalProgress}%
              </div>
              <div className="text-xs text-gray-600">Weekly Goal</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <Trophy className="w-3 h-3" />
                <span>L{userProgress.currentLevel}</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">Current</div>
            </div>
          </div>
        </div>

        {/* Tech Digest Section */}
        <TechDigestSection />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Continue Quest Card */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-xl p-6 shadow-lg border border-blue-200/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Continue Quest
                  </h3>
                  <p className="text-sm text-gray-600">Last active: 2h ago</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                {userProgress.lastQuestTitle}
              </h4>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>15m remaining</span>
                </div>
                <span className="text-green-600">Great progress! 🚀</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Progress
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {userProgress.lastQuestProgress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                  style={{ width: `${userProgress.lastQuestProgress}%` }}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/quest/ai-fundamentals")}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <PlayCircle className="w-4 h-4" />
                Continue Quest
              </button>
              <button
                onClick={() => navigate("/learn")}
                className="p-2 border border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                <Target className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Daily AI Spark */}
          <div className="bg-gradient-to-br from-orange-50 to-pink-100 rounded-xl p-6 shadow-lg border border-orange-200/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Daily AI Spark
                  </h3>
                  <p className="text-sm text-gray-600">Just posted</p>
                </div>
              </div>
              <div className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium">
                🔥 Hot
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-white/50 text-gray-700 rounded text-xs">
                  🤖 AI
                </span>
                <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs">
                  intermediate
                </span>
              </div>

              <h4 className="font-bold text-gray-900 mb-2">
                {dailyTrend.title}
              </h4>
              <p className="text-sm text-gray-600 mb-3">{dailyTrend.summary}</p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{dailyTrend.estimatedTime}m read</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>1.4k engaged</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/learn")}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <PlayCircle className="w-4 h-4" />
              Start Quest
            </button>
          </div>
        </div>

        {/* Badges and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Achievements */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-6 shadow-lg border border-yellow-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Recent Achievements
                </h3>
                <p className="text-sm text-gray-600">
                  {userProgress.earnedBadges.length} badges earned
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {userProgress.earnedBadges.map((badge, index) => (
                <div
                  key={index}
                  className="p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-white/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-lg border-2 border-white shadow-sm">
                      {badge.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">
                          {badge.name}
                        </h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {badge.rarity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">Today</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-xl p-6 shadow-lg border border-teal-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Learning Stats
                </h3>
                <p className="text-sm text-gray-600">Your progress overview</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white/50 rounded-lg">
                <div className="text-xl font-bold text-purple-600">
                  {userProgress.totalXP.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total XP</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">8/12</div>
                <div className="text-sm text-gray-600">Modules</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg">
                <div className="text-xl font-bold text-yellow-600">
                  {userProgress.earnedBadges.length}
                </div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
              <div className="text-center p-3 bg-white/50 rounded-lg">
                <div className="text-xl font-bold text-green-600">
                  {userProgress.streakDays}
                </div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentPage="home" />
    </div>
  );
};

export default HomePage;

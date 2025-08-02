import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../Tech pulse/src/lib/supabase";
import {
  Clock,
  ExternalLink,
  TrendingUp,
  BookOpen,
  Brain,
  Zap,
  Play,
  Globe,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export interface Topic {
  id: string;
  title: string;
  subject: string;
  image_url?: string;
  slug: string;
  summary?: string;
  lessons?: any[];
  games?: any[];
}

interface LearningTopicCardsProps {
  maxDisplay?: number;
}

// Enhanced tech news sources for learning topics
const techNewsSources = [
  { name: "TechCrunch", domain: "techcrunch.com" },
  { name: "Hacker News", domain: "news.ycombinator.com" },
  { name: "The Verge", domain: "theverge.com" },
  { name: "Wired", domain: "wired.com" },
  { name: "MIT Technology Review", domain: "technologyreview.com" },
  { name: "Stack Overflow", domain: "stackoverflow.blog" },
  { name: "GitHub Blog", domain: "github.blog" },
  { name: "Dev.to", domain: "dev.to" },
];

// Generate enhanced learning topics with real tech trends
const generateLearningTopics = (): Topic[] => {
  const currentTopics = [
    {
      id: "ai-fundamentals-2024",
      title: "AI Fundamentals: From Basics to Applications",
      subject: "Artificial Intelligence",
      image_url:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop&auto=format&q=80",
      slug: "ai-fundamentals",
      summary:
        "Master the fundamentals of artificial intelligence, machine learning algorithms, neural networks, and real-world AI applications in modern technology.",
      lessons: [
        { id: "ai-fundamentals-2024-lesson-1", title: "Introduction to AI" },
        {
          id: "ai-fundamentals-2024-lesson-2",
          title: "Machine Learning Basics",
        },
        {
          id: "ai-fundamentals-2024-lesson-3",
          title: "Neural Networks and Deep Learning",
        },
      ],
      games: [],
    },
    {
      id: "python-programming-fundamentals",
      title: "Python Programming: Zero to Hero",
      subject: "Programming",
      image_url:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=500&h=400&fit=crop&auto=format&q=80",
      slug: "python-programming",
      summary:
        "Complete Python programming course covering syntax, data structures, OOP, web development, and data science applications.",
      lessons: [
        {
          id: "python-programming-fundamentals-lesson-1",
          title: "Python Syntax and Basics",
        },
        {
          id: "python-programming-fundamentals-lesson-2",
          title: "Data Structures and Algorithms",
        },
        {
          id: "python-programming-fundamentals-lesson-3",
          title: "Object-Oriented Programming",
        },
      ],
      games: [],
    },
    {
      id: "react-modern-development",
      title: "Modern React Development & Next.js",
      subject: "Web Development",
      image_url:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=400&fit=crop&auto=format&q=80",
      slug: "web-development",
      summary:
        "Build modern web applications with React 18, Next.js 14, TypeScript, and cutting-edge development practices.",
      lessons: [
        { id: "react-modern-development-lesson-1", title: "React Basics" },
        {
          id: "react-modern-development-lesson-2",
          title: "Next.js and TypeScript",
        },
        {
          id: "react-modern-development-lesson-3",
          title: "Advanced React Patterns",
        },
      ],
      games: [],
    },
    {
      id: "blockchain-web3-development",
      title: "Blockchain & Web3 Development",
      subject: "Blockchain",
      image_url:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&h=400&fit=crop&auto=format&q=80",
      slug: "blockchain-development",
      summary:
        "Learn blockchain technology, smart contract development, DeFi protocols, and Web3 application architecture.",
      lessons: [
        {
          id: "blockchain-web3-development-lesson-1",
          title: "Blockchain Basics",
        },
        {
          id: "blockchain-web3-development-lesson-2",
          title: "Smart Contracts and DeFi",
        },
        {
          id: "blockchain-web3-development-lesson-3",
          title: "Web3 and Decentralization",
        },
      ],
      games: [],
    },
    {
      id: "cloud-computing-aws",
      title: "Cloud Computing & AWS Architecture",
      subject: "Cloud Computing",
      image_url:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop&auto=format&q=80",
      slug: "cloud-architecture",
      summary:
        "Master cloud infrastructure, AWS services, serverless computing, microservices, and modern deployment strategies.",
      lessons: [
        {
          id: "cloud-computing-aws-lesson-1",
          title: "Cloud Infrastructure Overview",
        },
        {
          id: "cloud-computing-aws-lesson-2",
          title: "AWS Services and Architecture",
        },
        {
          id: "cloud-computing-aws-lesson-3",
          title: "Serverless Computing and Microservices",
        },
      ],
      games: [],
    },
    {
      id: "cybersecurity-essentials",
      title: "Cybersecurity & Ethical Hacking",
      subject: "Cybersecurity",
      image_url:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=400&fit=crop&auto=format&q=80",
      slug: "cybersecurity-essentials",
      summary:
        "Learn cybersecurity fundamentals, penetration testing, network security, and ethical hacking methodologies.",
      lessons: [
        {
          id: "cybersecurity-essentials-lesson-1",
          title: "Cybersecurity Basics",
        },
        {
          id: "cybersecurity-essentials-lesson-2",
          title: "Penetration Testing and Ethical Hacking",
        },
        {
          id: "cybersecurity-essentials-lesson-3",
          title: "Network Security and Defense",
        },
      ],
      games: [],
    },
  ];

  return currentTopics;
};

const getCategoryColor = (category: string) => {
  const colors = {
    "Artificial Intelligence":
      "bg-purple-100 text-purple-700 border-purple-200",
    Programming: "bg-blue-100 text-blue-700 border-blue-200",
    "Web Development": "bg-green-100 text-green-700 border-green-200",
    Blockchain: "bg-orange-100 text-orange-700 border-orange-200",
    "Cloud Computing": "bg-sky-100 text-sky-700 border-sky-200",
    Cybersecurity: "bg-red-100 text-red-700 border-red-200",
    default: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return colors[category as keyof typeof colors] || colors.default;
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "Intermediate":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "Advanced":
      return "bg-rose-100 text-rose-700 border-rose-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

// Map learning topics to quest routes
const getQuestRoute = (topicId: string): string => {
  const routeMap: Record<string, string> = {
    "ai-fundamentals-2024": "ai-fundamentals",
    "python-programming-fundamentals": "python-programming",
    "react-modern-development": "web-development",
    "blockchain-web3-development": "blockchain-development",
    "cloud-computing-aws": "cloud-architecture",
    "cybersecurity-essentials": "cybersecurity-essentials",
  };

  return routeMap[topicId] || topicId.toLowerCase().replace(/\s+/g, "-");
};

const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
};

const LearningTopicCards: React.FC<LearningTopicCardsProps> = ({
  maxDisplay = 6,
}) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTopics = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from("topics")
          .select("*")
          .order("title", { ascending: true });
        if (error) throw error;
        setTopics(data || []); // Show all topics, no filtering
      } catch (err: any) {
        setError(err.message || "Failed to load topics");
        setTopics([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadTopics();
  }, []); // Remove maxDisplay dependency to always show all

  const handleStartQuest = (slug: string) => {
    navigate(`/quests/${slug}`);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-blue-600" />
            Trending Learning Topics
          </h2>
          <Badge variant="secondary" className="animate-pulse">
            <TrendingUp className="w-3 h-3 mr-1" />
            Loading...
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: maxDisplay }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-700 rounded-2xl aspect-[4/3] animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        <h2 className="text-2xl font-bold mb-2">Failed to load topics</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Brain className="w-8 h-8 text-blue-600" />
          Trending Learning Topics
        </h2>
        <Badge variant="secondary" className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Live Updates
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {topic.image_url && (
                <img
                  src={topic.image_url}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-200 backdrop-blur-sm">
                  {topic.subject}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button
                  onClick={() => handleStartQuest(topic.slug)}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-none shadow-xl font-semibold transform scale-95 group-hover:scale-100 transition-transform duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Quest
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 leading-tight">
                {topic.title}
              </h3>
              {topic.summary && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {topic.summary}
                </p>
              )}
            </div>
          </div>
        ))}
        {Array.from({ length: Math.max(0, 6 - topics.length) }).map(
          (_, idx) => (
            <div
              key={`placeholder-${idx}`}
              className="bg-gray-100 dark:bg-gray-700 rounded-2xl aspect-[4/3] animate-pulse border border-gray-200 dark:border-gray-700"
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default LearningTopicCards;

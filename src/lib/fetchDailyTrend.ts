export interface DailyTrend {
  id: string;
  title: string;
  summary: string;
  content?: string;
  imageUrl?: string;
  category:
    | "ai"
    | "blockchain"
    | "web3"
    | "cybersecurity"
    | "quantum"
    | "iot"
    | "ar-vr"
    | "general";
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: number;
  tags: string[];
  createdAt: string;
  trending_score?: number;
  engagement_count?: number;
  source?: string;
  quest_available?: boolean;
}

const mockDailyTrends: DailyTrend[] = [
  {
    id: "daily-1",
    title: "GPT-4 Vision: Multimodal AI Revolution",
    summary:
      "Explore how GPT-4's vision capabilities are transforming image understanding and opening new possibilities for AI applications.",
    content: "GPT-4 Vision represents a significant leap in AI capabilities...",
    imageUrl: "/api/placeholder/400/240",
    category: "ai",
    difficulty: "intermediate",
    estimatedTime: 15,
    tags: ["GPT-4", "Computer Vision", "Multimodal AI", "OpenAI"],
    createdAt: new Date().toISOString(),
    trending_score: 98,
    engagement_count: 1420,
    source: "OpenAI Research",
    quest_available: true,
  },
  {
    id: "daily-2",
    title: "Quantum Computing Breakthrough: IBM's 1000-Qubit Processor",
    summary:
      "IBM achieves a major milestone with their new quantum processor, bringing us closer to practical quantum computing applications.",
    category: "quantum",
    difficulty: "advanced",
    estimatedTime: 20,
    tags: ["Quantum Computing", "IBM", "Qubits", "Technology"],
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    trending_score: 92,
    engagement_count: 987,
    source: "IBM Research",
    quest_available: true,
  },
];

export async function fetchDailyTrend(): Promise<DailyTrend> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const randomIndex = Math.floor(Math.random() * mockDailyTrends.length);
    return mockDailyTrends[randomIndex];
  } catch (error) {
    console.error("Error fetching daily trend:", error);
    return mockDailyTrends[0];
  }
}

export function getCategoryIcon(category: DailyTrend["category"]): string {
  const icons = {
    ai: "🤖",
    blockchain: "🔗",
    web3: "🌐",
    cybersecurity: "🔒",
    quantum: "⚛️",
    iot: "📡",
    "ar-vr": "🥽",
    general: "📚",
  };
  return icons[category] || icons.general;
}

export function getDifficultyColor(
  difficulty: DailyTrend["difficulty"]
): string {
  const colors = {
    beginner: "text-green-600 bg-green-50",
    intermediate: "text-yellow-600 bg-yellow-50",
    advanced: "text-red-600 bg-red-50",
  };
  return colors[difficulty];
}

export function formatEngagementCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GameButton } from "@/components/quest/GameButton";
import { SoWhatCard } from "@/components/quest/SoWhatCard";
import { LessonAccordion } from "@/components/quest/LessonAccordion";
import { AIHighlightCard } from "@/components/quest/AIHighlightCard";
import { Brain, Star, Puzzle, ListTodo } from "lucide-react";

// Mock data
const mockLessons = [
  {
    title: "What is GPT-4o?",
    content: "GPT-4o is OpenAI's latest multimodal model...",
  },
  {
    title: "How does it work?",
    content: "It combines text, audio, and vision...",
  },
  {
    title: "Real-world use cases",
    content: "Customer support, content creation, etc.",
  },
];
const mockSummary =
  "Learn how this topic impacts your career and why it's important in today's tech landscape.";
const mockTieIn =
  "Mastering this topic can help you automate tasks, improve productivity, and stay ahead in your field.";
const mockAIHighlights = [
  {
    title: "GPT-4o launches multimodal API",
    summary: "OpenAI's new model can process text, audio, and images.",
    source: "Reddit",
  },
  {
    title: "Devin AI: The first AI software engineer?",
    summary: "A new AI agent claims to automate coding tasks.",
    source: "Product Hunt",
  },
];

export default function QuestPage() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(false); // Set to true if fetching
  const [error, setError] = useState<string | null>(null);

  // Handlers for game buttons (mock)
  const handleGame = (type: string) => {
    alert(`Open ${type} game/modal!`);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      {/* Header */}
      <header className="mb-4">
        <h1 className="text-4xl font-bold mb-2">
          Master the topic: {slug?.replace(/-/g, " ")}
        </h1>
        <p className="text-lg text-muted-foreground">
          Unlock your skills with interactive games and lessons.
        </p>
      </header>

      {/* Gamified Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <GameButton
          label="Flashcards"
          icon={Brain}
          color="bg-purple-100 text-purple-800"
          onClick={() => handleGame("Flashcards")}
        />
        <GameButton
          label="Quiz"
          icon={Star}
          color="bg-yellow-100 text-yellow-800"
          onClick={() => handleGame("Quiz")}
        />
        <GameButton
          label="Memory Game"
          icon={Puzzle}
          color="bg-green-100 text-green-800"
          onClick={() => handleGame("Memory Game")}
        />
        <GameButton
          label="Fill-in-the-Blank"
          icon={ListTodo}
          color="bg-blue-100 text-blue-800"
          onClick={() => handleGame("Fill-in-the-Blank")}
        />
      </div>

      {/* So What? Card */}
      <SoWhatCard summary={mockSummary} tieIn={mockTieIn} />

      {/* Lessons Accordion */}
      <LessonAccordion lessons={mockLessons} />

      {/* AI Highlights */}
      <section>
        <h3 className="text-lg font-bold mb-2">📰 What matters today?</h3>
        {mockAIHighlights.map((h, i) => (
          <AIHighlightCard key={i} {...h} />
        ))}
      </section>
    </div>
  );
}

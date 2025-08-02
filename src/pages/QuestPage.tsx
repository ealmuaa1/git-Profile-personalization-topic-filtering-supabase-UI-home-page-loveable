import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameButton } from "../components/quest/GameButton";
import { SoWhatCard } from "../components/quest/SoWhatCard";
import { LessonAccordion } from "../components/quest/LessonAccordion";
// import { AIHighlightCard } from "../components/quest/AIHighlightCard"; // Optional, not used by default
import { Brain, Star, Puzzle, ListTodo } from "lucide-react";
import { supabase } from "../../Tech pulse/src/lib/supabase";

export type Topic = {
  id: string;
  title: string;
  subject: string;
  image_url?: string;
  slug: string;
  summary?: string;
  lessons?: any[];
  games?: any[];
  flashcards?: any[];
  quizzes?: any[];
};

export default function QuestPage() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [topic, setTopic] = useState<Topic | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    setTopic(null);
    const fetchTopic = async () => {
      try {
        const { data, error } = await supabase
          .from("topics")
          .select("*")
          .eq("slug", slug)
          .single();
        console.log("[Supabase] fetchTopic response:", { data, error });
        if (error || !data) throw error || new Error("Topic not found");
        setTopic({
          ...data,
          lessons: data.lessons || [],
          games: data.games || [],
          flashcards: data.flashcards || [],
          quizzes: data.quizzes || [],
        });
      } catch (err: any) {
        setError(err.message || "Failed to load topic");
        setTopic(null);
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, [slug]);

  if (!slug) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h2 className="text-2xl font-bold mb-2">No Topic</h2>
        <p>Missing topic in URL.</p>
      </div>
    );
  }
  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <h2 className="text-2xl font-bold mb-2">Topic not found</h2>
        <p>{error}</p>
      </div>
    );
  }
  if (!topic) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h2 className="text-2xl font-bold mb-2">Topic not found</h2>
        <p>No topic matches this quest.</p>
      </div>
    );
  }

  // Handlers for game buttons (mock)
  const handleGame = (type: string) => {
    alert(`Open ${type} game/modal!`);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      {/* Title and Summary */}
      <header className="mb-4">
        <h1 className="text-4xl font-bold mb-2">{topic.title}</h1>
        <p className="text-lg text-muted-foreground">{topic.subject}</p>
        {topic.image_url && (
          <img
            src={topic.image_url}
            alt={topic.title}
            className="w-full max-h-64 object-cover rounded-xl mt-4"
          />
        )}
        {topic.summary && (
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {topic.summary}
          </p>
        )}
      </header>

      {/* Your Learning Path (Lessons) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Learning Path</h2>
        {topic.lessons && topic.lessons.length > 0 ? (
          <LessonAccordion lessons={topic.lessons} />
        ) : (
          <div className="text-center text-gray-500 py-8 bg-gray-50 rounded-xl">
            <span className="text-lg font-semibold">No lessons found.</span>
          </div>
        )}
      </section>

      {/* Test Your Knowledge (Games) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Test Your Knowledge</h2>
        {topic.games && topic.games.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.games.map((game: any, i: number) => (
              <div key={i} className="border rounded p-4 bg-white shadow">
                <div className="font-semibold mb-2">{game.title}</div>
                <div className="text-gray-700">{game.description}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8 bg-gray-50 rounded-xl">
            <span className="text-lg font-semibold">No games found.</span>
          </div>
        )}
      </section>

      {/* Flashcards Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Flashcards</h2>
        {topic.flashcards && topic.flashcards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.flashcards.map((fc: any, i: number) => (
              <div key={i} className="border rounded p-4 bg-white shadow">
                <div className="font-semibold mb-2">Q: {fc.front}</div>
                <div className="text-gray-700">A: {fc.back}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8 bg-gray-50 rounded-xl">
            <span className="text-lg font-semibold">No flashcards found.</span>
          </div>
        )}
      </section>

      {/* Quizzes Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quizzes</h2>
        {topic.quizzes && topic.quizzes.length > 0 ? (
          <div className="space-y-4">
            {topic.quizzes.map((quiz: any, i: number) => (
              <div key={i} className="border rounded p-4 bg-white shadow">
                <div className="font-semibold mb-2">{quiz.question}</div>
                <ul className="list-disc ml-6 mb-2">
                  {quiz.options &&
                    quiz.options.map((opt: string, j: number) => (
                      <li key={j}>{opt}</li>
                    ))}
                </ul>
                <div className="text-green-700 text-sm">
                  Answer: {quiz.options && quiz.options[quiz.correctAnswer]}
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  {quiz.explanation}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8 bg-gray-50 rounded-xl">
            <span className="text-lg font-semibold">No quizzes found.</span>
          </div>
        )}
      </section>

      {/* AI Highlights (optional, can be extended per topic) */}
      {/* <section>
        <h3 className="text-lg font-bold mb-2">📰 What matters today?</h3>
        {mockAIHighlights.map((h, i) => (
          <AIHighlightCard key={i} {...h} />
        ))}
      </section> */}
    </div>
  );
}

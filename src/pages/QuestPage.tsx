import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameButton } from "../components/quest/GameButton";
import { SoWhatCard } from "../components/quest/SoWhatCard";
import { LessonAccordion } from "../components/quest/LessonAccordion";
// import { AIHighlightCard } from "../components/quest/AIHighlightCard"; // Optional, not used by default
import {
  Brain,
  Star,
  Puzzle,
  ListTodo,
  ExternalLink,
  Youtube,
  Globe,
  Users,
  User,
} from "lucide-react";
import { getTopicBySlug } from "../../Tech pulse/src/lib/topicService";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/ui/card";

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
  learningResources?: {
    youtube?: Array<{ name: string; url: string }>;
    websites?: Array<{ name: string; url: string }>;
    communities?: Array<{ name: string; url: string }>;
    influencers?: Array<{ name: string; url: string }>;
  };
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
        console.log(
          `[QuestPage] Attempting to fetch topic with slug: '${slug}'`
        );

        // Use the topicService function which has better error handling
        const data = await getTopicBySlug(slug);

        console.log(`[QuestPage] Fetched topic for slug '${slug}':`, data);
        console.log(
          `[QuestPage] Raw learningResources from Supabase:`,
          data?.learningResources
        );

        setTopic({
          ...data,
          lessons: data.lessons || [],
          games: data.games || [],
          flashcards: data.flashcards || [],
          quizzes: data.quizzes || [],
        });

        console.log(`[QuestPage] Processed topic object:`, {
          ...data,
          lessons: data.lessons || [],
          games: data.games || [],
          flashcards: data.flashcards || [],
          quizzes: data.quizzes || [],
        });
      } catch (err: any) {
        console.error(`[QuestPage] Fetch error:`, err);
        console.error(`[QuestPage] Error type:`, typeof err);
        console.error(`[QuestPage] Error message:`, err.message);
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

  // Helper function to render resource links
  const renderResourceLinks = (
    resources: Array<{ name: string; url: string }>,
    icon: React.ReactNode
  ) => (
    <div className="space-y-2">
      {resources.map((resource, idx) => (
        <a
          key={idx}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          {icon}
          <span>{resource.name}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      ))}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      {/* Title and Summary - always render if available */}
      <header className="mb-4">
        <h1 className="text-4xl font-bold mb-2">{topic?.title || ""}</h1>
        <p className="text-lg text-muted-foreground">{topic?.subject || ""}</p>
        {topic?.image_url && (
          <img
            src={topic.image_url}
            alt={topic.title}
            className="w-full max-h-64 object-cover rounded-xl mt-4"
          />
        )}
        {topic?.summary && (
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {topic.summary}
          </p>
        )}
      </header>

      {/* Learning Resources Section */}
      {(() => {
        console.log(
          `[QuestPage] Rendering - topic.learningResources:`,
          topic?.learningResources
        );
        console.log(
          `[QuestPage] Rendering - Should show learningResources:`,
          !!topic?.learningResources
        );
        return (
          topic?.learningResources && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topic.learningResources.youtube &&
                  topic.learningResources.youtube.length > 0 && (
                    <Card className="shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Youtube className="w-5 h-5 text-red-600" />
                          YouTube
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {renderResourceLinks(
                          topic.learningResources.youtube,
                          <Youtube className="w-4 h-4 text-red-600" />
                        )}
                      </CardContent>
                    </Card>
                  )}

                {topic.learningResources.websites &&
                  topic.learningResources.websites.length > 0 && (
                    <Card className="shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Globe className="w-5 h-5 text-blue-600" />
                          Websites
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {renderResourceLinks(
                          topic.learningResources.websites,
                          <Globe className="w-4 h-4 text-blue-600" />
                        )}
                      </CardContent>
                    </Card>
                  )}

                {topic.learningResources.communities &&
                  topic.learningResources.communities.length > 0 && (
                    <Card className="shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Users className="w-5 h-5 text-green-600" />
                          Communities
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {renderResourceLinks(
                          topic.learningResources.communities,
                          <Users className="w-4 h-4 text-green-600" />
                        )}
                      </CardContent>
                    </Card>
                  )}

                {topic.learningResources.influencers &&
                  topic.learningResources.influencers.length > 0 && (
                    <Card className="shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <User className="w-5 h-5 text-purple-600" />
                          Influencers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {renderResourceLinks(
                          topic.learningResources.influencers,
                          <User className="w-4 h-4 text-purple-600" />
                        )}
                      </CardContent>
                    </Card>
                  )}
              </div>
            </section>
          )
        );
      })()}

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

      {/* Flashcards Section - always render placeholder if missing */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Flashcards</h2>
        {Array.isArray(topic?.flashcards) && topic.flashcards.length > 0 ? (
          <div className="space-y-2">
            {topic.flashcards.map((fc: any, idx: number) => (
              <div
                key={idx}
                className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl"
              >
                <strong>Q:</strong> {fc.question || fc.term}
                <br />
                <strong>A:</strong> {fc.answer || fc.definition}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-6 bg-gray-50 rounded-xl">
            Flashcards coming soon.
          </div>
        )}
      </section>

      {/* Quiz Section - always render placeholder if missing */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quiz</h2>
        {Array.isArray(topic?.quizzes) && topic.quizzes.length > 0 ? (
          <div className="space-y-2">
            {topic.quizzes.map((quiz: any, idx: number) => (
              <div
                key={idx}
                className="p-4 bg-green-50 dark:bg-green-900 rounded-xl"
              >
                <strong>Q{idx + 1}:</strong> {quiz.question}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-6 bg-gray-50 rounded-xl">
            Quiz will be added soon.
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

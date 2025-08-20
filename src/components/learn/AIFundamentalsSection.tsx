import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  BookOpen,
  Globe,
  Youtube,
  Users,
  User,
  Zap,
  ExternalLink,
} from "lucide-react";

// Placeholder flashcards data
const flashcards = [
  {
    front: "What is Artificial Intelligence (AI)?",
    back: "The simulation of human intelligence by machines to perform tasks like learning, reasoning, and decision-making.",
  },
  {
    front: "What is a simple analogy for AI?",
    back: "AI is like a smart assistant that learns from experience, similar to how a child learns new skills.",
  },
  {
    front: "Name a common use case of AI in everyday life.",
    back: "Voice assistants like Siri or Alexa.",
  },
  {
    front: "What is machine learning?",
    back: "A subset of AI that enables machines to learn from data without being explicitly programmed.",
  },
];

// Placeholder quiz data
const quizQuestions = [
  {
    question: "Which of the following is NOT a type of AI?",
    options: ["Narrow AI", "Broad AI", "General AI", "Superintelligent AI"],
    correct: 1,
  },
  {
    question: "What is the goal of the Turing Test?",
    options: [
      "To improve neural networks",
      "To measure memory capacity",
      "To evaluate human-like behavior in machines",
      "To test GPU speed",
    ],
    correct: 2,
  },
  {
    question: "Which field enables AI to learn from data?",
    options: ["Data Mining", "Machine Learning", "Robotics", "Automation"],
    correct: 1,
  },
  {
    question: "Which is an example of Narrow AI?",
    options: [
      "Human-level general intelligence",
      "AI that writes books",
      "Google Maps route optimization",
      "Conscious robots",
    ],
    correct: 2,
  },
  {
    question: "Unsupervised learning uses:",
    options: [
      "Pre-labeled data",
      "Historical reports",
      "Labeled and unlabeled data",
      "Unlabeled data only",
    ],
    correct: 3,
  },
];

// Placeholder resources data
const resources = [
  {
    type: "Website",
    icon: <Globe className="w-5 h-5 text-blue-500" />,
    name: "Towards Data Science",
    url: "https://towardsdatascience.com/",
    description: "Blog with AI tutorials and real-world use cases.",
  },
  {
    type: "YouTube",
    icon: <Youtube className="w-5 h-5 text-red-500" />,
    name: "Two Minute Papers",
    url: "https://www.youtube.com/user/keeroyz",
    description: "Short, engaging explanations of research papers.",
  },
  {
    type: "Community",
    icon: <Users className="w-5 h-5 text-green-500" />,
    name: "/r/MachineLearning",
    url: "https://www.reddit.com/r/MachineLearning/",
    description: "Reddit forum for AI news and help.",
  },
  {
    type: "Influencer",
    icon: <User className="w-5 h-5 text-purple-500" />,
    name: "Lex Fridman",
    url: "https://www.youtube.com/c/lexfridman",
    description: "Interviews with AI pioneers.",
  },
];

const groupedResources = resources.reduce((acc, res) => {
  acc[res.type] = acc[res.type] || [];
  acc[res.type].push(res);
  return acc;
}, {} as Record<string, typeof resources>);

const AIFundamentalsSection: React.FC = () => {
  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  // Quiz state
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto my-10">
      {/* Mini-Lesson Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-500" /> What is AI?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Artificial Intelligence (AI) is the science of making machines
            smart—able to learn, reason, and solve problems. Think of AI as a
            digital brain that can recognize patterns, make decisions, and even
            improve itself over time.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Simple analogy:</span> Imagine
            teaching a dog new tricks. At first, it needs lots of guidance, but
            with practice, it learns to respond on its own. AI systems learn in
            a similar way—by being trained on lots of examples until they can
            perform tasks independently.
          </p>
          <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">
            {/* Placeholder for image/diagram */}
            <span>Image/diagram coming soon</span>
          </div>
        </CardContent>
      </Card>

      {/* Flashcards */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" /> Flashcards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div
              className="w-full max-w-xs bg-indigo-50 dark:bg-indigo-900 rounded-lg shadow p-6 mb-4 text-center cursor-pointer select-none"
              onClick={() => setShowBack((prev) => !prev)}
            >
              <div className="text-lg font-medium text-indigo-700 dark:text-indigo-200 min-h-[60px] flex items-center justify-center">
                {showBack
                  ? flashcards[cardIndex].back
                  : flashcards[cardIndex].front}
              </div>
              <div className="mt-2 text-xs text-gray-500">Click to flip</div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setCardIndex(
                    (i) => (i - 1 + flashcards.length) % flashcards.length
                  );
                  setShowBack(false);
                }}
              >
                Prev
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setCardIndex((i) => (i + 1) % flashcards.length);
                  setShowBack(false);
                }}
              >
                Next
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Card {cardIndex + 1} of {flashcards.length}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quiz */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="w-5 h-5 text-pink-500" /> Quiz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            {quizQuestions.map((q, i) => (
              <div key={i} className="mb-4">
                <div className="font-medium mb-2">
                  {i + 1}. {q.question}
                </div>
                <div className="space-y-1">
                  {q.options.map((opt, j) => (
                    <label
                      key={j}
                      className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                        submitted
                          ? j === q.correct
                            ? "bg-green-100 dark:bg-green-900"
                            : answers[i] === j
                            ? "bg-red-100 dark:bg-red-900"
                            : ""
                          : answers[i] === j
                          ? "bg-indigo-100 dark:bg-indigo-900"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${i}`}
                        value={j}
                        checked={answers[i] === j}
                        disabled={submitted}
                        onChange={() =>
                          setAnswers((ans) => {
                            const copy = [...ans];
                            copy[i] = j;
                            return copy;
                          })
                        }
                        className="form-radio text-indigo-600"
                      />
                      <span>{opt}</span>
                      {submitted && j === q.correct && (
                        <Badge className="ml-2" variant="success">
                          Correct
                        </Badge>
                      )}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {!submitted && (
              <Button type="submit" className="mt-2">
                Submit Quiz
              </Button>
            )}
            {submitted && (
              <div className="mt-4 text-green-600 font-semibold">
                Quiz submitted! Correct answers are highlighted.
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Best Learning Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" /> Best Learning Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(groupedResources).map(([type, group]) => (
              <div key={type}>
                <div className="font-semibold mb-2 flex items-center gap-2">
                  {group[0].icon}
                  <span>{type}</span>
                </div>
                <div className="space-y-2">
                  {group.map((res, idx) => (
                    <Card
                      key={res.name + idx}
                      className="p-3 flex flex-col gap-1"
                    >
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                      >
                        {res.name} <ExternalLink className="w-3 h-3 inline" />
                      </a>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {res.description}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Challenge */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-500" /> Hands-on Challenge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3 font-medium">Try building something with AI</div>
          <div className="mb-4 text-gray-700 dark:text-gray-300">
            Use <span className="font-semibold">Replit</span> to create a basic
            chatbot using GPT API or HuggingFace space.
          </div>
          <Button asChild>
            <a
              href="https://replit.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Now on Replit
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Bonus Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" /> Want more?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Explore the MIT AI Course
          </a>
          <div className="mt-2">
            <a
              href="/learn"
              className="text-indigo-600 hover:underline text-sm"
            >
              Back to all Learn topics
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AIFundamentalsSection;

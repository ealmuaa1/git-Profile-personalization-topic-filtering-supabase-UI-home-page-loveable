import React from "react";
import { Badge } from "@/components/ui/badge";

interface TopicSelectorProps {
  favoriteTopics: string[];
  onChange: (topics: string[]) => void;
}

const ALL_TOPICS = [
  "Artificial intelligence",
  "Image and Video Generation",
  "Machine Learning",
  "Blockchain",
  "Quantum Computing",
  "Cloud Computing",
  "Cybersecurity",
  "AR/VR",
  "DevOps",
  "Data Science",
  "IoT",
  "Mobile Development",
  "Web Development",
  "Game Development",
  "Robotics",
  "Fintech",
  "Health Tech",
  "EdTech",
  "Green Tech",
  "Space Tech",
];

const TopicSelector: React.FC<TopicSelectorProps> = ({
  favoriteTopics,
  onChange,
}) => {
  const handleTopicToggle = (topic: string) => {
    const isSelected = favoriteTopics.includes(topic);
    if (isSelected) {
      onChange(favoriteTopics.filter((t) => t !== topic));
    } else {
      onChange([...favoriteTopics, topic]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {ALL_TOPICS.map((topic) => {
          const isSelected = favoriteTopics.includes(topic);
          return (
            <Badge
              key={topic}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                isSelected
                  ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTopicToggle(topic)}
            >
              {topic}
            </Badge>
          );
        })}
      </div>
      {favoriteTopics.length > 0 && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Selected: {favoriteTopics.length} topic
          {favoriteTopics.length !== 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
};

export default TopicSelector;

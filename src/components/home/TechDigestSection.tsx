import React from "react";
import { supabase } from "../../../Tech pulse/src/lib/supabase";
import NewsCard from "../../../Tech pulse/src/components/NewsCard";

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Utility: clean source name
const getCleanSourceName = (source) => {
  const sourceMapping = {
    "https://techcrunch.com": "TechCrunch",
    "techcrunch.com": "TechCrunch",
    techcrunch: "TechCrunch",
    "wired.com": "Wired",
    "theverge.com": "The Verge",
    "arstechnica.com": "Ars Technica",
    "engadget.com": "Engadget",
    "venturebeat.com": "VentureBeat",
  };
  if (!source) return "";
  if (source.includes("http")) {
    try {
      const domain = new URL(source).hostname.replace("www.", "");
      return sourceMapping[domain] || domain;
    } catch {
      return source;
    }
  }
  return sourceMapping[source.toLowerCase()] || source;
};

export default async function TechDigestSection() {
  // Hardcoded favorite topics for debugging
  const favorite_topics = ["AI", "Cybersecurity", "Blockchain"];

  let data = [];
  let error = null;
  try {
    const res = await supabase
      .from("daily_summaries")
      .select("*")
      .order("pubDate", { ascending: false })
      .limit(50);
    data = res.data || [];
    error = res.error;
    console.log("Fetched daily summaries:", data);
  } catch (err) {
    error = err;
    data = [];
  }

  if (error) {
    console.error("Supabase fetch error:", error);
    return (
      <div className="text-red-500 text-center">
        Failed to load tech digest.
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-gray-500 text-center">
        No tech digest available yet.
      </div>
    );
  }

  const filtered = data.filter((item) =>
    favorite_topics.some(
      (topic) =>
        item.title?.toLowerCase().includes(topic.toLowerCase()) ||
        item.summary?.toLowerCase().includes(topic.toLowerCase())
    )
  );

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        📰 What's Happening in Tech Today
      </h2>
      {filtered.length === 0 ? (
        <div className="text-gray-400 text-center py-10">
          No tech news found for your selected preferences.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 12).map((item, index) => (
            <NewsCard
              key={item.id || index}
              id={item.id || `news-${index}`}
              title={item.title || "No Title"}
              topic={item.topic || item.category || "Tech"}
              source={getCleanSourceName(item.source) || "Tech Source"}
              summary={item.summary}
              takeaways={item.takeaways}
              url={item.link}
              publishedAt={item.pubDate}
            />
          ))}
        </div>
      )}
    </section>
  );
}

import React from "react";
import { supabase } from "../../lib/supabase";
import NewsCard from "@/components/NewsCard";
import { getAllMockNewsIds, getMockNewsItem } from "@/lib/mockNewsService";

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
    // Fetch data from Supabase daily_summaries table
    console.log("Fetching data from Supabase daily_summaries table");
    const res = await supabase
      .from("daily_summaries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    data = res.data || [];
    error = res.error;
    console.log("Supabase fetch result:", { data: data.length, error });

    if (error) {
      console.error("Supabase fetch error:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.log(
        "No data found in daily_summaries table, using mock data as fallback"
      );
      // Fallback to mock data if no data in Supabase
      const mockIds = getAllMockNewsIds();
      const mockItems = mockIds
        .slice(0, 50)
        .map((id) => {
          const mockItem = getMockNewsItem(id);
          if (mockItem) {
            return {
              ...mockItem,
              id: mockItem.id,
            };
          }
          return null;
        })
        .filter(Boolean);

      data = mockItems;
      console.log("Using mock data as fallback:", data.length, "items");
    } else {
      // Process Supabase data
      data = data.map((item) => ({
        ...item,
        id:
          item.id ||
          `supabase-${item.title?.replace(/\s+/g, "-").toLowerCase()}`,
        topic: item.topic || item.category || "Tech",
        source: item.source || "Tech Source",
        summary: item.summary || item.description || "",
        takeaways: item.takeaways || [],
        url: item.url || item.link || "",
        published_at: item.published_at || item.pubDate || item.created_at,
      }));
      console.log("Using Supabase data:", data.length, "items");
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error = err;
    data = [];
  }

  if (error) {
    console.error("Data fetch error:", error);
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
        item.summary?.toLowerCase().includes(topic.toLowerCase()) ||
        item.topic?.toLowerCase().includes(topic.toLowerCase())
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
              url={item.url}
              publishedAt={item.published_at}
            />
          ))}
        </div>
      )}
    </section>
  );
}

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchImage } from "@/lib/imageService";

interface Trend {
  title: string;
  summary: string;
  image?: string;
}

interface TrendContextType {
  dailyTrends: Trend[];
  homepageTrends: Trend[];
  loading: boolean;
  error: string | null;
}

const TrendContext = createContext<TrendContextType | undefined>(undefined);

export function TrendProvider({ children }: { children: React.ReactNode }) {
  const [dailyTrends, setDailyTrends] = useState<Trend[]>([]);
  const [homepageTrends, setHomepageTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDailyTrends = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/trends?source=reddit");
      const data = await res.json();
      // Fetch images for each trend
      const trendsWithImages = await Promise.all(
        data.map(async (trend: Trend) => ({
          ...trend,
          image: await fetchImage(trend.title),
        }))
      );
      setDailyTrends(trendsWithImages);
    } catch (err) {
      setError("Failed to fetch daily trends");
      console.error(err);
    }
  };

  const fetchHomepageTrends = async () => {
    try {
      const res = await fetch(
        "http://localhost:4000/api/trends?source=hackernews"
      );
      const data = await res.json();
      // Fetch images for each trend
      const trendsWithImages = await Promise.all(
        data.map(async (trend: Trend) => ({
          ...trend,
          image: await fetchImage(trend.title),
        }))
      );
      setHomepageTrends(trendsWithImages);
    } catch (err) {
      setError("Failed to fetch homepage trends");
      console.error(err);
    }
  };

  useEffect(() => {
    const loadTrends = async () => {
      setLoading(true);
      try {
        await Promise.all([fetchDailyTrends(), fetchHomepageTrends()]);
      } catch (err) {
        setError("Failed to load trends");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTrends();
  }, []);

  return (
    <TrendContext.Provider
      value={{ dailyTrends, homepageTrends, loading, error }}
    >
      {children}
    </TrendContext.Provider>
  );
}

export function useTrends() {
  const context = useContext(TrendContext);
  if (context === undefined) {
    throw new Error("useTrends must be used within a TrendProvider");
  }
  return context;
}

import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "../../Tech pulse/src/components/BottomNavigation";

const digests = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    tag: "Quantum",
    title: "Quantum Computing Breakthrough",
    points: ["IBM unveils 1000-qubit processor", "Tested across 3 cities"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
    tag: "AI",
    title: "AI Outperforms Doctors in Diagnosis",
    points: ["Stanford study on 10,000+ cases", "Ethical debate heats up"],
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <div className="max-w-xl mx-auto px-4 pt-8">
        {/* Learning Progress Section */}
        <div className="bg-card p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Learning Progress</h2>
          <p className="text-muted-foreground mb-1 text-sm">
            3 more digests to complete your weekly goal! 🚀
          </p>
          <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
            <div
              className="h-4 bg-primary rounded-full"
              style={{ width: "67%" }}
            />
          </div>
          <p className="text-right mt-1 text-sm text-primary font-medium">
            67%
          </p>
        </div>

        {/* Today's Idea Spark Card */}
        <div className="bg-green-100 p-4 rounded-2xl mb-6">
          <h3 className="text-md font-semibold text-green-800">
            Today's Idea Spark
          </h3>
          <p className="text-sm text-green-900">
            Smart City Infrastructure: What if streetlights adjusted traffic by
            air quality?
          </p>
          <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-md hover:bg-green-800">
            Explore More
          </button>
        </div>

        {/* Today's Top Digests */}
        <div className="bg-card p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Today's Top Digests</h2>
          {digests.map((digest, idx) => (
            <div
              key={digest.title}
              className="bg-card rounded-xl shadow mb-4 overflow-hidden"
            >
              <img
                src={digest.image}
                alt={digest.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                  {digest.tag}
                </span>
                <h4 className="text-xl font-bold mt-2">{digest.title}</h4>
                <ul className="text-sm text-muted-foreground mt-2 list-disc pl-4">
                  {digest.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-3">
                  <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/90">
                    Read More
                  </button>
                  <button className="bg-muted px-3 py-1 rounded">
                    Discuss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sticky Bottom Navigation */}
      <BottomNavigation currentPage="home" />
    </div>
  );
};

export default LandingPage;

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Eye, Bookmark } from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";

const mockDigests = [
  {
    id: 1,
    title: "Quantum Computing Breakthrough",
    excerpt:
      "IBM unveils 1000-qubit processor tested across 3 cities, marking a major milestone in quantum computing development.",
    category: "Quantum Computing",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop",
    timeToRead: "5 min",
    views: "12.5k",
    publishedAt: "2024-01-22",
  },
  {
    id: 2,
    title: "AI Outperforms Doctors in Diagnosis",
    excerpt:
      "Stanford study on 10,000+ cases shows AI achieving 95% accuracy in medical diagnosis, sparking ethical debates.",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
    timeToRead: "7 min",
    views: "18.2k",
    publishedAt: "2024-01-21",
  },
  {
    id: 3,
    title: "DeFi Protocol Security Advances",
    excerpt:
      "New multi-signature standards reduce hack vulnerabilities by 60%, improving Web3 security infrastructure.",
    category: "Blockchain",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=300&fit=crop",
    timeToRead: "4 min",
    views: "8.7k",
    publishedAt: "2024-01-20",
  },
  {
    id: 4,
    title: "Neural Interface Breakthrough",
    excerpt:
      "Neuralink competitor achieves first successful brain-computer interface for paralyzed patients.",
    category: "Neurotechnology",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
    timeToRead: "6 min",
    views: "15.3k",
    publishedAt: "2024-01-19",
  },
];

const Digests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Tech Digests
          </h1>
          <p className="text-gray-600">
            Stay updated with the latest technology trends and insights
          </p>
        </motion.div>

        {/* Digests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockDigests.map((digest, index) => (
            <motion.div
              key={digest.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src={digest.image}
                  alt={digest.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {digest.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {digest.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {digest.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{digest.timeToRead}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{digest.views}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {digest.publishedAt}
                    </span>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all font-medium">
            Load More Digests
          </button>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentPage="digests" />
    </div>
  );
};

export default Digests;

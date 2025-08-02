import React from "react";
import { motion } from "framer-motion";
import { User, Settings, Trophy, BookOpen, Zap, Calendar } from "lucide-react";
import BottomNavigation from "../components/BottomNavigation";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pb-20">
      <div className="max-w-md mx-auto px-4 pt-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Alex Johnson
          </h1>
          <p className="text-gray-600">AI Learning Enthusiast</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg">
            <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">2,450</div>
            <div className="text-xs text-gray-600">Total XP</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">Level 5</div>
            <div className="text-xs text-gray-600">Current Level</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg">
            <BookOpen className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">8/12</div>
            <div className="text-xs text-gray-600">Modules</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center shadow-lg">
            <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-xs text-gray-600">Day Streak</div>
          </div>
        </motion.div>

        {/* Recent Achievements */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🚀</div>
              <div>
                <div className="font-medium">First Steps</div>
                <div className="text-sm text-gray-600">
                  Complete your first AI module
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <div className="font-medium">Week Warrior</div>
                <div className="text-sm text-gray-600">
                  Maintain a 7-day streak
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-2xl">🧠</div>
              <div>
                <div className="font-medium">AI Explorer</div>
                <div className="text-sm text-gray-600">
                  Complete 5 different AI topics
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Settings</h3>
          <div className="space-y-3">
            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
              <span>Account Settings</span>
            </button>
            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <BookOpen className="w-5 h-5 text-gray-600" />
              <span>Learning Preferences</span>
            </button>
            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Trophy className="w-5 h-5 text-gray-600" />
              <span>Achievement Center</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation currentPage="profile" />
    </div>
  );
};

export default Profile;

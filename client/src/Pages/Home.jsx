import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-6">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 border-2 border-cyan-400/50 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: 45,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-8 h-8 border-2 border-purple-400/50 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-4 h-4 bg-white/30 rounded-sm"
          animate={{
            y: [0, 60, 0],
            rotate: 180,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Trusted by 10,000+ professionals</span>
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
          Elevate Your
          <motion.span
            initial={{ backgroundPosition: "0%" }}
            animate={{ backgroundPosition: "200%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%] bg-clip-text text-transparent"
          >
            {" "}Digital Presence
          </motion.span>
        </h1>
        
        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Enterprise-grade social media management platform that unifies your digital strategy. 
          <span className="text-cyan-300 font-semibold"> Scale your impact</span> with AI-driven insights and seamless multi-platform integration.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
            >
              Start Free Trial
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/demo"
              className="px-8 py-4 border border-white/30 rounded-xl text-white/90 font-semibold hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            >
              Book Demo
            </Link>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm"
        >
          <span>Trusted by industry leaders:</span>
          <div className="flex gap-6 opacity-70">
            {["TechCorp", "InnovateCo", "GlobalMedia", "StartUpHub"].map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="font-medium"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 w-full max-w-7xl"
      >
        {[
          {
            title: "Unified Command Center",
            desc: "Centralized dashboard with real-time analytics and cross-platform performance metrics.",
            icon: "💻",
            gradient: "from-cyan-500/20 to-blue-500/20",
          },
          {
            title: "AI-Powered Scheduling",
            desc: "Intelligent content optimization and automated posting with predictive engagement scoring.",
            icon: "🧠",
            gradient: "from-purple-500/20 to-pink-500/20",
          },
          {
            title: "Enterprise Analytics",
            desc: "Advanced reporting with custom KPI tracking and competitor benchmarking.",
            icon: "📊",
            gradient: "from-green-500/20 to-emerald-500/20",
          },
          {
            title: "Bank-Grade Security",
            desc: "SOC 2 compliant with end-to-end encryption and enterprise-level access controls.",
            icon: "🔐",
            gradient: "from-orange-500/20 to-red-500/20",
          },
          {
            title: "Seamless Integration",
            desc: "Native API connections to LinkedIn, Instagram, X, Facebook, and 50+ other platforms.",
            icon: "🔗",
            gradient: "from-blue-500/20 to-cyan-500/20",
          },
          {
            title: "Strategic AI Assistant",
            desc: "Personalized growth strategies and content recommendations powered by machine learning.",
            icon: "🤖",
            gradient: "from-purple-500/20 to-indigo-500/20",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 shadow-2xl`}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-4xl mb-4 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              {feature.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {feature.desc}
            </p>
            <motion.div
              className="mt-4 text-cyan-400 font-semibold text-sm flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Learn more →
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mt-20 w-full max-w-4xl"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Social Strategy?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our platform to drive meaningful engagement and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:shadow-2xl transition-all"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 mt-20 mb-8 text-center"
      >
        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} SocialConnect Enterprise — 
          <span className="text-white/40"> SOC 2 Compliant • GDPR Ready • Enterprise Grade</span>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
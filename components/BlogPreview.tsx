"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogPreview() {
  const blogs = [
    {
      title: "5 Key Strategies for Effective HR Management in 2024",
      date: "20-Aug-2024",
      excerpt: "As businesses face new challenges in 2024, effective HR management becomes crucial...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Role of Cybersecurity in Modern Business",
      date: "20-Aug-2024",
      excerpt: "In today's digital era, cybersecurity is essential for protecting business assets...",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "How Digital Transformation is Shaping the Future",
      date: "20-Aug-2024",
      excerpt: "As the business landscape evolves, digital transformation becomes increasingly important...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10 animate-gradient"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
          >
            Our Blog
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends and insights in technology and business
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
              <Link href={`/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`}>
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 group-hover:bg-white/10">
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} opacity-50`}></div>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-white/60 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{blog.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-white/60 mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="inline-flex items-center text-white/80 hover:text-white group/link">
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
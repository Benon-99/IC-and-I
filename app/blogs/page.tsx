"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
  const blogs = [
    {
      title: "5 Key Strategies for Effective HR Management in 2024",
      date: "20-Aug-2024",
      excerpt: "As businesses face new challenges in 2024, effective HR management becomes crucial for maintaining productivity and employee satisfaction...",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      category: "HR Management",
      slug: "5-key-strategies-for-effective-hr-management-in-2024"
    },
    {
      title: "The Role of Cybersecurity in Modern Business",
      date: "20-Aug-2024",
      excerpt: "In today's digital era, cybersecurity is essential for protecting business assets and maintaining customer trust in an increasingly connected world...",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      category: "Technology",
      slug: "the-role-of-cybersecurity-in-modern-business"
    },
    {
      title: "How Digital Transformation is Shaping the Future of Business in Syria",
      date: "20-Aug-2024",
      excerpt: "As the business landscape evolves, digital transformation becomes increasingly important for companies looking to stay competitive and innovative...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      category: "Digital Innovation",
      slug: "how-digital-transformation-is-shaping-the-future-of-business-in-syria"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-10 transform -skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-white opacity-10 transform skew-x-12"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Latest Insights</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Stay updated with the latest insights on consultancy, IT solutions, and business strategies. 
              Explore topics from tech advancements to HR best practices and more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.slug}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl 
                  transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 rounded-full 
                      text-sm font-medium text-primary">
                      {blog.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {blog.date}
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    
                    <div className="inline-flex items-center text-primary font-medium group/link">
                      Read More 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
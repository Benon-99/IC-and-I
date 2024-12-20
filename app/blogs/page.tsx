"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function EnhancedBlogPage() {
  const blogs = [
    {
      title: "5 Key Strategies for Effective HR Management in 2024",
      date: "20-Aug-2024",
      excerpt: "As businesses face new challenges in 2024, effective HR management becomes crucial...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      gradient: "from-[#3785CC] to-[#4A9BE4]",
      slug: "5-key-strategies-for-effective-hr-management-in-2024"
    },
    {
      title: "The Role of Cybersecurity in Modern Business",
      date: "20-Aug-2024",
      excerpt: "In today's digital era, cybersecurity is essential for protecting business assets...",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      gradient: "from-[#4A9BE4] to-[#8590EA]",
      slug: "the-role-of-cybersecurity-in-modern-business"
    },
    {
      title: "How Digital Transformation is Shaping the Future of Business in Syria",
      date: "20-Aug-2024",
      excerpt: "As the business landscape evolves, digital transformation becomes increasingly important...",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      gradient: "from-[#8590EA] to-[#B5C6F4]",
      slug: "how-digital-transformation-is-shaping-the-future-of-business-in-syria"
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
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-[#111240]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
          </div>
          
          <div className="relative w-full lg:w-[1280px] mx-auto px-4 py-32">
            <div className="text-center opacity-0 animate-fade-in">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block">
                Our Blog
              </span>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-[#3785CC] via-[#4A9BE4] to-[#5B8AF0] bg-clip-text text-transparent mb-6 leading-normal">
                Latest Insights
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest insights on consultancy, IT solutions, and business strategies. 
                Explore topics from tech advancements to HR best practices and more.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3785CC]/5 via-[#5B8AF0]/5 to-[#8590EA]/5 animate-gradient"></div>
          </div>

          <div className="w-full lg:w-[1280px] mx-auto px-4 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="relative rounded-2xl bg-white backdrop-blur-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:bg-gray-50 shadow-sm">
                      <div className="relative h-64 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} opacity-80`}></div>
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex items-center text-[#111240]/60 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{blog.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#111240] mb-4 group-hover:text-[#111240]/90 transition-colors duration-300">
                          {blog.title}
                        </h3>
                        <p className="text-[#111240]/60 mb-6 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="inline-flex items-center text-[#111240]/80 hover:text-[#111240] group/link">
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
      </div>
    </div>
  );
}
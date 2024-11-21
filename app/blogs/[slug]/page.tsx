"use client";

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

const blogPosts = {
  '5-key-strategies-for-effective-hr-management-in-2024': {
    title: "5 Key Strategies for Effective HR Management in 2024",
    date: "20-Aug-2024",
    category: "HR Management",
    author: "IC&I Team",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    content: `
      As businesses face new challenges in 2024, effective HR management becomes crucial for maintaining productivity and employee satisfaction. Here are five key strategies that organizations should consider implementing:

      **1. Embrace Digital HR Solutions**
      
      In today's fast-paced business environment, digital HR solutions are no longer optional but essential. Implementing comprehensive HR management systems can streamline processes, improve data accuracy, and enhance decision-making capabilities.
      
      Key benefits include:
      - Automated payroll processing
      - Digital employee records
      - Performance tracking systems
      - Integrated recruitment platforms
      
      **2. Focus on Employee Well-being**
      
      The importance of employee well-being has never been more apparent. Organizations should:
      - Implement flexible work arrangements
      - Provide mental health support
      - Offer comprehensive wellness programs
      - Create a supportive work environment
      
      **3. Develop Strong Learning & Development Programs**
      
      Continuous learning is crucial for both employee growth and organizational success. Consider:
      - Personalized learning paths
      - Skill-based training programs
      - Leadership development initiatives
      - Cross-functional training opportunities
      
      **4. Enhance Performance Management**
      
      Modern performance management should be:
      - Continuous and feedback-driven
      - Focused on development rather than just evaluation
      - Aligned with organizational goals
      - Supported by data and analytics
      
      **5. Prioritize Diversity, Equity, and Inclusion**
      
      A strong DEI strategy is essential for:
      - Attracting top talent
      - Fostering innovation
      - Building a positive workplace culture
      - Improving business outcomes
      
      **Looking Ahead**
      
      As we progress through 2024, HR managers must stay agile and responsive to changing workplace dynamics. By implementing these strategies, organizations can build a more resilient and effective workforce while maintaining high levels of employee engagement and satisfaction.
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link 
            href="/blogs" 
            className="text-primary hover:text-secondary transition-colors"
          >
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/blogs"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 
                transition-colors group bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Tag className="w-4 h-4 mr-2" />
                {post.category}
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
                By {post.author}
              </div>
              <button 
                className="flex items-center hover:text-white transition-colors bg-white/5 hover:bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
                onClick={() => navigator.share({
                  title: post.title,
                  text: post.title,
                  url: window.location.href
                })}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="container mx-auto px-4 -mt-20">
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative bg-white rounded-xl shadow-xl p-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Decorative gradient orb */}
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="prose prose-lg max-w-none relative">
              {/* Introduction with gradient border */}
              <div className="border-l-4 border-gradient-to-b from-[#3785CC] to-[#4A9BE4] pl-6 mb-12">
                <p className="text-[#111240]/80 leading-relaxed text-xl font-medium tracking-wide">
                  {post.content.split('\n')[1]}
                </p>
              </div>

              {/* Main content */}
              {post.content.split('\n').slice(2).map((paragraph, index) => {
                if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  const title = paragraph.trim().replace(/^\*\*|\*\*$/g, '').trim();
                  const number = title.match(/^\d+/)?.[0];
                  return (
                    <div key={index} className="mb-12">
                      <h2 className="text-2xl font-bold text-[#111240] flex items-center gap-4 mb-6">
                        {number && (
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] flex items-center justify-center">
                            <span className="text-white text-xl">{number}</span>
                          </div>
                        )}
                        <span>{title.replace(/^\d+\.\s*/, '')}</span>
                      </h2>
                    </div>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="flex items-start gap-3 text-[#111240]/80 mb-4 hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] mt-2.5"></div>
                      <span className="text-lg">{paragraph.replace('- ', '')}</span>
                    </li>
                  );
                }
                if (paragraph.trim() && !paragraph.startsWith('Key benefits include:')) {
                  return (
                    <p key={index} className="text-[#111240]/80 text-lg leading-relaxed mb-8 hover:text-[#111240] transition-colors duration-300">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default function EnhancedBlogPage() {
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

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'HR Management':
        return 'from-blue-500 to-cyan-500';
      case 'Technology':
        return 'from-purple-500 to-pink-500';
      case 'Digital Innovation':
        return 'from-emerald-500 to-green-500';
      default:
        return 'from-gray-500 to-gray-600';
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

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-gradient"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-32">
            <div className="text-center opacity-0 animate-fade-in">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block">
                Our Blog
              </span>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-6">
                Latest Insights
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Stay updated with the latest insights on consultancy, IT solutions, and business strategies. 
                Explore topics from tech advancements to HR best practices and more.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={blog.slug}
                className="group relative opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                <a href={`/blogs/${blog.slug}`} className="block">
                  <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <img 
                        src="/api/placeholder/800/600"
                        alt={blog.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryGradient(blog.category)} text-white`}>
                        {blog.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-white/60 mb-3">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {blog.date}
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-white/60 mb-4 line-clamp-3">{blog.excerpt}</p>
                      
                      <div className="inline-flex items-center text-white/80 hover:text-white font-medium group/link">
                        Read More 
                        <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
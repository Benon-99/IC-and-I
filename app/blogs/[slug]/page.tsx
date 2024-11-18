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

      ### 1. Embrace Digital HR Solutions
      
      In today's fast-paced business environment, digital HR solutions are no longer optional but essential. Implementing comprehensive HR management systems can streamline processes, improve data accuracy, and enhance decision-making capabilities.
      
      Key benefits include:
      - Automated payroll processing
      - Digital employee records
      - Performance tracking systems
      - Integrated recruitment platforms
      
      ### 2. Focus on Employee Well-being
      
      The importance of employee well-being has never been more apparent. Organizations should:
      - Implement flexible work arrangements
      - Provide mental health support
      - Offer comprehensive wellness programs
      - Create a supportive work environment
      
      ### 3. Develop Strong Learning & Development Programs
      
      Continuous learning is crucial for both employee growth and organizational success. Consider:
      - Personalized learning paths
      - Skill-based training programs
      - Leadership development initiatives
      - Cross-functional training opportunities
      
      ### 4. Enhance Performance Management
      
      Modern performance management should be:
      - Continuous and feedback-driven
      - Focused on development rather than just evaluation
      - Aligned with organizational goals
      - Supported by data and analytics
      
      ### 5. Prioritize Diversity, Equity, and Inclusion
      
      A strong DEI strategy is essential for:
      - Attracting top talent
      - Fostering innovation
      - Building a positive workplace culture
      - Improving business outcomes
      
      ### Looking Ahead
      
      As we progress through 2024, HR managers must stay agile and responsive to changing workplace dynamics. By implementing these strategies, organizations can build a more resilient and effective workforce while maintaining high levels of employee engagement and satisfaction.
    `
  },
  'the-role-of-cybersecurity-in-modern-business': {
    title: "The Role of Cybersecurity in Modern Business",
    date: "20-Aug-2024",
    category: "Technology",
    author: "IC&I Security Team",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    content: `
      In today's digital era, cybersecurity is essential for protecting business assets and maintaining customer trust in an increasingly connected world. This article explores the critical aspects of modern cybersecurity and its impact on business operations.

      ### The Growing Importance of Cybersecurity

      As businesses become more digitized, the need for robust cybersecurity measures has increased exponentially. Key factors driving this include:
      - Increasing frequency of cyber attacks
      - Growing sophistication of threats
      - Rising costs of data breaches
      - Stricter regulatory requirements

      ### Essential Security Measures

      Modern businesses need to implement several key security measures:

      #### 1. Network Security
      - Firewalls and intrusion detection systems
      - Regular security audits
      - Network monitoring and analytics
      - VPN implementation

      #### 2. Data Protection
      - Encryption protocols
      - Access control systems
      - Regular backups
      - Data classification

      #### 3. Employee Training
      - Security awareness programs
      - Phishing prevention training
      - Password management
      - Incident response procedures

      ### Impact on Business Operations

      Effective cybersecurity measures affect various aspects of business:
      - Customer trust and loyalty
      - Operational efficiency
      - Regulatory compliance
      - Risk management

      ### Future Trends

      Looking ahead, businesses should prepare for:
      - AI-powered security solutions
      - Zero-trust architecture
      - Cloud security challenges
      - IoT security considerations

      ### Conclusion

      Cybersecurity is no longer just an IT concern but a fundamental business requirement. Organizations must prioritize security measures to protect their assets and maintain competitive advantage in the digital age.
    `
  },
  'how-digital-transformation-is-shaping-the-future-of-business-in-syria': {
    title: "How Digital Transformation is Shaping the Future of Business in Syria",
    date: "20-Aug-2024",
    category: "Digital Innovation",
    author: "IC&I Digital Team",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    content: `
      As the business landscape evolves, digital transformation becomes increasingly important for companies looking to stay competitive and innovative in Syria. This article explores the current state of digital transformation and its impact on Syrian businesses.

      ### The Digital Revolution in Syria

      Digital transformation is reshaping how businesses operate in Syria:
      - Adoption of modern technologies
      - Changing customer expectations
      - New business models
      - Enhanced operational efficiency

      ### Key Areas of Transformation

      #### 1. E-Commerce and Digital Payments
      - Growth of online marketplaces
      - Mobile payment solutions
      - Digital banking services
      - E-commerce platforms

      #### 2. Business Process Automation
      - Workflow automation
      - Document digitization
      - Cloud computing adoption
      - Digital communication tools

      #### 3. Customer Experience
      - Omnichannel presence
      - Personalized services
      - Digital customer support
      - Data-driven insights

      ### Challenges and Opportunities

      The transformation journey presents both challenges and opportunities:

      #### Challenges:
      - Infrastructure limitations
      - Technical expertise gaps
      - Investment requirements
      - Change management

      #### Opportunities:
      - Market expansion
      - Operational efficiency
      - Innovation potential
      - Competitive advantage

      ### Success Stories

      Several Syrian businesses have successfully embraced digital transformation:
      - Banking sector modernization
      - Retail digital integration
      - Manufacturing automation
      - Service sector innovation

      ### Future Outlook

      The future of digital transformation in Syria looks promising:
      - Continued technology adoption
      - Growing digital ecosystem
      - Increased innovation
      - Economic growth opportunities
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link 
              href="/blogs"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 
                transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                {post.category}
              </div>
              <div className="text-white/80">
                By {post.author}
              </div>
              <button 
                className="flex items-center hover:text-white transition-colors"
                onClick={() => navigator.share({
                  title: post.title,
                  text: post.title,
                  url: window.location.href
                })}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-600 
              prose-a:text-primary hover:prose-a:text-secondary prose-strong:text-gray-900"
          >
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('####')) {
                return (
                  <h4 key={index} className="text-xl font-bold mt-6 mb-3">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <li key={index} className="ml-6">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return <p key={index} className="mb-4">{paragraph}</p>;
              }
              return null;
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from 'bcrypt';

async function main() {
  // COMMENTED SECTIONS RETAINED FOR FUTURE REFERENCE
  /*
  // Ensure Home record exists or create it
  await prisma.home.upsert({
    where: { id: 1 },
    update: {},
    create: {
      aboutUs: {
        title: "DISCOVER IC&I",
        subtitle: "Your Reliable Partner in ICT Consulting, Solutions & Services",
        content: [
          "A leading provider of ICT solutions, IC&I specializes in comprehensive consultancy, installation, commissioning, and outsourcing services. Our corporate business solutions span a range of sectors, including telecom, ISPs, banking, NGOs and more.",
          "We handle all aspects of human resources services, especially contracting and outsourcing, designed to streamline your workforce management by providing flexible, efficient and scalable solutions."
        ],
        features: [
          {
            icon: "Globe",
            title: "Global Standards",
            text: "UN Global Compact signatory since 2023",
            color: "from-blue-500 to-cyan-500",
          },
          {
            icon: "Target",
            title: "Mission-Driven",
            text: "Preferred strategic partner for consultancy and services",
            color: "from-purple-500 to-pink-500",
          },
          {
            icon: "Compass",
            title: "Clear Vision",
            text: "Driving innovation and exceptional performance",
            color: "from-orange-500 to-yellow-500",
          },
        ],
        stats: [
          { number: "15+", label: "Years Experience" },
          { number: "200+", label: "Projects Completed" },
          { number: "50+", label: "Expert Team Members" },
          { number: "98%", label: "Client Satisfaction" },
        ],
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
      },
      advantages: {
        title: "Why Choose Us?",
        subtitle: "Discover our unique advantages",
        features: [
          {
            title: "Trustworthy",
            description: "Over 25 years of expertise in delivering innovative and high-quality business solutions",
            icon: "Shield",
            gradient: "from-[#3785CC] to-[#4A9BE4]",
            link: "/about#expertise",
          },
          {
            title: "24/7 Support",
            description: "Comprehensive round-the-clock technical support and professional assistance for all your business needs",
            icon: "Clock",
            gradient: "from-[#4A9BE4] to-[#5B8AF0]",
            link: "/services#support",
          },
          {
            title: "Expert Team",
            description: "Dedicated team of professionals with extensive industry knowledge and experience",
            icon: "Users",
            gradient: "from-[#5B8AF0] to-[#8590EA]",
            link: "/about#team",
          },
          {
            title: "Scalable Solutions",
            description: "Flexible and adaptable solutions designed to grow seamlessly with your business",
            icon: "TrendingUp",
            gradient: "from-[#8590EA] to-[#B5C6F4]",
            link: "/services#solutions",
          },
        ],
      },
    },
  });
  */

  // await prisma.category.createMany({
  //   data: [
  //     { id: 1, name: "HR Management" },
  //     { id: 2, name: "Technology" },
  //     { id: 3, name: "Digital Innovation" },
  //     // Add more categories if needed
  //   ],
  // });

  // // Seed Blog Posts
  // await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "5 Key Strategies for Effective HR Management in 2024",
  //       content: `As businesses face new challenges...`,
  //       slug: "5-key-strategies-for-effective-hr-management-in-2024",
  //       date: new Date("2024-08-20"),
  //       categoryId: 1, // Matches the "HR Management" category
  //       image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  //       published: true,
  //       authorId: 1, // Ensure the author exists
  //     },
  //     {
  //       title: "The Role of Cybersecurity in Modern Business",
  //       content: `In today's digital era, cybersecurity is essential...`,
  //       slug: "the-role-of-cybersecurity-in-modern-business",
  //       date: new Date("2024-08-20"),
  //       categoryId: 2, // Matches the "Technology" category
  //       image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  //       published: true,
  //       authorId: 1,
  //     },
  //     {
  //       title: "How Digital Transformation is Shaping the Future of Business in Syria",
  //       content: `As the business landscape evolves...`,
  //       slug: "how-digital-transformation-is-shaping-the-future-of-business-in-syria",
  //       date: new Date("2024-08-20"),
  //       categoryId: 3, // Matches the "Digital Innovation" category
  //       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  //       published: true,
  //       authorId: 1,
  //     },
  //   ],
  // });
  await prisma.post.update({
    where: { slug: "5-key-strategies-for-effective-hr-management-in-2024" },
    data: {
      title: "5 Key Strategies for Effective HR Management in 2024",
      content: `As businesses face new challenges in 2024, effective HR management becomes crucial for maintaining productivity and employee satisfaction. Here are five key strategies that organizations should consider implementing:
  
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
  
  As we progress through 2024, HR managers must stay agile and responsive to changing workplace dynamics. By implementing these strategies, organizations can build a more resilient and effective workforce while maintaining high levels of employee engagement and satisfaction.`,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      published: true,
    },
  });
  
  await prisma.post.update({
    where: { slug: "the-role-of-cybersecurity-in-modern-business" },
    data: {
      title: "The Role of Cybersecurity in Modern Business",
      content: `In today's digital era, cybersecurity is essential for protecting business assets and maintaining customer trust in an increasingly connected world. This article explores the critical aspects of modern cybersecurity and its impact on business operations.
  
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
  
  Cybersecurity is no longer just an IT concern but a fundamental business requirement. Organizations must prioritize security measures to protect their assets and maintain competitive advantage in the digital age.`,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
      published: true,
    },
  });
  
  await prisma.post.update({
    where: { slug: "how-digital-transformation-is-shaping-the-future-of-business-in-syria" },
    data: {
      title: "How Digital Transformation is Shaping the Future of Business in Syria",
      content: `As the business landscape evolves, digital transformation becomes increasingly important for companies looking to stay competitive and innovative in Syria. This article explores the current state of digital transformation and its impact on Syrian businesses.
  
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
  - Economic growth opportunities`,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      published: true,
    },
  });
  
  console.log("Blog posts updated successfully.");
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from 'bcrypt';

async function main() {
  // COMMENTED SECTIONS RETAINED FOR FUTURE REFERENCE
  /*
  // Ensure Home record exists or create it
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
  // await prisma.post.update({
  //   where: { slug: "5-key-strategies-for-effective-hr-management-in-2024" },
  //   data: {
  //     title: "5 Key Strategies for Effective HR Management in 2024",
  //     content: `
  // **1. Embrace Digital HR Solutions**
  // - Implement comprehensive HR management systems.
  // - Automate payroll processing, performance tracking, and recruitment platforms.
  // - Ensure better decision-making with integrated tools.
  
  // **2. Focus on Employee Well-being**
  // - Adopt flexible work arrangements.
  // - Provide mental health support and wellness programs.
  // - Foster a supportive work environment.
  
  // **3. Develop Strong Learning & Development Programs**
  // - Personalize learning paths and training initiatives.
  // - Offer leadership development and cross-functional training.
  
  // **4. Enhance Performance Management**
  // - Create a feedback-driven, development-focused approach.
  // - Align performance management with organizational goals.
  
  // **5. Prioritize Diversity, Equity, and Inclusion**
  // - Build DEI strategies to attract talent and foster innovation.
  
  // Looking ahead, HR managers must adapt to changing dynamics to build resilient and engaged workforces.`,
  //     image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  //     published: true,
  //   },
  // });
  
  
  // await prisma.post.update({
  //   where: { slug: "the-role-of-cybersecurity-in-modern-business" },
  //   data: {
  //     title: "The Role of Cybersecurity in Modern Business",
  //     content: `
  // **1. The Growing Importance of Cybersecurity**
  // - Increase in cyberattacks and sophisticated threats.
  // - Rising costs of data breaches and regulatory requirements.
  
  // **2. Essential Security Measures**
  // - **Network Security**: Firewalls, monitoring, and audits.
  // - **Data Protection**: Encryption and access controls.
  // - **Employee Training**: Phishing prevention and incident response.
  
  // **3. Impact on Business Operations**
  // - Improve customer trust and compliance.
  // - Enhance operational efficiency and risk management.
  
  // Looking ahead, businesses must prepare for AI-powered solutions, zero-trust architecture, and IoT security considerations.`,
  //     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  //     published: true,
  //   },
  // });
  
  
  // await prisma.post.update({
  //   where: { slug: "how-digital-transformation-is-shaping-the-future-of-business-in-syria" },
  //   data: {
  //     title: "How Digital Transformation is Shaping the Future of Business in Syria",
  //     content: `
  // **1. The Digital Revolution in Syria**
  // - Adoption of modern technologies and operational efficiency.
  // - Changing customer expectations and new business models.
  
  // **2. Key Areas of Transformation**
  // - **E-Commerce**: Growth of online platforms and digital payments.
  // - **Process Automation**: Workflow digitization and cloud computing.
  // - **Customer Experience**: Personalized services and omnichannel presence.
  
  // **3. Challenges and Opportunities**
  // - **Challenges**: Infrastructure gaps and investment needs.
  // - **Opportunities**: Market expansion and innovation potential.
  
  // Looking ahead, digital transformation in Syria offers immense economic growth opportunities.`,
  //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  //     published: true,
  //   },
  // });
  const homeRecord = await prisma.home.findUnique({ where: { id: 1 } });

  if (homeRecord) {
    await prisma.home.update({
      where: { id: 1 },
      data: {// Add actual data or leave empty if not available
        services: [
          {
            category: "Business Outsourcing",
            description:
              "Let us manage the complexity of HR recruitment, contracting and payroll services, so you can focus your resources and efforts on your core business.",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            services: [
              {
                icon: "UserPlus",
                title: "Jobs.ici – Recruiting",
                description:
                  "Connect with top industry talents for permanent positions, contract roles, and specialized recruitment solutions.",
                gradient: "from-[#3785CC] to-[#3E9DE5]",
              },
              {
                icon: "Users",
                title: "HR & Recruitment Management",
                description:
                  "Comprehensive HR and recruitment solutions to optimize your hiring process and talent management strategies.",
                gradient: "from-[#3E9DE5] to-[#7B8EEC]",
              },
              {
                icon: "ClipboardList",
                title: "HR Payroll & Performance",
                description:
                  "Streamline your payroll processing and performance management systems to enhance compliance and productivity.",
                gradient: "from-[#7B8EEC] to-[#B5C6F4]",
              },
            ],
          },
          {
            category: "ICT Solutions",
            description:
              "Our ICT solutions focus on optimizing business operations, driving process efficiency, and keeping your company competitive in today's technology-driven landscape.",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            services: [
              {
                icon: "Server",
                title: "Data Center Infrastructure",
                description:
                  "Comprehensive data center infrastructure solutions to design, build, and manage your evolving technology requirements.",
                gradient: "from-[#3785CC] to-[#4A9BE4]",
              },
              {
                icon: "Network",
                title: "Solutions Integration",
                description:
                  "Advanced technology integration solutions to optimize business operations, reduce costs, and drive sustainable enterprise growth.",
                gradient: "from-[#4A9BE4] to-[#5B8AF0]",
              },
              {
                icon: "Shield",
                title: "Information Security",
                description:
                  "Advanced security solutions and monitoring systems to protect your critical data and infrastructure from sophisticated cyber threats and vulnerabilities.",
                gradient: "from-[#5B8AF0] to-[#8590EA]",
              },
              {
                icon: "Code",
                title: "Software Development",
                description:
                  "Innovative web and mobile application development solutions designed to accelerate your digital transformation journey and enhance business efficiency.",
                gradient: "from-[#8590EA] to-[#B5C6F4]",
              },
            ],
          },
        ],
      },
    });
    console.log("Home services updated successfully.");
  } else {
    console.error("Home record with id 1 does not exist. Please create it first.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

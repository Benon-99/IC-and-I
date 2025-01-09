import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed `job-ici` data
  await prisma.services.create({
    data: {
      name: 'job-ici',
      title: 'Jobs.ici – Recruiting',
      subtitle: 'Empowering Ambitious Professionals to Find Their Perfect Job.',
      description:
        'IC&I is dedicated to fostering a thriving job market in Syria through our specialized platform, Jobs.ici. This initiative is designed to connect ambitious and competent professionals with the right job opportunities, helping to build careers and drive economic growth. Our platform\'s intelligent matching algorithms actively work to pair job seekers with opportunities that align with their qualifications and career goals.',
      subContent:
        `Jobs.ici is more than just a job board—it's a comprehensive career-building tool designed to empower Syrian professionals to achieve their career aspirations.`,
      services: {
        create: [
          {
            icon: 'Search',
            title: 'Extensive Job Listings',
            description:
              'Browse through curated job opportunities matched to your experience level and preferences.',
            gradient: 'from-[#00B4D8] to-[#4A9BE4]',
          },
          {
            icon: 'Upload',
            title: 'Resume Submission',
            description:
              'Upload your resume securely to connect with potential employers and opportunities.',
            gradient: 'from-[#4A9BE4] to-[#8590EA]',
          },
          {
            icon: 'Bell',
            title: 'Personalized Job Alerts',
            description:
              'Get notified about relevant job openings that match your career interests and skills.',
            gradient: 'from-[#8590EA] to-[#B5C6F4]',
          },
          {
            icon: 'Activity',
            title: 'Application Tracking',
            description:
              'Monitor your job application progress with real-time updates and status tracking.',
            gradient: 'from-[#00B4D8] to-[#4A9BE4]',
          },
          {
            icon: 'BookOpen',
            title: 'Career Resources',
            description:
              'Access comprehensive tools and resources to enhance your job search and career development.',
            gradient: 'from-[#4A9BE4] to-[#8590EA]',
          },
        ],
      },
      categoryID: 1, // Assuming the category with ID 1 already exists in the Categories table
    },
  });

  // Seed home page data
  await prisma.home.create({
    data: {
      aboutUs: {
        title: "About IC&I",
        subtitle: "Your Partner in Business Growth",
        content: [
          "IC&I is a leading business solutions provider dedicated to empowering organizations through innovative services and strategic partnerships.",
          "With years of experience in the industry, we specialize in delivering comprehensive solutions that drive business success and foster sustainable growth."
        ],
        image: "/images/about-us.jpg"
      },
      advantages: [
        {
          title: "Expert Team",
          description: "Our team of seasoned professionals brings years of industry expertise to every project.",
          icon: "Users"
        },
        {
          title: "Innovative Solutions",
          description: "We leverage cutting-edge technology and methodologies to deliver optimal results.",
          icon: "Lightbulb"
        },
        {
          title: "Client-Focused",
          description: "Your success is our priority - we work closely with you to achieve your goals.",
          icon: "Target"
        }
      ],
      services: [
        {
          title: "Business Outsourcing",
          description: "Comprehensive outsourcing solutions to optimize your operations",
          icon: "Building",
          link: "/services/business-outsourcing"
        },
        {
          title: "Job Recruitment",
          description: "Professional recruitment services to find top talent",
          icon: "Users",
          link: "/services/job-ici"
        },
        {
          title: "Consulting Services",
          description: "Expert guidance for your business challenges",
          icon: "LineChart",
          link: "/services/consulting"
        }
      ]
    }
  });

  // Seed business-outsourcing category
  await prisma.categories.create({
    data: {
      category: 'business-outsourcing',
      title: 'Business Outsourcing',
      mainDescription: 'Transform your business operations with our comprehensive outsourcing solutions. We help companies optimize their processes, reduce costs, and focus on core business activities.',
      
      overviewTitle: 'Market Leading HR Solutions',
      overviewContent: 'Our business outsourcing services are designed to help organizations streamline their operations and achieve greater efficiency. We provide end-to-end solutions that cover everything from HR management to administrative tasks, allowing you to focus on your core business objectives.',
      
      offeringsTitle: 'Business Outsourcing Solutions',
      offeringsContent: 'Discover our range of specialized business outsourcing services designed to enhance your operational efficiency and reduce overhead costs.',
      
      services: [
        {
          icon: 'Users',
          title: 'HR Management',
          description: 'Comprehensive HR services including recruitment, payroll, and employee relations management.',
          link: '/services/hr-management',
          gradient: 'from-[#00B4D8] to-[#4A9BE4]'
        },
        {
          icon: 'ClipboardList',
          title: 'Administrative Support',
          description: 'Professional administrative services to handle your day-to-day operations efficiently.',
          link: '/services/administrative-support',
          gradient: 'from-[#4A9BE4] to-[#8590EA]'
        },
        {
          icon: 'UserPlus',
          title: 'Talent Acquisition',
          description: 'Strategic recruitment services to help you find and retain top talent for your organization.',
          link: '/services/talent-acquisition',
          gradient: 'from-[#8590EA] to-[#B5C6F4]'
        }
      ]
    }
  });

  console.log('Seed data for home page, `job-ici` and `business-outsourcing` added.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

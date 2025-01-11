import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
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

  // Seed categories
  await prisma.categories.createMany({
    data: [
      {
        category: "Business Outsourcing",
        title: "Let us manage the complexity of HR recruitment",
        mainDescription: "Let us manage the complexity of HR recruitment, contracting, and payroll services, so you can focus your resources and efforts on your core business.",
        overviewTitle: "Market Leading HR Solutions",
        overviewContent: "We are the Syrian market leader with the largest market share in providing full recruitment services in UN agencies, NPO's, and NGO's. Our comprehensive HR outsourcing solutions are designed to streamline your operations and drive organizational success through effective talent management.",
        offeringsTitle: "Business Outsourcing Solutions",
        offeringsContent: "Explore our range of specialized HR and recruitment solutions designed to optimize your workforce management and drive business growth.",
        services: [
          {
            icon: "UserPlus",
            title: "Jobs.ici – Recruiting",
            description: "Connect with top industry talents for permanent positions, contract roles, and specialized recruitment solutions.",
            gradient: "from-[#3785CC] to-[#3E9DE5]",
          },
          {
            icon: "Users",
            title: "HR & Recruitment Management",
            description: "Comprehensive HR and recruitment solutions to optimize your hiring process and talent management strategies.",
            gradient: "from-[#3E9DE5] to-[#7B8EEC]",
          },
          {
            icon: "ClipboardList",
            title: "HR Payroll & Performance",
            description: "Streamline your payroll processing and performance management systems to enhance compliance and productivity.",
            gradient: "from-[#7B8EEC] to-[#B5C6F4]",
          },
        ],
      },
      {
        category: "ICT Solutions",
        title: "Optimizing business operations",
        mainDescription: "Our ICT solutions focus on optimizing business operations, driving process efficiency, and keeping your company competitive in today's technology-driven landscape.",
        overviewTitle: "ICT Integration Services",
        overviewContent: "We provide advanced technology solutions to address your unique business challenges and opportunities, ensuring your company remains competitive in the digital age.",
        offeringsTitle: "ICT Solutions Suite",
        offeringsContent: "Our solutions include data center infrastructure, advanced technology integration, information security, and innovative software development services tailored to meet your unique business needs.",
        services: [
          {
            icon: "Server",
            title: "Data Center Infrastructure",
            description: "Comprehensive data center infrastructure solutions to design, build, and manage your evolving technology requirements.",
            gradient: "from-[#3785CC] to-[#4A9BE4]",
          },
          {
            icon: "Network",
            title: "Solutions Integration",
            description: "Advanced technology integration solutions to optimize business operations, reduce costs, and drive sustainable enterprise growth.",
            gradient: "from-[#4A9BE4] to-[#5B8AF0]",
          },
          {
            icon: "Shield",
            title: "Information Security",
            description: "Advanced security solutions and monitoring systems to protect your critical data and infrastructure from sophisticated cyber threats and vulnerabilities.",
            gradient: "from-[#5B8AF0] to-[#8590EA]",
          },
        ],
      },
    ],
  });

  console.log("Seeded data for home, categories, and services.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

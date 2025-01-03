/*// prisma/seed.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const aboutUsContent = {
  title: "DISCOVER IC&I",
  subtitle: "Your Reliable Partner in ICT Consulting, Solutions & Services",
  img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
  content: [
    `A leading provider of ICT solutions, IC&I specializes in comprehensive consultancy,
    installation, commissioning, and outsourcing services. Our corporate business 
    solutions span a range of sectors, including telecom, ISPs, banking, NGOs and more.`,
    `We handle all aspects of human resources services, especially contracting and 
    outsourcing, designed to streamline your workforce management by providing 
    flexible, efficient and scalable solutions.`
  ],
  features: [
    { 
      icon: "Globe", 
      title: "Global Standards", 
      text: "UN Global Compact signatory since 2023",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "Target", 
      title: "Mission-Driven", 
      text: "Preferred strategic partner for consultancy and services",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: "Compass", 
      title: "Clear Vision", 
      text: "Driving innovation and exceptional performance",
      color: "from-orange-500 to-yellow-500"
    }
  ],
  stats: [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ]
};

const features = [
  {
    title: 'Trustworthy',
    description: 'Over 25 years of expertise in delivering innovative and high-quality business solutions',
    icon: "Shield",
    gradient: "from-[#3785CC] to-[#4A9BE4]"
  },
  {
    title: '24/7 Support',
    description: 'Comprehensive round-the-clock technical support and professional assistance for all your business needs',
    icon: "Clock",
    gradient: "from-[#4A9BE4] to-[#5B8AF0]",
  },
  {
    title: 'Expert Team',
    description: 'Dedicated team of professionals with extensive industry knowledge and experience',
    icon: "Users",
    gradient: "from-[#5B8AF0] to-[#8590EA]",
  },
  {
    title: 'Scalable Solutions',
    description: 'Flexible and adaptable solutions designed to grow seamlessly with your business',
    icon: "TrendingUp",
    gradient: "from-[#8590EA] to-[#B5C6F4]",
  }
];

async function main() {
  await prisma.home.create({
    data: {
      aboutUs: aboutUsContent,
      features: features,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });*/

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.home.update({
    where: { id: 1 }, // Update the record with the appropriate `id`
    data: {
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

  console.log("Advantages updated successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

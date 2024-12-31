// prisma/seed.js
import { PrismaClient } from "@prisma/client";
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

async function main() {
  await prisma.home.create({
    data: {
      aboutUs: aboutUsContent
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
  });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Update the `services` field for the existing `Home` record
  await prisma.home.update({
    where: { id: 1 }, // Adjust the `id` to match the record you want to update
    data: {
      services: {
        categories: [
          {
            title: "Business Outsourcing",
            subtitle: "Let us manage the complexity of HR recruitment, contracting and payroll services.",
            gradient: "from-purple-500 via-pink-500 to-rose-500",
            services: [
              {
                title: "Jobs.ici – Recruiting",
                description: "Connect with top industry talents for permanent positions, contract roles, and specialized recruitment solutions.",
                gradient: "from-[#3785CC] to-[#3E9DE5]",
                icon: "UserPlus"
              },
              {
                title: "HR & Recruitment Management",
                description: "Comprehensive HR and recruitment solutions to optimize your hiring process and talent management strategies.",
                gradient: "from-[#3E9DE5] to-[#7B8EEC]",
                icon: "Users"
              },
              {
                title: "HR Payroll & Performance",
                description: "Streamline your payroll processing and performance management systems to enhance compliance and productivity.",
                gradient: "from-[#7B8EEC] to-[#B5C6F4]",
                icon: "ClipboardList"
              }
            ]
          },
          {
            title: "ICT Solutions",
            subtitle: "Our ICT solutions focus on optimizing business operations and driving process efficiency.",
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            services: [
              {
                title: "Data Center Infrastructure",
                description: "Comprehensive data center infrastructure solutions to design, build, and manage your evolving technology requirements.",
                gradient: "from-[#3785CC] to-[#4A9BE4]",
                icon: "Server"
              },
              {
                title: "Solutions Integration",
                description: "Advanced technology integration solutions to optimize business operations, reduce costs, and drive sustainable enterprise growth.",
                gradient: "from-[#4A9BE4] to-[#5B8AF0]",
                icon: "Network"
              },
              {
                title: "Information Security",
                description: "Advanced security solutions and monitoring systems to protect your critical data and infrastructure from sophisticated cyber threats and vulnerabilities.",
                gradient: "from-[#5B8AF0] to-[#8590EA]",
                icon: "Shield"
              },
              {
                title: "Software Development",
                description: "Innovative web and mobile application development solutions designed to accelerate your digital transformation journey and enhance business efficiency.",
                gradient: "from-[#8590EA] to-[#B5C6F4]",
                icon: "Code"
              }
            ]
          }
        ]
      }
    }
  });

  console.log("Services field updated successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

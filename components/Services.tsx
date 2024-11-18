"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Server, 
  Network, 
  Shield, 
  Code,
  Users,
  UserPlus,
  ClipboardList,
  Calculator,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    category: "ICT Solutions",
    description: "Our ICT solutions focus on optimizing business operations, driving process efficiency, and keeping your company competitive in today's technology-driven landscape.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    services: [
      {
        icon: Server,
        title: "Data Center Infrastructure",
        description: "From design and build to ongoing management, our end-to-end data center infrastructure solutions support your growing technology needs.",
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        icon: Network,
        title: "Solutions Integration",
        description: "Our technology solutions are designed to optimize operations, lower cost and fuel long-term growth.",
        gradient: "from-cyan-500 to-teal-500"
      },
      {
        icon: Shield,
        title: "Information Security",
        description: "Comprehensive security solutions to protect sensitive information from evolving cyber threats.",
        gradient: "from-teal-500 to-green-500"
      },
      {
        icon: Code,
        title: "Software Development",
        description: "Custom web and mobile applications tailored to meet business needs and drive digital transformation.",
        gradient: "from-green-500 to-emerald-500"
      }
    ]
  },
  {
    category: "Business Outsourcing",
    description: "Let us manage the complexity of HR recruitment, contracting and payroll services, so you can focus your resources and efforts on your core business.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    services: [
      {
        icon: UserPlus,
        title: "Jobs.ici – Recruiting",
        description: "Connect with top talents across various industries for permanent positions, contract roles, or specialized vacancies.",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        icon: Users,
        title: "HR & Recruitment Management",
        description: "End-to-end HR and recruitment solutions to streamline your hiring strategies.",
        gradient: "from-pink-500 to-rose-500"
      },
      {
        icon: ClipboardList,
        title: "HR Payroll & Performance",
        description: "Simplify payroll and performance tracking to ensure compliance and boost productivity.",
        gradient: "from-rose-500 to-red-500"
      }
    ]
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {services.map((category, idx) => (
          <motion.div
            key={category.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={`mb-20 ${idx !== 0 ? 'mt-32' : ''}`}
          >
            <div className="text-center mb-16">
              <motion.span
                variants={itemVariants} 
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
              >
                Our Services
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className={`text-5xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
              >
                {category.category}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 max-w-3xl mx-auto"
              >
                {category.description}
              </motion.p>
            </div>

            <motion.div 
              variants={containerVariants}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                category.category === "Business Outsourcing" ? "max-w-5xl mx-auto" : "lg:grid-cols-4"
              }`}
            >
              {category.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`group relative ${
                    category.category === "Business Outsourcing" && index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform -rotate-2 scale-[1.02] opacity-50 group-hover:-rotate-1 transition-transform duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-white/60 mb-6">{service.description}</p>
                    <Link
                      href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`}
                      className="inline-flex items-center text-white/80 hover:text-white group/link"
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
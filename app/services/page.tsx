"use client";

import { motion } from 'framer-motion';
import { Server, Network, Shield, Code, Users, UserPlus, ClipboardList, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = {
    ict: {
      title: "ICT Solutions",
      description: "Our ICT solutions focus on optimizing business operations and driving process efficiency.",
      items: [
        {
          icon: Server,
          title: "Data Center Infrastructure",
          description: "End-to-end data center infrastructure solutions for your growing technology needs.",
          gradient: "from-blue-500 to-cyan-500",
          link: "/services/ict-solutions/data-center"
        },
        {
          icon: Network,
          title: "Solutions Integration",
          description: "Technology solutions designed to optimize operations and fuel growth.",
          gradient: "from-purple-500 to-pink-500",
          link: "/services/ict-solutions/solutions-integration"
        },
        {
          icon: Shield,
          title: "Information Security",
          description: "Comprehensive security solutions to protect sensitive information.",
          gradient: "from-orange-500 to-yellow-500",
          link: "/services/ict-solutions/information-security"
        },
        {
          icon: Code,
          title: "Software Development",
          description: "Custom web and mobile applications for digital transformation.",
          gradient: "from-emerald-500 to-green-500",
          link: "/services/ict-solutions/software-development"
        }
      ]
    },
    business: {
      title: "Business Outsourcing",
      description: "Comprehensive HR and recruitment solutions to streamline your operations.",
      items: [
        {
          icon: UserPlus,
          title: "Jobs.ici – Recruiting",
          description: "Connect with top talents across various industries.",
          gradient: "from-indigo-500 to-blue-500",
          link: "/services/business-outsourcing/jobs-ici"
        },
        {
          icon: Users,
          title: "HR & Recruitment",
          description: "End-to-end HR and recruitment solutions.",
          gradient: "from-pink-500 to-rose-500",
          link: "/services/business-outsourcing/hr-recruitment"
        },
        {
          icon: ClipboardList,
          title: "HR Payroll & Performance",
          description: "Streamlined payroll and performance management.",
          gradient: "from-amber-500 to-yellow-500",
          link: "/services/business-outsourcing/hr-payroll"
        }
      ]
    }
  };

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-gradient"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
            >
              Our Services
            </motion.span>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-6">
              Comprehensive Business Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Empowering your business with cutting-edge technology and expert talent management solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {Object.entries(services).map(([key, section]) => (
          <motion.div 
            key={key} 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
              >
                {section.title}
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent"
              >
                {section.title}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 max-w-2xl mx-auto"
              >
                {section.description}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants} 
              className={`grid gap-8 max-w-7xl mx-auto ${
                section.items.length <= 3 
                  ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-3' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {section.items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${item.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-14 h-14 flex items-center justify-center`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white/60 mb-6 text-sm">{item.description}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-white/80 hover:text-white group/link text-sm"
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
    </div>
  );
}
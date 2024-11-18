"use client";

import { motion } from 'framer-motion';
import { Server, Network, Shield, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';

export default function ICTSolutionsPage() {
  const services = [
    {
      icon: Server,
      title: "Data Center Infrastructure",
      description: "From design and build to ongoing management, our end-to-end data center infrastructure solutions support your business's growing technology needs.",
      link: "/services/ict-solutions/data-center",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Solutions Integration",
      description: "Our technology solutions are designed to optimize operations, lower cost and fuel long-term growth.",
      link: "/services/ict-solutions/solutions-integration",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Information Security",
      description: "Safeguarding data with comprehensive security solutions to protect sensitive information from evolving cyber threats.",
      link: "/services/ict-solutions/information-security",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications tailored to meet business needs and drive digital transformation.",
      link: "/services/ict-solutions/software-development",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

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
      <ServiceHero 
        title="ICT Solutions"
        description="IC&I brings over 20 years of experience in ICT consultation, installation, and commissioning services, delivering reliable solutions tailored to meet diverse business needs."
      />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
          >
            Overview
          </motion.span>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-8">
            Technology Solutions for Growth
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed">
            Our comprehensive ICT solutions are designed to help businesses optimize their operations, 
            enhance security, and stay competitive in today's technology-driven landscape. With over two 
            decades of experience, we provide expert consultation, installation, and commissioning services 
            tailored to meet your specific business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center mb-16">
            <motion.span
              variants={itemVariants}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
            >
              Our Solutions
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent"
            >
              Comprehensive ICT Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Explore our range of specialized ICT solutions designed to transform your business operations 
              and drive sustainable growth.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  <Link
                    href={service.link}
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
      </div>
    </div>
  );
}
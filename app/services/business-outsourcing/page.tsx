"use client";

import { motion } from 'framer-motion';
import { Users, UserPlus, ClipboardList, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';

export default function BusinessOutsourcingPage() {
  const services = [
    {
      icon: UserPlus,
      title: "Jobs.ici – Recruiting",
      description: "Empowering professionals in Syria to discover their ideal career opportunities. Explore a broad selection of job listings, upload your resume, and receive tailored job alerts.",
      link: "/services/business-outsourcing/jobs-ici",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "HR & Recruitment Management",
      description: "Focusing on talent acquisition, ensuring that the right candidates are sourced, assessed, and placed in positions that align with business goals.",
      link: "/services/business-outsourcing/hr-recruitment",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: ClipboardList,
      title: "HR Payroll & Performance Management",
      description: "Overseeing the payroll system for all personnel, ensuring thorough review of supporting documents and accurate calculations.",
      link: "/services/business-outsourcing/hr-payroll",
      gradient: "from-orange-500 to-yellow-500"
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
        title="Business Outsourcing"
        description="IC&I HR outsourcing services is one of our core strengths. Our scalable services are
        crafted to deliver optimal efficiency and support your business's evolving needs."
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
            Market Leading HR Solutions
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed">
            We are the Syrian market leader with the largest market share in providing full
            recruitment services in UN agencies, NPO's and NGO's. Our comprehensive HR outsourcing 
            solutions are designed to streamline your operations and drive organizational success 
            through effective talent management.
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
              Our Services
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent"
            >
              Business Outsourcing Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Explore our range of specialized HR and recruitment solutions designed to optimize 
              your workforce management and drive business growth.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
"use client";

import { motion } from 'framer-motion';
import { Server, Network, Shield, Code } from 'lucide-react';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCard from '@/components/services/ServiceCard';

export default function ICTSolutionsPage() {
  const services = [
    {
      icon: Server,
      title: "Data Center Infrastructure",
      description: "From design and build to ongoing management, our end-to-end data center infrastructure solutions support your business's growing technology needs.",
      link: "/services/ict-solutions/data-center"
    },
    {
      icon: Network,
      title: "Solutions Integration",
      description: "Our technology solutions are designed to optimize operations, lower cost and fuel long-term growth.",
      link: "/services/ict-solutions/solutions-integration"
    },
    {
      icon: Shield,
      title: "Information Security",
      description: "Safeguarding data with comprehensive security solutions to protect sensitive information from evolving cyber threats.",
      link: "/services/ict-solutions/information-security"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications tailored to meet business needs and drive digital transformation.",
      link: "/services/ict-solutions/software-development"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="ICT Solutions"
        description="IC&I brings over 20 years of experience in ICT consultation, installation, and commissioning services, delivering reliable solutions tailored to meet diverse business needs."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              service={service}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Transforming Technology for Business Growth</h2>
          <p className="text-gray-600">
            Our comprehensive ICT solutions are designed to help businesses optimize their operations, 
            enhance security, and stay competitive in today's technology-driven landscape.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import { motion } from 'framer-motion';
import { Users, UserPlus, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceCard from '@/components/services/ServiceCard';

export default function BusinessOutsourcingPage() {
  const services = [
    {
      icon: UserPlus,
      title: "Jobs.ici – Recruiting",
      description: "Empowering professionals in Syria to discover their ideal career opportunities. Explore a broad selection of job listings, upload your resume, and receive tailored job alerts.",
      link: "/services/business-outsourcing/jobs-ici"
    },
    {
      icon: Users,
      title: "HR & Recruitment Management",
      description: "Focusing on talent acquisition, ensuring that the right candidates are sourced, assessed, and placed in positions that align with business goals.",
      link: "/services/business-outsourcing/hr-recruitment"
    },
    {
      icon: ClipboardList,
      title: "HR Payroll & Performance Management",
      description: "Overseeing the payroll system for all personnel, ensuring thorough review of supporting documents and accurate calculations.",
      link: "/services/business-outsourcing/hr-payroll"
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
        title="Business Outsourcing"
        description="IC&I HR outsourcing services is one of our core strengths. Our scalable services are
        crafted to deliver optimal efficiency and support your business's evolving needs."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          <h2 className="text-2xl font-bold mb-4">Market Leadership</h2>
          <p className="text-gray-600">
            We are the Syrian market leader with the largest market share in providing full
            recruitment services in UN agencies, NPO's and NGO's.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
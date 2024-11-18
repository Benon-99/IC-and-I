"use client";

import { motion } from 'framer-motion';
import { Network, CreditCard, Users, Settings, Tool } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function SolutionsIntegrationPage() {
  const services = [
    {
      icon: Network,
      title: "BSCS System Expertise",
      description: "Implementation and management of Business Support and Control Systems (BSCS) for utility companies."
    },
    {
      icon: CreditCard,
      title: "E-Payment Integration",
      description: "First e-payment system connecting Syrian Telecom Company (STC) with Syrian Electronic Payment (SEP) platform."
    },
    {
      icon: Users,
      title: "Customer Care & Billing Systems",
      description: "Operating and developing CCBS for Syrian Telecom Company since 2013."
    },
    {
      icon: Settings,
      title: "System Integration Services",
      description: "End-to-end integration ensuring seamless operation of all technology components."
    },
    {
      icon: Tool,
      title: "Ongoing Support",
      description: "Continuous support and maintenance to ensure optimal system performance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Solutions Integration"
        description="Delivering Tailored Technology Solutions for Complex Business Challenges."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p>
            IC&I brings a wealth of experience to the integration of complex technology solutions, 
            particularly in the utility and telecommunications sectors. Our approach is rooted in a 
            deep understanding of industry-specific challenges and a commitment to delivering solutions 
            that enhance operational efficiency and drive tangible results.
          </p>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Solutions Integration Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our solutions integration services are customized to meet the unique needs of each client, 
            ensuring that technology not only supports but enhances your business operations.
          </p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-2"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
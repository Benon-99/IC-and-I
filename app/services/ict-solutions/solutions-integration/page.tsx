"use client";

import { motion } from 'framer-motion';
import { Network, CreditCard, Users, Settings, Hammer } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function SolutionsIntegrationPage() {
  const services = [
    {
      icon: Network,
      title: "BSCS System Expertise",
      description: "Comprehensive implementation and optimization of Business Support and Control Systems (BSCS) to enhance utility operations and customer service.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "E-Payment Integration",
      description: "Pioneering electronic payment solutions connecting Syrian Telecom Company with SEP platform, enabling secure and streamlined digital transactions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Customer Care & Billing Systems",
      description: "Expert development and management of CCBS for Syrian Telecom Company, ensuring efficient customer service and billing operations since 2013.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Settings,
      title: "System Integration Services",
      description: "Seamless integration of complex technology components, ensuring optimal performance and communication between diverse systems.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Hammer,
      title: "Ongoing Support",
      description: "Dedicated maintenance and support services ensuring continuous system optimization, performance monitoring, and swift resolution of challenges to maximize operational efficiency.",
      gradient: "from-pink-500 to-rose-500"
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
        title="Solutions Integration"
        description="Delivering Tailored Technology Solutions for Complex Business Challenges."
      />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24 flex flex-col items-center text-justify"
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
            Enterprise Solutions Integration
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed text-justify">
            IC&I brings a wealth of experience to the integration of complex technology solutions, 
            particularly in the utility and telecommunications sectors. Our approach is rooted in a 
            deep understanding of industry-specific challenges and a commitment to delivering solutions 
            that enhance operational efficiency and drive tangible results.
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
              Integration Solutions & Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Our solutions integration services are customized to meet the unique needs of each client, 
              ensuring that technology not only supports but enhances your business operations.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
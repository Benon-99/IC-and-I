"use client";

import { motion } from 'framer-motion';
import { Shield, Search, Laptop, Server, FileCheck, Zap, ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function InformationSecurityPage() {
  const services = [
    {
      icon: Shield,
      title: "Traffic Management Solutions",
      description: "Advanced network monitoring tools including DPI, DLP, and IDS for comprehensive security control.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Security Consultations",
      description: "Professional security assessments and strategic planning to enhance your organization's defenses.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Laptop,
      title: "Endpoint Security Solutions",
      description: "Comprehensive protection systems for all devices against modern cybersecurity threats.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Server,
      title: "IT Security Infrastructure",
      description: "Robust security architecture implementing advanced firewalls and encryption systems designed to protect critical assets and ensure data integrity.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: FileCheck,
      title: "Compliance and Risk Management",
      description: "Strategic guidance to ensure compliance with industry standards and regulations while optimizing operational efficiency.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid security incident management with thorough analysis and preventive measures to minimize impact, ensure business continuity, and prevent future occurrences.",
      gradient: "from-blue-500 to-indigo-500"
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
        title="Information Security"
        description="Protecting Your Digital Assets in an Evolving Threat Landscape."
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
            Advanced Security Solutions
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed">
            In an era where cyber threats are increasingly sophisticated, IC&I is dedicated to 
            providing comprehensive information security services that protect your organization's 
            digital assets. We offer a wide range of security solutions designed to safeguard your 
            data, ensure compliance, and provide peace of mind.
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
              Security Solutions & Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              At IC&I, we are committed to staying ahead of emerging threats and providing our clients 
              with the most effective security solutions.
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
                  <p className="text-white/60 text-justify">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
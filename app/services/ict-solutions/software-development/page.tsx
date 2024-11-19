"use client";

import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Database, Link2, Layout, ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';
import Link from 'next/link';

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Tailored web applications that streamline business processes and enhance user experience.",
      gradient: "from-[#00B4D8] to-[#4A9BE4]"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Engaging mobile applications for seamless customer and employee interaction.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    },
    {
      icon: Code,
      title: "High-Level Programming",
      description: "Expertise in .NET and Java for building robust, scalable applications.",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
    },
    {
      icon: Database,
      title: "Large-Scale Applications",
      description: "Advanced architecture for high-volume data and transaction handling.",
      gradient: "from-[#00B4D8] to-[#4A9BE4]"
    },
    {
      icon: Link2,
      title: "Integration Services",
      description: "Seamless integration with existing systems through APIs and custom connectors.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    },
    {
      icon: Layout,
      title: "User-Centric Design",
      description: "Intuitive interfaces created through user testing and continuous feedback.",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
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
    <div className="min-h-screen bg-white">
      <ServiceHero 
        title="Software Development"
        description="Creating Innovative Software Solutions for Business Success."
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
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-6 inline-block"
          >
            Overview
          </motion.span>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
            Enterprise Software Solutions
          </h2>
          
          <p className="text-lg text-[#111240]/70 leading-relaxed">
            IC&I, in collaboration with our sister company Intelligent Data System (IDS), offers 
            comprehensive software development services that are designed to meet the unique needs 
            of businesses in Syria and the UAE (Dubai). Our team of experienced developers specializes 
            in creating large-scale, high-performance applications that drive efficiency and innovation.
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
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              Development Solutions & Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              Our software development services are focused on delivering innovative, reliable, and 
              scalable solutions that help you stay ahead in a competitive market.
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
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative p-8 rounded-2xl bg-white backdrop-blur-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111240] mb-4">{service.title}</h3>
                  <p className="text-[#111240]/60">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
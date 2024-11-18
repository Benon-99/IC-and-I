"use client";

import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Database, Link, Layout } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Tailored web applications that streamline business processes and enhance user experience."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Engaging mobile applications for seamless customer and employee interaction."
    },
    {
      icon: Code,
      title: "High-Level Programming",
      description: "Expertise in .NET and Java for building robust, scalable applications."
    },
    {
      icon: Database,
      title: "Large-Scale Applications",
      description: "Advanced architecture for high-volume data and transaction handling."
    },
    {
      icon: Link,
      title: "Integration Services",
      description: "Seamless integration with existing systems through APIs and custom connectors."
    },
    {
      icon: Layout,
      title: "User-Centric Design",
      description: "Intuitive interfaces created through user testing and continuous feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Software Development"
        description="Creating Innovative Software Solutions for Business Success."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p>
            IC&I, in collaboration with our sister company Intelligent Data System (IDS), offers 
            comprehensive software development services that are designed to meet the unique needs 
            of businesses in Syria and the UAE (Dubai). Our team of experienced developers specializes 
            in creating large-scale, high-performance applications that drive efficiency and innovation.
          </p>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Software Development Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our software development services are focused on delivering innovative, reliable, and 
            scalable solutions that help you stay ahead in a competitive market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-2"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
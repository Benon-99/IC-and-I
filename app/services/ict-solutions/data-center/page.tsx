"use client";

import { motion } from 'framer-motion';
import { Server, Network, Shield, Zap, Tool } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function DataCenterPage() {
  const services = [
    {
      icon: Server,
      title: "Design and Implementation",
      description: "Holistic approach to data center design, considering scalability, energy efficiency, and security."
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Complete network solutions including fiber and copper cabling, patching, racks, and accessories."
    },
    {
      icon: Shield,
      title: "Security and Compliance",
      description: "Advanced security measures including physical security, access control, and data encryption."
    },
    {
      icon: Zap,
      title: "Cooling and Power Solutions",
      description: "Efficient cooling and power systems that ensure optimal temperatures and reliable power supply."
    },
    {
      icon: Tool,
      title: "Ongoing Support",
      description: "Dedicated support team providing ongoing maintenance and troubleshooting services."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Data Center Infrastructure"
        description="Building and Supporting World-Class Data Centers."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p>
            In today's digital world, a robust and reliable data center infrastructure is critical 
            to the success of any organization. IC&I specializes in the design, implementation, 
            and support of data centers that meet the highest standards of performance and security.
          </p>
          <p>
            Our comprehensive services cover every aspect of data center creation, ensuring that 
            your infrastructure is equipped to handle your business's current and future needs.
          </p>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Data Center Infrastructure Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            IC&I's data center infrastructure services are designed to provide a solid foundation 
            for your digital operations, helping you to achieve your business objectives with confidence.
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
"use client";

import { motion } from 'framer-motion';
import { Shield, Search, Laptop, Server, FileCheck, Zap } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function InformationSecurityPage() {
  const services = [
    {
      icon: Shield,
      title: "Traffic Management Solutions",
      description: "DPI, DLP, and IDS tools to monitor and control network traffic for protection and efficiency."
    },
    {
      icon: Search,
      title: "Security Consultations",
      description: "Expert consultations to assess security posture and develop defense strategies."
    },
    {
      icon: Laptop,
      title: "Endpoint Security Solutions",
      description: "Protection for all devices against malware, ransomware, and various threats."
    },
    {
      icon: Server,
      title: "IT Security Infrastructure",
      description: "Secure infrastructure design with firewalls, encryption, and access control systems."
    },
    {
      icon: FileCheck,
      title: "Compliance and Risk Management",
      description: "Navigate compliance requirements and manage risks to meet industry standards."
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Quick response to security breaches with post-incident analysis and prevention."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Information Security"
        description="Protecting Your Digital Assets in an Evolving Threat Landscape."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p>
            In an era where cyber threats are increasingly sophisticated, IC&I is dedicated to 
            providing comprehensive information security services that protect your organization's 
            digital assets. We offer a wide range of security solutions designed to safeguard your 
            data, ensure compliance, and provide peace of mind.
          </p>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Information Security Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            At IC&I, we are committed to staying ahead of emerging threats and providing our clients 
            with the most effective security solutions.
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
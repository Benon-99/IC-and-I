"use client";

import { motion } from 'framer-motion';
import { Users, Search, FileCheck, ClipboardList, Briefcase } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function HRRecruitmentPage() {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Expert recruitment services for identifying and attracting top-tier professionals across industries.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Candidate Assessment",
      description: "Comprehensive evaluation of skills, experience, and cultural fit for optimal placement.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileCheck,
      title: "Contracting & Deployment",
      description: "Streamlined management of contract negotiations and seamless deployment processes.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: ClipboardList,
      title: "HR Strategy Consulting",
      description: "Strategic guidance on workforce planning and talent development initiatives.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Briefcase,
      title: "Benefits Administration",
      description: "Professional management of employee contracts and comprehensive benefits packages.",
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
        title="HR & Recruitment Management"
        description="Tailored HR Solutions to Attract, Develop, and Retain Top Talent."
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
            Empowering Your Workforce
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed text-justify">
            At IC&I, we understand that the success of your organization hinges on the quality 
            of your workforce. That's why we offer comprehensive HR and recruitment management 
            services that go beyond simply filling positions. Our services are designed to attract, 
            assess, and deploy the right talent, ensuring your organization is equipped with the 
            expertise it needs to thrive.
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
              HR & Recruitment Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 max-w-2xl mx-auto text-justify"
            >
              Our HR management services are designed to provide your organization with the support 
              it needs to build and maintain a high-performing workforce.
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
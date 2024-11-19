"use client";

import { motion } from 'framer-motion';
import { Users, Search, FileCheck, ClipboardList, Briefcase } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function HRRecruitmentPage() {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
<<<<<<< HEAD
      description: "We specialize in identifying and recruiting top-tier experts and support personnel across various industries.",
      gradient: "from-[#00B4D8] to-[#4A9BE4]"
=======
      description: "Expert recruitment services for identifying and attracting top-tier professionals across industries.",
      gradient: "from-blue-500 to-cyan-500"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
    },
    {
      icon: Search,
      title: "Candidate Assessment",
<<<<<<< HEAD
      description: "Our thorough assessment procedures evaluate candidates on multiple levels, including skills, experience, and cultural fit.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
=======
      description: "Comprehensive evaluation of skills, experience, and cultural fit for optimal placement.",
      gradient: "from-purple-500 to-pink-500"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
    },
    {
      icon: FileCheck,
      title: "Contracting & Deployment",
<<<<<<< HEAD
      description: "We manage the entire contracting process, including negotiations and deployment logistics.",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
=======
      description: "Streamlined management of contract negotiations and seamless deployment processes.",
      gradient: "from-orange-500 to-yellow-500"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
    },
    {
      icon: ClipboardList,
      title: "HR Strategy Consulting",
<<<<<<< HEAD
      description: "Strategic advice on HR practices, including workforce planning, succession planning, and talent development.",
      gradient: "from-[#00B4D8] to-[#4A9BE4]"
    },
    {
      icon: Building2,
      title: "Contract & Benefits Administration",
      description: "Ongoing support in managing employee contracts and benefits administration.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
=======
      description: "Strategic guidance on workforce planning and talent development initiatives.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Briefcase,
      title: "Benefits Administration",
      description: "Professional management of employee contracts and comprehensive benefits packages.",
      gradient: "from-pink-500 to-rose-500"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
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
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-6 inline-block"
          >
            Overview
          </motion.span>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
            Empowering Your Workforce
          </h2>
          
<<<<<<< HEAD
          <p className="text-lg text-[#111240]/70 leading-relaxed">
=======
          <p className="text-lg text-white/70 leading-relaxed text-justify">
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
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
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              HR & Recruitment Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
<<<<<<< HEAD
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
=======
              className="text-xl text-white/80 max-w-2xl mx-auto text-justify"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
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
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative p-8 rounded-2xl bg-white backdrop-blur-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold text-[#111240] mb-4">{service.title}</h3>
                  <p className="text-[#111240]/60">{service.description}</p>
=======
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 text-justify">{service.description}</p>
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
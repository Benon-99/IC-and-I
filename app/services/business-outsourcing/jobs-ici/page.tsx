"use client";

import { motion } from 'framer-motion';
import { Search, Upload, Bell, Activity, BookOpen, ArrowRight } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function JobsIciPage() {
  const services = [
    {
<<<<<<< HEAD
      icon: Search,
      title: "Extensive Job Listings",
      description: "Explore a broad range of job opportunities across various sectors, tailored to different levels of experience.",
      gradient: "from-[#00B4D8] to-[#4A9BE4]"
    },
    {
      icon: Upload,
      title: "Resume Submission",
      description: "Securely upload your resume to stay on the radar for upcoming job openings and career advancements.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    },
    {
      icon: Bell,
      title: "Personalized Job Alerts",
      description: "Receive custom notifications about new job postings that match your unique profile and preferences.",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
    },
    {
      icon: Activity,
      title: "Application Tracking",
      description: "Easily monitor the progress of your job applications, keeping you informed every step of the way.",
      gradient: "from-[#00B4D8] to-[#4A9BE4]"
=======
      icon: Activity,
      title: "Application Tracking",
      description: "Monitor your job application progress with real-time updates and status tracking.",
      gradient: "from-emerald-500 to-green-500"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
    },
    {
      icon: BookOpen,
      title: "Career Resources",
<<<<<<< HEAD
      description: "Access tools and resources to improve your job search, including resume tips, interview preparation, and career advice.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
=======
      description: "Access comprehensive tools and resources to enhance your job search and career development.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Search,
      title: "Extensive Job Listings",
      description: "Browse through curated job opportunities matched to your experience level and preferences.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Upload,
      title: "Resume Submission",
      description: "Upload your resume securely to connect with potential employers and opportunities.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Bell,
      title: "Personalized Job Alerts",
      description: "Get notified about relevant job openings that match your career interests and skills.",
      gradient: "from-orange-500 to-yellow-500"
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
        title="Jobs.ici – Recruiting"
        description="Empowering Ambitious Professionals to Find Their Perfect Job."
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
<<<<<<< HEAD
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-6 inline-block"
=======
            className="px-4 py-1.5 rounded-full  text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
          >
            Overview
          </motion.span>
          
<<<<<<< HEAD
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
=======
          <h2 className="text-4xl font-bold bg-gradient-to-r text-center from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-8">
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
            Building Careers in Syria
          </h2>
          
          <p className="text-lg text-[#111240]/70 leading-relaxed">
            IC&I is dedicated to fostering a thriving job market in Syria through our specialized platform, 
            Jobs.ici. This initiative is designed to connect ambitious and competent professionals with the 
            right job opportunities, helping to build careers and drive economic growth. Our platform's 
            intelligent matching algorithms actively work to pair job seekers with opportunities that align 
            with their qualifications and career goals.
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
              Platform Features
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              Comprehensive Career Tools
            </motion.h2>
            <motion.p
              variants={itemVariants}
<<<<<<< HEAD
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
=======
              className="text-xl text-white/80 max-w-2xl mx-auto text-justify"
>>>>>>> b64cd30164817ae20b23a60d52a11fb6da205c2b
            >
              Jobs.ici is more than just a job board—it's a comprehensive career-building tool designed 
              to empower Syrian professionals to achieve their career aspirations.
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
                  <p className="text-[#111240]/60 mb-6">{service.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#111240]/80 hover:text-[#111240] group/link"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
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
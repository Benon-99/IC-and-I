"use client";

import { motion } from 'framer-motion';
import { Search, Upload, Bell, Activity, BookOpen } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function JobsIciPage() {
  const features = [
    {
      icon: Search,
      title: "Extensive Job Listings",
      description: "Explore a broad range of job opportunities across various sectors, tailored to different levels of experience."
    },
    {
      icon: Upload,
      title: "Resume Submission",
      description: "Securely upload your resume to stay on the radar for upcoming job openings and career advancements."
    },
    {
      icon: Bell,
      title: "Personalized Job Alerts",
      description: "Receive custom notifications about new job postings that match your unique profile and preferences."
    },
    {
      icon: Activity,
      title: "Application Tracking",
      description: "Easily monitor the progress of your job applications, keeping you informed every step of the way."
    },
    {
      icon: BookOpen,
      title: "Career Resources",
      description: "Access tools and resources to improve your job search, including resume tips, interview preparation, and career advice."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="Jobs.ici – Recruiting"
        description="Empowering Ambitious Professionals to Find Their Perfect Job."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p>
            IC&I is dedicated to fostering a thriving job market in Syria through our specialized platform, 
            Jobs.ici. This initiative is designed to connect ambitious and competent professionals with the 
            right job opportunities, helping to build careers and drive economic growth.
          </p>
          <p>
            Once users register on Jobs.ici, they gain access to a comprehensive database of job postings, 
            meticulously curated to match various skill sets and industries. Each job listing provides 
            detailed requirements, ensuring that candidates can align their applications with positions 
            that suit their expertise.
          </p>
          <p>
            For those who may not immediately find their desired role, Jobs.ici offers the option to 
            upload resumes, enabling job seekers to be considered for future openings as they arise. 
            Our platform's intelligent matching algorithms actively work to pair job seekers with 
            opportunities that align with their qualifications and career goals.
          </p>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Jobs.ici is more than just a job board—it's a comprehensive career-building tool designed 
            to empower Syrian professionals to achieve their career aspirations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
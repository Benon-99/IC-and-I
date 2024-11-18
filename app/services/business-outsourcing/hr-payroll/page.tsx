"use client";

import { motion } from 'framer-motion';
import { Calculator, ChartBar, MessageSquare, Heart, ArrowsUpDown } from 'lucide-react';
import ServiceHero from '@/components/services/ServiceHero';

export default function HRPayrollPage() {
  const services = [
    {
      icon: Calculator,
      title: "Payroll Processing",
      description: "Comprehensive payroll processing, from salary calculations to tax deductions, ensuring accurate and timely payments."
    },
    {
      icon: ChartBar,
      title: "Performance Monitoring",
      description: "Development and implementation of performance metrics aligned with your business goals."
    },
    {
      icon: MessageSquare,
      title: "Feedback and Coaching",
      description: "Regular feedback sessions and coaching to help employees improve performance and achieve goals."
    },
    {
      icon: Heart,
      title: "Employee Engagement Strategies",
      description: "Development of strategies to increase employee engagement and satisfaction."
    },
    {
      icon: ArrowsUpDown,
      title: "Two-Way Communication",
      description: "Systems designed to encourage open communication between employees and managers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHero 
        title="HR Payroll & Performance Management"
        description="Optimizing Payroll and Driving Employee Performance."
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p>
            Managing payroll and employee performance is a critical aspect of running a successful 
            business, and IC&I is here to simplify the process. We currently manage payroll for 
            over 700 personnel, ensuring timely and accurate payments, while also providing 
            comprehensive performance management services that help our clients maximize the 
            potential of their workforce.
          </p>
        </motion.div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Payroll and Performance Management Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            By outsourcing your payroll & performance management to us, you can focus on strategic 
            business initiatives, knowing that your HR functions are in expert hands.
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
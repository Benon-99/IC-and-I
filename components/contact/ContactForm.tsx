"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const inputClasses = "w-full bg-[#111240]/5 border border-[#111240]/10 rounded-lg px-4 py-3 text-[#111240] placeholder:text-[#111240]/50 focus:outline-none focus:ring-2 focus:ring-[#3785CC]/50 focus:border-transparent backdrop-blur-sm transition-all duration-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC]/5 to-[#5B8AF0]/5 rounded-2xl blur-2xl"></div>
      <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-[#111240]/10">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#111240] via-[#111240]/90 to-[#111240]/80 bg-clip-text text-transparent">
          Send Message
        </h2>
        <p className="text-[#111240]/70 mb-8">
          Fill out the form below and we'll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className={inputClasses}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                className={inputClasses}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className={inputClasses}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Your message"
              rows={6}
              className={`${inputClasses} resize-none`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#3785CC] to-[#5B8AF0] text-white rounded-lg px-8 py-4 
              font-medium inline-flex items-center justify-center space-x-2 hover:shadow-lg 
              hover:shadow-[#3785CC]/20 transition-all duration-300"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
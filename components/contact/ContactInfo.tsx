"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Office Locations",
      details: [
        "90/3 Adawi Enshaat, Damascus, Syria",
        "21/2051 Baladieh, Jaramana, Syria"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+963 44 20 567", "+963 44 30 567"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["gd@ici-sy.com"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm inline-block">
          Contact Information
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent">
          Let's Make It Happen
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-lg">
          Have a question or want to work together? We'd love to hear from you. 
          Get in touch with us using any of the following methods.
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="space-y-8">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-white/70">{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 
                transition-colors duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
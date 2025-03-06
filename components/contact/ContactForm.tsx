"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, AlertCircle, CheckCircle, Loader } from "lucide-react";

// Define form data type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // State to store the API base URL
  const [apiBaseUrl, setApiBaseUrl] = useState('');

  // Detect the current environment when the component mounts
  useEffect(() => {
    const isLocalhost = 
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1';
    
    // Try different server ports in order - the first one that responds will be used
    const tryServerPorts = async () => {
      // Default port configurations to try
      const serverPorts = ['3002', '3001', '3000'];
      
      if (!isLocalhost) {
        // In production, use relative URL
        setApiBaseUrl('');
        console.log('API Base URL set to: (relative URL for production)');
        return;
      }
      
      // In local development, try each port
      for (const port of serverPorts) {
        try {
          const testUrl = `http://localhost:${port}/api/health`;
          console.log(`Testing server connection at: ${testUrl}`);
          
          // Try to connect with a short timeout
          const response = await fetch(testUrl, { 
            method: 'GET',
            mode: 'cors',
            signal: AbortSignal.timeout(2000) // 2 second timeout
          });
          
          if (response.ok) {
            const baseUrl = `http://localhost:${port}`;
            setApiBaseUrl(baseUrl);
            console.log(`Server found! API Base URL set to: ${baseUrl}`);
            return;
          }
        } catch (error) {
          console.log(`Server not available at port ${port}`);
        }
      }
      
      // If no server responds, use the default
      const defaultPort = '3002';
      const fallbackUrl = `http://localhost:${defaultPort}`;
      setApiBaseUrl(fallbackUrl);
      console.log(`No servers responded. Using default: ${fallbackUrl}`);
    };
    
    tryServerPorts();
  }, []);

  const [notification, setNotification] = useState<{
    visible: boolean;
    type: "success" | "error" | "loading";
    message: string;
  }>({
    visible: false,
    type: "success",
    message: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string()
      .min(5, "Subject must be at least 5 characters")
      .required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    try {
      // Show loading state
      setNotification({
        visible: true,
        type: "loading",
        message: "Sending your message, please wait...",
      });
      
      // Log submission attempt
      console.log(`Submitting form to: ${apiBaseUrl}/api/contact`);
      
      // Send request with a longer timeout for email processing
      const response = await axios({
        method: 'post',
        url: `${apiBaseUrl}/api/contact`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 60000 // Increase timeout to 60 seconds for email processing
      });
      
      console.log('Form submission response:', response.data);
      
      // Show success notification
      setNotification({
        visible: true,
        type: "success",
        message: response.data.message || "Message sent successfully!",
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 5000);
      
      // Reset form
      reset();
      
    } catch (error: any) {
      console.error("Form submission error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
      
      // Show error notification
      setNotification({
        visible: true,
        type: "error",
        message: error.response?.data?.message || "Failed to send message. Please try again.",
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  // Animation variants
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
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm inline-block">
          Send us a message
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#111240] via-[#111240]/90 to-[#111240]/80 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-[#111240]/70 text-lg leading-relaxed max-w-lg">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      {notification.visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`p-4 rounded-lg flex items-center space-x-3 ${
            notification.type === "success"
              ? "bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-600 border border-green-500/20"
              : notification.type === "error"
              ? "bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-600 border border-red-500/20"
              : "bg-gradient-to-r from-[#3785CC]/10 to-[#5B8AF0]/10 text-[#111240] border border-[#3785CC]/20"
          }`}
        >
          {notification.type === "loading" && (
            <Loader className="w-5 h-5 animate-spin" />
          )}
          {notification.type === "success" && (
            <CheckCircle className="w-5 h-5" />
          )}
          {notification.type === "error" && (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{notification.message}</span>
        </motion.div>
      )}

      <motion.form 
        variants={containerVariants}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="name" className="text-[#111240]/90 font-medium block">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111240]/40">
                <User className="w-5 h-5" />
              </div>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="John Doe"
                className={`w-full py-3 pl-10 pr-4 rounded-lg bg-white border ${
                  errors.name
                    ? "border-red-300 focus:border-red-500 focus:ring focus:ring-red-200"
                    : "border-[#111240]/10 focus:border-[#3785CC] focus:ring focus:ring-[#3785CC]/20"
                } outline-none transition-all duration-200`}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="email" className="text-[#111240]/90 font-medium block">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111240]/40">
                <Mail className="w-5 h-5" />
              </div>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="your.email@example.com"
                className={`w-full py-3 pl-10 pr-4 rounded-lg bg-white border ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring focus:ring-red-200"
                    : "border-[#111240]/10 focus:border-[#3785CC] focus:ring focus:ring-[#3785CC]/20"
                } outline-none transition-all duration-200`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="subject" className="text-[#111240]/90 font-medium block">
            Subject
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#111240]/40">
              <MessageSquare className="w-5 h-5" />
            </div>
            <input
              id="subject"
              type="text"
              {...register("subject")}
              placeholder="How can we help you?"
              className={`w-full py-3 pl-10 pr-4 rounded-lg bg-white border ${
                errors.subject
                  ? "border-red-300 focus:border-red-500 focus:ring focus:ring-red-200"
                  : "border-[#111240]/10 focus:border-[#3785CC] focus:ring focus:ring-[#3785CC]/20"
              } outline-none transition-all duration-200`}
            />
          </div>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.subject.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="message" className="text-[#111240]/90 font-medium block">
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={6}
            placeholder="Tell us more about your inquiry..."
            className={`w-full py-3 px-4 rounded-lg bg-white border ${
              errors.message
                ? "border-red-300 focus:border-red-500 focus:ring focus:ring-red-200"
                : "border-[#111240]/10 focus:border-[#3785CC] focus:ring focus:ring-[#3785CC]/20"
            } outline-none transition-all duration-200`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3.5 px-6 rounded-lg font-medium text-white flex items-center justify-center space-x-2 transition-all duration-300 ${
              isSubmitting 
                ? "bg-[#111240]/70 cursor-not-allowed" 
                : "bg-gradient-to-r from-[#3785CC] to-[#5B8AF0] hover:shadow-lg hover:shadow-[#3785CC]/20"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
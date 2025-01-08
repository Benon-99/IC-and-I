"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  Server,
  Network,
  Shield,
  Code,
  Users,
  UserPlus,
  ClipboardList,
  Calculator,
  ArrowRight,
  Loader2,
} from "lucide-react";

// Define available icons
const ICONS: Record<string, any> = {
  Server,
  Network,
  Shield,
  Code,
  Users,
  UserPlus,
  ClipboardList,
  Calculator,
};

export default function Services() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/home");
      const json = await response.json();
      return json.about[0]?.services || {};
    },
  });

  // Framer motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Handle loading or error states
  if (isLoading) {
    return (
      <div className="min-h-[600px] bg-[#111240] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          <p className="text-white/80">Loading services...</p>
        </div>
      </div>
    );
  }

  if (isError || !data?.categories?.length) {
    return (
      <div className="min-h-[600px] bg-[#111240] flex items-center justify-center">
        <p className="text-white/80">No Services Available</p>
      </div>
    );
  }

  // Render the services dynamically
  return (
    <section className="py-24 bg-[#111240] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
      </div>

      <div className="w-full lg:w-[1280px] mx-auto px-4 relative">
        {data.categories.map((category: any, idx: number) => (
          <motion.div
            key={category.category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={`mb-20 ${idx !== 0 ? "mt-32" : ""}`}
          >
            <div className="text-center mb-16">
              {idx === 0 && (
                <motion.span
                  variants={itemVariants}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
                >
                  What We Offer
                </motion.span>
              )}
              <motion.h2
                variants={itemVariants}
                className={`text-5xl font-bold mb-6 bg-gradient-to-r ${
                  category.gradient || "from-blue-500 to-teal-500"
                } bg-clip-text text-transparent`}
              >
                {category.category}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 max-w-3xl mx-auto"
              >
                {category.description}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                category.category === "Business Outsourcing"
                  ? "w-[1280]! mx-auto justify-between"
                  : "lg:grid-cols-4"
              }`}
            >
              {category.services.map((service: any, index: number) => {
                const IconComponent = ICONS[service.icon] || Server;
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    className={`group relative ${
                      category.category === "Business Outsourcing" && index === 0
                        ? "md:col-span-2 lg:col-span-1"
                        : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC]/5 to-[#5B8AF0]/5 rounded-2xl transform -rotate-2 scale-[1.02] opacity-50 group-hover:-rotate-1 transition-transform duration-300"></div>
                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${
                          service.gradient || "from-blue-500 to-teal-500"
                        } transform group-hover:scale-110 transition-transform duration-300 mb-6`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/60 mb-6">{service.description}</p>
                      <Link
                        href={`/services#${service.title
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="inline-flex items-center text-white/80 hover:text-white group/link"
                      >
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AboutContent {
  title: string;
  subtitle: string;
  content: string[];
  img?: string;
}

export default function About() {
  const {data: aboutUsContent, isError, isLoading, error} = useQuery<AboutContent>({
    queryKey: ["about"],
    queryFn: async () => {
      const connect = await fetch("http://localhost:8000/about");
      const data = await connect.json();
      return data.about[0].aboutUs;
    }
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError || !aboutUsContent) {
    return <div>{error + ""}</div>;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F7F9FE] to-[#F7F9FE] animate-gradient"></div>
      </div>

      <div className="w-full lg:w-[1280px] mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-[#111240] backdrop-blur-sm mb-4 inline-block">
              About Us
            </span>
            <h2 className="text-5xl font-bold mb-6 text-[#011240]">
              {aboutUsContent.title}
            </h2>
            <p className="text-xl text-[#111240] max-w-2xl mx-auto leading-relaxed">
              {aboutUsContent.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>
              <img
                src={aboutUsContent.img}
                alt="IC&I Office"
                className="relative rounded-2xl w-full aspect-[4/3] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-[#111240] leading-relaxed">
              {aboutUsContent.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#111240]
                backdrop-blur-sm border border-white/10 transition-all duration-300 group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
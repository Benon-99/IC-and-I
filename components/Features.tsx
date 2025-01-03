"use client";

import { Shield, Clock, Users, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  link: string;
}

const iconMap = {
  Shield: Shield,
  Clock: Clock,
  Users: Users,
  TrendingUp: TrendingUp,
};

export default function Features() {
  const { data: featuresData, isError, isLoading } = useQuery({
    queryKey: ["features"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/home");
      const data = await response.json();
      console.log('API Response:', data); // Add this line
      return data.about[0].features || []; // Adjust this as necessary
    },
  });
  

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-red-500 mb-2">Error Loading Features</h3>
        <p className="text-gray-400">Failed to load features. Please try again later.</p>
      </div>
    );
  }

  if (!featuresData || featuresData.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-gray-500 mb-2">No Features Available</h3>
      </div>
    );
  }

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3785CC]/5 via-[#5B8AF0]/5 to-[#8590EA]/5 animate-gradient"></div>
      </div>

      <div className="w-full lg:w-[1280px] mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
          >
            Our Advantages
          </span>
          <h2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#111240] to-[#111240]/80 bg-clip-text text-transparent"
          >
            Why Choose IC&I?
          </h2>
          <p
            className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
          >
            Experience excellence in every aspect of our service delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature: Feature, index: number) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <Link href={feature.link || "#"} key={index}>
                <div
                  className="group relative overflow-hidden rounded-2xl p-8 transition-all hover:shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 group-hover:opacity-15 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="mb-4 inline-block rounded-lg bg-white/10 p-3">
                      {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
